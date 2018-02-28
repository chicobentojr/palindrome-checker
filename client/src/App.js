import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import PalindromeChecker from './components/PalindromeChecker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
        </header>
        <main>
          <PalindromeChecker />
        </main>
      </div>
    );
  }
}

export default App;
