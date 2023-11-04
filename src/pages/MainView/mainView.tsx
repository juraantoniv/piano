import React, {useState} from 'react';
import s from "./mainView.module.css";
import {Container, Grid, Paper} from "@mui/material";
import {RangeSelectorComponent} from "../../components/rangeSelector/rangeSelector";
import {useLocation} from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MainView = () => {

    const [fromItem,setFromItem]=useState<number>(0)
    const [toItem,setToItem]=useState<number>(2)

    let state  = useLocation().state as {items:Array<number>};

    const offset = (setFrom:number, setTo:number) => {
        if (setFrom>=1){
            setFromItem(setFrom)
        }
        if (setTo>=2){

        setToItem(setTo)
        }
    }

    const FilmToShow = (el:number) => {
        toast.info(`You chose ${el} film for viewing`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className={s.container}>
            <ToastContainer />
            <div>
                <Paper style={{ padding: "10px" }} className={s.item_box}>
                    <RangeSelectorComponent/>
                </Paper>
            </div>

            <div className={s.content}>
                <Grid container className={s.content}>

                    <Grid container spacing={3} className={s.content}>
                        {state.items.filter(el=> el<=toItem && el>=fromItem).map((tl) => {

                            return (
                                <Grid item key={tl}>
                                    <Paper style={{ padding: "10px" }} className={s.item_pair} onClick={()=>FilmToShow(tl)}>
                                        <div>{tl}</div>
                                    </Paper>
                                </Grid>

                            );
                        })}
                    </Grid>
                    <div>
                        <FiberManualRecordIcon style={{cursor:"pointer"}} onClick={()=>offset(fromItem>1?fromItem-1:1,toItem>2?toItem-1:1)}/>
                        <FiberManualRecordIcon style={{cursor:"pointer"}} onClick={()=>offset(fromItem+1,toItem+1)}/>
                    </div>

                </Grid>

            </div>
        </div>
    );
};

export default MainView;