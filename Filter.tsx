import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import menuList from './menu.json';

export default function SelectDish() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  interface MenuItem {
    Name: string;
    Price: number;
    Description: string;
    selectedOption: string;
  }

  const filteredMenuList = selectedOption && Array.isArray(menuList)
  ? menuList.filter(dish => dish.selectedOption === selectedOption)
  : menuList;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('./assets/backdrop05.png')} style={styles.pic}/>
        <Text style={styles.title}>FILTER BY COURSE</Text>

        {/* Filter Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setSelectedOption('STARTER')} style={styles.button}>
            <Text style={styles.buttonText}>STARTER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedOption('MAIN')} style={styles.button}>
            <Text style={styles.buttonText}>MAIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedOption('DESSERT')} style={styles.button}>
            <Text style={styles.buttonText}>DESSERT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedOption(null)} style={styles.button}>
            <Text style={styles.buttonText}>ALL</Text>
          </TouchableOpacity>
        </View>

        {
          filteredMenuList.map(dish => (
            <View style={styles.card} key={dish.Name}>
              <View style={styles.row}>
                <Text style={styles.nametext}>{dish.Name}</Text>
                <Text>  - R{dish.Price}</Text>
              </View>
              <Text style={styles.cardText}>{dish.Description}</Text>
              <Text style={styles.courseText}>{dish.selectedOption}</Text>
            </View>
          ))
        }
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
    height: 80,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e0801c',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
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
    marginTop: 16,
    marginBottom: 20,
  },
});