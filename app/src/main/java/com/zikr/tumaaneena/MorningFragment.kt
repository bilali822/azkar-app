package com.zikr.tumaaneena

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MorningFragment : Fragment() {
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(R.layout.fragment_azkar, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        view.findViewById<TextView>(R.id.titleText).text = "أذكار الصباح"
        
        val recyclerView = view.findViewById<RecyclerView>(R.id.recyclerViewAzkar)
        recyclerView.layoutManager = LinearLayoutManager(context)

        // بيانات تجريبية مطابقة للويب
        val azkarList = listOf(
            ZikrModel("أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", "آية الكرسي — سورة البقرة: 255", 1),
            ZikrModel("بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ...", "سورة الإخلاص — تُقال ثلاث مرات", 3),
            ZikrModel("أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ...", "رواه مسلم", 1)
        )

        recyclerView.adapter = ZikrAdapter(azkarList)
    }
}
