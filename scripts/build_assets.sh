#!/bin/bash
set -e # إيقاف التنفيذ عند أي خطأ

echo "⏳ جاري تجهيز مجلد www..."
mkdir -p www

echo "🔒 جاري تشفير وضغط app.js..."
javascript-obfuscator app.js --output www/app.js --compact true --control-flow-flattening false --dead-code-injection false --string-array true --string-array-rotate true --string-array-shuffle true

echo "🎨 جاري ضغط style.css..."
cleancss -o www/style.css style.css

echo "📄 جاري ضغط index.html..."
html-minifier-terser --collapse-whitespace --remove-comments --minify-css true --minify-js true -o www/index.html index.html

echo "📂 جاري نسخ الملفات المتبقية..."
cp manifest.json sw.js www/ 2>/dev/null || true
cp -r icons audio fonts js www/
mkdir -p assets && cp icons/icon-512.png assets/icon.png

echo "✅ تم تجهيز ملفات الويب بنجاح!"
