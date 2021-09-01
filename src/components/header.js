import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//  import data from './assets/data.json';
class Header extends React.Component {
    // filterList = (event) => {
    //     let numberofhorns = parseInt(event.value);
    //     let allHorns = dataH;
    //     if (numberofhorns) {
    //         allHorns = dataH.filter((item) =>item.horns === numberofhorns);
    //         console.log(allHorns);
    //         return allHorns;
    // };};
    // filter = (hrons) => {
    // let beasts = data.find(hrond => {
    //     if (hrond.hrons === hrons) { return hrond; }
    // });
    render() {
        return (
            <>

                <Navbar expand="lg" variant='light' bg="light">
                    <Navbar.Brand href="#">HornedBeasts</Navbar.Brand>
                    <Form >
                    <Form.Group onChange={this.props.select} onSubmit={this.props.select} >
                        <Form.Select aria-label="please use me to choose the number of horns">
                            <option>please use me to choose the number of horns</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">wow</option>
                        </Form.Select>

                        </Form.Group>
                    </Form>


                </Navbar>

            </>
        );
    }
}

export default Header;








