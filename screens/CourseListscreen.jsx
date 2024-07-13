import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const CourseListscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListscreen</Text>
    </View>
  )
}

export default CourseListscreen


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
})