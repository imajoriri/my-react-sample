import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var list = this.props.state.allMsgs.map((msg) => {
      return <li>{msg}</li>
    })
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return state;
  //return { text: state.text};
}

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


