import { createSlice } from "@reduxjs/toolkit";

const languageConstant = createSlice({
  name: "language",
  initialState: {
    lang: {
        search: "खोज",
        gptPlaceHolderSearch: "आज आप क्या देखना चाहेंगे?",
      },
  },
  reducers: {
    selectEnglish: (state) => {
         state.lang = {
            search: "Search",
            gptPlaceHolderSearch: "What would you like to watch today ?",
          };
    },
    selectSpanish: (state) => {
         state.lang = {
            search: "Buscar",
            gptPlaceHolderSearch: "¿Qué te gustaría ver hoy?",
          };
      
    },
    selectHindi: (state) => {
        state.lang = {
            search: "खोज",
            gptPlaceHolderSearch: "आज आप क्या देखना चाहेंगे?",
          };
     
   },
  },
});
export const {selectHindi,selectEnglish,selectSpanish} = languageConstant.actions;

export default languageConstant.reducer;
