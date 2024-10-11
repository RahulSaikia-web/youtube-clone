import React from 'react'
import '../CSS/Home.css'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

function Home() {
  return (
    <>
    <Sidebar/>
    <div className="container">
        <Feed/>
    </div>
    </>
  )
}

export default Home