import {useState, useEffect} from 'react';
import { View, Text, Button,StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CockTailInfo({ navigation, route }) {
//   const { user } = route.params;
    const [ingredients, setIngredients] = useState(null);

    if(route.strIngredient1 && !ingredients){
        for (let i = 1; i <= 15; i++) {
            console.log('strIngredient[i]',route.data.strIngredient+[i]);
            // listResult.push(result.data.drinks);
            // if(i==11){
            //     setResultat(listResult);
            //     console.log(resultat);
            // }
            // setIngredients([...ingredients,strIngredient[i]])
        }
    }
    console.log('route',route.params.data)
    return (
        <View style={styles.container}>
            <View style={[{  width:'100%', height:'22%' },styles.centrer]}>
                <Image
                    style={styles.image}
                    source={{ uri:route.params.data.strDrinkThumb}}
                /> 
            </View>

                    <Text>{route.params.data.strInstructions}</Text>
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

export default CockTailInfo;