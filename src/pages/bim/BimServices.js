import React from 'react'
import './BimServices.css'
import BimThree from '../../components/three/BimThree'
import PageHeader from '../../components/header/pageheader/PageHeader'
import ForgeViewer from '../../components/view/ForgeViewer'
import FileUpload from '../../components/view/FileUpload'
const BimServices = () => {

  return (
    <div>
      <PageHeader />
      {/* <BimThree /> */}
      <div style={{marginTop:"300px"}}></div>
      <FileUpload/>
      {/* <ForgeViewer/> */}
      {/* <Viewer/> */}
    </div>
  )
}

export default BimServices