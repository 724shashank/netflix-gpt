import { createSlice } from "@reduxjs/toolkit";
const userSLice = createSlice({
  name: "userData",
  initialState: null,
  reducers:{
    addUser:(_,action)=>{
        return action.payload;
    },

    removeUser:(state,action)=>{
        return null;
    }
        
    }
  });

  export const {addUser,removeUser} =userSLice.actions;
  export const userReducer = userSLice.reducer
