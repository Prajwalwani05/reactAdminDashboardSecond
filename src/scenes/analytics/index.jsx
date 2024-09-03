// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomSeparator from '../../components/Header';
import { Box } from '@mui/material';

const Analytics = () => {
  const [traders, setTraders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/traders');
        setTraders(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m="10px">
      <CustomSeparator pageName={"Analytics"} />
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Join Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {traders.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.joinDate}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Analytics;
