import { readFileSync } from 'node:fs';
const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
if (!html.includes('v2.js') || !html.includes('anthology')) throw new Error('anthology v2 smoke test failed');
console.log('unrealted_website v2 smoke test passed');
