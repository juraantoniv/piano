import React, {FC} from 'react';
import s from "./item.module.css"
import {Link} from "react-router-dom";
import {Paper} from "@mui/material";

type ItemType = {
    item:number
    items:Array<number>
}

export const Item:FC<ItemType> = ({
    item,
    items
                              }) => {
    return (
        <>
            <Paper className={s.item_box} component={Link} state={{items}} to="/mainView">
                <div>{item} Film </div>
            </Paper>
        </>

    );
};

