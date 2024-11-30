//Trigger WorkFLow on Button Click
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const workflowRoutes = require('./routes/workflowRoutes');
app.use('/api/workflows', workflowRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

