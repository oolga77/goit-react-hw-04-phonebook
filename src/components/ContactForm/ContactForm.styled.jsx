import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
  justify-content: baseline;
  border: 1px solid black;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 30px;
  font-weight: 600;
  color: #0d497e;
`;
export const FormInput = styled.input`
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

export const FormButton = styled.button`
  align-items: center;
  border: 2px solid grey;
  background-color: #fcfcfd;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: left;
  font-size: 24px;
  :focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }
  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    color: #0d497e;
  }
  :active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    color: #0d497e;
  }
`;
