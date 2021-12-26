import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm
      onSubmit={(blog) => addBlogPost(blog.title, blog.content, () => navigation.navigate('Index'))}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
