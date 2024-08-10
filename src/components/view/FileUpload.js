// import React, { useState, useEffect } from 'react';
// import axios from "axios"
// import ForgeViewer from './ForgeViewer';
// const FileUpload = () => {
//     const [file, setFile] = useState(null);
//     const [bucketKey, setBucketKey] = useState('');

//     const [myUrn, setMyUrn] = useState('');

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleBucketKeyChange = (e) => {
//         setBucketKey(e.target.value);
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn}/signedcookies

//         await fetch('http://localhost:8080/api/forge/buckets', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({ bucketKey }).toString(),
//         });


//         const arrayBuffer = await file.arrayBuffer();
//         const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

//         const uploadResponse = await fetch(`http://localhost:8080/api/forge/upload?bucketKey=${bucketKey}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/octet-stream',
//             },
//             body: blob,
//         });

//         const uploadData = await uploadResponse.json();
//         const urn = btoa(uploadData.objectId);
//         // console.log("urn" + urn);
//         setMyUrn(urn)
//         fetch('http://localhost:8080/api/forge/translate', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({ urn }).toString(),
//         });
//     };
//     useEffect(() => {
//         if (myUrn) {

//         }
//     }, [myUrn]);

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Bucket Key:</label>
//                     <input type="text" value={bucketKey} onChange={handleBucketKeyChange} required />
//                 </div>
//                 <div>
//                     <label>File:</label>
//                     <input type="file" onChange={handleFileChange} required />
//                 </div>
//                 <button type="submit">Upload and Translate</button>
//             </form>


//             <div>
//                 <h3>View your file:</h3>
//                 {
//                     myUrn ?
//                         <ForgeViewer myUrn={myUrn} /> : null
//                 }

//             </div>
//         </>
//     );
// };

// export default FileUpload;


import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const response = await axios.post('http://localhost:8081/api/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Upload failed');
        }
    };
    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
