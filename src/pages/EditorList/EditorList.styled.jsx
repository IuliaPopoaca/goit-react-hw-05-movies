import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  display:flex;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #7878AC;
  }
`;