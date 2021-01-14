import React, { Component } from 'react';
import { CheckBox, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

//import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class MaintanenceScreen extends React.Component{
  
   App = () => {
    const [isSelected, setSelection] = useState(false);}

  render(){
  return (
    <View style={styles.horizontal}>
    <Text style={{marginTop:5,alignItems:"center"}}>Annual Progress</Text>
    <Text style={{marginLeft:80}}>Year1</Text>
    <View style={{marginTop:15}}>
    <AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={60}
    backgroundColor={'green'}
/>
</View>
<View style={{marginTop:45}}>
<Text style={{marginLeft:80}}>Year2</Text>
<AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={60}
    backgroundColor={'green'}
/>
</View>
<View style={{marginTop:80}}>
<Text style={{marginLeft:80}}>Year3</Text>
<AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={60}
    backgroundColor={'green'}
/>
</View>
<View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View>
</View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop:70,
    marginLeft:100
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});