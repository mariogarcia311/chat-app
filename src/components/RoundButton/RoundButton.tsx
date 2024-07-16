import { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';

interface RoundButtonProps {
  children: ReactNode;
  onPress?: void;
  disabled?: boolean;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  onPress = () => {},
  ...restProps
}) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(255, 255, 255, 0.08)"
      style={{ borderRadius: 100, padding: 5 }}
      onPress={onPress}
      {...restProps}>
      {children}
    </TouchableHighlight>
  );
};
