import React, {useState} from 'react'
import './BimServices.css'
import BimThree from '../../components/three/BimThree'
import PageHeader from '../../components/header/pageheader/PageHeader'
import ForgeViewer from '../../components/view/ForgeViewer'
import FileUpload from '../../components/view/FileUpload'
import IFCViewer from '../../components/view/IFCViewer'
const BimServices = () => {
  // const [ifcData, setIfcData] = useState('');
  return (
    <div>
      <PageHeader />
      {/* <BimThree /> */}
      <div style={{marginTop:"300px"}}></div>
      {/* <FileUpload onFileLoad={setIfcData} /> */}
      {/* <IFCViewer /> */}
      <BimThree/>
      {/* <Viewer/> */}
    </div>
  )
}

export default BimServices