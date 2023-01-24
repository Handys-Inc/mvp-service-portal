import React from 'react'
import { Nav, Tab } from 'react-bootstrap'
import AddPayoutMethod from '../../features/history/addpayout/AddPayoutMethod'
import Completed from '../../features/history/completed/Completed'
import GrossEarnings from '../../features/history/gross/GrossEarnings'
import Upcoming from '../../features/history/upcoming/Upcoming'
import DefaultLayout from '../../layouts/DefaultLayout'
import HistoryContextProvider, {
  HistoryContextConsumer,
  TABS
} from './history.context'
import './history.scss'

function History () {
  return (
    <HistoryContextProvider>
      <HistoryContextConsumer>
        {({ tab, setTab }) => (
          <div id='history'>
            <DefaultLayout>
              <div className='body'>
                <AddPayoutMethod />
                <h3>Transaction history</h3>
                <Tab.Container activeKey={tab}>
                  <Nav>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          setTab(TABS[0])
                        }}
                        eventKey={TABS[0]}
                      >
                        Completed payouts
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          setTab(TABS[1])
                        }}
                        eventKey={TABS[1]}
                      >
                        Upcoming payouts
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => {
                          setTab(TABS[2])
                        }}
                        eventKey={TABS[2]}
                      >
                        Gross payouts
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey={TABS[0]}>
                      <Completed />
                    </Tab.Pane>
                    <Tab.Pane eventKey={TABS[1]}>
                      <Upcoming />
                    </Tab.Pane>
                    <Tab.Pane eventKey={TABS[2]}>
                      <GrossEarnings />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </DefaultLayout>
          </div>
        )}
      </HistoryContextConsumer>
    </HistoryContextProvider>
  )
}

export default History
