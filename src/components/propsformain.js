import React from 'react';
import na from '../components/imges/na.jpg'
import ra from '../components/imges/ra.webp'
import uni from '../components/imges/uni.jpg'

class Hornedbeast extends React.Component {
  render() {
    return (<>

      <h2>UniWhal </h2>
      <img src={na} alt="" srcset=""id='img'></img>
      <p>A unicorn and a narwhal nuzzling their horns</p>
      <p>narwhal</p>
      <p>horns= '1'</p>


      <h2>Rhino Family </h2>
      <img src={ra} alt="" srcset=""id='img'></img>
      <p>Mother (or father) rhino with two babies</p>
      <p>rhino</p>
      <p>horns= '2'</p>


      <h2>Unicorn Head </h2>
      <img src={uni} alt="" srcset="" id='img' ></img>
      <p>Someone wearing a creepy unicorn head mask</p>
      <p>unicorn</p>
      <p>horns= '1'</p>



   {/* <h2>{this.props.name} </h2>
      <img src={this.props.img} alt="" srcset=""> </img>
      <p>{this.props.description}</p>
      <p>{this.props.type}</p>
      <p>{this.props.horns} </p> */}


    </>


    )
  }
}


export default Hornedbeast;



