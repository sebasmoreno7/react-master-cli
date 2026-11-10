import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createConfig, getProject, getProjects, repositoryRoot } from './projects.mjs';

test('all existing lessons have a runnable entry and preserve their title',()=>{
  const projects=getProjects();
  assert.equal(projects.length,16);
  for(const project of projects){
    assert.ok(project.name);
    assert.ok(fs.existsSync(path.join(repositoryRoot,project.folder,'index.html')));
    assert.ok(fs.existsSync(path.join(repositoryRoot,project.folder,'index.jsx')));
    assert.equal(createConfig(project).server.host,'127.0.0.1');
  }
});

test('project selection cannot escape the lesson allowlist',()=>{
  for(const value of ['../','../../etc','/tmp','__config','.git','01-mini-react-project/../__config']){
    assert.throws(()=>getProject(value),/Unknown lesson/);
    assert.throws(()=>createConfig({folder:value}),/Unknown lesson/);
  }
});

test('each build stays inside its own distribution directory',()=>{
  for(const project of getProjects()){
    const config=createConfig(project);
    assert.equal(config.build.outDir,path.join(repositoryRoot,'dist',project.folder));
    assert.equal(config.root,path.join(repositoryRoot,project.folder));
  }
});
