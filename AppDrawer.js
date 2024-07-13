import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import DashboardScreen from "./screens/DashBoardScreen"
import SettingScreen from "./screens/SettingScreen"

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} 
          options={{
            title: "My Dashboard",
            drawerLabel: "DashBoard",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef"
            }
          }}
        />
        <Drawer.Screen name="Settings" component={SettingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
