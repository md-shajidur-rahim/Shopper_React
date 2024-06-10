import React from 'react';
import './Admin.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

// Component Admin
const Admin = () => {
    return (
        <div className='admin'>

            {/* Rendering the sidebar navigation */} 
            <Sidebar/>

            {/* Setting Routes for Admin Panel*/}
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/listproduct' element={<ListProduct/>}/>
            </Routes>
        </div>
    )
} 

export default Admin;