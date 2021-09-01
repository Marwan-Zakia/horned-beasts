/* eslint-disable array-callback-return */
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import data from './components/assets/data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
//
//Import the data.json to here to pass the data to main
// function handle hide on defult enable,disable model here
//
 // the model should be diabled on defult => when the botten on the card is pressed   => it shoud apper  =>  and should display information   =>    =>
 //SelectedBeast should render here
 // add new component to view the model and render it in app (here)
 // model .func
class App extends React.Component {
  constructor(props){
    super(props);
 this.state={
allofhorndbeasts:data,
show : false,
baestobject : {}
};};
handleShow=(title)=>{
  let beasts=data.find(hrond => {
if (hrond.title===title){return hrond;}

  });
  this.setState({
    show : true,
      baestobject: beasts

  });
 };
handleClose=()=>{
  this.setState({
    show : false
  });
  };
  render(){
    return (
      <div>
        <Header />
        <Main data={this.state.allofhorndbeasts} changeToshow={this.handleShow} closeModel={this.handleClose} />
        <SelectedBeast objectbeasts={this.state.baestobject} show={this.state.show} closeModel={this.handleClose} changeToshow={this.handleShow} />
        <Footer />
      </div>);

  }
}

export default App;
