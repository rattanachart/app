import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Redirect, Switch } from 'react-router-dom'
import Menu from './Menu'
import Layout from './Layout'
import PageNotFound from '../pages/PageNotFound'
import FirstPage from '../pages/FirstPage'
import MiddlePage from '../pages/MiddlePage'
import BackEndPage from '../pages/BackEndPage'

class App extends Component {

  render() {
    console.log("app");

    return (
      <Layout>
        <Menu />
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/middle" exact component={MiddlePage} />
          <Route path="/direction" exact component={BackEndPage} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Layout>

    );
  }

}



// const mapStateToProps = ({ auth, setting, routing }) => {
//   return { auth, setting, routing };
// };

export default App;
// withRouter(connect(mapStateToProps)(App));

