import styled from 'styled-components';

interface IsLightModeProp {
  isDayMode?: string;
}

const ContainerDiv = styled.div<IsLightModeProp>`
  background-color: ${props => (props.isDayMode == 'true' ? '#E7E7E7' : '#1F1F21')};
  color: ${props => (props.isDayMode == 'true' ? 'green' : 'white')};
`;

export default ContainerDiv;


