import styled from 'styled-components';
export const StatisticsSection = styled.section`
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondaryText};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const StatList = styled.ul`
  display: flex;
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background: linear-gradient(
    90deg, 
    rgb(229, 255, 190) 0%, 
    rgb(245, 250, 161) 50%,
    rgb(213, 243, 238) 100%)
`;

export const StatLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatPercentage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.m}; ;
`;