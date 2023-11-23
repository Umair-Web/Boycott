import React, { useEffect } from 'react';
import { View, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
  const fadeAnim = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to the second screen after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      navigation.navigate('Info');
    }, 2000);

    // Clear the timeout if the component is unmounted before the timeout is reached
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 10,
        duration: 3000, // Adjust the duration as needed
        useNativeDriver: true, // Add this line for better performance
      }
    ).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#fff" }}>
      <Animated.Image
        source={require('../assets/logo1.png')}
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain', // or 'cover' depending on your needs
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      />
    </View>
  );
};

export default Splashscreen;
