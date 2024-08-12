// const express = require('express');
// const ForgeSDK = require('forge-apis');
// const port = 3000;
// const fs = require('fs');
// const path = require('path');
// const clientId = '5PWWhxLGbWuNq57RM2G88ArO1maApDt0ldTjDCA8DUDHaiqG';
// const clientSecret = 'MqGSa8AFJQTVATKp16nsedxfvFlb9FelUZp1MSkpKHz6AZRC00NSQlL4gYUPHRxp';
// const app = express();
// app.use(express.json());

// // Route to get access token
// app.get('/api/auth/token', async (req, res) => {
//     const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['data:read', 'data:write'], true);
//     try {
//         const credentials = await oauth2TwoLegged.authenticate();
//         console.log("credentials", credentials); // Logging the credentials object
//         res.json({ access_token: credentials.access_token });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Failed to authenticate' });
//     }
// });

// // app.post('/api/upload', async (req, res) => {
// //     const filePath = '/path/to/your/file.dwg';
// //     const bucketKey = 'your-bucket-key';
// //     const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['data:read', 'data:write'], true);
// //     try {
// //         const credentials = await oauth2TwoLegged.authenticate();
// //         const objectsApi = new ForgeSDK.ObjectsApi();
// //         await objectsApi.uploadObject(bucketKey, path.basename(filePath), fs.createReadStream(filePath), {}, oauth2TwoLegged, credentials);
// //         res.json({ message: 'File uploaded successfully' });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Failed to upload file' });
// //     }
// // });

// // app.post('http://localhost:8080/api/convert', async (req, res) => {
// //     const urn = 'YOUR_FILE_URN'; // Get the URN from the uploaded file

// //     const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['data:read', 'data:write'], true);
// //     try {
// //         const credentials = await oauth2TwoLegged.authenticate();
// //         const modelDerivativeApi = new ForgeSDK.ModelDerivativeApi();
// //         const job = {
// //             input: { urn: urn },
// //             output: { formats: [{ type: 'svf', views: ['2d', '3d'] }] }
// //         };
// //         await modelDerivativeApi.translate(job, {}, oauth2TwoLegged, credentials);
// //         res.json({ message: 'Conversion job started' });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Failed to start conversion' });
// //     }
// // });



// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });








// const express = require('express');
// const multer = require("multer")
// const ForgeSDK = require('forge-apis');
// const port = 8081;
// const fs = require('fs');
// const path = require('path');
// const clientId = '5PWWhxLGbWuNq57RM2G88ArO1maApDt0ldTjDCA8DUDHaiqG';
// const clientSecret = 'P7j1O9kRRnFuq3fwLls1vbdRSkJVh3p11AbiUfG8uIVzkXEN70w0PdNvbjz3ym0F';
// const cors = require("cors");
// const app = express();
// app.use(cors()); // Allow cross-origin requests
// app.use(express.json());
// // app.get('/api/auth/token', async (req, res) => {
// //     try {
// //         const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['data:read', 'data:write'], true);
// //         const credentials = await oauth2TwoLegged.authenticate();
// //         console.log("credentials", credentials); // Logging the credentials object
// //         res.json({ access_token: credentials.access_token });
// //     } catch (error) {
// //         console.error('Error:', error);
// //         res.status(500).json({ error: 'Failed to authenticate' });
// //     }
// // });



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         const uploadDir = './uploads';
//         if (!fs.existsSync(uploadDir)) {
//             fs.mkdirSync(uploadDir);
//         }
//         cb(null, uploadDir);
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });
// app.post('/api/upload', upload.single('file'), async (req, res) => {
//     try {
//         const file = req.file;
//         console.log(file);
//         const filePath = path.join(__dirname, file.path);
//         console.log(filePath);
//         await uploadToForge(filePath);
//         fs.unlinkSync(filePath);
//         res.json({ message: 'File uploaded and processed successfully!' });
//     } catch (error) {
//         console.error('Error uploading file:', error.message);
//         res.status(500).json({ error: 'Failed to upload file', details: error.message });
//     }
// });
// async function uploadToForge(filePath) {
//     try {
//         const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['bucket:read'], true);
//         const credentials = await oauth2TwoLegged.authenticate();
//         const accessToken = credentials.access_token;

