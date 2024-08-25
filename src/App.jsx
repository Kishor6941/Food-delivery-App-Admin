import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import {Route, Routes} from "react-router-dom"
import AddItem from './pages/Add/AddItem'
import ListItem from './pages/List/ListItem'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem/>} />
          <Route path='/list' element={<ListItem/>} />
          <Route path='/orders' element={<Order/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App