const axios = require('axios');

exports.triggerWorkflow = async (req, res) => {
    const { namespace, id, inputs } = req.body;

    try {
        const response = await axios.post(
            `${process.env.KESTRA_BASE_URL}/executions/${namespace}/${id}`,
            inputs,
            {
                headers: {
                    Authorization: `Bearer ${process.env.KESTRA_API_TOKEN}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Failed to trigger workflow' });
    }
};
