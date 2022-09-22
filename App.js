
import React from "react";
import { StyleSheet, View, Text, Image, Button, Alert} from 'react-native'

import RazorpayCheckout from "react-native-razorpay";


function App (){
  const handlePayment = () => {
    var options = {
      name : 'DRAGON',
      description : "for test payment",
      currency : 'INR',
      amount : 50000,
      key : 'rzp_test_TWMzsq5tm2TfOL',
      prefills :{
        email : 'boz@gmail.com',
        contact : '0987654321',
        name : 'tester',
      },
      theme : {color : 'blue'}
    }
    RazorpayCheckout.open(options).then((data) => {
      console.log("data", data)
Alert.alert('success');
    })
    .catch((error) => {
Alert.alert('Error : ${error.code} | ${error.description')
    })
  }
  return(
    <View style = { styles.container}>
      
      <Image style = { styles.imagestyle } source = { require("./assets/GOT.jpg")} />
      <Text style = { styles.textstyle }> DRAGONS </Text>
      <Text style = { styles.textstyle }> RS.500 </Text>
      <View>
        <Button style = { styles.buttonstyle } title = "BUY"
        onPress = { () => handlePayment()}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  imagestyle : {
    width : 200,
    height : 200,
    resizeMode : 'contain',
  },
  textstyle : {
    fontSize : 25,
    fontWeight : '900',
  },
  buttonstyle : {
    width :200
  }
})

export default App;
