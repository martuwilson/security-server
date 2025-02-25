import { spawn } from 'child_process';

const runPython = (url) => {
    return new Promise((resolve, reject) => {
        const process = spawn('python', ['scripts/analyze_url.py', url]);

        let result = '';

        process.stdout.on('data', (data) => {
            result += data.toString();
        });

        process.stderr.on('data', (data) => {
            reject(data.toString());
        });

        process.on('close', () => {
            resolve(result.trim());
        });
    });
};

export default runPython;
