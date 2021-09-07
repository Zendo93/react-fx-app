import React, {useEffect} from "react";
import Item from "./Item";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AppDispatch} from "../app/store";
import {fetchResult, selectResult} from "../reducers/resultReducer";
import {IForeignExchange} from "../dto/FXResponse";
import {selectSearchResult, selectSearchTerm} from "../reducers/searchReducer";
import {getFlag} from "../utilities/flag";

function Result() {
    const result: IForeignExchange[] = useAppSelector(selectResult);
    const searchResult: IForeignExchange[] = useAppSelector(selectSearchResult);
    const searchTerm: string = useAppSelector(selectSearchTerm);
    const dispatch: AppDispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchResult());
    }, [dispatch]);

    function displayResult(result: IForeignExchange[]): JSX.Element[] {
        return result.filter(fx => fx.currency && fx.exchangeRate?.sell && fx.flags)
              .map(fx => <Item key={fx.currency} flag={getFlag(fx.currency)} name={fx.currency} currency={fx.exchangeRate.sell}/>);
    }

    return (
        <>
            {displayResult(searchResult.length || !!searchTerm ? searchResult : result)}
        </>
    );
}

export default Result;