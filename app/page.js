"use client"
import Header from '@/Components/Header'
import Section from '@/Components/Section'
import React, { useState } from 'react'
// Header
// useState
// Section

// This is our main root or parent element page.js
const page = () => {
  const [login, setLogin] = useState('Login');
  return (
    <>
   
    <Header  login={login}/>
    <h1>Main Landing Page</h1>
    <Section />
    
    </>
  )
}

export default page