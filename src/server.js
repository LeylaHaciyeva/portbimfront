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



