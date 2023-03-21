import React from 'react'
import {Routes , Route } from 'react-router-dom'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Question/DisplayQuestion'
import Questions from './pages/Question/Questions'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Auth' Component={Auth}/>
        <Route path='/Questions' Component={Questions}/>
        <Route path='/AskQuestion' Component={AskQuestion}/>
        <Route path='/Questions/:id' Component={DisplayQuestion}/>
    </Routes>
  )
}

export default AllRoutes