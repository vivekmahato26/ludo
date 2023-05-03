import { createSlice } from "@reduxjs/toolkit";

const initState = {
  name: "",
  color: "",
  current: false,
  passed: null,
  locked: null,
};

const playerSlice = createSlice({
  name: "Player",
  initialState: {
    p1: { ...initState, color: "yellow" },
    p2: { ...initState, color: "blue" },
    p3: { ...initState, color: "red" },
    p4: { ...initState, color: "green" },
  },
  reducers: {
    selectTurn: (state, action) => {
      const { current } = action.payload;
      switch (current) {
        case "yellow":
          state.p2.current = true;
          state.p1.current = false;
          break;
        case "blue":
          state.p3.current = true;
          state.p2.current = false;
          break;
        case "red":
          state.p4.current = true;
          state.p3.current = false;
          break;
        case "green":
          state.p1.current = true;
          state.p4.current = false;
          break;
      }
    },
    updatePlayer: (state,action ) => {
        
    }
  },
});
