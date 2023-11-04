import React, {useState} from 'react';
import {Grid} from "@mui/material";
import s from "./itemsPage.module.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Item} from "../../components/Item";




const items = [1,2,3,4,5,6,7,8,9,10,11,12]

export const ItemsPage = () => {

    const [fromItem,setFromItem]=useState<number>(0)
    const [toItem,setToItem]=useState<number>(6)


    // Setting the fromItem and toItem based on the provided values
    const offset = (setFrom:number, setTo:number) => {
      setFromItem(setFrom)
      setToItem(setTo)
    }

    return (
        <div  className={s.container}>
            <Grid container className={s.box}>
                {items.filter(el=> el<=toItem && el>=fromItem).map(
                    el=>(<Item item={el} items={items}/>)
                )}
            </Grid >
            <div>
                <FiberManualRecordIcon style={{cursor:"pointer"}} onClick={()=>offset(0,6)}/>
                <FiberManualRecordIcon style={{cursor:"pointer"}} onClick={()=>offset(7,12)}/>
            </div>

        </div>
    );
};
