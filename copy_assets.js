const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/HP/.gemini/antigravity/brain/eab4845d-c346-45da-8c32-f137808c90ce';
const targetDir = 'e:/rendered-perfect-main/rendered-perfect-main/src/assets';

try {
  fs.copyFileSync(path.join(srcDir, 'broadbeach_before_1787758364692.png'), path.join(targetDir, 'broadbeach-before.png'));
  fs.copyFileSync(path.join(srcDir, 'broadbeach_after_1787758383617.png'), path.join(targetDir, 'broadbeach-after.png'));
  fs.copyFileSync(path.join(srcDir, 'surfers_before_1787758420876.png'), path.join(targetDir, 'surfers-before.png'));
  console.log('COPIED_SUCCESSFULLY');
} catch (err) {
  console.error('ERROR:', err);
}
