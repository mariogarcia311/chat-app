import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

export const LoadingOverlay = styled(BlurView)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
