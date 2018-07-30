let childProcess = require("child_process");
module.exports = function(dependency) {
  try {
    return require(dependency);
  } catch (e) {
    console.log(`Installing ${dependency}.`);
    childProcess.execSync(`npm install ${dependency}`);
    console.info("Finished, re-run this command.");
    process.exit(0);
  }
};
