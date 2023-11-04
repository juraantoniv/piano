import React, {memo} from 'react';
import RangeSelector, {
    Margin, Background, Image, Indent, SliderMarker, Scale,Label, Behavior,
} from 'devextreme-react/range-selector';
import 'devextreme/dist/css/dx.light.css'
import {Format} from "devextreme-react/chart";


export const RangeSelectorComponent=memo(()=> {


    function formatText(valueText:string, value:string) {
        console.log(value);
        return `${valueText} min`;
    }

    const onValuesChangeHandler = (value: (string | number | Date)[]) => {

        console.log(value);
    }

    return (
        <RangeSelector
            id="range-selector"
            onValueChanged={(e)=>onValuesChangeHandler(e.value)}

        >
            <Margin top={0} bottom={0} />
            <Background>
                <Image url="https://express-images.franklymedia.com/5829/sites/13/2021/07/12150856/GettyImages-1271522601.jpg" location="full" />
            </Background>
            <Indent left={10} right={10} />
            <SliderMarker placeholderHeight={25} format="shortTime" />
            <Scale
                minorTickInterval={1}
                tickInterval={1}
                startValue={1}
                endValue={300}>
                <Label>
                    <Format type="fixedPoint" precision={2} />
                </Label>
            </Scale>
            <SliderMarker customizeText={({valueText,value})=>formatText(valueText,value)}>
                <Format type="fixedPoint" precision={0} />
            </SliderMarker>
            <Behavior snapToTicks={false} valueChangeMode={"onHandleMove"} />
        </RangeSelector>
    );
})


