import * as React from 'react';
import BaseComponent from './utils/baseComponent';
import classnames from 'classnames';
import "antd/dist/antd.css";
// import DemoComponent from './components/demoComponent';
import AppHeader from './components/appHeader';
import AppBody from './components/appBody';
import AppFooter from './components/appFooter';

class App extends BaseComponent<any> {
  render() {
    return (
      <div className={classnames('body')}>
        {/* <DemoComponent /> */}
        <AppHeader />
        <AppBody />
        <AppFooter />
      </div>
    )
  }
}

export default App;
