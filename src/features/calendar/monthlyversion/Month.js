import { useMonth } from '@datepicker-react/hooks'
import React from 'react'

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
  return (
    <div id='month'>
      <div className='week-labels'>
        {weekdayLabels.map(dayLabel => (
          <div className='label'>
            <h4 key={dayLabel}>{dayLabel}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Month
