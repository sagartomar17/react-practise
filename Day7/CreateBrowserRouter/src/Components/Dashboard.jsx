import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      Welcome to Dashboard page
      <Outlet/>

    </div>
  )
}

export default Dashboard

// outlet lgana isliye jruri hai firr iske children nhi dikhne k