// // import React, { useState, useEffect } from 'react';
// // import axios from "axios"
// // import ForgeViewer from './ForgeViewer';
// // const FileUpload = () => {
// //     const [file, setFile] = useState(null);
// //     const [bucketKey, setBucketKey] = useState('');

// //     const [myUrn, setMyUrn] = useState('');

// //     const handleFileChange = (e) => {
// //         setFile(e.target.files[0]);
// //     };

// //     const handleBucketKeyChange = (e) => {
// //         setBucketKey(e.target.value);
// //     };


// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         // https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}/signedcookies

// //         await fetch('http://localhost:8080/api/forge/buckets', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/x-www-form-urlencoded',
// //             },
// //             body: new URLSearchParams({ bucketKey }).toString(),
// //         });


// //         const arrayBuffer = await file.arrayBuffer();
// //         const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

// //         const uploadResponse = await fetch(`http://localhost:8080/api/forge/upload?bucketKey=${bucketKey}`, {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/octet-stream',
// //             },
// //             body: blob,
// //         });

// //         const uploadData = await uploadResponse.json();
// //         const urn = btoa(uploadData.objectId);
// //         // console.log("urn" + urn);
// //         setMyUrn(urn)
// //         fetch('http://localhost:8080/api/forge/translate', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/x-www-form-urlencoded',
// //             },
// //             body: new URLSearchParams({ urn }).toString(),
// //         });
// //     };
// //     useEffect(() => {
// //         if (myUrn) {

// //         }
// //     }, [myUrn]);

// //     return (
// //         <>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Bucket Key:</label>
// //                     <input type="text" value={bucketKey} onChange={handleBucketKeyChange} required />
// //                 </div>
// //                 <div>
// //                     <label>File:</label>
// //                     <input type="file" onChange={handleFileChange} required />
// //                 </div>
// //                 <button type="submit">Upload and Translate</button>
// //             </form>


// //             <div>
// //                 <h3>View your file:</h3>
// //                 {
// //                     myUrn ?
// //                         <ForgeViewer myUrn={myUrn} /> : null
// //                 }

// //             </div>
// //         </>
// //     );
// // };

// // export default FileUpload;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import ForgeViewer from './ForgeViewer';

// // const FileUpload = () => {
// //     const [file, setFile] = useState(null);
// //     const [message, setMessage] = useState('');
// //     const [urn, setUrn] = useState(null);

// //     const handleFileChange = (e) => {
// //         setFile(e.target.files[0]);
// //     };

// //     const handleUpload = async () => {
// //         if (!file) return;

// //         const formData = new FormData();
// //         formData.append('file', file);

// //         try {
// //             const response = await axios.post('http://localhost:8081/api/upload', formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data'
// //                 }
// //             });
// //             setMessage("great")
// //         } catch (error) {
// //             setMessage('Upload failed');
// //         }
// //     };
    
// //     return (
// //         <div>
// //             <input type="file" onChange={handleFileChange} />
// //             <button onClick={handleUpload}>Upload</button>
// //             <p>{message}</p>
// //             {/* <ForgeViewer urn={urn} /> */}
// //         </div>
// //     );
// // };

// // export default FileUpload;








// // FileUpload.js
// import React, { useState } from 'react';

// const FileUpload = ({ onFileLoad }) => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileRead = () => {
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       // Convert file to URL for display
//       onFileLoad(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div>
//       <input type="file" accept=".ifc" onChange={handleFileChange} />
//       <button onClick={handleFileRead}>Load File</button>
//     </div>
//   );
// };

// export default FileUpload;



// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8081/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      onUploadSuccess(response.data.file.path); // Pass the file path to the parent component
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload File</button>
    </form>
  );
};

export default FileUpload;
