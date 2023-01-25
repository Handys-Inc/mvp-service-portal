import { useMonth } from '@datepicker-react/hooks'
import React from 'react'
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
    firstDayOfWeek
  })
  console.log(weekdayLabels)
  return (
    <div id='month'>
      <div className='week-labels'>
        {weekdayLabels.map(dayLabel => (
          <div className='label'>
            <h4 key={dayLabel}>{WEEK_LABELS[dayLabel]}</h4>
          </div>
        ))}
      </div>
      <div className='days-section'>
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                days={days}
                date={day.date}
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
