import React, { useState } from 'react'
import DatepickerContext, {
  DatepickerContextConsumer
} from './datepicker.context'
import './monthlyversion.style.scss'
import { useDatepicker, START_DATE } from '@datepicker-react/hooks'
import DatepickerContextProvider from './datepicker.context'
import Month from './Month'

function MonthlyVersion () {
  return (
    <DatepickerContextProvider>
      <DatepickerContextConsumer>
        {({
          activeMonths,
          goToPreviousMonths,
          goToNextMonths,
          firstDayOfWeek
        }) => (
          <div id='monthly-version'>
            {[activeMonths[0]].map(month => (
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
        )}
      </DatepickerContextConsumer>
    </DatepickerContextProvider>
  )
}

export default MonthlyVersion
