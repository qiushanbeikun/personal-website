import React from 'react';
import MDLink from "@material-ui/core/Link";
import { Link as RLink } from "react-router-dom";
import styled from 'styled-components';

const Link = styled(({ external, ...rest }) => external ? <a {...rest} /> : <MDLink component={RLink} {...rest} />)`
  padding: 1em;
  border-radius: 0.25em;

  &&:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.palette.grey["400"]};
    transition: all 0.5s;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default Link;
