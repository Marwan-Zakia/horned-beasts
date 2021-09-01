import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModel}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.objectbeasts.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><Card.Img variant="top" src={this.props.objectbeasts.image_url}/></Modal.Body>
          <Modal.Body>Description : {this.props.objectbeasts.description}</Modal.Body>
          <Modal.Body> the type of the beasts:   {this.props.objectbeasts.keyword}</Modal.Body>
          <Modal.Body>  the number Of horns : {this.props.objectbeasts.horns}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>

    );

  }



} export default SelectedBeast;
