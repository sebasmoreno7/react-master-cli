import fs from 'node:fs';
import path from 'node:path';
import { parseEnv } from 'node:util';
import { createServer } from 'vite';
import { createConfig, getProject, getProjects, repositoryRoot } from './projects.mjs';

const envFile = path.join(repositoryRoot, '.env');
const saved = fs.existsSync(envFile) ? parseEnv(fs.readFileSync(envFile,'utf8')) : {};
const project = getProject(process.env.PROJECT || saved.PROJECT || getProjects()[0].folder);
const server = await createServer(createConfig(project));
await server.listen();
console.log(`Lesson: ${project.name}`);
server.printUrls();
