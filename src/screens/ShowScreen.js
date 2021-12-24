import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  }
})

export default ShowScreen
