import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
}

const StyledHeader = styled.h3`
  text-align: left;
`;

const Header = ({ title, ...props }: Props) => {
  return <StyledHeader {...props}>{title}</StyledHeader>;
};

export default Header;
