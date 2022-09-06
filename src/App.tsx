import React, { FC } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Overview from './pages/Overview';
import Pages from './pages/Pages';
import Sidebar from './components/Sidebar';
import Posts from './pages/Posts';
import Media from './pages/Media';
import Products from './pages/Products';
import AddNew from './pages/AddNew';
import Category from './pages/Category';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Home from './pages/Home';
import Physical from './pages/Physical';
import Digital from './pages/Digital';
import Variable from './pages/Variable';
import Collections from './pages/Collections';
import Tags from './pages/Tags';

const App: FC = () => {
    return (
        <BrowserRouter>
        <Sidebar />
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/overview/pages" element={<Pages />} />
              <Route path="/overview/posts" element={<Posts />} />
              <Route path="/media" element={<Media/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/products/collections" element={<Collections/>} />
              <Route path="/products/tags" element={<Tags/>} />
              <Route path="/products/add-new" element={<AddNew/>} />
              <Route path="/products/category" element={<Category/>} />
              <Route path="/products/category/physical" element={<Physical/>} />
              <Route path="/products/category/digital" element={<Digital/>} />
              <Route path="/products/category/variable" element={<Variable/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/orders" element={<Orders/>} />
            </Routes>
          </BrowserRouter>
    );
};

export default App;