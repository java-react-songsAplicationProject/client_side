import { Song } from "../../model/Song";

const initialState = {
  songsArr:[]
};
export const songReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        songsArr: [...state.songsArr, action.payload],
      };
    case "DELETE_SONG":
      let a = state.songsArr.filter((item:Song) => item.id!= action.payload);
      return {
        ...state,    
         songsArr: a,
      };
    case "SAVE_SONGS":
      return {
        ...state,
        songsArr: action.payload,
      };
    case "EDIT_SONG":
      let ind:number = state.songsArr.findIndex((item:Song) => item.id == action.payload.id);
      let arr:any=state.songsArr;
      arr[ind]= action.payload.s;
      return {
        ...state,
        songsArr: [...arr]
      };
    default:
      return {...state};
  }
};
