import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useRootNavigation, useRouter } from '@/hooks/useRootNavigation';

type HomeScreenProps = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useRootNavigation();
  const TextInputStyled = styled.TextInput`
    width: 100%;
    height: 60px;
    font-size: 18px;
    color: #010101;

    color: black;
  `;
  const UserName = styled.Text`
    padding-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #010101;
  `;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Chat', { id: '10000' })}
          style={styles.button}>
          <Text style={styles.buttonText}>holaswwww</Text>
        </TouchableOpacity>

        <TextInputStyled
          placeholder="What's on your mind?"
          placeholderTextColor={'red'}
        />
        <TextInput placeholder="What's on your mind?" />
        <UserName>sddd</UserName>
        <Text>hdddola</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {},
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
