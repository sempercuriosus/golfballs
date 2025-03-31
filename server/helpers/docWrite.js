const FS = require('fs');
const FILE_CONFIG = require('../config/docWriteConfig.json');

console.info('docWrite Called');

/**
 * @description writes content to a file, this will OVERWRITE the file each time
 */
function WriteFile(data) {
  const FILE_NAME = FILE_CONFIG.outputFileName;
  const OUTPUT_PATH = FILE_CONFIG.outputPath;

  if (!FILE_NAME || !OUTPUT_PATH) {
    console.error(
      '!!! - CANNOT WRITE: The docWriteConfig.json file is missing the outputPath or outputFileName. ',
    );

    return false;
  }

  MakePathIfNotExists(OUTPUT_PATH);

  // because this is only used by me and will not be anywhere but locally run I am not going to add the path.join() to keep things simple and concat them here
  const OUTPUT_FILE_LOCATION = OUTPUT_PATH + FILE_NAME;

  console.log(OUTPUT_FILE_LOCATION, data);

  try {
    FS.writeFileSync(OUTPUT_FILE_LOCATION, data);
  } catch (error) {
    console.error(error);
  }
} //  [ end : WriteFile ]

/**
 * @description checks to see if the path exists and creates, if path not exists
 */
function MakePathIfNotExists(filePath) {
  try {
    FS.accessSync(filePath, FS.F_OK);

    console.info('Path Exists');
  } catch (error) {
    console.info('Path Does Not Exist');

    try {
      FS.mkdirSync(filePath);
    } catch (error) {
      console.error(error);
    }
  }
} //  [ end : MakePathIfNotExists ]

WriteFile(
  'jhgjkhgjkhgjhgjhgjhkgjhgjkgjkhgjhkgjhgghjffgdsawatre',
);

module.exports = WriteFile;

