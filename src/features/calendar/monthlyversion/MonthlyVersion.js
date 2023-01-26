import React, { useState } from 'react'
import DatepickerContext, {
  DatepickerContextConsumer,
  MONTHS,
  useDatepickerContext
} from './datepicker.context'
import './monthlyversion.style.scss'
import { useDatepicker, START_DATE } from '@datepicker-react/hooks'
import DatepickerContextProvider from './datepicker.context'
import Month from './Month'
import { useCalendarContext } from '../../../pages/calendar/calendar.context'

function MonthlyVersion () {
  const { shownMonth } = useCalendarContext()
  const { activeMonths, goToPreviousMonths, goToNextMonths, firstDayOfWeek } =
    useDatepickerContext()
  return (
    <div id='monthly-version'>
      {[activeMonths.find(x => x.month === MONTHS.indexOf(shownMonth))].map(
        month => (
          <Month
            goToPreviousMonths={goToPreviousMonths}
            goToNextMonths={goToNextMonths}
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        )
      )}
    </div>
  )
}

export default MonthlyVersion
