import {IForeignExchange} from "../dto/FXResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

interface ISearchState {
    term: string;
    result: Array<IForeignExchange>;
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
        }
    }
});

export const { setSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.searchReducer.term;
export default searchSlice.reducer;