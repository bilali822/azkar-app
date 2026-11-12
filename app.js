function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

/* أذكار — التطبيق الكامل */

const AZKAR = {
  morning: [
    { text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", source: "آية الكرسي — سورة البقرة: 255", count: 1 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", source: "سورة الإخلاص — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", source: "سورة الفلق — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ", source: "سورة الناس — تُقال ثلاث مرات", count: 3 },
    { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", source: "رواه مسلم", count: 1 },
    { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", source: "رواه الترمذي", count: 1 },
    { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", source: "سيد الاستغفار — رواه البخاري", count: 1 },
    { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", source: "رواه أبو داود — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", source: "رواه أبو داود والترمذي — تُقال ثلاث مرات", count: 3 },
    { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", source: "رواه أبو داود — تُقال ثلاث مرات", count: 3 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", source: "رواه مسلم — تُقال مائة مرة", count: 100 },
    { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", source: "رواه البخاري ومسلم — تُقال عشر مرات", count: 10 },
    { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", source: "رواه البخاري — تُقال مائة مرة", count: 100 }
  ],
  evening: [
    { text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", source: "آية الكرسي — سورة البقرة: 255", count: 1 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", source: "سورة الإخلاص — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", source: "سورة الفلق — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ", source: "سورة الناس — تُقال ثلاث مرات", count: 3 },
    { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ", source: "رواه مسلم", count: 1 },
    { text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", source: "رواه الترمذي", count: 1 },
    { text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", source: "سيد الاستغفار — رواه البخاري", count: 1 },
    { text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ", source: "رواه أبو داود — تُقال ثلاث مرات", count: 3 },
    { text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", source: "رواه أبو داود والترمذي — تُقال ثلاث مرات", count: 3 },
    { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", source: "رواه أبو داود — تُقال ثلاث مرات", count: 3 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", source: "رواه مسلم — تُقال مائة مرة", count: 100 },
    { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", source: "رواه البخاري ومسلم — تُقال عشر مرات", count: 10 },
    { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", source: "رواه البخاري — تُقال مائة مرة", count: 100 }
  ],
  sleep: [
    { text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ", source: "رواه البخاري ومسلم", count: 1 },
    { text: "اللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ", source: "رواه مسلم", count: 1 },
    { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", source: "رواه أبو داود والترمذي", count: 3 },
    { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", source: "رواه البخاري", count: 1 },
    { text: "سُبْحَانَ اللَّهِ (ثلاثًا وثلاثين)، وَالْحَمْدُ لِلَّهِ (ثلاثًا وثلاثين)، وَاللَّهُ أَكْبَرُ (أربعًا وثلاثين)", source: "رواه البخاري ومسلم", count: 1 },
    { text: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَرَبَّ الْأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْقُرْآنِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ", source: "رواه مسلم", count: 1 },
    { text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ", source: "رواه البخاري ومسلم — اجعله آخر ما تقول", count: 1 },
    { text: "قراءة سورة الإخلاص والفلق والناس (ثلاث مرات)، ثم النفث في الكفين ومسح ما استطاع من الجسد", source: "رواه البخاري", count: 3 }
  ],
  prayer: [
    { text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ", source: "رواه مسلم", count: 3 },
    { text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", source: "رواه مسلم", count: 1 },
    { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", source: "رواه البخاري ومسلم", count: 1 },
    { text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ", source: "رواه مسلم", count: 1 },
    { text: "سُبْحَانَ اللَّهِ (33 مرة)، وَالْحَمْدُ لِلَّهِ (33 مرة)، وَاللَّهُ أَكْبَرُ (33 مرة)، ثم: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", source: "رواه مسلم", count: 1 },
    { text: "آيَةُ الْكُرْسِيِّ: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (سورة البقرة: 255)", source: "رواه النسائي — تُقرأ بعد كل صلاة", count: 1 },
    { text: "سُورَةُ الْإِخْلَاصِ وَالْفَلَقِ وَالنَّاسِ — تُقرأ بعد كل صلاة (مرة في الظهر والعصر والعشاء، وثلاث مرات في المغرب والفجر)", source: "رواه أبو داود والترمذي", count: 1 }
  ]
};

// ===== الوضع النهاري =====
const themeToggle = document.getElementById('themeToggle');
function updateThemeIcon() {
  const icon = themeToggle && themeToggle.querySelector('svg');
  if (!icon) return;
  if (document.body.classList.contains('dark-mode')) {
    // الوضع الداكن: اعرض الشمس (اضغط للتبديل إلى النهاري)
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
  } else {
    // الوضع النهاري: اعرض القمر (اضغط للتبديل إلى الداكن)
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
}
if (localStorage.getItem('azkar_theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
updateThemeIcon();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('azkar_theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
});

// ===== التاريخ الهجري =====
function updateHijriDate() {
  const el = document.getElementById('hijriDate');
  if (!el) return;
  try {
    const fmt = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
    el.textContent = fmt.format(new Date());
  } catch (e) {
    el.textContent = '';
  }
}
updateHijriDate();

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const splash = $('#splash');
const notifToggle = $('#notifToggle');
const notifDot = $('#notifDot');

function renderZikrList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item, index) => `
    <div class="zikr-card" data-index="${index}">
      <p class="zikr-text">${item.text}</p>
      <div class="zikr-meta">
        <span class="zikr-source">${item.source}</span>
        <button class="zikr-count" data-count="${item.count}" data-current="0" aria-label="عدّ الذكر">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
          <span class="count-label">${item.count}</span>
        </button>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.zikr-count').forEach(btn => {
    btn.addEventListener('click', function () {
      const max = parseInt(this.dataset.count, 10);
      let current = parseInt(this.dataset.current, 10);
      if (current < max) {
        current++;
        this.dataset.current = current;
        this.querySelector('.count-label').textContent = `${current} / ${max}`;
        if (current >= max) {
          this.classList.add('done');
          this.querySelector('.count-label').textContent = 'تم';
        }
      } else {
        current = 0;
        this.dataset.current = 0;
        this.classList.remove('done');
        this.querySelector('.count-label').textContent = max;
      }
    });
  });
}

renderZikrList('morningList', AZKAR.morning);
renderZikrList('eveningList', AZKAR.evening);
renderZikrList('sleepList', AZKAR.sleep);
renderZikrList('prayerList', AZKAR.prayer);

const AUDIO_ITEMS = [
  { title: 'أذكار الصباح', sub: 'تسجيل صوتي كامل — مشاري العفاسي', url: 'audio/morning.mp3', id: 'morning' },
  { title: 'أذكار المساء', sub: 'تسجيل صوتي كامل — مشاري العفاسي', url: 'audio/evening.mp3', id: 'evening' },
  { title: 'سورة الفلق', sub: 'تلاوة مشاري العفاسي', url: 'audio/falaq.mp3', id: 'falaq' },
  { title: 'سورة الفاتحة', sub: 'تلاوة مشاري العفاسي', url: 'audio/fatiha.mp3', id: 'fatiha' },
  { title: 'آية الكرسي', sub: 'تلاوة هادئة', url: 'audio/kursi.mp3', id: 'kursi' },
  { title: 'أذكار النوم', sub: 'تسجيل صوتي كامل', url: 'audio/sleep.mp3', id: 'sleep' },
  { title: 'أذكار ما بعد الصلاة', sub: 'تسجيل صوتي كامل', url: 'audio/prayer.mp3', id: 'prayer' }
];

let currentAudio = null;
let currentAudioBtn = null;
let currentAudioCard = null;
let currentSpeed = parseFloat(localStorage.getItem('azkar_speed') || '1') || 1;

const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + String(s).padStart(2, '0');
}
function savePosition(id, t) { try { localStorage.setItem('azkar_pos_' + id, String(t)); } catch(e){} }
function getPosition(id) {
  const v = parseFloat(localStorage.getItem('azkar_pos_' + id) || '0');
  return isFinite(v) && v > 0 ? v : 0;
}
function setBtnPlay(btn) { btn.classList.remove('playing'); btn.innerHTML = ICON_PLAY; btn.setAttribute('aria-label', 'تشغيل'); }
function setBtnPause(btn) { btn.classList.add('playing'); btn.innerHTML = ICON_PAUSE; btn.setAttribute('aria-label', 'إيقاف مؤقت'); }
function resetCardVisual(card) {
  if (!card) return;
  const bar = card.querySelector('.audio-progress-bar');
  const cur = card.querySelector('.audio-time-current');
  if (bar) bar.style.width = '0%';
  if (cur) cur.textContent = '0:00';
}

function renderListenGrid() {
  const grid = document.getElementById('listenGrid');
  if (!grid) return;

  grid.innerHTML = AUDIO_ITEMS.map((item, i) => `
    <div class="audio-card" data-audio-index="${i}" data-id="${item.id}">
      <button class="audio-play" aria-label="تشغيل ${item.title}">${ICON_PLAY}</button>
      <div class="audio-info">
        <div class="audio-title">${item.title}</div>
        <div class="audio-sub">${item.sub}</div>
        <div class="audio-progress" role="slider" aria-label="شريط التقدم">
          <div class="audio-progress-bar"></div>
        </div>
        <div class="audio-times">
          <span class="audio-time-current">0:00</span>
          <span class="audio-time-total">—</span>
        </div>
        <div class="audio-controls">
          <button class="audio-speed" type="button" title="سرعة التشغيل">${currentSpeed}x</button>
          <span class="audio-vol-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></span>
          <input class="audio-volume" type="range" min="0" max="1" step="0.05" value="1" aria-label="مستوى الصوت">
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.audio-card').forEach(card => {
    const idx = parseInt(card.dataset.audioIndex, 10);
    const item = AUDIO_ITEMS[idx];
    const playBtn = card.querySelector('.audio-play');
    const bar = card.querySelector('.audio-progress-bar');
    const progressWrap = card.querySelector('.audio-progress');
    const timeCur = card.querySelector('.audio-time-current');
    const timeTot = card.querySelector('.audio-time-total');
    const speedBtn = card.querySelector('.audio-speed');
    const volInput = card.querySelector('.audio-volume');

    const savedPos = getPosition(item.id);
    if (savedPos > 0) timeCur.textContent = fmtTime(savedPos);

    playBtn.addEventListener('click', () => {
      // نفس البطاقة: تبديل تشغيل/إيقاف مؤقت
      if (currentAudio && currentAudioBtn === playBtn) {
        if (currentAudio.paused) {
          currentAudio.play().catch(() => {});
          setBtnPause(playBtn);
        } else {
          currentAudio.pause();
          setBtnPlay(playBtn);
          savePosition(item.id, currentAudio.currentTime);
        }
        return;
      }

      // بطاقة مختلفة: أوقف السابق
      if (currentAudio) {
        currentAudio.pause();
        try { savePosition(currentAudioCard.dataset.id, currentAudio.currentTime); } catch(e){}
        setBtnPlay(currentAudioBtn);
        resetCardVisual(currentAudioCard);
        currentAudio = null;
        currentAudioBtn = null;
        currentAudioCard = null;
      }

      // شغّل الجديد
      const audio = new Audio(item.url);
      audio.preload = 'metadata';
      audio.playbackRate = currentSpeed;

      const pos = getPosition(item.id);

      audio.addEventListener('loadedmetadata', () => {
        timeTot.textContent = fmtTime(audio.duration);
        if (pos > 0 && pos < audio.duration - 1) audio.currentTime = pos;
      }, { once: true });

      let lastSave = 0;
      audio.addEventListener('timeupdate', () => {
        if (audio.duration) bar.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
        timeCur.textContent = fmtTime(audio.currentTime);
        if (Date.now() - lastSave > 5000) {
          savePosition(item.id, audio.currentTime);
          lastSave = Date.now();
        }
      });

      audio.addEventListener('ended', () => {
        savePosition(item.id, 0);
        resetCardVisual(card);
        setBtnPlay(playBtn);
        if (currentAudio === audio) {
          currentAudio = null; currentAudioBtn = null; currentAudioCard = null;
        }
      });

      audio.addEventListener('error', () => {
        if (currentAudio === audio) {
          setBtnPlay(playBtn); resetCardVisual(card);
          currentAudio = null; currentAudioBtn = null; currentAudioCard = null;
        }
        alert('تعذر تشغيل الصوت. تحقق من وجود الملف.');
      });

      currentAudio = audio;
      currentAudioBtn = playBtn;
      currentAudioCard = card;
      setBtnPause(playBtn);

      audio.play().catch(() => {
        setBtnPlay(playBtn);
        if (currentAudio === audio) {
          currentAudio = null; currentAudioBtn = null; currentAudioCard = null;
        }
        alert('تعذر تشغيل الصوت.');
      });
    });

    // النقر على الشريط للتنقل
    progressWrap.addEventListener('click', (e) => {
      if (!currentAudio || currentAudioBtn !== playBtn) return;
      const rect = progressWrap.getBoundingClientRect();
      const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      if (currentAudio.duration) currentAudio.currentTime = pct * currentAudio.duration;
    });

    // زر السرعة
    speedBtn.addEventListener('click', () => {
      const speeds = [0.75, 1, 1.25, 1.5, 2];
      let i = speeds.indexOf(currentSpeed);
      i = (i + 1) % speeds.length;
      currentSpeed = speeds[i];
      speedBtn.textContent = currentSpeed + 'x';
      try { localStorage.setItem('azkar_speed', String(currentSpeed)); } catch(e){}
      if (currentAudio) currentAudio.playbackRate = currentSpeed;
    });

    // مستوى الصوت
    volInput.addEventListener('input', () => {
      if (currentAudio) currentAudio.volume = parseFloat(volInput.value);
    });
  });
}
renderListenGrid();

const navButtons = $$('.nav-btn');
const pages = $$('.page');

// ===== مواقيت الصلاة والعد التنازلي =====
let cachedPrayerTimes = null;
let countdownInterval = null;

const PRAYER_NAMES_AR_FULL = {
  fajr: 'الفجر', sunrise: 'الشروق', dhuhr: 'الظهر',
  asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء'
};

async function loadPrayerTimesPage() {
  const grid = document.getElementById('prayerTimesGrid');
  if (!grid) return;

  grid.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:20px;">جارٍ حساب المواقيت…</div>';

  try {
    if (typeof adhan === 'undefined') throw new Error('adhan غير محمل');

    const coords = await new Promise((resolve, reject) => {
      if (!navigator.geolocation) return resolve({ lat: 21.4225, lng: 39.8262 });
      navigator.geolocation.getCurrentPosition(
        p => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }),
        () => resolve({ lat: 21.4225, lng: 39.8262 }),
        { timeout: 8000, maximumAge: 600000 }
      );
    });

    const coordinates = new adhan.Coordinates(coords.lat, coords.lng);
    const params = adhan.CalculationMethod.UmmAlQura();
    const times = new adhan.PrayerTimes(coordinates, new Date(), params);

    cachedPrayerTimes = {
      fajr: times.fajr,
      sunrise: times.sunrise,
      dhuhr: times.dhuhr,
      asr: times.asr,
      maghrib: times.maghrib,
      isha: times.isha
    };

    const order = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const now = new Date();

    grid.innerHTML = order.map(key => {
      const t = cachedPrayerTimes[key];
      const timeStr = t.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', hour12: true });
      return `<div class="prayer-time-row" data-prayer="${key}">
        <span class="prayer-time-name">${PRAYER_NAMES_AR_FULL[key]}</span>
        <span class="prayer-time-value">${timeStr}</span>
      </div>`;
    }).join('');

    updateCountdown();
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);

  } catch (e) {
    grid.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:20px;">تعذر حساب المواقيت. تأكد من اتصالك بالإنترنت.</div>';
  }
}

function updateCountdown() {
  if (!cachedPrayerTimes) return;
  const now = new Date();
  const order = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];

  let nextKey = null;
  let nextTime = null;

  for (const key of order) {
    if (cachedPrayerTimes[key] > now) {
      nextKey = key;
      nextTime = cachedPrayerTimes[key];
      break;
    }
  }

  // إن انتهت صلوات اليوم، فالصلاة القادمة فجر الغد
  if (!nextKey) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (typeof adhan !== 'undefined') {
      const coords = { lat: 21.4225, lng: 39.8262 };
      const c = new adhan.Coordinates(coords.lat, coords.lng);
      const p = adhan.CalculationMethod.UmmAlQura();
      const t = new adhan.PrayerTimes(c, tomorrow, p);
      nextKey = 'fajr';
      nextTime = t.fajr;
    }
  }

  if (!nextKey || !nextTime) return;

  const nameEl = document.getElementById('nextPrayerName');
  const timerEl = document.getElementById('countdownTimer');
  const timeEl = document.getElementById('nextPrayerTime');
  if (!nameEl || !timerEl) return;

  nameEl.textContent = PRAYER_NAMES_AR_FULL[nextKey];

  const diff = nextTime - now;
  if (diff <= 0) {
    timerEl.textContent = '00:00:00';
    return;
  }

  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  timerEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

  if (timeEl) {
    timeEl.textContent = nextTime.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  // تمييز الصلاة الحالية
  document.querySelectorAll('.prayer-time-row').forEach(row => {
    row.classList.toggle('current', row.dataset.prayer === nextKey);
  });
}

// استدعاء عند فتح الصفحة
document.querySelectorAll('.nav-btn[data-target="prayer-times"]').forEach(btn => {
  btn.addEventListener('click', loadPrayerTimesPage);
});


function switchPage(target) {
  pages.forEach(p => p.classList.remove('active'));
  const targetPage = document.querySelector(`.page[data-page="${target}"]`);
  if (targetPage) {
    targetPage.style.animation = 'none';
    void targetPage.offsetHeight;
    targetPage.style.animation = '';
    targetPage.classList.add('active');
  }
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.target === target));
  
  if (target === 'settings') {
    document.body.classList.add('settings-active');
  } else {
    document.body.classList.remove('settings-active');
  }
  
  sessionStorage.setItem('azkar_page', target);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
navButtons.forEach(btn => btn.addEventListener('click', () => switchPage(btn.dataset.target)));
const savedPage = sessionStorage.getItem('azkar_page');
if (savedPage) switchPage(savedPage);

window.addEventListener('load', () => setTimeout(() => splash.classList.add('hidden'), 1600));

let prayerTimes = null;
let notifCheckInterval = null;
let notificationsEnabled = false;
const PRAYER_NAMES_AR = { fajr: 'الفجر', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء' };

async function calculatePrayerTimes() {
  if (typeof adhan === 'undefined') return null;
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(computeTimesForCoords(21.4225, 39.8262));
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(computeTimesForCoords(pos.coords.latitude, pos.coords.longitude)),
      () => resolve(computeTimesForCoords(21.4225, 39.8262)),
      { timeout: 8000, maximumAge: 600000 }
    );
  });
}
function computeTimesForCoords(lat, lng) {
  const coordinates = new adhan.Coordinates(lat, lng);
  const params = adhan.CalculationMethod.UmmAlQura();
  const times = new adhan.PrayerTimes(coordinates, new Date(), params);
  return { fajr: times.fajr, dhuhr: times.dhuhr, asr: times.asr, maghrib: times.maghrib, isha: times.isha };
}
async function requestNotifPermission() {
  if (!('Notification' in window)) { alert('متصفحك لا يدعم الإشعارات.'); return false; }
  if (Notification.permission === 'granted') return true;
  return (await Notification.requestPermission()) === 'granted';
}
function showNotification(title, body, tag) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, {
        body, tag, icon: 'icons/icon-192.png', badge: 'icons/icon-192.png',
        dir: 'rtl', lang: 'ar', vibrate: [200, 100, 200]
      });
    });
  } else {
    new Notification(title, { body, icon: 'icons/icon-192.png', dir: 'rtl', lang: 'ar' });
  }
}
function checkNotifications() {
  if (!prayerTimes || !notificationsEnabled) return;
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  for (const [key, time] of Object.entries(prayerTimes)) {
    const prayerMin = time.getHours() * 60 + time.getMinutes();
    const diff = nowMin - prayerMin;
    if (diff >= 0 && diff <= 5) {
      const sk = `notif_prayer_${key}_${now.toDateString()}`;
      if (!localStorage.getItem(sk)) {
        localStorage.setItem(sk, '1');
        showNotification(`أذكار ما بعد صلاة ${PRAYER_NAMES_AR[key]}`, 'لا تنسَ أذكار ما بعد الصلاة', `prayer_${key}`);
      }
    }
    if (key === 'fajr' && diff >= 5 && diff <= 10) {
      const sk = `notif_morning_${now.toDateString()}`;
      if (!localStorage.getItem(sk)) {
        localStorage.setItem(sk, '1');
        showNotification('أذكار الصباح', 'حان وقت أذكار الصباح — ابدأ يومك بذكر الله', 'morning');
      }
    }
    if (key === 'asr' && diff >= 5 && diff <= 10) {
      const sk = `notif_evening_${now.toDateString()}`;
      if (!localStorage.getItem(sk)) {
        localStorage.setItem(sk, '1');
        showNotification('أذكار المساء', 'حان وقت أذكار المساء — اختم يومك بذكر الله', 'evening');
      }
    }
  }
  const sleepKey = `notif_sleep_${now.toDateString()}`;
  if (now.getHours() === 22 && now.getMinutes() === 0) {
    if (!localStorage.getItem(sleepKey)) {
      localStorage.setItem(sleepKey, '1');
      showNotification('أذكار النوم', 'لا تنسَ أذكار النوم قبل أن تأوي إلى فراشك', 'sleep');
    }
  }
}
async function enableNotifications() {
  const granted = await requestNotifPermission();
  if (!granted) { alert('لم يتم منح إذن الإشعارات.'); return; }
  notificationsEnabled = true;
  notifToggle.style.background = 'var(--accent)';
  notifToggle.style.color = '#fff';
  notifDot.classList.remove('visible');
  prayerTimes = await calculatePrayerTimes();
  checkNotifications();
  if (notifCheckInterval) clearInterval(notifCheckInterval);
  notifCheckInterval = setInterval(checkNotifications, 60000);
  showNotification('تم تفعيل الإشعارات', 'ستصلك تذكيرات الأذكار بإذن الله', 'enabled');
}
function disableNotifications() {
  notificationsEnabled = false;
  notifToggle.style.background = 'var(--accent-soft)';
  notifToggle.style.color = 'var(--accent)';
  notifDot.classList.add('visible');
  if (notifCheckInterval) { clearInterval(notifCheckInterval); notifCheckInterval = null; }
}
notifToggle.addEventListener('click', async () => {
  if (notificationsEnabled) disableNotifications();
  else await enableNotifications();
});
if ('Notification' in window && Notification.permission === 'granted') {
  notifToggle.style.background = 'var(--accent)';
  notifToggle.style.color = '#fff';
  notifDot.classList.remove('visible');
} else {
  notifDot.classList.add('visible');
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW:', err)));
}
document.addEventListener('gesturestart', (e) => e.preventDefault());


// ===== أسماء الله الحسنى (99 اسمًا) =====
const ASMA_ALLAH = [
  { name: 'الرَّحْمَنُ', meaning: 'المنعم بجلائل النعم' },
  { name: 'الرَّحِيمُ', meaning: 'المنعم بدقائق النعم' },
  { name: 'الْمَلِكُ', meaning: 'المتصرف بملكه كيف يشاء' },
  { name: 'الْقُدُّوسُ', meaning: 'المتعالي عن كل النقائص' },
  { name: 'السَّلَامُ', meaning: 'الأمان لخلقه وواهب السلام لعباده' },
  { name: 'الْمُؤْمِنُ', meaning: 'المؤمِّن لخلقه من العذاب والخوف' },
  { name: 'الْمُهَيْمِنُ', meaning: 'المسيطر على كل شيء' },
  { name: 'الْعَزِيزُ', meaning: 'الغالب الذي لا يُغلب' },
  { name: 'الْجَبَّارُ', meaning: 'المنفذ لأمره دون اعتراض' },
  { name: 'الْمُتَكَبِّرُ', meaning: 'المنفرد بذاته بالعظمة' },
  { name: 'الْخَالِقُ', meaning: 'الموجد للمخلوقات' },
  { name: 'الْبَارِئُ', meaning: 'الخالق لما فيه روح' },
  { name: 'الْمُصَوِّرُ', meaning: 'المعطي كل شيء صورة تميزه' },
  { name: 'الْغَفَّارُ', meaning: 'كثير المغفرة وستر الذنوب' },
  { name: 'الْقَهَّارُ', meaning: 'القابض على كل شيء والقاهر لكل الخلائق' },
  { name: 'الْوَهَّابُ', meaning: 'كثير النعم دائم العطايا' },
  { name: 'الرَّزَّاقُ', meaning: 'خالق الرزق وأسباب الرزق ومقدر الأرزاق' },
  { name: 'الْفَتَّاحُ', meaning: 'الذي يفتح خزائن رحمته لعباده' },
  { name: 'الْعَلِيمُ', meaning: 'العالم بكل شيء ولا يغيب عنه شيء' },
  { name: 'الْقَابِضُ', meaning: 'قابض الأرواح والأرزاق' },
  { name: 'الْبَاسِطُ', meaning: 'موسع الرزق والعلم' },
  { name: 'الْخَافِضُ', meaning: 'يخفض من يستحق الخفض' },
  { name: 'الرَّافِعُ', meaning: 'يرفع من يستحق من عباده' },
  { name: 'الْمُعِزُّ', meaning: 'يُعِزّ من استمسك بدينه' },
  { name: 'الْمُذِلُّ', meaning: 'يُذِلّ أعداءه وعُصاته' },
  { name: 'السَّمِيعُ', meaning: 'يسمع كل الأصوات والكلمات' },
  { name: 'الْبَصِيرُ', meaning: 'المبصر العالم بكل شيء' },
  { name: 'الْحَكَمُ', meaning: 'الحاكم الذي لا راد لقضائه' },
  { name: 'الْعَدْلُ', meaning: 'العادل الذي لا يجور' },
  { name: 'اللَّطِيفُ', meaning: 'اللطيف بعباده' },
  { name: 'الْخَبِيرُ', meaning: 'العالم ببواطن الأمور' },
  { name: 'الْحَلِيمُ', meaning: 'الذي لا يعاجل بالعقوبة' },
  { name: 'الْعَظِيمُ', meaning: 'العظيم في ذاته وصفاته' },
  { name: 'الْغَفُورُ', meaning: 'الغافر لذنوب عباده' },
  { name: 'الشَّكُورُ', meaning: 'الذي يجزي على القليل بالكثير' },
  { name: 'الْعَلِيُّ', meaning: 'المتعالي فوق كل شيء' },
  { name: 'الْكَبِيرُ', meaning: 'الكبير في ذاته وصفاته' },
  { name: 'الْحَفِيظُ', meaning: 'الحافظ لخلقه وأعمالهم' },
  { name: 'الْمُقِيتُ', meaning: 'الذي يقيت خلقه ويحفظهم' },
  { name: 'الْحَسِيبُ', meaning: 'الكافي لعباده والمحاسب لهم' },
  { name: 'الْجَلِيلُ', meaning: 'الموصوف بصفات الجلال' },
  { name: 'الْكَرِيمُ', meaning: 'كثير الخير والجود' },
  { name: 'الرَّقِيبُ', meaning: 'المراقب لعباده' },
  { name: 'الْمُجِيبُ', meaning: 'المجيب لدعاء عباده' },
  { name: 'الْوَاسِعُ', meaning: 'الواسع في رحمته وعلمه' },
  { name: 'الْحَكِيمُ', meaning: 'الذي يضع الأمور في مواضعها' },
  { name: 'الْوَدُودُ', meaning: 'المحب لعباده الصالحين' },
  { name: 'الْمَجِيدُ', meaning: 'العظيم الكريم' },
  { name: 'الْبَاعِثُ', meaning: 'الذي يبعث الخلق يوم القيامة' },
  { name: 'الشَّهِيدُ', meaning: 'الحاضر الذي لا يغيب' },
  { name: 'الْحَقُّ', meaning: 'الثابت الذي لا يزول' },
  { name: 'الْوَكِيلُ', meaning: 'القائم على خلقه' },
  { name: 'الْقَوِيُّ', meaning: 'القوي الذي لا يعجزه شيء' },
  { name: 'الْمَتِينُ', meaning: 'الشديد القوي' },
  { name: 'الْوَلِيُّ', meaning: 'الناصر والمعين' },
  { name: 'الْحَمِيدُ', meaning: 'المحمود على كل حال' },
  { name: 'الْمُحْصِي', meaning: 'الذي أحصى كل شيء عددًا' },
  { name: 'الْمُبْدِئُ', meaning: 'الذي بدأ الخلق' },
  { name: 'الْمُعِيدُ', meaning: 'الذي يعيد الخلق بعد الفناء' },
  { name: 'الْمُحْيِي', meaning: 'الذي يحيي الخلق' },
  { name: 'الْمُمِيتُ', meaning: 'الذي يميت الخلق' },
  { name: 'الْحَيُّ', meaning: 'الحي الذي لا يموت' },
  { name: 'الْقَيُّومُ', meaning: 'القائم على كل شيء' },
  { name: 'الْوَاجِدُ', meaning: 'الغني الذي لا يفتقر' },
  { name: 'الْمَاجِدُ', meaning: 'الكريم كثير الخير' },
  { name: 'الْوَاحِدُ', meaning: 'المنفرد بالذات والصفات' },
  { name: 'الْأَحَدُ', meaning: 'الفرد الذي لا شريك له' },
  { name: 'الصَّمَدُ', meaning: 'السيد الذي تُقصد إليه الحاجات' },
  { name: 'الْقَادِرُ', meaning: 'القادر على كل شيء' },
  { name: 'الْمُقْتَدِرُ', meaning: 'الذي لا يعجزه شيء' },
  { name: 'الْمُقَدِّمُ', meaning: 'الذي يقدم من يشاء' },
  { name: 'الْمُؤَخِّرُ', meaning: 'الذي يؤخر من يشاء' },
  { name: 'الْأَوَّلُ', meaning: 'الذي ليس قبله شيء' },
  { name: 'الْآخِرُ', meaning: 'الذي ليس بعده شيء' },
  { name: 'الظَّاهِرُ', meaning: 'الظاهر بأدلته' },
  { name: 'الْبَاطِنُ', meaning: 'الخفي عن الأبصار' },
  { name: 'الْوَالِي', meaning: 'المتصرف في الأمور' },
  { name: 'الْمُتَعَالِي', meaning: 'المتعالي عن كل نقص' },
  { name: 'الْبَرُّ', meaning: 'المحسن إلى عباده' },
  { name: 'التَّوَّابُ', meaning: 'الذي يقبل التوبة عن عباده' },
  { name: 'الْمُنْتَقِمُ', meaning: 'المنتقم من أعدائه' },
  { name: 'الْعَفُوُّ', meaning: 'كثير العفو عن الذنوب' },
  { name: 'الرَّءُوفُ', meaning: 'كثير الرحمة بعباده' },
  { name: 'مَالِكُ الْمُلْكِ', meaning: 'المتصرف في ملكه كيف يشاء' },
  { name: 'ذُو الْجَلَالِ وَالْإِكْرَامِ', meaning: 'الموصوف بالجلال والإكرام' },
  { name: 'الْمُقْسِطُ', meaning: 'العادل في حكمه' },
  { name: 'الْجَامِعُ', meaning: 'الذي يجمع الخلق ليوم لا ريب فيه' },
  { name: 'الْغَنِيُّ', meaning: 'الغني عن كل شيء' },
  { name: 'الْمُغْنِي', meaning: 'الذي يغني من يشاء' },
  { name: 'الْمَانِعُ', meaning: 'الذي يمنع ما يشاء' },
  { name: 'الضَّارُّ', meaning: 'الذي يضر من يشاء' },
  { name: 'النَّافِعُ', meaning: 'الذي ينفع من يشاء' },
  { name: 'النُّورُ', meaning: 'الهادي المنير' },
  { name: 'الْهَادِي', meaning: 'الذي يهدي عباده' },
  { name: 'الْبَدِيعُ', meaning: 'الذي خلق الخلق على غير مثال' },
  { name: 'الْبَاقِي', meaning: 'الدائم الذي لا يفنى' },
  { name: 'الْوَارِثُ', meaning: 'الباقي بعد فناء الخلق' },
  { name: 'الرَّشِيدُ', meaning: 'الذي يرشد عباده' },
  { name: 'الصَّبُورُ', meaning: 'الذي لا يعاجل بالعقوبة' }
];

function renderNames() {
  const grid = document.getElementById('namesGrid');
  if (!grid) return;
  grid.innerHTML = ASMA_ALLAH.map(n => `
    <div class="name-card">
      <div class="name-ar">${n.name}</div>
      <div class="name-meaning">${n.meaning}</div>
    </div>
  `).join('');
}

// ===== حديث اليوم =====
const DAILY_HADITHS = [
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، فِي يَوْمٍ مِائَةَ مَرَّةٍ، حُطَّتْ خَطَايَاهُ، وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، عَشْرَ مَرَّاتٍ، كَانَ كَمَنْ أَعْتَقَ أَرْبَعَةَ أَنْفُسٍ مِنْ وَلَدِ إِسْمَاعِيلَ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَأَنْ أَقُولَ سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، أَحَبُّ إِلَيَّ مِمَّا طَلَعَتْ عَلَيْهِ الشَّمْسُ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ قَالَ حِينَ يُمْسِي ثَلَاثَ مَرَّاتٍ: أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ، لَمْ تَضُرَّهُ حُمَةٌ تِلْكَ اللَّيْلَةَ»', source: 'رواه الترمذي وصححه الألباني' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ قَالَ حِينَ يَسْمَعُ الْمُؤَذِّنَ: وَأَنَا أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ... دَخَلَ الْجَنَّةَ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ»', source: 'رواه الترمذي' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ»', source: 'رواه الترمذي' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ، فَإِنَّ الصِّدْقَ طُمَأْنِينَةٌ، وَالْكَذِبَ رِيبَةٌ»', source: 'رواه الترمذي' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ سَلَكَ طَرِيقًا يَبْتَغِي فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ، وَلَا يُنْزَعُ مِنْ شَيْءٍ إِلَّا شَانَهُ»', source: 'رواه مسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ»', source: 'رواه البخاري ومسلم' },
  { text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا»', source: 'رواه الترمذي' }
];

function renderDailyHadith() {
  const card = document.getElementById('hadithCard');
  if (!card) return;
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const h = DAILY_HADITHS[dayOfYear % DAILY_HADITHS.length];
  card.innerHTML = `
    <div class="hadith-text">${h.text}</div>
    <div class="hadith-source">${h.source}</div>
  `;
}

renderNames();
renderDailyHadith();


// ===== Media Session API — التحكم في الخلفية =====
function setupMediaSession(audio, title) {
  if (!('mediaSession' in navigator)) return;

  navigator.mediaSession.metadata = new MediaMetadata({
    title: title,
    artist: 'أذكار',
    album: 'أذكار — ذكر وطمأنينة',
    artwork: [
      { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]
  });

  navigator.mediaSession.setActionHandler('play', () => {
    audio.play().catch(() => {});
    setBtnPause(currentAudioBtn);
  });
  navigator.mediaSession.setActionHandler('pause', () => {
    audio.pause();
    setBtnPlay(currentAudioBtn);
  });
  navigator.mediaSession.setActionHandler('seekbackward', (details) => {
    audio.currentTime = Math.max(0, audio.currentTime - (details.seekOffset || 10));
  });
  navigator.mediaSession.setActionHandler('seekforward', (details) => {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + (details.seekOffset || 10));
  });
  navigator.mediaSession.setActionHandler('seekto', (details) => {
    if (details.seekTime != null) audio.currentTime = details.seekTime;
  });
}

// استدعاء setupMediaSession عند تشغيل أي صوت في صفحة الاستماع
// (يتم ربطه يدويًا في حدث play أدناه)

// ===== تحميل الأصوات للاستخدام دون إنترنت =====
async function downloadAllAudio() {
  const btn = document.getElementById('downloadAllBtn');
  const status = document.getElementById('downloadStatus');
  if (!btn || !status) return;

  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
    status.textContent = 'Service Worker غير جاهز. أعد تحميل الصفحة أولًا.';
    return;
  }

  const items = AUDIO_ITEMS.filter(a => a.url);
  btn.disabled = true;
  status.textContent = 'جارٍ التحميل… 0%';

  const cache = await caches.open('azkar-audio-v1');
  let done = 0;

  for (const item of items) {
    try {
      const resp = await fetch(item.url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      await cache.put(item.url, resp);
      done++;
      status.textContent = `جارٍ التحميل… ${Math.round((done / items.length) * 100)}%`;
    } catch (e) {
      status.textContent = `فشل تحميل: ${item.title}`;
      btn.disabled = false;
      return;
    }
  }

  status.textContent = '✅ تم تحميل جميع الأصوات للاستخدام دون إنترنت';
  btn.disabled = false;
}

onReady(() => {
  const btn = document.getElementById('downloadAllBtn');
  if (btn) btn.addEventListener('click', downloadAllAudio);
});


// ===== إشعارات ذكية =====
function checkSmartNotifications() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const now = new Date();
  const day = now.getDay(); // 5 = الجمعة
  const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
    month: 'numeric', day: 'numeric'
  }).formatToParts(now).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});

  const hMonth = parseInt(hijri.month, 10);
  const hDay = parseInt(hijri.day, 10);
  const todayKey = now.toDateString();

  function notifyOnce(key, title, body) {
    const k = 'smart_notif_' + key + '_' + todayKey;
    if (localStorage.getItem(k)) return;
    localStorage.setItem(k, '1');
    showNotification(title, body, key);
  }

  // يوم الجمعة
  if (day === 5) {
    notifyOnce('jumuah', 'يوم الجمعة', 'لا تنسَ قراءة سورة الكهف والصلاة على النبي');
  }

  // رمضان
  if (hMonth === 9) {
    if (hDay === 1) notifyOnce('ramadan_start', 'رمضان مبارك', 'بدأ شهر رمضان — تقبل الله صيامكم');
    if (hDay >= 21) notifyOnce('last_ten', 'العشر الأواخر', 'التمس ليلة القدر في الوتر من العشر الأواخر');
  }

  // العشر من ذي الحجة
  if (hMonth === 12 && hDay >= 1 && hDay <= 10) {
    notifyOnce('dhul_hijjah', 'العشر من ذي الحجة', 'أفضل أيام الدنيا — أكثر من الذكر والتكبير');
  }

  // يوم عرفة
  if (hMonth === 12 && hDay === 9) {
    notifyOnce('arafah', 'يوم عرفة', 'صيام يوم عرفة يكفر سنة ماضية وسنة قادمة');
  }

  // عاشوراء
  if (hMonth === 1 && (hDay === 9 || hDay === 10)) {
    notifyOnce('ashura', 'عاشوراء', 'صيام عاشوراء يكفر السنة الماضية');
  }

  // أول رجب وشعبان
  if (hMonth === 7 && hDay === 1) notifyOnce('rajab', 'شهر رجب', 'اللهم بارك لنا في رجب وشعبان وبلغنا رمضان');
  if (hMonth === 8 && hDay === 1) notifyOnce('shaban', 'شهر شعبان', 'أكثر من الصيام في شعبان');
}

// استدعاء عند تحميل الصفحة وعند تفعيل الإشعارات
onReady(() => {
  // ننتظر قليلًا حتى يكون كل شيء جاهزًا
  setTimeout(checkSmartNotifications, 3000);
});

// تضمين في فحص الإشعارات الدوري
if (typeof notifCheckInterval !== 'undefined') {
  setInterval(checkSmartNotifications, 3600000);
}


// ===== نظام الإعدادات: الاسم، اللون، الخط، الصوت =====
const SETTINGS = {
  get name()  { return localStorage.getItem('azkar_name') || ''; },
  set name(v) { localStorage.setItem('azkar_name', v); },
  get color() { return localStorage.getItem('azkar_color') || 'green'; },
  set color(v){ localStorage.setItem('azkar_color', v); },
  get font()  { return localStorage.getItem('azkar_font') || 'amiri'; },
  set font(v) { localStorage.setItem('azkar_font', v); },
  get sound() { return localStorage.getItem('azkar_sound') !== 'off'; },
  set sound(v){ localStorage.setItem('azkar_sound', v ? 'on' : 'off'); }
};

const COLORS = [
  { id: 'green',  hex: '#3a9e8f' },
  { id: 'blue',   hex: '#4a7cb8' },
  { id: 'purple', hex: '#8b5fb8' },
  { id: 'gold',   hex: '#c9a227' },
  { id: 'pink',   hex: '#c96b8b' }
];
const FONTS = [
  { id: 'amiri',        label: 'أميري' },
  { id: 'scheherazade', label: 'شهرزاد' },
  { id: 'naskh',        label: 'نسخ' }
];

function applySettings() {
  document.body.dataset.color = SETTINGS.color;
  document.body.dataset.font = SETTINGS.font;
  updateGreeting();
}

function updateGreeting() {
  const name = SETTINGS.name.trim();
  const g1 = document.getElementById('greetingMorning');
  const g2 = document.getElementById('greetingEvening');
  const html = name
    ? 'السلام عليكم، <strong>' + name + '</strong>'
    : 'السلام عليكم ورحمة الله';
  if (g1) g1.innerHTML = html;
  if (g2) g2.innerHTML = html;
}

function renderColorOptions() {
  const wrap = document.getElementById('colorOptions');
  if (!wrap) return;
  wrap.innerHTML = COLORS.map(c => `
    <button class="color-swatch ${SETTINGS.color === c.id ? 'active' : ''}"
            data-color-id="${c.id}" style="background:${c.hex}"
            aria-label="${c.id}"></button>
  `).join('');
  wrap.querySelectorAll('.color-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      SETTINGS.color = btn.dataset.colorId;
      document.body.dataset.color = btn.dataset.colorId;
      wrap.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function renderFontOptions() {
  const wrap = document.getElementById('fontOptions');
  if (!wrap) return;
  wrap.innerHTML = FONTS.map(f => `
    <button class="font-option ${SETTINGS.font === f.id ? 'active' : ''}"
            data-font-id="${f.id}">${f.label}</button>
  `).join('');
  wrap.querySelectorAll('.font-option').forEach(btn => {
    btn.addEventListener('click', () => {
      SETTINGS.font = btn.dataset.fontId;
      document.body.dataset.font = btn.dataset.fontId;
      wrap.querySelectorAll('.font-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initSettingsPage() {
  const nameInput = document.getElementById('nameInput');
  const soundToggle = document.getElementById('soundToggle');
  if (nameInput) {
    nameInput.value = SETTINGS.name;
    nameInput.addEventListener('input', () => {
      SETTINGS.name = nameInput.value;
      updateGreeting();
    });
  }
  if (soundToggle) {
    soundToggle.checked = SETTINGS.sound;
    soundToggle.addEventListener('change', () => {
      SETTINGS.sound = soundToggle.checked;
    });
  }
  renderColorOptions();
  renderFontOptions();

  const rateBtn = document.getElementById('rateAppBtn');
  if (rateBtn) rateBtn.addEventListener('click', () => {
    const url = 'https://play.google.com/store/apps/details?id=com.azkar.app';
    window.open(url, '_blank');
    showToast('شكرًا لك!');
  });

  const sourcesBtn = document.getElementById('sourcesBtn');
  if (sourcesBtn) sourcesBtn.addEventListener('click', () => {
    alert('المصادر الشرعية:\n- صحيح البخاري\n- صحيح مسلم\n- سنن أبي داود\n- سنن الترمذي\n- سنن النسائي\n- حصن المسلم');
  });

  const notifBtnSettings = document.getElementById('notifBtnSettings');
  if (notifBtnSettings) notifBtnSettings.addEventListener('click', () => {
    document.getElementById('notifToggle').click();
  });
}

// تهيئة فورية
applySettings();
onReady(initSettingsPage);


// ==================== مكتبة الأذكار الموسّعة ====================
const EXTRA_CATEGORIES = [
  { id: 'wake_up',  label: 'الاستيقاظ' },
  { id: 'food',     label: 'الطعام' },
  { id: 'home',     label: 'المنزل' },
  { id: 'travel',   label: 'السفر' },
  { id: 'mosque',   label: 'المسجد' },
  { id: 'wudu',     label: 'الوضوء' },
  { id: 'worry',    label: 'الهم والحزن' },
  { id: 'illness',  label: 'المرض' },
  { id: 'rain',     label: 'المطر' },
  { id: 'quranic',  label: 'أدعية قرآنية' }
];

const EXTRA_ADHKAR = {
  wake_up: [
    { text: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', source: 'رواه البخاري', count: 1 },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي', source: 'رواه البخاري', count: 1 }
  ],
  food: [
    { text: 'بِسْمِ اللَّهِ', source: 'رواه أبو داود — قبل الطعام', count: 1 },
    { text: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ', source: 'رواه أبو داود والترمذي — بعد الطعام', count: 1 }
  ],
  home: [
    { text: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا', source: 'رواه أبو داود — عند الدخول', count: 1 },
    { text: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', source: 'رواه أبو داود والترمذي — عند الخروج', count: 1 }
  ],
  travel: [
    { text: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ', source: 'رواه مسلم — عند الركوب', count: 1 },
    { text: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ', source: 'رواه مسلم', count: 1 }
  ],
  mosque: [
    { text: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', source: 'رواه مسلم — عند الدخول', count: 1 },
    { text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', source: 'رواه مسلم — عند الخروج', count: 1 }
  ],
  wudu: [
    { text: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ', source: 'رواه مسلم — بعد الوضوء', count: 1 },
    { text: 'اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ', source: 'رواه الترمذي', count: 1 }
  ],
  worry: [
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ', source: 'رواه البخاري ومسلم', count: 1 },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', source: 'رواه البخاري', count: 1 }
  ],
  illness: [
    { text: 'أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ', source: 'رواه أبو داود والترمذي — سبع مرات', count: 7 },
    { text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', source: 'رواه مسلم — ثلاث مرات', count: 3 }
  ],
  rain: [
    { text: 'اللَّهُمَّ صَيِّبًا نَافِعًا', source: 'رواه البخاري — عند نزول المطر', count: 1 },
    { text: 'مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ', source: 'رواه البخاري ومسلم — بعد المطر', count: 1 }
  ],
  quranic: [
    { text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', source: 'سورة البقرة: 201', count: 1 },
    { text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ', source: 'سورة آل عمران: 8', count: 1 },
    { text: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي', source: 'سورة طه: 25-28', count: 1 },
    { text: 'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا', source: 'سورة البقرة: 286', count: 1 },
    { text: 'رَبِّ زِدْنِي عِلْمًا', source: 'سورة طه: 114', count: 1 }
  ]
};

// ==================== قصص الأنبياء والصحابة ====================
const STORIES = {
  prophets: [
    {
      title: 'آدم عليه السلام',
      text: 'خلق الله آدم بيده ونفخ فيه من روحه، وأمر الملائكة بالسجود له، فسجدوا إلا إبليس أبى واستكبر. أسكن الله آدم وزوجه حواء الجنة، وأباح لهما كل شيء إلا شجرة واحدة. فوسوس لهما الشيطان فأكلا منها، فأخرجهما الله من الجنة. ثم تاب آدم إلى ربه بكلمات علمه إياها: «رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ» فتاب الله عليه واجتباه وهداه.',
      source: 'سورة البقرة: 30-38، سورة الأعراف: 11-25'
    },
    {
      title: 'نوح عليه السلام',
      text: 'أرسل الله نوحًا إلى قومه فدعاهم إلى عبادة الله وحده ألف سنة إلا خمسين عامًا، فما آمن معه إلا قليل. فأمره الله ببناء السفينة، فبناها بأمره، وحمل فيها من كل زوجين اثنين ومن آمن معه. ثم جاء الطوفان فأغرق المكذبين، ونجى الله نوحًا ومن معه من المؤمنين. قال تعالى: «وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ».',
      source: 'سورة هود: 25-49، سورة القمر: 9-17'
    },
    {
      title: 'إبراهيم عليه السلام',
      text: 'حطم إبراهيم الأصنام التي يعبدها قومه، فألقوه في النار، فقالت النار: كوني بردًا وسلامًا على إبراهيم. ثم هاجر في سبيل الله، ورزقه الله إسماعيل وإسحاق على الكبر. وابتلاه الله بأعظم ابتلاء: ذبح ولده إسماعيل، فلما أسلما وتله للجبين ناداه الله: «قَدْ صَدَّقْتَ الرُّؤْيَا» وفداه بذبح عظيم. وبنى إبراهيم مع إسماعيل الكعبة بيتًا لله.',
      source: 'سورة الأنبياء: 51-70، سورة الصافات: 99-113'
    },
    {
      title: 'يوسف عليه السلام',
      text: 'رأى يوسف في المنام أحد عشر كوكبًا والشمس والقمر له ساجدين، فأخبر أباه يعقوب، فقال: «يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَى إِخْوَتِكَ». فألقاه إخوته في الجب، ووجدته سيارة فباعوه في مصر. ثم ابتُلي بالسجن ظلمًا، وأولاه الله على خزائن الأرض بعد أن فسّر رؤيا الملك. فجاء إخوته يطلبون الطعام فعرفهم وهم له منكرون، ثم كشف لهم عن نفسه وعفا عنهم وقال: «لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ».',
      source: 'سورة يوسف كاملة'
    }
  ],
  companions: [
    {
      title: 'أبو بكر الصديق',
      text: 'أول من آمن بالله ورسوله من الرجال، ورفيق النبي ﷺ في الهجرة، وذكره الله في القرآن بقوله: «إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا». أنفق ماله كله في سبيل الله، وعُذّب في الله فثبت. اختاره النبي ﷺ ليؤم الناس في مرض موته، وكان أول الخلفاء الراشدين. جمع القرآن في مصحف واحد بعد معركة اليمامة بمشورة عمر بن الخطاب.',
      source: 'صحيح البخاري، سيرة ابن هشام، سورة التوبة: 40'
    },
    {
      title: 'عمر بن الخطاب',
      text: 'ثاني الخلفاء الراشدين، لقبه النبي ﷺ بالفاروق، وهو من عشره الله بالجنة. كان يُفتح بسيفه ما لم يُفتح بقول غيره. في عهده فُتحت فارس والشام ومصر. قال عنه النبي ﷺ: «لو كان بعدي نبي لكان عمر». كان عادلًا حتى في أشد المواقف، قال: «متى استعبدتم الناس وقد ولدتهم أمهاتهم أحرارًا؟». قُتل شهيدًا وهو يصلي الفجر.',
      source: 'صحيح البخاري ومسلم، سيرة ابن هشام'
    },
    {
      title: 'عثمان بن عفان',
      text: 'ثالث الخلفاء الراشدين، ذو النورين، زوج ابنتي النبي ﷺ رقية ثم أم كلثوم. لقبه النبي ﷺ بذي النورين. أنفق مالًا كثيرًا في سبيل الله في تجهيز جيش العسرة فبشره الله بالجنة. في عهده جُمع القرآن على حرف واحد بعد اختلاف الأقليات في القراءة، فأنجز ذلك بجمع المسلمين على مصحف إمام. كان حييًا تستحي منه الملائكة.',
      source: 'صحيح البخاري، سنن الترمذي'
    },
    {
      title: 'علي بن أبي طالب',
      text: 'رابع الخلفاء الراشدين، ابن عم النبي ﷺ وزوج ابنته فاطمة، أول من أسلم من الصبيان. نام في فراش النبي ﷺ ليلة الهجرة. قال عنه النبي ﷺ: «أنا مدينة العلم وعلي بابها». كان أعلم الصحابة بالقضاء، وكان أشجعهم في المعارك. روى عنه أهل العلم علومًا كثيرة في التفسير والفقه والبلاغة.',
      source: 'صحيح البخاري، سنن الترمذي، سيرة ابن هشام'
    }
  ]
};

// ==================== أدعية مستجابة ====================
const DUAS = [
  {
    title: 'دعاء يوم الجمعة',
    text: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
    source: 'رواه البخاري ومسلم'
  },
  {
    title: 'دعاء دخول رمضان',
    text: 'اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ',
    source: 'رواه الترمذي (حسن)'
  },
  {
    title: 'دعاء ليلة القدر',
    text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    source: 'رواه الترمذي وصححه الألباني — عن عائشة رضي الله عنها'
  },
  {
    title: 'دعاء يوم عرفة',
    text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. وَأَفْضَلُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ، وَأَفْضَلُ مَا قُلْتُ أَنَا وَالنَّبِيُّونَ مِنْ قَبْلِي: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    source: 'رواه الترمذي'
  },
  {
    title: 'دعاء العيد',
    text: 'اللَّهُمَّ تَقَبَّلْ مِنَّا صِيَامَنَا وَقِيَامَنَا وَرُكُوعَنَا وَسُجُودَنَا وَقُعُودَنَا، وَاغْفِرْ لَنَا وَلِوَالِدِينَا وَلِجَمِيعِ الْمُسْلِمِينَ، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
    source: 'دعاء مأثور'
  },
  {
    title: 'دعاء الهم والحزن',
    text: 'اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي',
    source: 'رواه أحمد'
  }
];

// ==================== عرض صفحة المزيد ====================
const MORE_ITEMS = [
  { target: 'sleep',        label: 'أذكار النوم',       icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><path d="M17 4l3 3-3 3"/></svg>' },
  { target: 'prayer',       label: 'أذكار الصلاة',      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20h16M6 20V10l6-6 6 6v10"/></svg>' },
  { target: 'names',        label: 'أسماء الله',        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' },
  { target: 'hadith',       label: 'حديث اليوم',        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
  { target: 'stories',      label: 'قصص الأنبياء والصحابة', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { target: 'duas',         label: 'أدعية مستجابة',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg>' },
  { target: 'extra',        label: 'أذكار أخرى',        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>' },
  { target: 'listen',       label: 'استمع',             icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>' }
];

function renderMoreGrid() {
  const grid = document.getElementById('moreGrid');
  if (!grid) return;
  grid.innerHTML = MORE_ITEMS.map(m => `
    <button class="more-card" data-target="${m.target}">
      ${m.icon}
      <span class="more-card-label">${m.label}</span>
    </button>
  `).join('');
  grid.querySelectorAll('.more-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      switchPage(target);
      const navBtn = document.querySelector('.nav-btn[data-target="' + target + '"]');
      if (navBtn) navBtn.classList.add('active');
      else document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    });
  });
}

// ==================== عرض الأذكار الأخرى ====================
let currentExtraCat = 'wake_up';

function renderExtraCategories() {
  const tabs = document.getElementById('extraCatTabs');
  if (!tabs) return;
  tabs.innerHTML = EXTRA_CATEGORIES.map(c => `
    <button class="extra-cat-tab ${currentExtraCat === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>
  `).join('');
  tabs.querySelectorAll('.extra-cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentExtraCat = tab.dataset.cat;
      renderExtraCategories();
      renderExtraList();
    });
  });
}

function renderExtraList() {
  const list = document.getElementById('extraZikrList');
  if (!list) return;
  const items = EXTRA_ADHKAR[currentExtraCat] || [];
  list.innerHTML = items.map((item, i) => `
    <div class="zikr-card" data-index="${i}">
      <p class="zikr-text">${item.text}</p>
      <div class="zikr-meta">
        <span class="zikr-source">${item.source}</span>
        <button class="zikr-count" data-count="${item.count}" data-current="0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
          <span class="count-label">${item.count}</span>
        </button>
      </div>
    </div>
  `).join('');
  // ربط العدادات
  list.querySelectorAll('.zikr-count').forEach(btn => {
    btn.addEventListener('click', function () {
      const max = parseInt(this.dataset.count, 10);
      let current = parseInt(this.dataset.current, 10);
      if (current < max) {
        current++;
        this.dataset.current = current;
        this.querySelector('.count-label').textContent = current + ' / ' + max;
        if (current >= max) {
          this.classList.add('done');
          this.querySelector('.count-label').textContent = 'تم';
          if (typeof haptic === 'function') haptic();
          if (typeof playClick === 'function') playClick();
        }
      } else {
        this.dataset.current = 0;
        this.classList.remove('done');
        this.querySelector('.count-label').textContent = max;
      }
    });
  });
}

// ==================== عرض القصص ====================
let currentStoryCat = 'prophets';

function renderStoriesCategories() {
  const tabs = document.getElementById('storiesCatTabs');
  if (!tabs) return;
  const cats = [{ id: 'prophets', label: 'الأنبياء' }, { id: 'companions', label: 'الصحابة' }];
  tabs.innerHTML = cats.map(c => `
    <button class="extra-cat-tab ${currentStoryCat === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>
  `).join('');
  tabs.querySelectorAll('.extra-cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentStoryCat = tab.dataset.cat;
      renderStoriesCategories();
      renderStoriesList();
    });
  });
}

function renderStoriesList() {
  const container = document.getElementById('storiesContainer');
  if (!container) return;
  const items = STORIES[currentStoryCat] || [];
  container.innerHTML = items.map((s, i) => `
    <div class="story-card" data-index="${i}">
      <div class="story-header">
        <span class="story-title">${s.title}</span>
        <svg class="story-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="story-body">
        <p class="story-text">${s.text}</p>
        <div class="story-source">${s.source}</div>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.story-header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
  });
}

// ==================== عرض الأدعية ====================
function renderDuas() {
  const container = document.getElementById('duasContainer');
  if (!container) return;
  container.innerHTML = DUAS.map((d, i) => `
    <div class="dua-card" data-index="${i}">
      <div class="dua-header">
        <span class="dua-title">${d.title}</span>
        <svg class="story-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="dua-body">
        <p class="dua-text">${d.text}</p>
        <div class="dua-source">${d.source}</div>
      </div>
    </div>
  `).join('');
  container.querySelectorAll('.dua-header').forEach(h => {
    h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
  });
}

// تهيئة
onReady(() => {
  renderMoreGrid();
  renderExtraCategories();
  renderExtraList();
  renderStoriesCategories();
  renderStoriesList();
  renderDuas();
});


// ==================== خلفية النجوم المتحركة ====================
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [], w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    const count = Math.min(100, Math.floor((w * h) / 15000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        a: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005
      });
    }
  }

  let lastDraw = 0;
  function draw(timestamp) {
    if (timestamp - lastDraw > 33) { // إطار كل 33 مللي ثانية (30 FPS)
      lastDraw = timestamp;
      if (document.body.classList.contains('dark-mode')) {
        ctx.clearRect(0, 0, w, h);
        for (const s of stars) {
          s.a += s.speed;
          const alpha = 0.25 + Math.abs(Math.sin(s.a)) * 0.75;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(232, 237, 242, ' + alpha + ')';
          ctx.fill();
        }
      } else {
        ctx.clearRect(0, 0, w, h);
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ==================== صوت الخاتم ====================
let audioCtx = null;
function playClick() {
  if (!SETTINGS.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.05);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.start(now);
    osc.stop(now + 0.12);
  } catch (e) {}
}

// ==================== Haptic Feedback ====================
function haptic() {
  if (navigator.vibrate) {
    try { navigator.vibrate(20); } catch (e) {}
  }
}

// ==================== عد تنازلي لرمضان ====================
function getDaysUntilRamadan() {
  const now = new Date();
  try {
    for (let i = 0; i < 400; i++) {
      const d = new Date(now.getTime() + i * 86400000);
      const parts = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
        month: 'numeric', day: 'numeric'
      }).formatToParts(d).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});
      const m = parseInt(parts.month, 10);
      const day = parseInt(parts.day, 10);
      if (m === 9 && day === 1) {
        if (i === 0) return { inRamadan: true, day: day };
        return { inRamadan: false, days: i };
      }
      if (m === 9 && i === 0) return { inRamadan: true, day: day };
    }
  } catch (e) {}
  return null;
}

function renderRamadanBanner() {
  const banner = document.getElementById('ramadanBanner');
  const title = document.getElementById('ramadanTitle');
  const days = document.getElementById('ramadanDays');
  if (!banner) return;
  const info = getDaysUntilRamadan();
  if (!info) return;

  if (info.inRamadan) {
    title.textContent = 'رمضان مبارك';
    days.textContent = 'اليوم ' + info.day + ' من رمضان';
    banner.classList.add('visible');
  } else if (info.days <= 30 && info.days > 0) {
    title.textContent = 'اللهم بلّغنا رمضان';
    days.textContent = 'باقي ' + info.days + ' يومًا';
    banner.classList.add('visible');
  }
}

// ==================== تذكير سورة الكهف ====================
function checkFridayKahf() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const today = now.toDateString();

  if (day === 4 && hour >= 20) {
    const k = 'notif_kahf_thu_' + today;
    if (!localStorage.getItem(k)) {
      localStorage.setItem(k, '1');
      showNotification('تذكير', 'غدًا الجمعة — لا تنسَ قراءة سورة الكهف', 'kahf');
    }
  }
  if (day === 5) {
    const k = 'notif_kahf_fri_' + today;
    if (!localStorage.getItem(k)) {
      localStorage.setItem(k, '1');
      showNotification('يوم الجمعة', 'اقرأ سورة الكهف وأكثر من الصلاة على النبي ﷺ', 'kahf');
    }
  }
}

// ==================== تفاعلات دقيقة ====================
function initMicroInteractions() {
  // نبض زر العد
  document.addEventListener('click', (e) => {
    const countBtn = e.target.closest('.zikr-count');
    if (countBtn) {
      countBtn.classList.remove('pulse');
      void countBtn.offsetWidth;
      countBtn.classList.add('pulse');
      haptic();
      if (countBtn.classList.contains('done')) playClick();
    }
    // نبض زر التنقل
    const navBtn = e.target.closest('.nav-btn');
    if (navBtn) {
      navBtn.classList.remove('pressed');
      void navBtn.offsetWidth;
      navBtn.classList.add('pressed');
      haptic();
    }
  }, { passive: true });
}

// ==================== تهيئة كل شيء ====================
onReady(() => {
  initStars();
  initMicroInteractions();
  renderRamadanBanner();
  setTimeout(checkFridayKahf, 5000);
});

// فحص الكهف دوريًا
setInterval(checkFridayKahf, 3600000);
setInterval(renderRamadanBanner, 86400000);

