import { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';

interface RoundButtonProps {
  children: ReactNode;
  onPress?: any;
  disabled?: boolean;
  padding?: number;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  onPress = () => {},
  padding = 5,
  ...restProps
}) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(255, 255, 255, 0.08)"
      style={{ borderRadius: 100, padding: padding }}
      onPress={onPress}
      {...restProps}>
      {children}
    </TouchableHighlight>
  );
};
