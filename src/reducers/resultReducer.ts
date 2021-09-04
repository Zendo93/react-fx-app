import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {IFXResponse} from "../dto/FXResponse";

interface IResultState {
    result: IFXResponse | {};
}

const initialState: IResultState = {
    result: {}
}

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        fetchResult: () => {},
        setResult: (state, action: PayloadAction<IFXResponse>) => {
            console.log(action.payload);
            state.result = action.payload;
        }
    }
});

export const { fetchResult, setResult } = resultSlice.actions;
export const selectResult = (state: RootState) => state.resultReducer.result;
export default resultSlice.reducer;