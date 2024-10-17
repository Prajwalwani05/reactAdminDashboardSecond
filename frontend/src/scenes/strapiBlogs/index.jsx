import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomSeparator from '../../components/Header';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import MainContent from './card';

const StrapiBlogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const strapiUrl = "http://localhost:1337";
  const apiUrl = process.env.REACT_APP_API_URL;
  const strapiUrl = process.env.REACT_APP_STRAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${strapiUrl}/api/blogs?populate=*`);
        console.log("API Response from Strapi:", response.data);
        
        // Set data from Strapi
        const fetchedData = response.data.data;
        setData(fetchedData);
        localStorage.setItem('Blogs_Data', JSON.stringify(fetchedData));
        const existingResponse = await axios.get(`${apiUrl}/blogs`);
        const existingBlogs = existingResponse.data;
        // Prepare data for saving to backend
        const blogsToSave = fetchedData
        .filter((blog) => {
          // Check if the blog title already exists in the existing blogs
          const titleExists = existingBlogs.some(existingBlog => existingBlog.blogTitle === blog.blogTitle);
          return !titleExists; // Only include blogs that do not have a duplicate title
        })
        .map((blog) => ({
          blogTitle: blog.blogTitle,
          blogContent: blog.blogContent,
          author: blog.author,
          coverImageUrl: blog.coverImage.url // Adjust this if needed
        }));
  
        // Save to backend one blog at a time
        for (const blog of blogsToSave) {
          if (blog.blogTitle && blog.blogContent && blog.author && blog.coverImageUrl) {
            try {
              const saveResponse = await axios.post(`${apiUrl}/blogs`, blog);
              console.log('Blog saved:', saveResponse.data);
              
            } catch (error) {
              console.error("Error saving blog:", error); // More specific error logging
            }
          } else {
            console.warn("Missing required blog fields, skipping:", blog);
          }
        }
      } catch (error) {
        console.error("Error fetching or saving data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []); // Dependencies array for useEffect
  
  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box m="10px">
      <CustomSeparator pageName={"Blogs"} IconComponent={ImageIcon} />
      {
        data.length > 0 && data.map((blog) => (
          <Box key={blog.id} mb={2}>
            {/* <Typography variant="h6">
              Title:  {blog.blogTitle}
            </Typography>
            Description: 
            {blog.blogContent.map((paragraph, index) => (
              <Typography key={index} paragraph>
                {paragraph.children.map((child, childIndex) => (
                  <span key={childIndex}>
                    {child.text}
                  </span>
                ))}
              </Typography>
            ))}
            <Typography variant="subtitle1" color="textSecondary">
              Author:  {blog.author}
            </Typography>
            <img src={`${strapiUrl}${blog.coverImage.url}`} alt='blogImage' width='150' />
            <Divider /> */}
            <MainContent blogImg={`${strapiUrl}${blog.coverImage.url}`} blogTitle={blog.blogTitle} blogContent={blog.blogContent} blogAuthor={blog.author} />
          </Box>
        ))
      }
    </Box>
  );
};

export default StrapiBlogs;
