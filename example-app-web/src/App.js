import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Section } from 'react-layout-views'

class App extends Component {
  render() {
    return (
      <Layout grow spacing="50px">
        <Section>
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </Section>
        <Section bottom right grow>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Section>
      </Layout>
    );
  }
}

export default App;
