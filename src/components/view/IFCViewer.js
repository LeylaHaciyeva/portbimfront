// import React, { useState, useRef, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { IFCLoader } from 'web-ifc-three';

// const IFCModel = ({ file }) => {
//   const ref = useRef();

//   useEffect(() => {
//     if (!file) return;

//     const loader = new IFCLoader();
//     const reader = new FileReader();

//     reader.onload = () => {
//       const ifcData = reader.result;
//       loader.parse(ifcData, (model) => {
//         if (ref.current) {
//           ref.current.clear(); // Clear any previous models
//           ref.current.add(model);
//         }
//       }, (error) => {
//         console.error('Error parsing IFC model:', error);
//       });
//     };

//     reader.readAsArrayBuffer(file);

//     return () => {
//       if (ref.current) {
//         ref.current.clear();
//       }
//     };
//   }, [file]);

//   return <group ref={ref} />;
// };

// const IFCViewer = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".ifc" onChange={handleFileChange} />
//       <Canvas style={{ height: '500px', width: '100%' }}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls />
//         <IFCModel file={file} />
//       </Canvas>
//     </div>
//   );
// };

// export default IFCViewer;



// IFCViewer.js
import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { IFCLoader } from 'web-ifc-three';
import * as THREE from 'three';
import FileUpload from './FileUpload';

const IFCModel = ({ fileUrl }) => {
  const ref = useRef();

  useEffect(() => {
    if (!fileUrl) return;

    const loader = new IFCLoader();
    loader.load(
      fileUrl,
      (model) => {
        if (ref.current) {
          ref.current.clear(); // Clear previous models
          ref.current.add(model);
        }
      },
      undefined,
      (error) => {
        console.error('Error loading IFC model:', error);
      }
    );
  }, [fileUrl]);

  return <group ref={ref} />;
};

const IFCViewer = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const handleUploadSuccess = (filePath) => {    
    setFileUrl(`http://localhost:8081/${filePath}`);
  };

  return (
    <div>
      <FileUpload onUploadSuccess={handleUploadSuccess} />
      <Canvas style={{ height: '500px', width: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <IFCModel fileUrl={fileUrl} />
      </Canvas>
    </div>
  );
};

export default IFCViewer;
