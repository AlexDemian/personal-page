import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const StyledUl = styled.ul`
  margin-block-start: unset;
  margin-block-end: unset;
  padding-inline-start: 20px;
`;

export const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => {
  return (
    <StyledUl>
      {items.map((item, index) => (
        <li key={index}>
          <Typography>{item}</Typography>
        </li>
      ))}
    </StyledUl>
  );
};
