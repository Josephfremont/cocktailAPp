import * as React from 'react';
import { View, Text, Button,StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Account({ navigation, route }) {
//   const { user } = route.params;
  return (
    <View style={styles.container}>
        <View style={[{  width:'100%', height:'22%' },styles.centrer]}>
            <Image
                style={styles.image}
                source={{ uri:'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg'}}
            /> 
        </View>
        
        <View style={[{width:'100%',height:"5%", },styles.centrer]}>
            <Text style={{fontSize: 20, fontWeight: 'bold',}}>Sky3235</Text>
        </View>

        <View style={{width:'100%',height:"4%", justifyContent: 'space-evenly', alignItems:'center'  }}>

        </View>

        <View style={{width:'100%',height:"50%", justifyContent: 'space-evenly', alignItems:'center'  }}>
            <View style={styles.encadrement}>
                <Text style={{fontSize: 17,}}>Prénom</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold',}}>Bella</Text>
            </View>
            <View style={styles.encadrement}>
                <Text style={{fontSize: 17,}}>Nom</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold',}}>Fremont</Text>
            </View>
            <View style={styles.encadrement}>
                <Text style={{fontSize: 17,}}>Rôle</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold',}}>Admin</Text>
            </View>
            <View style={styles.encadrement}>
                <Text style={{fontSize: 17,}}>Ville</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold',}}>Lyon</Text>
            </View>
            <View style={styles.encadrement}>
                <Text style={{fontSize: 17,}}>code Postale</Text>
                <Text style={{fontSize: 17, fontWeight: 'bold',}}>69008</Text>
            </View>
            
            
        </View>

        <View style={{width:'100%',height:"29%", justifyContent: 'space-evenly', alignItems:'center'  }}>

        </View>

        
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'space-around',
        // backgroundColor: 'red'
    },
    image:{
        width: 150,
        height: 150,
        // marginTop:50,
        // marginBottom:25,
        flex: 0,
        borderWidth: 1,
        borderColor:'rgba(170,24,3, .4)',
        borderRadius: 100,
    },
    // colorText:{
    //     color:'#696969'
    // },
    centrer:{
        justifyContent:'center',
        alignItems:'center'
    },
    encadrement: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor:'#F1BAA1',
        padding: '2%',
        width: '80%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor:'rgba(170,24,3, .4)',
        //ombre
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Account;