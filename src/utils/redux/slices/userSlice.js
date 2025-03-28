import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
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

  export const {addUser,removeUser} =userSlice.actions;
  export const userReducer = userSlice.reducer
