const { execSync } = require('child_process');
const fs = require('fs');

const logFile = 'git_push.log';

function run(cmd) {
  try {
    const out = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    fs.appendFileSync(logFile, `[SUCCESS] ${cmd}:\n${out}\n`);
    return out;
  } catch (err) {
    fs.appendFileSync(logFile, `[ERROR] ${cmd}:\n${err.message}\n${err.stderr || ''}\n`);
    return err.message;
  }
}

fs.writeFileSync(logFile, 'Starting Git Push Workflow...\n');
run('git status');
run('git remote -v');
run('git add .');
run('git commit -m "Professionalize website: fix contact form, before-after transformations, root html hydration, and console warnings"');
run('git push origin main');
