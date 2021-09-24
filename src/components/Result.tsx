import React, {useEffect} from "react";
import Item from "./Item";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AppDispatch} from "../app/store";
import {fetchResult, selectResult} from "../reducers/resultReducer";
import {IForeignExchange} from "../dto/FXResponse";
import {selectSearchResult, selectSearchTerm, setSearchTerm} from "../reducers/searchReducer";
import {getFlag} from "../utilities/flag";
import {useParams} from "react-router-dom";

function Result() {
    const result: IForeignExchange[] = useAppSelector(selectResult);
    const searchResult: IForeignExchange[] = useAppSelector(selectSearchResult);
    const searchTerm: string = useAppSelector(selectSearchTerm);
    const { term } = useParams<{term: string}>();
    const dispatch: AppDispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchResult());
        return () => {
            if (term) dispatch(setSearchTerm(term));
        }
    }, [JSON.stringify(result), dispatch, term]);

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