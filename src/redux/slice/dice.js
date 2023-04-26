import { createSlice } from "@reduxjs/toolkit";

const diceSlice = createSlice({
  name: "Dice",
  initialState: {
    roll: null,
    playing: false,
    player: null
  },
  reducers: {
    rollDiceEvent: (state, action) => {
      state.roll = action.payload.roll;
      state.playing = action.payload.playing;
      state.player = action.payload.player;
    },
  },
});

export const { rollDiceEvent } = diceSlice.actions;
export default diceSlice;
