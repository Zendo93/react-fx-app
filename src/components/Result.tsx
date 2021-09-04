import React, {useEffect} from "react";
import Item from "./Item";
import {useAppDispatch} from "../app/hooks";
import {AppDispatch} from "../app/store";
import {fetchResult} from "../reducers/resultReducer";

function Result() {
    const dispatch: AppDispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchResult());
    });

    return (
        <>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </>
    );
}

export default Result;