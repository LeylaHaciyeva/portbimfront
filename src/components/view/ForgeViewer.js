// // // // // // src/ForgeViewer.js
// // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // import axios from 'axios';

// // // // // const ForgeViewer = () => {
// // // // //     const [urn, setUrn] = useState('');
// // // // //     const viewerDiv = useRef(null);
// // // // //         useEffect(() => {
// // // // //             const loadViewer = async () => {
// // // // //                 // Fetch access token
// // // // //                 const accessTokenResponse = await axios.get('http://localhost:8080/api/forge/token');
// // // // //                 const accessToken = accessTokenResponse.data.access_token;
// // // // //                     console.log(accessToken);

// // // // //                 // Fetch the URN
// // // // //                 // const urnResponse = await axios.get('http://localhost:8080/api/forge/urn');
// // // // //                 // setUrn("dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cmVhY3Qtdi9kd2cuZHdn");
// // // // //                 // Initialize Forge Viewer
// // // // //                 const Autodesk = window.Autodesk;
// // // // //                 Autodesk.Viewing.Initializer({ env: 'AutodeskProduction', accessToken }, () => {
// // // // //                     const viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
// // // // //                     Autodesk.Viewing.Document.load(
// // // // //                         `urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cmVhY3Qtdi9kd2cuZHdn`,
// // // // //                         doc => {
// // // // //                             const viewable = doc.getRoot().getDefaultGeometry();
// // // // //                             viewer.loadDocumentNode(doc, viewable);
// // // // //                         },
// // // // //                         error => console.error('Error loading Forge model:', error)
// // // // //                     );
// // // // //                 });

// // // // //             };
// // // // //             loadViewer();
// // // // //     }, []);

// // // // //     return <div id='viewer' ref={viewerDiv} style={{ width: '100%', height: '100vh' }}></div>;
// // // // // };
// // // // // export default ForgeViewer;

// // // // import React, { useEffect } from 'react';
// // // // import axios from 'axios';

// // // // // import Autodesk from 'autodesk-forge-viewer';
// // // // function ForgeViewer({ urn }) {
// // // //     useEffect(() => {

// // // //         const initializeViewer = async () => {
// // // //             const accessTokenResponse = await axios.get('http://localhost:8080/api/forge/token');
// // // //             const accessToken = accessTokenResponse.data.access_token;
// // // //             console.log(accessToken);

// // // //             const Autodesk = window.Autodesk
// // // //             Autodesk.Viewing.Initializer({ accessToken: "" }, () => {
// // // //                 const viewerDiv = document.getElementById('viewer');
// // // //                 const viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv);

// // // //                 Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
// // // //                     const viewable = doc.getRoot().getDefaultGeometry();
// // // //                     viewer.loadDocumentNode(doc, viewable);
// // // //                 }, (error) => {
// // // //                     console.error('Failed to load document', error);
// // // //                 });
// // // //             });
// // // //         };

// // // //         initializeViewer();
// // // //     }, [urn]);

// // // //     return (
// // // //         <div>
// // // //             <div id="viewer" style={{ width: '100%', height: '600px' }}></div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default ForgeViewer;


// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // const ForgeViewer = ({myUrn}) => {
// // // //     const [token, setToken] = useState('');
// // // //     const [viewerReady, setViewerReady] = useState(false);

// // // //     const getToken = async () => {
// // // //         try {
// // // //             const response = await axios.get('http://localhost:8080/api/forge/token');
// // // //             setToken(response.data.access_token);
// // // //             console.log(token);


// // // //         } catch (error) {
// // // //             console.error('Error fetching token:', error);
// // // //         }
// // // //     };

// // // //     const initializeViewer = () => {
// // // //         console.log("initial///");

// // // //         let Autodesk = window.Autodesk
// // // //         if (window.Autodesk && window.Autodesk.Viewing && token) {
// // // //             const viewerDiv = document.getElementById('viewer');
// // // //             Autodesk.Viewing.Initializer({ accessToken: token }, () => {
// // // //                 const viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv);
// // // //                 Autodesk.Viewing.Document.load(`urn:dW5kZWZpbmVk`, (doc) => {
// // // //                     const viewable = doc.getRoot().getDefaultGeometry();
// // // //                     viewer.loadDocumentNode(doc, viewable);
// // // //                 }, (error) => {
// // // //                     console.error('Error loading document:', error);
// // // //                 });
// // // //             });
// // // //         }
// // // //     };

