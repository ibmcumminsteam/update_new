import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    BackHandler,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
// import { Button } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import {NavigationActions} from 'react-navigation';

class Login extends Component {
   
    state={

        name:'',
        pass: '',
        host: '',
    

    }
    onLoginPress=()=>{

        if(this.state.name=='Swanand' || this.state.name=='swanand' && this.state.pass == 'L0ngl1vecps' && this.state.host == '10.76.125.214'){
            this.props.navigation.navigate('Screen1');
        }
      else{
          return(<>{alert("Please enter valid credentials")}</>)
      }
    }


    render() {
        
        return (
          <>
           

                      <View>
                      <Image 
                      source={require('./assets/images/login_icon.png')} 
                      style ={{alignSelf:'center',height:100,width:250,marginLeft:600, marginTop:100, marginRight:600 }}/>
                      <Text 
                        style={{fontSize: 27, paddingBottom: 40, textAlign: 'center', marginTop: 50,}}>
                        Login page
                      </Text>
          
                      <TextInput 
                      placeholder='Username' 
                      style={styles.input}
                      value={this.state.name}
                      onChangeText={(name) => this.setState({name})}



                      />

                      <TextInput 
                      placeholder='Password' 
                      style={styles.input}
                      value={this.state.pass}
                      secureTextEntry={true}
                      onChangeText={(pass) => this.setState({pass})}



                      />
                      <TextInput 
                      placeholder='Hostname' 
                      style={styles.input}
                      value={this.state.host}
                      onChangeText={(host) => this.setState({host})}



                      />
                      <View style={{margin:7}} />

                      <View style={{paddingTop:50, height : 100, width: 200, alignSelf: 'center'}}>

                      <Button 
                            
                            // onPress={()=>  this.props.navigation.navigate('Screen1')}
                            onPress ={this.onLoginPress}
                            title="Submit"

                            style={styles.button_style}
                            
                          />
                          </View>
                      {/* <View style={{paddingTop:50, height : 100, width: 200, alignSelf: 'center'}}>
                      <Button 
                      //   onPress={this.props.onLoginPress}
                      // {...this.props.navigation.navigate('Screen1')}
                      // onPress={}
                      title="Exit"
                      onPress={() => BackHandler.exitApp()}


                      />
                      </View> */}

                      </View>
                    

              
                  </>
            )
    }

    // showDetails(){

    //     this.props.navigation.navigate('Screen1')
    // }




}

const styles = StyleSheet.create({
    input: {
    borderWidth :1,
    borderColor :'black', 
    padding: 10,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    

    },
    button_style: {

       marginLeft:  50,
       width : 200,
       height: 44, 
       marginBottom: 200,
       paddingBottom: 100
        

    },
    // container: {
    //   flex: 1,
    //   width: null,
    //   height: null,
    //   resizeMode: 'cover',
    //   // backgroundColor: 'rgba(255,0,0,.6)',
    //   opacity: 0.9
    // }
  });
console.disableYellowBox = true;
export default withNavigation(Login);


