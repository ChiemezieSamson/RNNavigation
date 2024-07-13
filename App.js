import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CourseListscreen from "./screens/CourseListscreen"
import ProfileScreen from "./screens/ProfileScreen"
import SettingScreen from "./screens/SettingScreen"
import Ionicons from "@expo/vector-icons/Ionicons"
import { AboutStack } from "./AppStack"

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "pink"
      }}>
        <Tab.Screen name="Course List" component={CourseListscreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          title: "My Profile",
          tabBarIcon: ({color}) => (<Ionicons name="person" size={20} color={color}/>),
          tabBarBadge: 3,
        }}/>
        <Tab.Screen name="Settings" component={SettingScreen}/>
        <Tab.Screen name="About Stack" component={AboutStack} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App