import {from, Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {getFXResponse} from "../api/foreignExchangeAPI";
import {setResult} from "../reducers/resultReducer";
import {Action} from "@reduxjs/toolkit";
import {ofType} from "redux-observable";

export function resultEpic(action$: Observable<Action>): Observable<Action> {
    return action$.pipe(
        ofType('result/fetchResult'),
        mergeMap( _ => from(getFXResponse("../fx.json")).pipe(
            map(fxResponse => setResult(fxResponse.fx))
        ))
    );
}