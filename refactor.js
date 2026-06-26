const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('src/screens/*/styles.ts');
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Make container backgrounds transparent
  content = content.replace(/\bcontainer:\s*\{([^}]*?)backgroundColor:\s*['`"][^'`"]+['`"]/g, 'container: {$1backgroundColor: \'transparent\'');

  // Make standard backgrounds on scrollviews or containers transparent
  content = content.replace(/backgroundColor:\s*['"]#F8F9FA['"]/gi, "backgroundColor: 'transparent'");
  content = content.replace(/backgroundColor:\s*['"]#FAFAFC['"]/gi, "backgroundColor: 'transparent'");
  content = content.replace(/backgroundColor:\s*['"]#F7F9FC['"]/gi, "backgroundColor: 'transparent'");
  content = content.replace(/backgroundColor:\s*['"]#E5E7EB['"]/gi, "backgroundColor: 'transparent'");

  // Cards and specific UI elements should be semi-transparent
  // Use a function replacer to preserve the exact original name of the key (like moodCard, historyCard, etc.)
  content = content.replace(/([a-zA-Z0-9_]*[cC]ard):\s*\{([^}]*?)backgroundColor:\s*['`"]#fff(?:fff)?['`"]/g, '$1: {$2backgroundColor: \'rgba(255, 255, 255, 0.85)\'');
  
  content = content.replace(/([a-zA-Z0-9_]*[cC]ontainer):\s*\{([^}]*?)backgroundColor:\s*['`"]#fff(?:fff)?['`"]/g, '$1: {$2backgroundColor: \'rgba(255, 255, 255, 0.85)\'');

  // Also replace #FFFFFF uppercase
  content = content.replace(/([a-zA-Z0-9_]*[cC]ard):\s*\{([^}]*?)backgroundColor:\s*['`"]#FFF(?:FFF)?['`"]/gi, '$1: {$2backgroundColor: \'rgba(255, 255, 255, 0.85)\'');
  content = content.replace(/([a-zA-Z0-9_]*[cC]ontainer):\s*\{([^}]*?)backgroundColor:\s*['`"]#FFF(?:FFF)?['`"]/gi, '$1: {$2backgroundColor: \'rgba(255, 255, 255, 0.85)\'');

  if(content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log('Updated ' + file);
  }
});
console.log('Total updated: ' + updatedCount);
