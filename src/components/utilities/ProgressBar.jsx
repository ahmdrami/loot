import React from "react";
import styled from "styled-components";

const Progress = styled.progress`
  width: 100%;
  height: 10px;
  background-color: grey;
  border-radius: 5px;
  &::-webkit-progress-bar {
     background-color: #fafafa;
     border-radius: 5px;
  }

  &::-webkit-progress-value {
     background-color: #f6cb47;
     border-radius: 5px;
  }

  &.max {
   &::-webkit-progress-value {
      background-color: #4db7c3;
   }
  }
`;

const ProgreeBar = ({ percentage }) => {
  return <Progress value={percentage} max="1" className={ percentage === 1 ? 'max' : ''} />;
};

export default ProgreeBar;
