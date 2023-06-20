import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

function Home({ navigation }) {
  // www.thecocktaildb.com/api/json/v1/1/random.php
  
  // useEffect( () => {
    

  // })
  const [ resultat, setResultat ] = useState();

  const listResult = [];
  // const randomApi = () => {
    if(!resultat){
      for (let i = 0; i <= 11; i++) {
        axios({
          method:'get',
          url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
        }).then(function(result) {
          console.log('result ',result.data);
          listResult.push(result.data.drinks);
          if(i==11){
            setResultat(listResult);
            console.log(resultat);
          }
          
          // console.log(result);
          // setResult(result.data);
        })
        
      }
      
      
    }
    
    // return resultat;
  // }
    
    
    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Text>Home Screen</Text>
          <Button
            title='Go to Details'
            onPress={() => {
              navigation.navigate('Favoris',{
                user: 'coucou'
              })
            }}
          /> */}
          
          {
            resultat ? 
              resultat.map((result, index) => {
                return(
                  // <View>
                  //   <Text>{result[0].strDrink}</Text>
                  //   <Image 
                  //     style={styles.image}
                  //     source={{uri: result[0].strDrinkThumb}}
                  //   />
                  // </View>

                  
                    // { (indexModulo % 2) == 0 ?
                    //   <Text>multiple 2</Text>
                    
                    // : <Text>non</Text>}
                    <View style={{flexDirection: 'row',}}>
                      <View style={styles.box} onStartShouldSetResponder={() => navigation.push('Cocktail', { data: result[0] })}>
                          <Image
                              style={styles.image}
                              source={{ uri: result[0].strDrinkThumb}}
                          />
                          <View style={{ alignItems:'center', justifyContent:'center', }}> 
                            {/* <Text>
                              Test
                            </Text> */}
                            <Text style={{ fontSize: 13, maxWidth: "90%", color: '#AA1803' }}>{result[0].strDrink}</Text>
                          </View>
                          


                      </View>
                    </View>


                  
                )
              
              
              
              })
              


              // (resultat.lenght = 12 ??
              //   <Text>Good</Text>
              //   )
              

            :
            <Text>
              En attente de la réponse de l'api
            </Text>
          }
          {/* </View> */}
          {/* <View style={{flexDirection: 'row',}}>
              <View style={styles.box}>
                  <Image
                      style={styles.image}
                      source={{ uri:'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg'}}
                  />
                  <View style={{ alignItems:'center', justifyContent:'center', }}>  */}
                    {/* <Text>
                      Test
                    </Text> */}
                    {/* <Text style={{ fontSize: 13, maxWidth: "90%", color: '#AA1803' }}>ceci est un exedmpshdqfbhjsdfvhjds </Text>
                  </View> */}
                  
          

              {/* </View>
              <View style={styles.box}> */}
                {/* <View style={{alignItems:'center', justifyContent:'center',}}>
                <Image
                    style={styles.image}
                    source={{ uri:'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg'}}
                />
                </View>
                
                <View></View> */}

              {/* </View>
            

          </View> */}
          {/* <View style={{flexDirection: 'row',}}>
            <View style={[styles.box]}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>

            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>

            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>


            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>


            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>

            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>


            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>


            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>
            <View style={{ backgroundColor:'#F1BAA1', width: '30%', height:120, marginLeft:'10%', marginRight:'10%', marginTop:'5%',marginBottom:'5%'}}>

            </View>

          </View> */}
          
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#F2F2F2',
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      // justifyContent: 'space-around',
      // backgroundColor: 'red'
  },
  // box: {
  //   backgroundColor:'#F1BAA1', 
  //   width: '30%', 
  //   height:120, 
  //   marginLeft:'10%', 
  //   marginRight:'10%', 
  //   marginTop:'5%',
  //   marginBottom:'5%', 
  //   borderRadius: 15
  // },
  box: {
    backgroundColor:'#F1BAA1', 
    width: '30%', 
    height:170, 
    marginLeft:'10%', 
    marginRight:'10%', 
    marginTop:'5%',
    marginBottom:'5%', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'rgba(170,24,3, .4)',
    // alignItems:'center',
    // justifyContent:'center',
    alignItems:'center', 
    justifyContent:'space-evenly', 
    flexDirection: 'column',
    zIndex: 5, // works on ios
    elevation: 5, // works on android
  },
  // extentionBox: {
  //   backgroundColor:'rgba(170,24,3, .4)', 
  //   width: 120, 
  //   height:120, 
  //   marginLeft:'10%', 
  //   marginRight:'10%', 
  //   marginTop:'5%',
  //   marginBottom:'5%', 
  //   borderRadius: 15,
  //   borderWidth: 1,
  //   borderColor:'rgba(170,24,3, .4)',
  //   // alignItems:'center',
  //   // justifyContent:'center',
  //   zIndex: 3, // works on ios
  //   elevation: 3, // works on android
  // },
  image:{
    width: 90,
    height: 90,
    // marginTop:50,
    // marginBottom:25,
    flex: 0,
    borderWidth: 1,
    borderColor:'rgba(170,24,3, .4)',
    borderRadius: 5,
    zIndex: 6, // works on ios
    elevation: 6, // works on android
  },
})
  

export default Home;