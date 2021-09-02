/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import data from './components/assets/data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allofhorndbeasts: data,
      show: false,
      baestobject: {},
      numberOfhorns: '',
      dataofhorns: data
    };
  };

  formHandler = event => {
    event.preventDefault();
    let allHorns;
    let numberofhorn = parseInt(event.target.value);
    allHorns = data;
    if (numberofhorn) {
      allHorns = data.filter((element) => {
        if (element.horns === numberofhorn) { return element; }
        else{allHorns=data;}
      });
      }
    this.setState({
      numberOfhorns: event.target.value,
      dataofhorns: allHorns
    });

  };
  handleShow = (title) => {
    let beasts = data.find(hrond => {
      if (hrond.title === title) { return hrond; }

    });
    this.setState({
      show: true,
      baestobject: beasts

    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Form onChange={this.formHandler} onSubmit={this.formHandler}>
          <Form.Group >
            <Form.Select aria-label="please use me to choose the number of horns" >
              <option>please use me to choose the number of horns</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">wow</option>
            </Form.Select>

          </Form.Group>
        </Form>
        <Main data={this.state.dataofhorns} newdata={this.state.hrondbeasts} changeToshow={this.handleShow} closeModel={this.handleClose} select={this.formHandler} />
        <SelectedBeast objectbeasts={this.state.baestobject} show={this.state.show} closeModel={this.handleClose} changeToshow={this.handleShow} />
        <Footer />
      </div>);

  }
}

export default App;
