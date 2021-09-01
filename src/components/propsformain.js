import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Hornedbeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        numberOfvotes : 0
    };
}

incrementNumberOfvotes = () => {
    this.setState({
        numberOfvotes : this.state.numberOfvotes + 1
    });
    this.props.changeToshow(this.props.data.title);
};

  render() {
    return (<>

<Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={this.props.data.image_url} onClick={this.incrementNumberOfvotes}/>
  <Card.Body>
    <Card.Title>{this.props.data.title}</Card.Title>
    <Card.Text>
    {this.props.data.keyword}
    </Card.Text>
    <Card.Text> horns :
    {this.props.data.horns}
    </Card.Text>
    <Card.Text>
    💖  : {this.state.numberOfvotes}
    </Card.Text>
    <Button variant="secondary" onClick={this.incrementNumberOfvotes} >
              FIND OUT MORE ....
            </Button>
  </Card.Body>
</Card>



    </>
    );
  }
}


export default Hornedbeast;




