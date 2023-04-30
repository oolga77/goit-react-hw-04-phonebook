import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 4px;
  padding-left: 25px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  font-size: 25px;
  margi
`;
export const DeleteBtn = styled.button`
  align-items: center;
  border: 2px solid grey;
  background-color: #fcfcfd;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  cursor: pointer;
  display: inline-flex;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: left;
  font-size: 20px;
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