//         const bucketKey = "asas4fe3456";
//         const bucketsApi = new ForgeSDK.BucketsApi();
//         const objectsApi = new ForgeSDK.ObjectsApi();

//         try {
//             await bucketsApi.getBucketDetails(bucketKey, {}, { Authorization: `Bearer ${accessToken}` });
//         } catch (error) {
//             if (error.statusCode === 404) {
//                 await bucketsApi.createBucket({ bucketKey: bucketKey, policyKey: 'transient' }, {}, { Authorization: `Bearer ${accessToken}` });
//             } else {
//                 throw error;
//             }
//         }

//         const fileStream = fs.createReadStream(filePath);
//         const response = await objectsApi.uploadObject(
//             bucketKey,
//             path.basename(filePath),
//             fs.statSync(filePath).size,
//             fileStream,
//             {},
//             { Authorization: `Bearer ${accessToken}` }
//         );
//     } catch (error) {
//         console.error('Error uploading file to Forge:', error);
//         throw error;
//     }
// }
// async function translateFile(urn) {
//     const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['data:read', 'data:write', 'bucket:create', 'bucket:read', 'bucket:write'], true);
//     try {
//         const credentials = await oauth2TwoLegged.authenticate();
//         const accessToken = credentials.access_token;
//         // Set up the data management API
//         const derivativesApi = new ForgeSDK.DerivativesApi();
//         // Request a translation
//         const job = {
//             input: {
//                 urn: urn
//             },
//             output: {
//                 formats: [
//                     {
//                         type: 'svf',
//                         views: ['2d', '3d']
//                     }
//                 ]
//             }
//         };

//         const response = await derivateApi.translate(job, {}, { Authorization: `Bearer ${accessToken}` });
//         console.log('Translation Job Response:', response.body);
//         return response.body;
//     } catch (error) {
//         console.error('Error translating file:', error);
//         throw error;
//     }
// }





// app.use('/files', express.static(path.join(__dirname, 'uploads')));

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });






const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const ForgeSDK = require('forge-apis');
const cors = require("cors");
const app = express();
app.use(cors());
const port = 8081;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        const filePath = path.join(__dirname, file.path);
        const urn = await uploadToForge(filePath);
        fs.unlinkSync(filePath); // Clean up uploaded file
        res.json({ message: 'File uploaded and processed successfully!', urn });
    } catch (error) {
        console.error('Error uploading file:', error.message);
        res.status(500).json({ error: 'Failed to upload file', details: error.message });
    }
});

// Function to upload file to Autodesk Forge
async function uploadToForge(filePath) {
    try {
        const clientId = '5PWWhxLGbWuNq57RM2G88ArO1maApDt0ldTjDCA8DUDHaiqG';
        const clientSecret = 'P7j1O9kRRnFuq3fwLls1vbdRSkJVh3p11AbiUfG8uIVzkXEN70w0PdNvbjz3ym0F';
        const oauth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(clientId, clientSecret, ['bucket:read', 'data:write'], true);
        const credentials = await oauth2TwoLegged.authenticate();
        const accessToken = credentials.access_token;
        const bucketKey = 'ryjrt6574';
        const bucketsApi = new ForgeSDK.BucketsApi();
        const objectsApi = new ForgeSDK.ObjectsApi();

        try {
            await bucketsApi.getBucketDetails(bucketKey, {}, { Authorization: `Bearer ${accessToken}` });
        } catch (error) {
            if (error.statusCode === 404) {
                await bucketsApi.createBucket({ bucketKey: bucketKey, policyKey: 'transient' }, {}, { Authorization: `Bearer ${accessToken}` });
            } else {
                throw error;
            }
        }

        const fileStream = fs.createReadStream(filePath);
        const response = await objectsApi.uploadObject(
            bucketKey,
            path.basename(filePath),
            fs.statSync(filePath).size,
            fileStream,
            {},
            { Authorization: `Bearer ${accessToken}` }
        );

        const urn = response.body.objectId; // Get the URN
        return urn;
    } catch (error) {
        console.error('Error uploading file to Forge:', error);
        throw error;
    }
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
