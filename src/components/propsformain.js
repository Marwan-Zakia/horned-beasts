import React from 'react';


class Hornedbeast extends React.Component {
  render() {
    return (<>


      <h2>{this.props.name} </h2>
      <img src={this.props.img} alt={this.props.name} />
      <p>{this.props.description}</p>
      <p>{this.props.type}</p>
      <p>{this.props.horns} </p>




    </>



    );
  }
}


export default Hornedbeast;




