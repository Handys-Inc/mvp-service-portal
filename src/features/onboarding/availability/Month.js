import { useMonth } from '@datepicker-react/hooks'
import React, { useEffect, useState } from 'react'
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
    firstDayOfWeek: 0
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

    const end = 6 - days[days.length - 1].date.getDay()
    var i = 0
    while (i !== end) {
      var date = getNextDay(days[days.length - 1].date, i + 1)
      if (zeros.length > 0) zeros.pop()
      new_days.push({
        date,
        dayLabel:
          date.getDate() < 10
            ? '0' + date.getDate()
            : date.getDate().toString(),
        old_month: true
      })
      i++
    }
    return new_days
  }

  useEffect(() => {
    setDaysOfMonth(getNewDays())

    return () => {}
  }, [])

  return (
    <div id='month'>
      <div className='week-labels'>
        {weekdayLabels.map(dayLabel => (
          <div className='label'>
            <h4 key={dayLabel}>{WEEK_LABELS[dayLabel][0]}</h4>
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

          return <div key={index} id='day' />
        })}
      </div>
    </div>
  )
}

export default Month
