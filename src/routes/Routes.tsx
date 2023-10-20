import React from "react"   
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParams } from "../types"; 
import Home from "../views/Home";
import Detail from "../views/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();
const routesScreenDefaultOptions = {
    headerStyle: {
       backgroundColor: 'rgba(7, 26, 93, 255)',
       color: 'white'
    },
    headerTitleStyle: {
      color: 'white',
    },
}


const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={routesScreenDefaultOptions}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={routesScreenDefaultOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default Routes;