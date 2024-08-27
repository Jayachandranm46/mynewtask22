import React, { useEffect, useState ,useRef} from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
const LoginScreen=({navigation})=>{
    const data= useSelector(state => state.signdata.Signupitem);
    // console.log('userdata--->',userdata)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const toast = useToast();
    useEffect(()=>{
        
        console.log('data------>',data)
        
    },[password,email])

    const verification=()=>{
        if(data.length>0){
            console.log('serdata.email-->',data[0].email,'------->',email)
            if(data[0].email==email && data[0].password==password){
                toast.show("Login success", {
                    type: "success", 
                    placement: "bottom",
                    duration: 4000,
                    animationType: "slide",
                    style: {
                      backgroundColor: 'green', 
                      borderRadius: 10, 
                      padding: 15, 
                    },
                    textStyle: {
                      color: '#fff', 
                      fontWeight: 'bold', 
                    }
                  });
                navigation.navigate('Bottom')
    
            }
            else{
                toast.show("Login Failed", {
                    type: "danger",
                    placement: "bottom",
                    duration: 4000,
                    animationType: "slide",
                    style: {
                      backgroundColor: '#f44336', 
                      borderRadius: 10, 
                    },
                    textStyle: {
                      color: '#fff', 
                      fontWeight: 'bold', 
                    }
                  });
              
            }

        }
        else{

        toast.show("invalid user please signup", {
            type: "danger", 
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
    const signup=()=>{
        setEmail('')
        setPassword('')
        navigation.navigate('SignUp')
    }


   
        
    
    
    return(
        <View style={style.container}>
            {/* header box */}
            <View>
                <ImageBackground
                source={require('.../../../assets/Rectangle24.png')}
                style={{
                    width:'100%',
                    height:215,  
                    justifyContent:'center',
                    alignItems:'center'         
                }}
                >
                    
                    <Image 
                    source={require('.../../../assets/Group38.png')}
                    
                    style={{
                        color:'#FFFFFF',
                        width:59.48,
                        height:86
                        
                    }}
                    />
                    </ImageBackground>

            </View>
            {/* login text */}
            <View style={style.logintext}>
              <Text style={{
               fontSize:25,
                color:'#000000',
                fontWeight:'bold'
            
                
                
                }}>Log In</Text>
            </View>

            {/* Textbox */}
            <View style={style.textbox}>
                <View>
                   <TextInput
                   style={style.textinbut}
                   placeholder="Email"
                   value={email}
                   onChangeText={setEmail}
                  placeholderTextColor={'#000'}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  ref={emailRef}
                   />
                </View>
                <View>
                <TextInput
                style={style.textinbut}
                placeholder="PassWord"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                placeholderTextColor={'#000'}
                ref={passwordRef}
                

                />
                </View>

                {/* login btn */}

                <TouchableOpacity style={style.loginbtn}
                onPress={()=>verification()}
                >
                  <Text style={style.logintxt}>Login</Text>
                </TouchableOpacity>

                {/* forgot password */}
               
                    <TouchableOpacity style={{
                        marginTop:10
                    }}>
                       <Text style={{
                        fontWeight:400,
                        fontSize:17

                       }}>forget password?</Text>
                    </TouchableOpacity>
            
                
            </View>

            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{color:'#191919',fontSize:20,fontWeight:900}}>Or</Text>
            </View>

            {/* or another login */}
            <View style={style.anotherlogin}>
            <TouchableOpacity style={style.google}>

            <Image
                source={require('.../../../assets/googleimg.png')}
                style={{
                  width:
                  25,
                  height:
                  27,
                  backgroundColor:'#FFFFFF',
                }}
                />
                
              
                  <Text style={[style.logintxt,{color:'#191919'}]}>Log in with Google</Text>
              
                </TouchableOpacity>
            <TouchableOpacity style={style.google}>
                <View>
            <Image
                source={require('.../../../assets/facebookimg.png')}
                style={{
                  width:
                  25,
                  height:
                  25,
                  backgroundColor:'#FFFFFF'
                }}
                /></View>
                <View>
                  <Text style={[style.logintxt,{color:'#191919'}]}>Log in with Facebook</Text></View>
                </TouchableOpacity>

            </View>

            {/* last */}
            <View style={{justifyContent:'center',alignItems:'center',marginTop:110,display:'flex',flexDirection:'row'}}>
                <Text style={{fontSize:16,color:'#05A845'}}>Don’t have an account?</Text>
                <TouchableOpacity onPress={(()=>signup())}>
                    <Text style={{fontSize:18,color:'#05A845'}}> Sign Up</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}
export default LoginScreen;

const style=StyleSheet.create(
    {
        container:{
            flex:1
        },
        headerbox:{
            width:'100%',
            height:215,
            backgroundColor:'#05A845'
        },
        logintext:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:10
        },
        textbox:{
        justifyContent:'center',
        alignItems:'center'
        },
        textinbut:{
          width:343,
          height:43,
          borderWidth:1,
          marginTop:9,
          borderRadius:16,
          paddingLeft:20,
          fontSize:20,
          backgroundColor:'#F6FFFA',
          color:'#000'
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
            marginLeft:20,
            fontWeight:'bold',
    
        },
        google:{
            width:343,
            height:43,
            borderWidth:1,
            marginTop:9,
            borderRadius:16,
            backgroundColor:'#FFFFFF',
        borderColor:'#05A845',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
        },
        anotherlogin:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
        
        }

    }
)