import { configureStore } from "@reduxjs/toolkit";
import diceSlice from "./slice/dice";
import pieceSlice from "./slice/piece";

export default configureStore({
    reducer: {
        Dice: diceSlice.reducer,
        Piece: pieceSlice.reducer
    }
})