import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  color: null,
  initialPos: null,
  currentPos: null,
  open: false,
  ref: null,
};

const pieceSlice = createSlice({
  name: "Piece",
  initialState: {
    red: [
      { ...initalState, color: "red", ref: "r1" },
      { ...initalState, color: "red", ref: "r2" },
      { ...initalState, color: "red", ref: "r3" },
      { ...initalState, color: "red", ref: "r4" },
    ],
    green: [
      { ...initalState, color: "green", ref: "g1" },
      { ...initalState, color: "green", ref: "g2" },
      { ...initalState, color: "green", ref: "g3" },
      { ...initalState, color: "green", ref: "g4" },
    ],
    blue: [
      { ...initalState, color: "blue", ref: "b1" },
      { ...initalState, color: "blue", ref: "b2" },
      { ...initalState, color: "blue", ref: "b3" },
      { ...initalState, color: "blue", ref: "b4" },
    ],
    yellow: [
      { ...initalState, color: "yellow", ref: "y1" },
      { ...initalState, color: "yellow", ref: "y2" },
      { ...initalState, color: "yellow", ref: "y3" },
      { ...initalState, color: "yellow", ref: "y4" },
    ],
  },
  reducers: {
    updatePeiceState: (state, action) => {
      const { ref, currentPos, initialPos, open, turn } = action.payload;
      state[turn] = state[turn].map((e) => {
        if (e.ref === ref) {
          return {
            ...e,
            initialPos,
            currentPos,
            open,
          };
        }
        return e;
      });
    },
    movePiece: (state, action) => {
      const { ref, move, turn } = action.payload;
      state[turn] = state[turn].map((e) => {
        if (e.ref === ref) {
          let newPos = e.currentPos + move;
          if (e.currentPos + move > 51) {
            newPos -= 51 + 1;
          }
          return {
            ...e,
            currentPos: newPos,
          };
        }
        return e;
      });
    },
    selectPiece: (state, action) => {
      const { ref, turn } = action.payload;
      state.selected = {
        ref,
        turn
      };
    },
  },
});

export const { updatePeiceState, movePiece, selectPiece } = pieceSlice.actions;
export default pieceSlice;
