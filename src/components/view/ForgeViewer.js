// import React, { useEffect, useRef } from 'react';

// const ForgeViewer = ({ urn,accessToken }) => {
//     const viewerRef = useRef(null);

//     useEffect(() => {
//         if (window.Autodesk) {
//             const options = {
//                 env: 'AutodeskProduction',
//                 accessToken: accessToken
//             };

//             Autodesk.Viewing.Initializer(options, () => {
//                 const viewer = new Autodesk.Viewing.GuiViewer3D(viewerRef.current);
//                 Autodesk.Viewing.Document.load(
//                     `urn:${urn}`,
//                     (doc) => {
//                         const viewable = doc.getRoot().getDefaultGeometry();
//                         viewer.loadDocumentNode(doc, viewable);
//                     },
//                     (error) => console.error('Error loading document:', error)
//                 );
//             });
//         }
//     }, [urn]);

//     return <div ref={viewerRef} style={{ width: '100%', height: '600px' }}></div>;
// };

// export default ForgeViewer;