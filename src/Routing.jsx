import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CountryPage from './Component/Country/CountryPage'
import Error from './Component/Country/Error'
import Header from './Component/Header/Header'
import MainLayout from './Component/MainLayout/MainLayout'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<MainLayout/>}/>                   
                    <Route path="/:id" element={<CountryPage/>}/>                  
                    <Route path="/404" element={<Error/>}/>                  
                </Route>
            </Routes>
        </div>
    )
}

export default Routing