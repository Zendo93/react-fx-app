import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {IForeignExchange} from "../dto/FXResponse";

interface IResultState {
    result: IForeignExchange[];
}

const initialState: IResultState = {
    result: []
}

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        fetchResult: () => {},
        setResult: (state, action: PayloadAction<IForeignExchange[]>) => {
            state.result = action.payload;
        }
    }
});

export const { fetchResult, setResult } = resultSlice.actions;
export const selectResult = (state: RootState) => state.resultReducer.result;
export default resultSlice.reducer;