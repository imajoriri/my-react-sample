import store from "./../store";
import act from "./../actions";

export default {

  changeMsg: (e) => {
    return {
      type: act.CHANGE_MSG_ACTION,
      msg: e.target.value
    }
  },

  addAllMsg: (e) => {
    var allMsgs = store.getState().allMsgs;
    allMsgs.push(store.getState().msg);
    return {
      type: act.DD_ALL_MSG_ACTION,
      msg: "",
      allMsgs: allMsgs
    }
  }

}
