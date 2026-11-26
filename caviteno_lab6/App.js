import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerToggleButton,} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const products = [
      {name: "Evora Watch"},
      {name: "Rombaut"},
      {name: "A Thousand Splendid Suns"}
]

function HomeScreen({navigation}) {

  return (
    <View style={styles.containerMain}>
      <FlatList
      style={styles.list}
      data={products}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity 
          onPress={() => {
            if (item.name === "Evora Watch") {
              navigation.navigate('Evora Watch');
            } else if (item.name === "Rombaut") {
              navigation.navigate('Rombaut');
            } else if (item.name === "A Thousand Splendid Suns") {
              navigation.navigate('A Thousand Splendid Suns');
            }
          }}
        >
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  );
}

function Evora({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
      We live in a world that’s constantly pulling us in different directions. Notifications, endless scrolling, distractions everywhere.
EVORA exists to help you reclaim your time.
A watch that keeps you in the moment, free from the noise. Built for those who believe that life isn’t about more - it’s about less. Less distraction. Less clutter. More presence. More time for what matters.
      </Text>
    </View>
  );
}

function Rombaut({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
          ROMBAUT is a vegan accessory brand with sustainability at its core. Our limited editions connect with a new generation of critical thinkers, artists, celebrities and creatives around the world. By proposing strong aesthetics and humanist values, ROMBAUT aims to provide a way forward for a world in need of change. Color, form and detailing are singular and forward-looking.
      </Text>
    </View>
  );
}

function Thousand({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
      A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, following the huge success of his bestselling 2003 debut The Kite Runner. Mariam, an illegitimate teenager from Herat, is forced to marry a shoemaker from Kabul after a family tragedy. Laila, born a generation later, lives a relatively privileged life, but her life intersects with Mariam's when a similar tragedy forces her to accept a marriage proposal from Mariam's husband.
      </Text>
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
      <Stack.Screen name="Evora Watch" component={Evora} />
      <Stack.Screen name="Rombaut" component={Rombaut} />
      <Stack.Screen name="A Thousand Splendid Suns" component={Thousand} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyStack} options={{ headerShown: false }}/>
      <Drawer.Screen name="Evora Watch" component={Evora} />
      <Drawer.Screen name="Rombaut" component={Rombaut} />
      <Drawer.Screen name="A Thousand Splendid Suns" component={Thousand} />
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
    backgroundColor: '#ffffff',
    padding: 8,
  },
  item: {
    marginTop: 5,
    padding: 10,
    fontFamily: 'courier',
    fontWeight: 'bold',
    borderWidth: 1,
    width: 360,
    fontSize: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  list: {
    padding: 10,
    fontFamily: 'courier',
    
  },
  content: {
    color: '#9C2007',
    fontFamily: 'courier',
    justifyContent: 'justified',
  }
});