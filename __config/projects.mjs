import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';

export const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));

export function getProjects() {
  return fs.readdirSync(repositoryRoot, { withFileTypes: true })
    .filter(item => item.isDirectory() && /^\d{2}-[a-z0-9-]+$/.test(item.name))
    .filter(item => fs.existsSync(path.join(repositoryRoot, item.name, 'metadata.json')))
    .map(item => ({ ...JSON.parse(fs.readFileSync(path.join(repositoryRoot, item.name, 'metadata.json'), 'utf8')), folder:item.name }))
    .sort((a,b)=>a.folder.localeCompare(b.folder));
}

export function getProject(folder) {
  const project = getProjects().find(item => item.folder === folder);
  if (!project) throw new Error('Unknown lesson. Choose a project from the lesson list.');
  return project;
}

export function createConfig(project) {
  // Validate again at the filesystem boundary; never use an arbitrary PROJECT path.
  const selected = getProject(project.folder);
  const root = path.join(repositoryRoot, selected.folder);
  return {
    configFile: false,
    root,
    publicDir: path.join(root, 'public'),
    plugins: [react()],
    server: { host:'127.0.0.1', port:3000, fs:{allow:[repositoryRoot]} },
    build: { outDir:path.join(repositoryRoot, 'dist', selected.folder), emptyOutDir:true },
  };
}
