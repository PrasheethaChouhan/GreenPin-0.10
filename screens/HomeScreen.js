import React from 'react';
import { StyleSheet, Dimensions, ScrollView, View , Text,Button,Image} from 'react-native';
import {  ListItem,  Icon } from 'react-native-elements'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import MyHeader from '../components/MyHeader';

//import { Card } from 'react-native-paper';
//import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class HomeScreen extends React.Component {
  render() {
    return (

      <View style={{flex:1,backgroundColor:"#8fab33"}}>
        <MyHeader title="GreenPin" Options={this.props.Options}/>
        <ScrollView>
     <Card style={{padding: 10,marginTop:50,backgroundColor:"#415136",color:"#82152b"}}
     isDark>
          
            <CardButton
            onPress={() => {this.props.navigation.navigate('PlantATree')}}>
            <CardImage style={{fontSize:20,color:"red",marginTop:50}}
           
           title ={"Upcoming Events"}
            source={require('../assets/plant.jpg')}
            />
            </CardButton>
          
 
   </Card>
   <View style={{flex:1,flexDirection: 'row', height:180,padding: 10,marginTop:10,backgroundColor:"#415136",color:"#82152b"}}>
   <ScrollView
        horizontal={true}
      >
      

            <Image
                   style={{ width: 100, height: 150 ,padding:10}}
                   source={{uri:products[0].image}}
                 
                />
                  <Image
                   style={{ width: 100, height: 150 }}
                   source={{uri:products[1].image}}
                 
                />
                  <Image
                   style={{ width: 100, height: 150 }}
                   source={{uri:products[2].image}}
                 
                />
                  <Image
                   style={{ width: 100, height: 150 }}
                   source={{uri:products[3].image}}
                 
                />
        
        
      
      </ScrollView>


   </View>

</ScrollView>












</View>
     
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
   
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    
  },
  products: {
    width: width - 50 * 2,
    paddingVertical:50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles:
  {
width:200,
height:200
  },
  shadow: {
    shadowColor: "#415136",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
