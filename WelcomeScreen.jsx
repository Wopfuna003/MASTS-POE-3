import React from 'react';
import {View,Text,StyleSheet,ImageBackground,TouchableOpacity, StatusBar,Dimensions,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigate to your main menu or home screen
    navigation.navigate('Home'); // Replace 'Home' with your actual screen name
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      
      
        {/* Dark Overlay */}
        <LinearGradient
        Gradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
          style={styles.overlay}
        >
          {/* Main Content */}
          <View style={styles.content}>
            {/* Welcome Text */}
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.welcomeText}>To</Text>
              <Text style={styles.restaurantName}>Christoffel</Text>
              <Text style={styles.restaurantType}>Restaurant</Text>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
              {/* Calendar Icon and Text */}
              <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                  <Text style={styles.calendarIcon}>📅</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.infoTitle}>Nothing Brings People Together</Text>
                  <Text style={styles.infoSubtitle}>Better Than Good Food</Text>
                </View>
              </View>

              {/* Get Started Button */}
              <TouchableOpacity 
                style={styles.getStartedButton}
                onPress={handleGetStarted}
                activeOpacity={0.8}
              >
                <Text style={styles.getStartedText}>Let's Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  restaurantName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  restaurantType: {
    fontSize: 28,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bottomSection: {
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  calendarIcon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  infoSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  getStartedButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;