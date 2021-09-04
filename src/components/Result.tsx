import React, {useEffect} from "react";
import Item from "./Item";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AppDispatch} from "../app/store";
import {fetchResult, selectResult} from "../reducers/resultReducer";
import {IFXResponse} from "../dto/FXResponse";

function Result() {
    const result: IFXResponse | {} = useAppSelector(selectResult);
    const dispatch: AppDispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchResult());
    }, [dispatch]);

    function displayResult(result: IFXResponse): JSX.Element[] {
        let items: JSX.Element[] = [];

        if (Object.keys(result).length){
          items = result.fx.filter(fx => fx.currency && fx.exchangeRate?.sell)
              .map(fx => <Item key={fx.currency} name={fx.currency} currency={fx.exchangeRate.sell}/>);
        }

        return items;
    }

    return (
        <>
            {Object.keys(result).length && displayResult(result as IFXResponse)}
        </>
    );
}

export default Result;