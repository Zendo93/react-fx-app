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
    }, []);

    return (
        <>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
            <Item name="USD" currency={1.05}/>
        </>
    );
}

export default Result;