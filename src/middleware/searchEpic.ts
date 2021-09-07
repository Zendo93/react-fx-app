import {Observable} from "rxjs";
import {Action} from "@reduxjs/toolkit";
import {ofType, StateObservable} from "redux-observable";
import {map} from "rxjs/operators";
import {RootState} from "../app/store";
import {IForeignExchange} from "../dto/FXResponse";
import {setSearchResult} from "../reducers/searchReducer";

type SearchAction = { payload: string, type: string };

export function searchEpic(action$: Observable<SearchAction>, state$: StateObservable<RootState>): Observable<Action> {
    return action$.pipe(
        ofType<SearchAction, string, SearchAction>('search/setSearchTerm'),
        map((action: SearchAction) => {
            let result: IForeignExchange[] = state$.value.resultReducer.result;
            return setSearchResult(result.filter(fx => fx.currency.toLowerCase().startsWith(action.payload.toLowerCase())));
        })
    );
}