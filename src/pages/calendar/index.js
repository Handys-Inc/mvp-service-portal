import _ from 'lodash'
import React from 'react'
import { Tab } from 'react-bootstrap'
import JobDetails from '../../features/calendar/jobdetails/JobDetails'
import DatepickerContextProvider from '../../features/calendar/monthlyversion/datepicker.context'
import MonthlyVersion from '../../features/calendar/monthlyversion/MonthlyVersion'
import TopSection from '../../features/calendar/topsection/TopSection'
import YearlyVersion from '../../features/calendar/yearlyversion/YearlyVersion'
import DefaultLayout from '../../layouts/DefaultLayout'
import CalendarContextProvider, {
  CalendarContextConsumer,
  VERSIONS
} from './calendar.context'
import './calendar.scss'

function Calendar () {
  return (
    <CalendarContextProvider>
      <CalendarContextConsumer>
        {({ timeVersion, contract }) => (
          <div id='calendar'>
            <DatepickerContextProvider>
              <DefaultLayout>
                <Tab.Container activeKey={timeVersion}>
                  <TopSection />
                  <Tab.Content>
                    <Tab.Pane eventKey={VERSIONS[0]}>
                      <MonthlyVersion />
                    </Tab.Pane>
                    <Tab.Pane eventKey={VERSIONS[1]}>
                      <YearlyVersion />
                    </Tab.Pane>
                  </Tab.Content>
                  {!_.isEmpty(contract) && <JobDetails />}
                </Tab.Container>
              </DefaultLayout>
            </DatepickerContextProvider>
          </div>
        )}
      </CalendarContextConsumer>
    </CalendarContextProvider>
  )
}

export default Calendar
