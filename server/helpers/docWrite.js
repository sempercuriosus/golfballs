const FS = require('fs').promises;
const FILE_CONFIG = require('../config/docWriteConfig.json');
const GOLFBALLS = require('../models/golfballs');

/**
 * @description writes content to a file, this will OVERWRITE the file each time
 */
async function WriteFile() {
  const FILE_NAME = FILE_CONFIG.outputFileName;
  const OUTPUT_PATH = FILE_CONFIG.outputPath;

  if (!FILE_NAME || !OUTPUT_PATH) {
    console.error(
      '!!! - CANNOT WRITE: The docWriteConfig.json file is missing the outputPath or outputFileName. ',
    );

    return false;
  }

  MakePathIfNotExists(OUTPUT_PATH);

  const OUTPUT_FILE_LOCATION = OUTPUT_PATH + FILE_NAME;

  const DATA = await GetData();
  await FS.writeFile(OUTPUT_FILE_LOCATION, DATA);

  console.info(
    `Backup to ${OUTPUT_FILE_LOCATION} is complete at ${new Date()}`,
  );
} //  [ end : WriteFile ]

/**
 * @description checks to see if the path exists and creates, if path not exists
 */
async function MakePathIfNotExists(filePath) {
  try {
    FS.access(filePath, FS.F_OK);
  } catch (error) {
    console.info('Path Does Not Exist');

    try {
      FS.mkdir(filePath);
    } catch (error) {
      console.error(error);
    }
  }
} //  [ end : MakePathIfNotExists ]

/**
 * @description uses the established connection to return data found in the connection
 */
async function GetData() {
  try {
    const DATA_RAW = await GOLFBALLS.find();
    return JSON.stringify(DATA_RAW);
  } catch (error) {
    console.error(error);
    return '';
  }
} //  [ end : GetData ]

module.exports = WriteFile;

