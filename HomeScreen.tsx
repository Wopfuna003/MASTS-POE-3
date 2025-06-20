import React from 'react';
import menuData from './menu.json';
import { MenuItem } from './index';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import menuList from './menu.json';

function calculateAveragePrice(menu: any[], category: string) {
  const menuList: MenuItem[] = menuData as MenuItem[];
  const items = menu.filter(dish => dish.selectedOption.toUpperCase() === category.toUpperCase());
  const total = items.reduce((sum, dish) => sum + dish.Price, 0);
  return items.length ? (total / items.length).toFixed(2) : 0;
}


export default function HomeScreen() {
  const averageStarterPrice = calculateAveragePrice(menuList, 'starter');
  const averageMainPrice = calculateAveragePrice(menuList, 'main');
  const averageDessertPrice = calculateAveragePrice(menuList, 'dessert');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('./assets/backdrop05.png')} style={styles.pic}/>
        <Text style={styles.title}>MENU</Text>
        <Text style={styles.courseAve}> Average price per course</Text>

        {/* Display average prices */}
        <View style={styles.rowContainer}>
          <View style={styles.averageContainer}>
              <Text style={styles.averageText}>Starters: R{averageStarterPrice}</Text>
          </View>

          <View style={styles.averageContainer}>
              <Text style={styles.averageText}>Main: R{averageMainPrice}</Text>
          </View>

          <View style={styles.averageContainer}>
              <Text style={styles.averageText}>Dessert: R{averageDessertPrice}</Text>
            </View>
        </View>

        {/* Display menu items */}
        {menuList.map(dish => (
          <View style={styles.card} key={dish.Name}>
            <View style={styles.row}>
              <Text style={styles.nametext}>{dish.Name}</Text>
              <Text>  - R{dish.Price}</Text>
            </View>
            <Text style={styles.cardText}>{dish.Description}</Text>
            <Text style={styles.courseText}>{dish.selectedOption}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
  },
  pic: {
    width: '100%',
    height: 200,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  averageContainer: {
    width: 100,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e0801c',
    borderRadius: 8,
  },
  averageText: {
    fontSize: 16,
    color: 'white',
    marginVertical: 2,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nametext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
  },
  courseText: {
    color: '#e0801c'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  courseAve: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5,
  },
});