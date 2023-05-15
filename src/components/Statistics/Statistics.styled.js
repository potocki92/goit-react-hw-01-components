import styled from 'styled-components';
import getRandomHexColor from 'utils/randomHexColor';

export const StyledStatistics = styled.section`
  background-color: transparent;
  text-align: center;
  width: calc(100% - 80px);
  max-width: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 30px;
  padding: 20px 0;
  text-transform: uppercase;
  color: #aab5be;
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc((100% - 30px) / 1), 1fr));

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc((100% - 20px) / 2), 1fr)
    );
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc((100% - 20px) / 3), 1fr)
    );
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc((100% - 20px) / 5), 1fr)
    );
  }
`;

export const ListItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  background-color: ${getRandomHexColor};
  @media screen and (min-width: 768px) {
    width: 80px;
  }
  .label {
    font-size: 1rem;
  }

  .percentage {
    font-size: 1.5rem;
  }
`;
