import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

export const LoadingOverlay = styled(BlurView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
