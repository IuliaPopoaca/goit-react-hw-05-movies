import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #4E4E5E;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  border-radius: 10px;
  outline: none;
  background-color: #B3B3BA;

  &:hover {
    color: #7878AC;
    border: 3px solid #7878AC;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #4E4E5E;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
  background-color: #B3B3BA;

  &:hover {
    color: #0069ef;
    border: 3px solid #7878AC;
  }
`;