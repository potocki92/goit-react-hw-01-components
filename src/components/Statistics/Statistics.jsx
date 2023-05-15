import PropTypes from 'prop-types';
import { ListItem, StatList, StyledStatistics, Title } from './Statistics.styled';

const Statistics = ({ stats }) => {
  return (
    <StyledStatistics>
      <Title>Upload stats</Title>
      <StatList>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </ListItem>
        ))}
      </StatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
