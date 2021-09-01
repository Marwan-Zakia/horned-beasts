import React from 'react';
import Hornedbeast from './propsformain';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
    render() {
        return (<>
       <Container class='con'>
  <Row>
    { this.props.data.map(item=>{
        return( <Col> <Hornedbeast data={item} key={item.image_url} changeToshow={this.props.changeToshow} /></Col>);
       })}
       </Row>
     </Container>

        </>

        );
    }
}

export default Main;






