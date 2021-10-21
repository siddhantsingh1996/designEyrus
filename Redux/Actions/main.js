import * as t from "../types";


export const selectedMenu = (name) => dispatch => {
    dispatch({
      type: t.SELECTED_MENU,
      payload: name
    });
}
export const clickedMenu=(name)=>dispatch=>{
  dispatch({
    type:t.MENU_CLICKED,
    payload:name
  });
}


