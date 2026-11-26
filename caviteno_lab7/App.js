import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerToggleButton, DrawerActions} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
            <Image source={{ uri: user.picture.large }} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
          <TouchableOpacity style={styles.button} onPress={fetchUser}>
          <Text style={styles.buttonText}>Random User</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
      <Text style={styles.profileName}>{`${user.name.first} ${user.name.last}`}</Text>
      <Text style={styles.label}>About</Text>
      <View style={styles.line}/>
      <Text style={styles.profileContent}>Age: {user.dob.age}</Text>
      <Text style={styles.profileContent}>Birthday: {user.dob.date}</Text>
      <Text style={styles.profileContent}>Gender: {user.gender}</Text>
      <Text style={styles.profileContent}>Address: {`${user.location.city}, ${user.location.country}`}</Text>
      <Text style={styles.label}>Contact</Text>
      <View style={styles.line}/>
      <Text style={styles.profileContent}>Email: {user.email}</Text>
      <Text style={styles.profileContent}>Phone: {user.phone}</Text>
      <Text style={styles.label}>Other</Text>
      <View style={styles.line}/>
      <Text style={styles.profileContent}>Date registered: {user.registered.date}</Text>
    </View>
  );
};

const header = ({ navigation }) => ({
  headerLeft: () => (
    <DrawerToggleButton
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  ),
});

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={header}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyStack} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#055471',
    padding: 10,
    width: 130,
    borderRadius: 10,
  },
  buttonText:{
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Avenir',
    marginVertical: 10,
  },
  profileContainer: {
    flex: 1,
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Avenir',
  },
  label: {
    alignItems: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    borderWidthBottom: 1,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  profileContent: {
    fontFamily: 'courier',
    fontSize: 12,
    color: 'grey',
  }
});

export default App;
