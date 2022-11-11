import { useState } from 'react'
import './App.css'

// safelist
// col-span-1
// col-span-2
// col-span-3
// col-span-4
// col-span-5
// col-span-6
// col-span-7

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
    <div className="mx-30rem select-none ">
      {/* title */}
      <div className="flex h-100rem text-size-34rem text-color-[#1a1a1a] justify-between items-stretch children:(flex-1 bg-no-repeat) ">
        <div className="bg-left" onClick={() => dateHandle(-1)}></div>
        <div className="text-center self-center">{`${year}年${month}月`}</div>
        <div className="bg-right" onClick={() => dateHandle(1)}></div>
      </div>

      {/* 星期 */}
      <div className="border-y flex h-70rem text-size-26rem text-color-[#1a1a1a] items-center children:(w-1/7 text-center) ">
        <div className="text-color-[#bbbbbf]">日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div className="text-color-[#bbbbbf]">六</div>
      </div>

      {/* 日期 */}
      <div className="mt-50rem grid  gap-y-20rem children:(flex flex-col items-center justify-evenly text-color-[#bbbbbf] leading-normal rounded-1/10) ">
        {/* 占位符 */}
        <div className={`col-span-${firstDay}`}></div>

        {/*items */}
        {monthDays.map(day => {
          const target = targets.find(target => target.date.slice(-2) === day)
          return (
            <div className="hover:bg-[#12b5b2] children:(hover:text-color-[#fff]) ">
              <div
                className={`text-size-[28rem] ${
                  target ? 'text-color-[#1a1a1a]' : ''
                }`}
              >
                {day}
              </div>
              <div className="h-1em text-size-20rem text-color-[#12b5b2]">
                {target?.adult_amount}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
