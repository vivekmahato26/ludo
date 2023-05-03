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
      { ...initalState, color: "red", ref: "r1", initialPos:27, currentPos: 27},
      { ...initalState, color: "red", ref: "r2", initialPos:27, currentPos: 27},
      { ...initalState, color: "red", ref: "r3", initialPos:27, currentPos: 27},
      { ...initalState, color: "red", ref: "r4", initialPos:27, currentPos: 27},
    ],
    green: [
      { ...initalState, color: "green", ref: "g1", initialPos:40, currentPos: 40},
      { ...initalState, color: "green", ref: "g2", initialPos:40, currentPos: 40},
      { ...initalState, color: "green", ref: "g3", initialPos:40, currentPos: 40},
      { ...initalState, color: "green", ref: "g4", initialPos:40, currentPos: 40},
    ],
    blue: [
      { ...initalState, color: "blue", ref: "b1", initialPos:14, currentPos: 14},
      { ...initalState, color: "blue", ref: "b2", initialPos:14, currentPos: 14},
      { ...initalState, color: "blue", ref: "b3", initialPos:14, currentPos: 14},
      { ...initalState, color: "blue", ref: "b4", initialPos:14, currentPos: 14},
    ],
    yellow: [
      { ...initalState, color: "yellow", ref: "y1", initialPos:1, currentPos: 1},
      { ...initalState, color: "yellow", ref: "y2", initialPos:1, currentPos: 1},
      { ...initalState, color: "yellow", ref: "y3", initialPos:1, currentPos: 1},
      { ...initalState, color: "yellow", ref: "y4", initialPos:1, currentPos: 1},
    ],
    selectedPiece: {}
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
      console.log(action.payload)
      state.selectedPiece = {
        ref,turn
      }
       
    },
  },
});

export const { updatePeiceState, movePiece, selectPiece } = pieceSlice.actions;
export default pieceSlice;
