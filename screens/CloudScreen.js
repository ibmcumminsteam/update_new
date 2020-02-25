import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, } from 'react-native';
import {Button} from 'react-native-elements' ;
import { Separator } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid"; 
import { Card } from 'react-native-elements';
import {AccordionList} from "accordion-collapse-react-native";
import { Container, Header, Content, Accordion } from "native-base";
import MyHeader from "./MyHeader";

export default class CloudScreen extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title:'Environment Profiles', 
  // })
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      isLoggedIn : true
    }
  }
  //https://api.myjson.com/bins/6esx8

  componentDidMount = () => {
    fetch('http://192.168.64.2//User_Project/menu.php',  {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        username: this.state.username,
    
        password: this.state.password,
    
        hostname: this.state.hostname,

        param:'env_prof'
    
      })
    
    }).then((response) => response.text())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
            console.log(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
  
  
}

_head(item){
  return(
      <Separator bordered style={{}}>
        <Text style={{textAlign:'left'}} >{item.name}</Text>
      </Separator>
  );
}

_body(item){
  return (
      <View style={{padding:15}}>
        <Text style={{textAlign:'left'}}>Application ID : {item.id}</Text>
        <Text style={{textAlign:'left'}}>Storage Reserved : {item.productid}</Text>
        {/* <Text style={{textAlign:'center'}}>Memory Reserved : {item.memory_reserved}</Text>
        <Text style={{textAlign:'center'}}>Current Message : {item.currentmessage}</Text> */}

      </View>
  );
}
 
  render() {

 
    var list = []; 
    list = this.state.data;
    var dataArray = [] ;
    // console.log(typeof(list));
    var new_arr = [];
    new_arr = list[0].licenses_limits;
    console.log(new_arr);

    
    
    // var new_arr=[];
    // for(i=0;i<list[0].licenses_limits.length;i++){
    //     new_arr.push(list[0].licenses_limits[i]);
    // }

    let {isLoggedIn} = this.state;
    let getData = false ;
    let name ;
    let i = 1 ;
    const renderPattern = (app_name )=>{
      getData = true ;
      name = app_name ;
      alert(name.app_name)
      
    }

    return (
        
      <View style={{paddingBottom:300}}>
        <MyHeader/>
        <Text style={{ fontSize: 25, backgroundColor: '#F0F0F0',}}>Environment Profiles</Text>
      
<Text style={{ fontSize: 20,margin:20}}>Data for: {list[0].name}</Text>
<ScrollView style={{marginLeft:20,marginRight:20,marginTop:20,alignSelf:'flex-end' }}>

{/*     
{list.map(list =>  */}


{/* <Text>{list[0].storage_reserved}</Text> */}



<AccordionList
            list={new_arr}
            header={this._head}
            body={this._body}
        />






{/* <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
          /> */}

{/* )} */}

</ScrollView>

      </View>
    )
      }

  }
 
const styles = StyleSheet.create({
  
  
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  //   marginLeft: 2
  // },
});

