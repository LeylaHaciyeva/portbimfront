import React from 'react'
import './BimServices.css'
import BimThree from '../../components/three/BimThree'
import PageHeader from '../../components/header/pageheader/PageHeader'
import Viewer from '../../components/view/Viewer'
const BimServices = () => {

  return (
    <div>
      <PageHeader />
      {/* <BimThree /> */}
      <Viewer/>
    </div>
  )
}

export default BimServices