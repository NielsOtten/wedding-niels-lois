import React, { PropTypes } from 'react';
import HeaderComponent from './Header/HeaderComponent';

function App({ children }) {
  return (
    <div>
      <HeaderComponent />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
