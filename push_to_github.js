const { execSync } = require('child_process');

process.chdir(__dirname);

function run(cmd) {
  console.log(`> ${cmd}`);
  try {
    const output = execSync(cmd, {
      encoding: 'utf8',
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_MERGE_AUTOEDIT: 'no' },
      stdio: 'pipe'
    });
    console.log(output);
    return output;
  } catch (err) {
    console.error(`ERROR on "${cmd}":`, err.message);
    if (err.stdout) console.log('STDOUT:', err.stdout.toString());
    if (err.stderr) console.log('STDERR:', err.stderr.toString());
    return null;
  }
}

run('git add .');
run('git commit -m "Professionalize website: fix contact form, before-after transformations, root html hydration, and console warnings"');
run('git pull origin main --no-rebase -m "Merge remote main"');
run('git push origin main');
