import act from "./actions";

const initialize = {
  msg: "",
  allMsgs: [],
};

function reducer(state = initialize, action){
  switch(action.type){

    case act.CHANGE_MSG_ACTION:
      return Object.assign({},state, {
        msg: action.msg
      });

    case act.ADD_ALL_MSG_ACTION:
      return Object.assign({}, state,{
        msg: action.msg,
        allMsgs: action.allMsgs
      })

    default:
      return state;
  }
}

export default reducer;

