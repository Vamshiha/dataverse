import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Title from './components/titlebar/titlebar';
import LandingPage from './components/landingPage/landingPage';
import ApplyNowPage from './components/applyNowPage/applyNowPage';
import Footer from './components/footer/footer';
import JobSearch from './components/jobSearch/jobSearch';
import NewsComponent from './components/newsComponent/newsComponent';
import Services from './components/services/services';
import PlatformPage from './components/platformPage/platformPage'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Title />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/apply" component={ApplyNowPage} />
        <Route path="/jobsearch" component={JobSearch} />
        <Route path="/newscomponent" component={NewsComponent} />
        {/* Add routes for platform pages */}
        <Route path="/platforms/:platformName" component={PlatformPage} />
        {/* <Route path="DataAnalyticsPlatform" render={() => <PlatformPage platform="Data Analytics Platform" />} />
        <Route path="/platforms/Business Analysis Tools" render={() => <PlatformPage platform="Business Analysis Tools" />} />
        <Route path="/platforms/Cloud Services" render={() => <PlatformPage platform="Cloud Services" />} />
        <Route path="/platforms/Business Services" render={() => <PlatformPage platform="Business Services" />} />
        <Route path="/platforms/Network Engineering" render={() => <PlatformPage platform="Network Engineering" />} />
        <Route path="/platforms/Cybersecurity" render={() => <PlatformPage platform="Cybersecurity" />} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
