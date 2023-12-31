import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './SecondPage.css';
import DepartmentApp from '../components/Departments';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div className="data-grid-container">
      <DataGrid
        className="data-grid-root"
        rows={posts}
        columns={columns.map((col) => ({
          ...col,
          headerClassName: 'data-grid-header-cell',
        }))}
        
      />

      <div className="department-list-container">
       
        <DepartmentApp/>
      </div>
    </div>
  );
};

export default SecondPage;
