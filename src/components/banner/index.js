import React from 'react'
import { Banner, Label, Highlight, Paragraph, Span } from './style'
import Countdown from "react-countdown"
const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <Span>{days}   days   {hours}   hours   {minutes}   minutes   {seconds}   seconds Left{completed}</Span>;
    }
  };

function index() {
    return (
        <div>
            <Banner>
                <Label>Who's your <Highlight>MUSE?</Highlight></Label>
                <Paragraph>영감을 나누는 공간 <Span>MUSE</Span></Paragraph>
                <Countdown
                    date={'2021-11-09T01:02:03'}
                    renderer={renderer}
                />
            </Banner>
        </div>
    )
}

export default index
