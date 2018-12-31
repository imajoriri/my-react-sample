import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from "./../store";

import act from "./../action/form_inputer";

class InputForm extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form>
          <input 
            ref="msg"
            type="text" 
            value={this.props.state.msg}
            onChange={e => this.props.changeMsg(e)}
          />
        </form>
        <button onClick={e => this.props.addAllMsg(e)}>send</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}
const mapDispatchToProps = dispatch => {
  return {
    changeMsg: (e) => dispatch(act.changeMsg(e)),
    addAllMsg: (e) => dispatch(act.addAllMsg(e)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);


