import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

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
                </Navbar>

            </>
        );
    }
}

export default Header;








