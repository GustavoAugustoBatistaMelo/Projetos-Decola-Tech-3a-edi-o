import React from "react";
import{View,Text,StyleSheet,SafeAreaView,StatusBar,Image,Pressable,Linking}from 'react-native'

const colorGithub = "#010409"
const colorFontGithub = "#41474b"
const imageProfileGithub ="https://avatars.githubusercontent.com/u/84642047?s=400&u=2c15c47ae1410aaff77f4cbddefa5b626776c56a&v=4"
const urlToMyGihub = "https://github.com/GustavoAugustoBatistaMelo"

const App = () =>{

    const handlePressGoToGithub = async () => {
        console.log('Verificando Link')
        const res = await Linking.canOpenURL(urlToMyGihub);
        
        if(res){
            console.log('Link aprovado');
            console.log("Abrindo Link...")
          await Linking.openURL(urlToMyGihub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="ligt-content"  />
            <View style={style.content}>
                    <Image source={{uri: imageProfileGithub}} style={style.avatar} accessibilityLabel="imagem do perfil"/>
                    <Text style={[style.defaultText,,style.name]}>Gustavo Batista</Text>
                    <Text style={[style.defaultText,,style.descricao]}>Estudandante Ciência da computação</Text>
                    <Pressable onPress={handlePressGoToGithub}>
                        <View style={style.Button}>
                            <Text style={[style.defaultText,style.textButton]} >Open in github</Text>
                        </View>
                    </Pressable>
                    
            </View>
          
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
container:{
    backgroundColor:colorGithub,
    flex:1,
    justifyContent:"center",
},
content:{
    alignItems:"center",
    padding: 20,

},
avatar:{
    height: 200,
    width: 200,
    borderRadius:100,
    borderColor:'white',
    borderWidth:2,
},
defaultText:{
    color:"white",
},
name:{
    fontWeight:'bold',
    fontSize:24,
},
descricao:{
    color:colorFontGithub,
},
Button:{
    marginTop:10,
    backgroundColor: colorFontGithub,
    borderRadius:10,
    padding: 20,
},
textButton:{
    fontWeight:'bold',
    fontSize:14,
},

});