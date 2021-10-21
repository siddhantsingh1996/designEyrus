import * as t from "../Types";



const InitialState={
    menu:"Project",
    minimized:false,
    menuClicked:false,
}

const main=(state=InitialState,action)=>{
    switch(action.type){
        case t.SELECTED_MENU:
            return { 
              ...state,
              menu: action.payload
            };
        case t.SELECTED_MENU:
          return{
            ...state,
            menuClicked:!menuClicked?true:false
          }    

      
          default:
            return {...state};
          }

    }


export default main;
