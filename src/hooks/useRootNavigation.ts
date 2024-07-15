import { RootStackParams } from '@/navigation/IndexNavigation';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export const useRootNavigation = () => {
  return useNavigation<NavigationProp<RootStackParams>>();
};

type ScreenName = keyof RootStackParams;

export const useParams = <T extends ScreenName>(screen: T) => {
  return useRoute<RouteProp<RootStackParams, T>>().params;
};

export const useRouter = () => {
  return useRoute<RouteProp<RootStackParams>>();
};
