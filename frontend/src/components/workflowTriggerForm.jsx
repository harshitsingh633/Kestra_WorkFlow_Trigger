import React, { useState } from 'react';

function WorkflowTriggerForm() {
    const [namespace, setNamespace] = useState('');
    const [id, setId] = useState('');
    const [inputs, setInputs] = useState('{}');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/workflows/trigger', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ namespace, id, inputs: JSON.parse(inputs) }),
            });
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
            alert('Failed to trigger workflow');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Namespace:
                    <input type="text" value={namespace} onChange={(e) => setNamespace(e.target.value)} />
                </label>
                <label>
                    Workflow ID:
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    Inputs (JSON):
                    <textarea value={inputs} onChange={(e) => setInputs(e.target.value)} />
                </label>
                <button type="submit">Trigger Workflow</button>
            </form>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default WorkflowTriggerForm;
