import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import menulist from './data.json';
import React from 'react';

export default function SelectDish() {
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [menulist, setMenuList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      return data; // Make sure to return the data
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return empty array on error
    }
  };
  
  // Then use it:
  useEffect(() => {
    fetchData().then(data => {
      setMenuList(Array.isArray(data) ? data : []);
      useEffect(() => {
        const loadData = async () => {
          try {
            const data = await fetchData();
            setMenuList(Array.isArray(data) ? data : []);
          } catch (error) {
            console.error('Error loading data:', error);
            setMenuList([]);
          }
        };
        
        loadData();
      }, []);
    });
  }, []);

  const toggleSelection = (dishName: string) => {
    setSelectedDishes(prevSelected => ({
      ...prevSelected,
      [dishName]: !prevSelected[dishName]
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('./assets/backdrop04.png')} style={styles.pic} />
        {
          menulist.map(dish => (
            <View key={dish.Name} style={styles.card}>
              <View style={styles.row}>
                <Checkbox
                  style={styles.checkbox}
                  value={selectedDishes[dish.Name] || false}
                  onValueChange={() => toggleSelection(dish.Name)}
                />
                <Text style={styles.nametext}>{dish.Name}  -  R{dish.Price}</Text>
              </View>
              <Text style={styles.cardtext}>{dish.Description}</Text>
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
    height: 200,
  },
  scrollView: {
    paddingHorizontal: 16,
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
  cardtext: {
    fontSize: 14,
  },
  checkbox: {
    marginRight: 8,
  },
  courseText: {
    color: '#e0801c'
  },
  nametext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
function fetchData() {
  throw new Error('Function not implemented.');
}

