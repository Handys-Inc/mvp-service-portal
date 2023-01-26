import { useMonth } from '@datepicker-react/hooks'
import React, { useEffect, useState } from 'react'
import { MONTHS } from '../monthlyversion/datepicker.context'
import Day from './Day'
const WEEK_LABELS = {
  Mo: 'Mon',
  Tu: 'Tue',
  We: 'Wed',
  Th: 'Thu',
  Fr: 'Fri',
  Sa: 'Sat',
  Su: 'Sun'
}
function Month ({
  year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths
}) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek: 1
  })
  const [daysOfMonth, setDaysOfMonth] = useState(days)

  function getPreviousDay (date = new Date(), num) {
    const previous = new Date(date.getTime())
    previous.setDate(date.getDate() - num)

    return previous
  }

  function getNextDay (date = new Date(), num) {
    const next = new Date(date.getTime())
    next.setDate(date.getDate() + num)

    return next
  }

  const getNewDays = () => {
    let max = 0
    days.map((x, i) => {
      if (parseInt(x.dayLabel) > max) {
        max = parseInt(x.dayLabel)
      }
    })
    var zeros = days.filter((x, i) => x === 0)
    var no_zeros = days.filter((x, i) => x !== 0)
    var new_days = days.map((x, i) => {
      if (x === 0) {
        var date = getPreviousDay(no_zeros[0].date, zeros.length)
        if (zeros.length > 0) zeros.pop()
        return {
          date,
          dayLabel:
            date.getDate() < 10
              ? '0' + date.getDate()
              : date.getDate().toString(),
          old_month: true
        }
      } else return x
    })

    return new_days
  }

  useEffect(() => {
    setDaysOfMonth(getNewDays())

    return () => {}
  }, [])
  return (
    <div id='month'>
      <h1>{MONTHS[month]}</h1>
      <div className='week-labels'>
        {weekdayLabels.map(dayLabel => (
          <div className='label'>
            <h4 key={dayLabel}>{WEEK_LABELS[dayLabel]}</h4>
          </div>
        ))}
      </div>
      <div className='days-section'>
        {daysOfMonth.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                days={daysOfMonth}
                date={day.date}
                old_month={day.old_month}
                index={index}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            )
          }
          return <div id='day' key={index}></div>
        })}
      </div>
    </div>
  )
}

export default Month
