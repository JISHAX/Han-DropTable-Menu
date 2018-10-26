import Redux from "redux";
import { callbackify } from "util";

const initialState = {
  navmenu: ["Lunch", "Dinner", "Brunch", "Happy Hour"],
  selected: "Lunch", //need to use Caps
  viewmode: "container-1",
  restaurantID: 1,
  entry: []
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHDATA":
      let obj0 = Object.assign({}, state);
      obj0.selected = action.selected;
      obj0.entry = action.data;
      return obj0;
    case "FETCHMENUDATA":
      let obj = Object.assign({}, state);
      obj.navmenu = action.data1;
      return obj;
    case "MENUBUTTON_CLICK":
      let obj2 = Object.assign({}, state);
      obj2.selected = action.value;
      obj2.entry = action.data;
      return obj2;
    case "VIEWCHANGE":
      let obj3 = Object.assign({}, state);
      obj3.viewmode =
        state.viewmode === "container-1" ? "container-2" : "container-1";
      return obj3;
    default:
      return state;
  }
};

export default Reducers;
