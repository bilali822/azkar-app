package com.zikr.tumaaneena

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ZikrAdapter(private val azkarList: List<ZikrModel>) : RecyclerView.Adapter<ZikrAdapter.ZikrViewHolder>() {

    class ZikrViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val textZikr: TextView = view.findViewById(R.id.textZikr)
        val textSource: TextView = view.findViewById(R.id.textSource)
        val btnCount: TextView = view.findViewById(R.id.btnCount)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ZikrViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_zikr, parent, false)
        return ZikrViewHolder(view)
    }

    override fun onBindViewHolder(holder: ZikrViewHolder, position: Int) {
        val zikr = azkarList[position]
        holder.textZikr.text = zikr.text
        holder.textSource.text = zikr.source

        var currentCount = 0
        holder.btnCount.text = zikr.maxCount.toString()

        holder.btnCount.setOnClickListener {
            if (currentCount < zikr.maxCount) {
                currentCount++
                holder.btnCount.text = "$currentCount / ${zikr.maxCount}"
                if (currentCount == zikr.maxCount) {
                    holder.btnCount.text = "تم ✓"
                }
            } else {
                currentCount = 0
                holder.btnCount.text = zikr.maxCount.toString()
            }
        }
    }

    override fun getItemCount() = azkarList.size
}
