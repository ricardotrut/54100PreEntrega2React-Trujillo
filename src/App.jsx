import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import Category from './components/Category'
import './App.css'
import ProductoDetalle from './components/ProductoDetalle'


function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
              <Route exact path='/' element = {<Layout/>}>
              <Route index element = {<Home/>}/>
              <Route path="/category/:category" element = {<Category/>}/>
              <Route path="/producto/:id" element = {<ProductoDetalle/>}/>
              <Route path='*' element = {<NoPage/>}/> 
          </Route>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
