import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decrement, increment } from "../../slice/counterSlice";
import { RootState } from "../../store";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SCounterWrapper>
      <SButtonWrapper>
        <PrimaryButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </PrimaryButton>
      </SButtonWrapper>
      <span>{count}</span>
      <SButtonWrapper>
        <SecondaryButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </SecondaryButton>
      </SButtonWrapper>
    </SCounterWrapper>
  );
};

const SCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px
`;

const SButtonWrapper = styled.div`
  display: block;
  margin: 0 10px;
`;
