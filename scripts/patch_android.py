import os

print("⚙️ جاري تطبيق تعديلات الأندرويد...")

# 1. تعديل AndroidManifest.xml (الصلاحيات والأداء)
manifest_path = 'android/app/src/main/AndroidManifest.xml'
if os.path.exists(manifest_path):
    content = open(manifest_path, 'r').read()
    perms = [
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.ACCESS_COARSE_LOCATION',
        'android.permission.POST_NOTIFICATIONS',
        'android.permission.SCHEDULE_EXACT_ALARM',
        'android.permission.USE_EXACT_ALARM',
        'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS'
    ]
    for p in perms:
        if p not in content:
            content = content.replace('</manifest>', f'<uses-permission android:name="{p}" />\n</manifest>')
    
    if 'largeHeap' not in content:
        content = content.replace('<application', '<application android:largeHeap="true" android:hardwareAccelerated="true"')
    open(manifest_path, 'w').write(content)
    print("✅ تمت إضافة الصلاحيات")

# 2. تعديل build.gradle (ضغط الكود وحذف الموارد الزائدة)
gradle_path = 'android/app/build.gradle'
if os.path.exists(gradle_path):
    content = open(gradle_path, 'r').read()
    if 'shrinkResources true' not in content:
        content = content.replace('minifyEnabled false', 'minifyEnabled true\n            shrinkResources true')
        open(gradle_path, 'w').write(content)
    print("✅ تم تفعيل ضغط الموارد")

# 3. كتابة MainActivity.java (الشاشة الكاملة)
java_dir = 'android/app/src/main/java/com/zikr/tumaaneena'
os.makedirs(java_dir, exist_ok=True)
java_code = """package com.zikr.tumaaneena;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        WindowInsetsControllerCompat windowInsetsController = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (windowInsetsController != null) {
            windowInsetsController.hide(WindowInsetsCompat.Type.systemBars());
            windowInsetsController.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
        }
        getBridge().getWebView().setLayerType(android.view.View.LAYER_TYPE_HARDWARE, null);
        getBridge().getWebView().getSettings().setDomStorageEnabled(true);
        getBridge().getWebView().getSettings().setJavaScriptEnabled(true);
        getBridge().getWebView().setOverScrollMode(android.view.View.OVER_SCROLL_NEVER);
    }
}
"""
open(os.path.join(java_dir, 'MainActivity.java'), 'w').write(java_code)
print("✅ تم تفعيل الشاشة الكاملة")
print("🎉 جميع تعديلات الأندرويد تمت بنجاح!")
