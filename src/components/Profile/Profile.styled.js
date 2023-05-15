import styled, { css } from 'styled-components';

export const ProfileStyled = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px 2px 1px 1px rgba(0, 0, 0, 0.1) ;
  overflow: hidden;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 35px 0;
  .tag {
    color: grey;
    font-size: 18px;
  }

  .location {
    color: grey;
    font-size: 18px;
  }
`;

export const Avatar = styled.img`
  background-color: #d3d7d7;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin-bottom: 15px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const Stats = styled.ul`
  align-items: center;
  background-color: #f3f6f9;
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  width: 100%;
  font-size: 15px;
`;

export const List = styled.li`
border-top: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 85px;
  justify-content: center;
  ${props =>
    props.middle &&
    css`
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    `}
  .label {
    color: #aab5be;
    font-weight: 500;
    padding-bottom: 6px;
  }
  .quantity {
    color: #364252;
    font-size: 15px;
    font-weight: 700;
  }
`;
