import React from 'react'
import { Banner, Label, Highlight, Paragraph, Span } from './style'
import Countdown from "react-countdown"
const Completionist = () => <span>You are good to go!</span>;
const i = 1
var dDay = Date.now() + 6.048e+8;

const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if(completed) {
        do{
            var dDayNotEnd = Date.now() + 6.048e+8;
            console.log(Date.now())
            return(
                <Countdown   date={dDayNotEnd}
                renderer={renderer}/>
            )
        } while (i == 0);
    }
    else {
        return (
            <>
                <Span>MUSE 선정까지 {days}   일   {hours}   시   {minutes}   분   {seconds}   초 남음{completed}</Span>
            </>
        );

    }
  };

function index() {
    return (
        <div>
            <Banner>
                <Label>New <Highlight>MUSE</Highlight> coming...</Label>
                <Countdown
                    date={dDay}//'2021-11-07T00:00:00'
                    renderer={renderer}
                />
            </Banner>
        </div>
    )
}

export default index
