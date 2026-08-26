const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

process.chdir(__dirname);

let log = '';

function runStep(name, cmd) {
  try {
    log += `=== ${name} ===\n`;
    const res = execSync(cmd, { 
      encoding: 'utf8', 
      timeout: 20000, 
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } 
    });
    log += res + '\n';
  } catch (err) {
    log += `ERR (${name}): ${err.message}\n${err.stderr ? err.stderr.toString() : ''}\n`;
  }
}

runStep('STATUS', 'git status');
runStep('REMOTES', 'git remote -v');
runStep('ADD', 'git add -A');
runStep('COMMIT', 'git commit -m "Professionalize website: fix contact form, before-after transformations, root html hydration, and console warnings"');
runStep('PUSH', 'git push origin main');

fs.writeFileSync(path.join(__dirname, 'git_status_log.txt'), log);
console.log('DONE_LOGGING_EXPLICIT');
