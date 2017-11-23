import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, IndexRedirect } from 'react-router'

import App from 'containers/App'
import MarketListPage from 'containers/MarketListPage'
import MarketCreateWizardPage from 'containers/MarketCreateWizardPage'
import MarketDetailPage from 'containers/MarketDetailPage'
import TransactionsPage from 'containers/TransactionsPage'
import DashboardPage from 'containers/DashboardPage'
import ScoreBoardPage from 'routes/scoreboard/containers/ScoreBoard'
import GameRulesPage from 'routes/gamerules/containers/GameRules'
import MarketCreateReviewPage from 'containers/MarketCreateReviewPage'

export const MY_SHARES_PARAM = 'my-shares'

const AppRouter = ({ history }) => (
  <Router key={Math.random()} history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="markets" />
      <Route path="dashboard" component={DashboardPage} />
      <Route path="transactions" component={TransactionsPage} />
      <Route path="scoreboard" component={ScoreBoardPage} />
      <Route path="gamerules" component={GameRulesPage} />
      <Route path="markets">
        <IndexRedirect to="list" />
        <Route path="new" component={MarketCreateWizardPage} />
        <Route path="review" component={MarketCreateReviewPage} />
        <Route path="list" component={MarketListPage} />
        <Route path=":id" component={MarketDetailPage}>
          <Route path=":view">
            <Route path=":shareId">
              <Route path="sell" component={MarketDetailPage} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>
)

AppRouter.propTypes = {
  history: PropTypes.shape.isRequired,
}

export default AppRouter
