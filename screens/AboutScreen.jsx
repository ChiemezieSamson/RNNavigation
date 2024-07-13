import React, { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({navigation, route}) => {
  const {name} = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name
    })
  }, [navigation, name])
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
      <Button title='Update the name' onPress={() => navigation.setParams({name: "Lisa"})} />
      <Button title='Go back with data' onPress={() => navigation.navigate("Home", {result: "Data from about"})} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  }
})

export default AboutScreen
