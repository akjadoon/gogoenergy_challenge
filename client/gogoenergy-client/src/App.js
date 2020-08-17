import React from 'react';

import "./App.css"

import UserTableContainer from './components/UserTableContainer/UserTableContainer'


function App() {
  return (
    <div>
      <div className="header"><h1>User Admin Page</h1></div>
      <UserTableContainer pageSize={8}/>
    </div>
  );
}

export default App;
