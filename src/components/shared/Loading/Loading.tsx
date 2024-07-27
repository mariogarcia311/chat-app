import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Modal, View } from 'react-native';
import { LoadingOverlay } from './Loading.styled';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';

export const Loading = () => {
  const [visible, setVisible] = useState(true);
  const theme = useTheme();
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      rotateValue.setValue(0);
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(() => startRotation());
    };

    startRotation();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <LoadingOverlay blurType="dark" blurAmount={11}></LoadingOverlay>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <FontAwesome
            name="spinner"
            size={70}
            color={theme.colors.font.tertiary}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};
