import React, { useContext } from 'react'
import { StyleSheet, Button } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state, editBlogPost } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <BlogPostForm
      mode="edit"
      initialBlogValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(blog) => editBlogPost(id, blog.title, blog.content, () => navigation.pop())}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
