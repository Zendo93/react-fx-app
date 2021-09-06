import {IForeignExchange} from "../dto/FXResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

interface ISearchState {
    term: string;
    result: IForeignExchange[];
}

const initialState: ISearchState = {
    term: "",
    result: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        },
        setSearchResult: (state, action: PayloadAction<IForeignExchange[]>) => {
            state.result = action.payload;
        }
    }
});

export const { setSearchTerm, setSearchResult } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.searchReducer.term;
export const selectSearchResult = (state: RootState) => state.searchReducer.result;
export default searchSlice.reducer;