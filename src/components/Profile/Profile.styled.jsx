import styled from 'styled-components';
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  `
  export const Info = styled.div`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-right: auto;
  margin-left: auto;
  & p {
    text-align: center;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.secondaryText};
    margin-top: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
export const Avatar = styled.img`
  display: block;
  border-radius: ${p => p.theme.radii.round};
  height: 100px;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.theme.colors.backgroundBody};
`;
export const Name = styled.p`
  div & {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.primaryText};
  }
`;

export const Stats = styled.ul`
  width: 100%;
  column-count: 3;
  gap: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;
  clear: inherit;
  margin: ${p => p.theme.space[0]}px;
  background-color: ${p => p.theme.colors.backgroundBody};
`;

export const StatsItem = styled.li`
  width: 98, 5%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  clear: inline-end;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.secondaryText};
  &:hover {
    cursor: pointer;
    box-shadow: 
    rgb(0 0 0 / 12%) 0px 1px 3px, 
    rgb(0 0 0 / 14%) 0px 1px 1px, 
    rgb(0 0 0 / 20%) 0px 2px 1px;
  }
`;

export const StatsNumber = styled.span`
  margin-top: 4px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primaryText};
`;