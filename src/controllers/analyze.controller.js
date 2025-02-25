import { exec } from 'child_process';
import path from 'path';

export const analyzeURL = (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const scriptPath = path.join(process.cwd(), 'src', 'scripts', 'analyze.py');

    exec(`python "${scriptPath}" "${url}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution error: ${error.message}`);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (stderr) {
            console.error(`Script error: ${stderr}`);
            return res.status(500).json({ error: 'Error executing script' });
        }

        return res.json({ result: stdout.trim() });
    });
};
