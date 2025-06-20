import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import React from 'react';
export default function AddItem() {
    const [Name, setName] = useState<string>('');
    const [Description, setDescription] = useState<string>('');
    const [Price, setPrice] = useState<number | null>(null); // Updated to integer
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [Errors, setErrors] = useState<{ Name?: string; Description?: string; Price?: string; selectedOption?: string }>({});
    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
      };
      const validateForm = () => {
        let errors: { Name?: string; Description?: string; Price?: string; selectedOption?: string } = {};
        if (!Name) errors.Name = 'Name is required';
        if (!Description) errors.Description = 'Description is required';
        if (Price === null) errors.Price = 'Price is required';
        if (!selectedOption) errors.selectedOption = 'An option is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      return (
          <ScrollView>
          <Image source={require('./assets/menu.png')} style={styles.Logo} />
          <Text style={styles.label}>NAME</Text>
          <TextInput
            style={styles.Input}
            value={Name}
            onChangeText={setName}
            placeholder="Dish Name"
          />
          {Errors.Name && <Text style={styles.errorText}>{Errors.Name}</Text>}
          <Text style={styles.label}>DESCRIPTION</Text>
      <TextInput
        style={[styles.Input, styles.multiLineText]}
        value={Description}
        onChangeText={setDescription}
        placeholder="Dish Description"
        multiline
      />
      {Errors.Description && <Text style={styles.errorText}>{Errors.Description}</Text>}

      <Text style={styles.label}>PRICE</Text>
      <TextInput
        style={styles.Input}
        value={Price ? Price.toString() : ''}
        onChangeText={(text) => setPrice(parseInt(text) || null)}
        placeholder="R.."
        keyboardType="numeric"
      />
      {Errors.Price && <Text style={styles.errorText}>{Errors.Price}</Text>}

      <Text style={styles.label}>Choose an option</Text>
      <View style={styles.radioGroup}>
        {['STARTER', 'MAIN', 'DESSERT'].map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.radioButton}
            onPress={() => handleSelectOption(option)}
          >
            <View
              style={[
                styles.radioCircle,
                { backgroundColor: selectedOption === option ? '#e0801c' : 'white' },
              ]}
            >
              {selectedOption === option && <View style={styles.selectedRadioInnerCircle} />}
            </View>
            <Text style={styles.option}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {Errors.selectedOption && <Text style={styles.errorText}>{Errors.selectedOption}</Text>}

      <Button title="SAVE" onPress={() => validateForm()} color='#e0801c' />
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackDrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  Logo: {
    width: 200,
    height: 200,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  Input: {
    backgroundColor: '#f5f5f5',
    width: 300,
    height: 40,
    marginBottom: 30,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  multiLineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 20,
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0801c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  selectedRadioInnerCircle: {
    height: 3,
    width: 3,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  option: {
    fontSize: 14,
    paddingLeft: 5,
    color: 'white',
  },
  errorText: {
    color: '#e0801c',
    marginBottom: 10,
  },
});    