// // // //     React.useEffect(() => {
// // // //         getToken();
// // // //     });

// // // //     React.useEffect(() => {
// // // //         if (token) {
// // // //             initializeViewer();
// // // //         }
// // // //     });

// // // //     return (
// // // //         <div >
// // // //             <div id="viewer" style={{ width: '100vw', height: '100vh', border:"1px solid black" }} />
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ForgeViewer;




// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const ForgeViewer = ({ myUrn }) => {
// // //     const [token, setToken] = useState('');


// // //     const fetchToken = async () => {
// // //         try {
// // //             const response = await axios.get('http://localhost:8080/api/forge/token');
// // //             setToken(response.data);
// // //             return response.data; // Return the token after setting it in state
// // //         } catch (error) {
// // //             console.error('Error fetching token:', error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchToken()
// // //     }, []);
// // //     useEffect(() => {
// // //         const options = {
// // //             env: 'AutodeskProduction',
// // //             accessToken: token,
// // //         };
// // //         console.log("hiii");

// // //         window.Autodesk.Viewing.Initializer(options, () => {
// // //             const viewerContainer = document.getElementById('forgeViewer');
// // //             const viewer = new window.Autodesk.Viewing.GuiViewer3D(viewerContainer);
// // //             viewer.start();
// // //             const documentId = `urn:${myUrn}`;
// // //             window.Autodesk.Viewing.Document.load(documentId, (doc) => {
// // //                 const defaultModel = doc.getRoot().getDefaultGeometry();
// // //                 viewer.loadDocumentNode(doc, defaultModel);
// // //             });
// // //         });
// // //     }, [myUrn]);

// // //     return (
// // //         <div>
// // //             <div id="forgeViewer" style={{ border: '1px solid black' }} />
// // //         </div>
// // //     );
// // // };

// // // export default ForgeViewer;




// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ForgeViewer = ({ myUrn }) => {
// //     console.log(myUrn);
    
// //     const [token, setToken] = useState('');
// //     const [viewerInitialized, setViewerInitialized] = useState(false);

// //     const fetchToken = async () => {
// //         try {
// //             const response = await axios.get('http://localhost:8080/api/forge/token');
// //             setToken(response.data);
// //         } catch (error) {
// //             console.error('Error fetching token:', error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchToken();
// //     }, []);

// //     useEffect(() => {
// //         if (token && !viewerInitialized) {
// //             const options = {
// //                 env: 'AutodeskProduction',
// //                 accessToken: token,
// //             };
// // console.log(token);
// // console.log(myUrn);

// //             window.Autodesk.Viewing.Initializer(options, () => {
// //                 const viewerContainer = document.getElementById('forgeViewer');
// //                 const viewer = new window.Autodesk.Viewing.GuiViewer3D(viewerContainer);
// //                 viewer.start();
// //                 const documentId = `urn:${myUrn}`;
// //                 window.Autodesk.Viewing.Document.load(documentId, (doc) => {
// //                     const defaultModel = doc.getRoot().getDefaultGeometry();
// //                     viewer.loadDocumentNode(doc, defaultModel);
// //                 }, (error) => {
// //                     console.error('Error loading document:', error);
// //                 });

// //                 setViewerInitialized(true); 
// //             });
// //         }
// //     }, [token,myUrn, viewerInitialized]);

// //     return (
// //         <div>
// //             <div id="forgeViewer" style={{ border: '1px solid black', height: '600px' }} />
// //         </div>
// //     );
// // };

// // export default ForgeViewer;



// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';

// const ForgeViewer = ({myUrn}) => {
//     const viewerContainer = useRef(null);
//     const [viewerInitialized, setViewerInitialized] = useState(false);
//     const [token, setToken] = useState('');
//     const fetchToken = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/forge/token');
//             setToken(response.data);
//         } catch (error) {
//             console.error('Error fetching token:', error);
//         }
//     };
//     useEffect(() => {
//         fetchToken();
//     }, []);

