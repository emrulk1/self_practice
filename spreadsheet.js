GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./client_secret.json');
//console.log('Hello');
async function accessSpreadsheet(){
  var spid = '1ode30QWZDbJCcVLGMRvZCWL5CXnySFCMO4qv_QDhkgk';
  console.log("${spid}");
   const doc = new GoogleSpreadsheet(spid);
   await promisify(doc.useServiceAccountAuth)(creds);
   const info = await promisify(doc.getInfo)();
   const sheet = info.worksheets[0];
   console.log(sheet);
}
accessSpreadsheet();
