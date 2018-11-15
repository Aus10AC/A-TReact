import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      <div className="Middle">
        <Main />
        <Form />
      </div>
        <Footer />
      </div>
    );
  }
}

export default App;
