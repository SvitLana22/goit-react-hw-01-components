import PropTypes from 'prop-types';
import{StatisticsSection,
  Title,
  StatItem,
  StatList,
  StatLabel,
  StatPercentage,} from './Statistics.styled'
export default function Statistics({ title= 'Upload sats', stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel>{stat.StatListlabel}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
      )
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};