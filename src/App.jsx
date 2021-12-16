import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Navigation from './components/Navigation.jsx';
import CallDetails from './components/CallDetails.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <CallDetails />
      <Navigation />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
