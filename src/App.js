import React from 'react';
// import logo from './logo.svg';
import { Pagination } from 'antd';
import './App.css';
import Form from './Components/Form.jsx';
import CommentList from './Components/CommentList.jsx';
import Comment from './Components/Comment.jsx';
import MenuPage from './Menu.jsx';
import ItemList from './List.jsx';

function App() {
  return (
    <div className="App">
      <MenuPage />
      <div className="main">
        <Form />
        <ItemList />
        <Comment />
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
}

export default App;
