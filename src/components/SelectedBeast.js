import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModel}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
