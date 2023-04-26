import { configureStore } from "@reduxjs/toolkit";
import diceSlice from "./slice/dice";

export default configureStore({
    reducer: {
        Dice: diceSlice.reducer
    }
})