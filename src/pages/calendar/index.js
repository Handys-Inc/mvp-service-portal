import React from 'react'
import { Tab } from 'react-bootstrap'
import MonthlyVersion from '../../features/calendar/monthlyversion/MonthlyVersion'
import TopSection from '../../features/calendar/topsection/TopSection'
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
        {({ timeVersion }) => (
          <div id='calendar'>
            <DefaultLayout>
              <Tab.Container activeKey={timeVersion}>
                <TopSection />
                <Tab.Content>
                  <Tab.Pane eventKey={VERSIONS[0]}>
                    <MonthlyVersion />
                  </Tab.Pane>
                  <Tab.Pane eventKey={VERSIONS[1]}>
                    <MonthlyVersion />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </DefaultLayout>
          </div>
        )}
      </CalendarContextConsumer>
    </CalendarContextProvider>
  )
}

export default Calendar
