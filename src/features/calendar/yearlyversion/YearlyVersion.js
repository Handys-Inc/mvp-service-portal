import React from 'react'
import './yearlyversion.style.scss'
import { useDatepickerContext } from '../monthlyversion/datepicker.context'
import Month from './Month'

function YearlyVersion () {
  const { activeMonths, goToPreviousMonths, goToNextMonths, firstDayOfWeek } =
    useDatepickerContext()
  return (
    <div id='yearly-version'>
      {activeMonths.map(month => (
        <Month
          goToPreviousMonths={goToPreviousMonths}
          goToNextMonths={goToNextMonths}
          key={`${month.year}-${month.month}`}
          year={month.year}
          month={month.month}
          firstDayOfWeek={firstDayOfWeek}
        />
      ))}
    </div>
  )
}

export default YearlyVersion
