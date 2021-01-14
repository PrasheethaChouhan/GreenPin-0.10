import React, { Component  } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView,ScrollView, View , Text,TextInput,TouchableOpacity,Button,Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import MyHeader from '../components/MyHeader';

export default class PlantATree extends React.Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: '',
      isVisible : false,
      firstName : "",
      lastName : "",
      mobileNumber:"",
      address : "",
      confirmPassword : "",
    }
  }



    render() {
    //  const [date, setDate] = useState('09-10-2020');
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:"#8fab33"}}> 
        <MyHeader title="GreenPin" Options={this.props.Options}/>  
               
      <View style={styles.modalContainer}>
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text
            style={{justifyContent:'center', alignSelf:'center', fontSize:30,color:'white',margin:50}}
            >Plant A Tree</Text>
          <TextInput
            style={styles.formTextInput}
            placeholder ={"plant name"}
            placeholderTextColor="black" 
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                firstName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"plant type"}
            placeholderTextColor="black" 
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"event type"}
            placeholderTextColor="black" 
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                mobileNumber: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Address"}
            placeholderTextColor="black" 
            multiline = {true}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Location"}
            placeholderTextColor="black" 
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"Age"}
            placeholderTextColor="black" 
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"place holder"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                confirmPassword: text
              })
            }}
          />
         <DatePicker
          style={styles.datePickerStyle}
          //date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
        //  onDateChange={(date) => {
          //  setDate(date);
         // }}
        />











<View style={styles.modalBackButton}>
            <TouchableOpacity
              style={styles.registerButton}
          
            >
            <Text style={styles.registerButtonText}>click picture</Text>
            </TouchableOpacity>
            </View>

          <View style={styles.modalBackButton}>
            <TouchableOpacity
              style={styles.registerButton}
          //    onPress={()=>
           //     this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
           //   }
            >
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalBackButton}>
            <TouchableOpacity
           //   style={styles.cancelButton}
          //    onPress={()=>this.setState({"isVisible":false})}
            >
            <Text style={{color:'white'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
       </View>
      
      
      )
    }}

    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'black'
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      title :{
        fontSize:60,
        fontWeight:'300',
        // fontFamily:'AvenirNext-Heavy',
        color : 'green'
      },
      loginBox:{
        width: 300,
        height: 35,
        borderBottomWidth: 1.5,
        borderColor:'black',
        fontSize: 20,
        marginBottom:20,
        marginTop:5
    
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"blue",
        elevation:10
      },
      buttonContainer:{
        flex:1,
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },



      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#358856",
        marginRight:30,
        marginLeft : 30,
        marginTop:20,
        marginBottom:20,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'black',
        color:'white',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
       

      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
    })