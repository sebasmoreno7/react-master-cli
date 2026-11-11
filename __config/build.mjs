import { build } from 'vite';
import { createConfig, getProject, getProjects } from './projects.mjs';

const projects = [process.argv[2] ? getProject(process.argv[2]) : getProjects()[0]];
for (const project of projects) {
  console.log(`Building ${project.folder}`);
  await build(createConfig(project));
}
console.log(`Built ${projects.length} lessons.`);
