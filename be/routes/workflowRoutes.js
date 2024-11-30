const express = require('express');
const { triggerWorkflow } = require('../controllers/workflowController');
const router = express.Router();

router.post('/trigger', triggerWorkflow);

module.exports = router;
