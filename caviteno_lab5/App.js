import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerToggleButton,} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.buttonToProfile}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => navigation.goBack()} 
      style={styles.buttonBackToHome}>
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function AboutScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => navigation.goBack()} 
      style={styles.buttonAbout}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const header = ({ navigation }) => ({
  headerLeft: () => (
    <DrawerToggleButton
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  ),
});

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={header}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyStack} options={{ headerShown: false }}/>
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  buttonToProfile: {
    height: 40,
    width: 100,
    padding: 10,
    backgroundColor: '#36C3F7',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonBackToHome: {
    height: 40,
    width: 150,
    padding: 10,
    backgroundColor: '#36C3F7',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonAbout: {
    height: 40,
    width: 100,
    padding: 10,
    backgroundColor: '#36C3F7',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    marginTop: 5,
    padding: 10,
    width: 388,
    backgroundColor: '#FEEBE7',
    color: '#9C2007',
    fontWeight:'bold',
  }
});