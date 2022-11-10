import { useState } from 'react'
import './App.css'

function App({
  datas,
  dates,
}: {
  datas: { month: string; year: string; date: string; adult_amount: string }[]
  dates: {
    year: string
    month: string
    firstDay: string
    monthDays: string[]
  }[]
}) {
  const [selectMonth, selectMonthSet] = useState(11)
  const { year, month, firstDay, monthDays } = dates[selectMonth]
  const targets = datas.filter(e => e.month === month && e.year === year)

  function dateHandle(n: number) {
    if (selectMonth + n > 12 || selectMonth + n < 10) return
    selectMonthSet(month => month + n)
  }
  return (
    <>
      {/* title */}
      <div className="title">
        <div className="left" onClick={() => dateHandle(-1)}></div>
        <div className="text-color-[#1a1a1a]">{`${year}年${month}月`}</div>
        <div className="right" onClick={() => dateHandle(1)}></div>
      </div>

      {/* 星期 */}
      <div className="flex text-color-[#1a1a1a] week">
        <div className="text-color-[#bbbbbf]">日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div className="text-color-[#bbbbbf]">六</div>
      </div>

      {/* 日期 */}
      <div className="grid">
        {<div className={`placeholder${firstDay}`}></div>}
        {monthDays.map(e => {
          const target = targets.find(target => target.date.slice(-2) === e)
          return (
            <div className="rounded-md flex-col text-color-[#bbbbbf] items justify-center hover:bg-[#12b5b2] ">
              <div className={target ? 'h-130 text-color-[#1a1a1a]' : 'h-130'}>
                {e}
              </div>
              <div className={target ? 'text-color-[#12b5b2]' : 'opacity-0 '}>
                {target?.adult_amount || 0}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
