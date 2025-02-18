import Versions from '@renderer/components/Versions'
import DeviceInfo from '@renderer/views/DeviceInfo'
import React from 'react'
import { Route, Routes } from 'react-router'

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DeviceInfo />} />
      <Route path="/version" element={<Versions />} />
    </Routes>
  )
}

export default RoutesComponent
