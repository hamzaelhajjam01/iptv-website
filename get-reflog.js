const { execSync } = require('child_process');
try {
  const output = execSync('git log -g --pretty="format:%h %s" -n 50', { encoding: 'utf8' });
  console.log(output);
} catch (e) {
  console.error(e.message);
}
