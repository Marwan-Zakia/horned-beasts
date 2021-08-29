import React from 'react';
import Header from "./components/header";
import Footer from './components/footer';
import Hornedbeast from './components/propsformain';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hornedbeast />
        <Footer />
      </>)

  }
}

export default App;