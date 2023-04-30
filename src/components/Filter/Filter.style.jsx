import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 8px auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 8px 240px 8px 16px;
  &:hover,
  &:focus {
    box-shadow: 10px 5px 5px grey;
  }
`;

export const Label = styled.label`
  display: flex;
  text-align: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 5px;
  font-size: 30px;
  font-weight: 600;
  color: #0d497e;
`;
