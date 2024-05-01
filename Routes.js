import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { Button } from "react-native-web";


const stack = createNativeStackNavigator();

export default function  Routes(){
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name = "Login" component={Login}/>
                <stack.Screen name = "Homepage" component={Homepage}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}