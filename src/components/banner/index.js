import React from "react";
import { Banner, Label, Highlight, Paragraph, Span } from "./style";

function index() {
  return (
    <div>
      <Banner>
        <Label>
          Who's your <Highlight>MUSE?</Highlight>
        </Label>
        <Paragraph>
          영감을 나누는 공간 <Span>MUSE</Span>
        </Paragraph>
      </Banner>
    </div>
  );
}

export default index;
