import styled from 'styled-components';

export const Item = styled.li`
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  width: 300px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1),
    -1px 2px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 13px;
  gap: 10px;
`;

export const Status = styled.span`
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: #fd5152;

  &.online {
    background-color: #4ab04c;
  }
`;

export const Avatar = styled.img`
  width: '48px';
  height: 48px;
  background-color: #d3d7d7;
  border-radius: 5px;
`;
