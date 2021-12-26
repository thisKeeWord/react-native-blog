import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const BlogPostForm = ({ mode, initialBlogValues = { title: '', content: '' }, onSubmit }) => {
  const [blog, setBlog] = useState(initialBlogValues)
  const isEditMode = mode === 'edit'

  return (
    <View>
      <Text style={styles.label}>Enter {isEditMode && 'New '}Title:</Text>
      <TextInput
        style={styles.input}
        value={blog.title}
        onChangeText={(text) => setBlog({ ...blog, title: text })}
      />
      <Text style={styles.label}>Enter {isEditMode && 'New '}Content:</Text>
      <TextInput
        style={styles.input}
        value={blog.content}
        onChangeText={(text) => setBlog({ ...blog, content: text })}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(blog)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
})

export default BlogPostForm
