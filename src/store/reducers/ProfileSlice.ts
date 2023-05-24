import {IVisit} from "../../models/IVisit";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



interface VisitState {
    data: any;
    save: boolean;
}


const initialState: VisitState = {
    data: [],
    save: false
};

// export const ProfileSlice = createSlice({
//     name: 'profile',
//     initialState,
//     reducers: {
//         addVisit: (state,action) => {
//             state.data.push(action.payload)
//         }
        

//     },
// })

export const setReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      case 'UPDATE_VARIABLE':
      return {
        ...state,
        save: action.payload,
      };
      default:
        return state;
    }
  };


// export const {addVisit} = ProfileSlice.actions;
export default setReducer;
