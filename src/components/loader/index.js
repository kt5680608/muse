import { memo } from "react";
import styled from "styled-components";

const LoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderWrap>
      <h1>loading...</h1>
    </LoaderWrap>
  );
};

export default memo(Loader);