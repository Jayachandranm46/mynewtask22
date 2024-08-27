// SignupScreen.js

import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from 'react-redux';
import { Signupdata } from '../store/Signupslice';
const SignupScreen = ({navigation}) => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const toast = useToast();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validemail,setValidemail]=useState('')
  const [validpassword,setValidpassword]=useState('')
  const dispatch=useDispatch()

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
   if(email&&password&&confirmPassword&&firstname&&lastname){


    
      dispatch(Signupdata({
        email:email,
        password:password
    }))
    toast.show("Signup scuessfully");
    navigation.navigate('Login')
  }
  
   else{
    toast.show("Please fill in the required fields", {
        type: "sucess", 
        placement: "bottom",
        duration: 4000,
        animationType: "slide",
        style: {
          backgroundColor: '#f44336', 
          borderRadius: 10, 
          padding: 15, 
        },
        textStyle: {
          color: '#fff', 
          fontWeight: 'bold', 
        }
      });
    }
   }

  
const verifyemail=()=>{
  const returntype=validateEmail(email)
  if(returntype){
    setValidemail('')
    passwordRef.current.focus()
  }
  else{
    setValidemail('Please enter a valid email address')
  }
  
}

const verifypassword=()=>{
  if(password!=confirmPassword){
    setValidpassword('Passwords do not match.')
     
  }
  else{
    setValidpassword('')
  }

}
  

  return (
    <View style={styles.container}>

        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>Sign UP</Text>
        </View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        ref={firstnameRef}
        onChangeText={setFirstname}
        value={firstname}
        returnKeyType="next"  
        onSubmitEditing={() => lastnameRef.current.focus()} 
        placeholderTextColor={'gray'}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        ref={lastnameRef}
        onChangeText={setLastname}
        value={lastname}
        returnKeyType="next"
        onSubmitEditing={() =>emailRef.current.focus()}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        ref={emailRef}
        onChangeText={setEmail}
        value={email}
        // keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => verifyemail()}
      />
      {
        validemail?(
          <Text style={{color:'red',fontSize:15,fontWeight:'bold'}}>{validemail}</Text>
        ):null
      }

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        ref={passwordRef}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        returnKeyType="next"
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        ref={confirmPasswordRef}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        returnKeyType="done"  
        onSubmitEditing={()=>verifypassword()}  
      />
        {
        validpassword?(
          <Text style={{color:'red',fontSize:15,fontWeight:'bold'}}>{validpassword}</Text>
        ):null
      }

<TouchableOpacity style={styles.loginbtn}
                onPress={()=>handleSubmit()}
                >
                  <Text style={styles.logintxt}>Login</Text>
                </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    marginTop:50
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
     color:'#05A845'
  },
  input: {
    height: 40,
    borderColor: '#05A845',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:10,
    color:'#000',
    fontSize:17,
  },
  loginbtn:{
    width:343,
    height:43,
    // borderWidth:1,
    marginTop:9,
    borderRadius:16,
    backgroundColor:'#05A845',
    justifyContent:'center',
    alignItems:'center'
},
logintxt:{
    fontSize:16,
    color:'#FFFFFF',
    marginLeft:20

},
  
});

export default SignupScreen;
