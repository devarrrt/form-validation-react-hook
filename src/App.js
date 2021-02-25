import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Header from './components/Header'
import Step1 from './components/pages/Step1'
import Step2 from './components/pages/Step2'
import Step3 from './components/pages/Step3'
import Result from './components/pages/Result'



const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Step1 } />
          <Route path="/step2" component={ Step2 } />
          <Route path="/step3" component={ Step3 } />
          <Route path="/result" component={ Result } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
