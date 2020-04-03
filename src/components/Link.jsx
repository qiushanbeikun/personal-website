import React from 'react';
import MDLink from "@material-ui/core/Link";
import { Link as RLink } from "react-router-dom";
import styled from 'styled-components';

const Link = styled(({ external, ...rest }) => external ? <a {...rest} /> : <MDLink component={RLink} {...rest} />)`
  padding: 0em;
  border-radius: 0.25em;
  color: #e0e0e0;
`;

export default Link;
