import Versions from '@renderer/components/Versions'
import DeviceInfo from '@renderer/views/DeviceInfo'
import Setting from '@renderer/views/Setting'
import React from 'react'
import { Route, Routes } from 'react-router'

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DeviceInfo />} />
      <Route path="/version" element={<Versions />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  )
}

export default RoutesComponent