//     useEffect(() => {
//         const loadViewerScript = () => {
//             return new Promise((resolve, reject) => {
//                 if (window.Autodesk && window.Autodesk.Viewing) {
//                     resolve();
//                     return;
//                 }

//                 const script = document.createElement('script');
//                 script.src = 'https://viewer.autodesk.com/viewers/7.0/viewer3D.min.js';
//                 script.onload = () => resolve();
//                 script.onerror = () => reject(new Error('Failed to load Autodesk Viewer script'));
//                 document.body.appendChild(script);
//             });
//         };

//         const initializeViewer = async () => {
//             console.log(token);
//             console.log(myUrn);
            
            
//             try {
//                 await loadViewerScript();

//                 if (token && !viewerInitialized) {
//                     const options = {
//                         env: 'AutodeskProduction',
//                         accessToken: token,
//                     };

//                     window.Autodesk.Viewing.Initializer(options, (error) => {
//                         if (error) {
//                             console.error('Failed to initialize Autodesk Viewer:', error);
//                             return;
//                         }

//                         const viewer = new window.Autodesk.Viewing.GuiViewer3D(viewerContainer.current);
//                         viewer.start();

//                         const documentId = `urn:${myUrn}`;
//                         window.Autodesk.Viewing.Document.load(documentId, (doc) => {
//                             const defaultModel = doc.getRoot().getDefaultGeometry();
//                             viewer.loadDocumentNode(doc, defaultModel);
//                         }, (loadError) => {
//                             console.error('Error loading document:', loadError);
//                         });

//                         setViewerInitialized(true);
//                     });
//                 }
//             } catch (error) {
//                 console.error('Error loading viewer script:', error);
//             }
//         };

//         initializeViewer();
//     }, [myUrn, token, viewerInitialized]);

//     return <div ref={viewerContainer} style={{ width: '100%', height: '600px' }} />;
// };
// export default ForgeViewer



import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const ForgeViewer = ({ urn }) => {
    const viewerContainer = useRef(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/auth/token');
                setToken(response.data.access_token);
                console.log(response);
                
            } catch (error) {
                console.error('Failed to fetch token', error);
            }
        };

        fetchToken();
    }, []);

    // useEffect(() => {
    //     if (token && urn) {
    //         const loadViewerScript = () => {
    //             return new Promise((resolve, reject) => {
    //                 if (window.Autodesk && window.Autodesk.Viewing) {
    //                     resolve();
    //                     return;
    //                 }

    //                 const script = document.createElement('script');
    //                 script.src = 'https://viewer.autodesk.com/viewers/7.0/viewer3D.min.js';
    //                 script.onload = () => resolve();
    //                 script.onerror = () => reject(new Error('Failed to load Autodesk Viewer script'));
    //                 document.body.appendChild(script);
    //             });
    //         };

    //         const initializeViewer = async () => {
    //             try {
    //                 await loadViewerScript();

    //                 const options = {
    //                     env: 'AutodeskProduction',
    //                     accessToken: token,
    //                 };

    //                 window.Autodesk.Viewing.Initializer(options, (error) => {
    //                     if (error) {
    //                         console.error('Failed to initialize Autodesk Viewer:', error);
    //                         return;
    //                     }

    //                     const viewer = new window.Autodesk.Viewing.GuiViewer3D(viewerContainer.current);
    //                     viewer.start();

    //                     const documentId = `urn:${urn}`;
    //                     window.Autodesk.Viewing.Document.load(documentId, (doc) => {
    //                         const defaultModel = doc.getRoot().getDefaultGeometry();
    //                         viewer.loadDocumentNode(doc, defaultModel);
    //                     }, (error) => {
    //                         console.error('Error loading document:', error);
    //                     });
    //                 });
    //             } catch (error) {
    //                 console.error('Error loading viewer script:', error);
    //             }
    //         };

    //         initializeViewer();
    //     }
    // }, [token, urn]);

    return <div ref={viewerContainer} style={{ width: '100%', height: '600px' }} />;
};

export default ForgeViewer;
