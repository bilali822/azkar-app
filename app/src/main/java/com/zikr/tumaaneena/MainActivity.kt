package com.zikr.tumaaneena

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.viewpager2.adapter.FragmentStateAdapter
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val viewPager = findViewById<ViewPager2>(R.id.viewPager)
        val bottomNav = findViewById<BottomNavigationView>(R.id.bottomNav)

        // ربط الصفحات
        viewPager.adapter = object : FragmentStateAdapter(this) {
            override fun getItemCount() = 5
            override fun createFragment(position: Int): Fragment {
                return when(position) {
                    0 -> MorningFragment()
                    else -> MorningFragment() // سنضع باقي الصفحات لاحقاً
                }
            }
        }

        // مزامنة التبويبات مع السحب
        viewPager.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                val menuId = when(position) {
                    0 -> R.id.nav_morning
                    1 -> R.id.nav_evening
                    2 -> R.id.nav_times
                    3 -> R.id.nav_more
                    else -> R.id.nav_settings
                }
                bottomNav.selectedItemId = menuId
            }
        })

        // مزامنة السحب مع التبويبات
        bottomNav.setOnItemSelectedListener { item ->
            val index = when(item.itemId) {
                R.id.nav_morning -> 0
                R.id.nav_evening -> 1
                R.id.nav_times -> 2
                R.id.nav_more -> 3
                R.id.nav_settings -> 4
                else -> 0
            }
            viewPager.currentItem = index
            true
        }
    }
}
