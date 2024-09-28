//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUY2c2VCUHFTSXlYMmdUemtpcGlGOThLbUN4RkxsY282Vm4zOVJVRWVuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGFXdlIvazRMRUFuZmJNeE8yL2lzakRyNUhUMnE1a3V6Q3AzRDkyMDdXMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRXBBSkdNZm1HNlFzV1dNNzgrdlJqd2lNQk1vaU1sVVJYa01xV0pIV20wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4UVBSRFVzejh2MThvcEgxMWIvMnQrSnY5VjBQWlUwa2tqRmh5V1MzK1c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNVzlRdHcyNm5iTUh6ak9UYnV6V0MvWWlXMUlQeTR1TUdxVENQcWpVa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNUT3VUWGlJVVNRbkR5T0crSTdJSXdWZEdTZzRoUGpwdW12US90cis4eEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0taME5qRzVrNmhjVkFlSzhBVmVJdFNNM1JFSElPYlJjNW5JNEdCbzYxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VxTnlPUkJNb3ZXOTd4VG1DNGVZMDVsclJNcUJpSkFZVmxpVUk4Z1FXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBcUQ5bDVVajlRYk42emdEa2xTalRjbWQveUU3dmRtM1dHT0FhU0dsbjhuS0Z6Y0FBeDNWeE1oekpyYk4wWjE2MWFUL2VSNU5FcDNpMm1CV1lNekJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJBV09qbk5NQVdib09rcmJ6OGQzUTkwaGZPOXhqOCtvM3VPWTY2N2RKN1NjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItX0RGOUtaaFR0NnV2TzlLbzRBNExBIiwicGhvbmVJZCI6IjRlMGFiZjg4LWRjYzYtNGM0Zi1hZTMyLTc5ZWViNTkzZmMwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMHhmOEtwbktUcXR0MjIwUWJjeFIvNSs3MkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1ZMajFQbGZSd3pweExERmRKbVdjVnhRZUZFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM2UFoxR0FZIiwibWUiOnsiaWQiOiIyMzQ4MTU1ODQ5MjkyOjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pY2sgQ29sZeGthOG0v+G0seG0sOG0uOG0teG0vOG0uiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSktLeTVVREVJM0o0YmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXkyNnNZbHlTS2tYTVZSZnlJUmRGVjV4K3U0T1poNVp2Vld3a2MyaTNUOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU3M0bGtyMFdYR0lFSWpyQWM5VldCSEhCcDZvL1U5Ulp2QXlvTnBVMFBiTy9XK1RweG94YWRYVStIRkk0ZnYvVnFNSEE3cHZONDV2MzVSZ2dlNHFQQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkQrVTMzclBuT1J0NlByQ0d2c0N6dXJscEdEY0R5cTFSSjg5cm1SUzI0TGRRQmtFU0l6cHRxRHp5R1hPT1MrTFF6eTNCUm94bTM2VGYweVdVTlFtUUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1NTg0OTI5Mjo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTXR1ckdKY2tpcEZ6RlVYOGlFWFJWZWNmcnVEbVllV2IxVnNKSE5vdDAvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NTU0NzE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo0WSJ9DZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXkyNnNZbHlTS2tYTVZSZnlJUmRGVjV4K3U0T1poNVp2Vld3a2MyaTNUOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMk1ocEM2bllJQnBxbGVyK0thZjFQdXd2bklSdUdJN0k4eExoVUE3ZmU4cVdJSWxQWmF0WEVPQ2lFVkxLZTZFdjgyVElkdnU1Zk1TcGxRZzU4OFRnQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImtNSjBkVFJTRnBHK2NpK2ZwTFEyOVBMSWwwbWhJRENHREw5UGMvMklmc2pocWdZNFlySFJXZGNha04rRVJVNStkc1dOZGFCVi81RTZYNzhHWi9ETmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1NTg0OTI5Mjo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTXR1ckdKY2tpcEZ6RlVYeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUM0TGFsRXdGcVE0SGRNK1Q5MFU4K2gySk5YdWZueHNFSVVDU0tOTkRIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhJY3dYeVQ2M2RCbmkyV3dyMEdBRWh3K29TbUZkelMyRklGV0hwY3RRST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSExBcG1XV0I0VnNEMG96ZWlTcjc1NlRUVEpCOFlqaTBaNFQvamhQZVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyckJremJyQ05NdmR2VkhqOWVBT3FiRUlmTElsT2krSlIrcExqdUFKSmtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KeWIrTktMeUNsYjIvbmJvVlZ0R2wxQVhBRmcxdmtGL2lJZWk4Zzd1SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJvTVh0NlhhNklIbXlnY01jcjJBVHE2SjlHWHNsaGpNTENCZzZWWjNXMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lrSzFCcitSM3gwbTdOajlEdUdROVQ4N1dqT2I4eWhhMnoyVUQwVWxrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3VEQUQ1amRSNC9IbmcrN0tJb0RBbVEvTzhqV2xGQjY3TXFwNk9WQUZRST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ2TXR6QW1VV1JKMlc2SWZITEFoK0JCalhjUS90MUc5Z3V3Y0xiSERWb0Z2WWNiT0FsUC9jbHBYVk9EVEhVWCswZlRNY3BOMkxjWGVmT3R5dkU0dWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJvMUV2K2RwMHJOZVRTV1V4Rk9GeCtFZnJ3NlZReVhJQlp1aXNkaUlJdU9VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNZEJ4NW1BN1RhR2xhaXRwWkhGazNRIiwicGhvbmVJZCI6IjU0NzA5ZGM3LTc2OTUtNDcyNy05YWIyLTBhNzYxY2JhMjk5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDV3RyU2prV0I2MldCTHJCQ2x2NXlkeC9hSk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDM4VE9kbE9CN2YwdGZUZHNJeXRNVHRzU3RNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg4SldQRE42IiwibWUiOnsiaWQiOiIyMzQ4MTU1ODQ5MjkyOjUxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pY2sgQ29sZeGthOG0v+G0seG0sOG0uOG0teG0vOG0uiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkdLeTVVREVPejIzN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQXkyNnNZbHlTS2tYTVZSZnlJUmRGVjV4K3U0T1poNVp2Vld3a2MyaTNUOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMk1ocEM2bllJQnBxbGVyK0thZjFQdXd2bklSdUdJN0k4eExoVUE3ZmU4cVdJSWxQWmF0WEVPQ2lFVkxLZTZFdjgyVElkdnU1Zk1TcGxRZzU4OFRnQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImtNSjBkVFJTRnBHK2NpK2ZwTFEyOVBMSWwwbWhJRENHREw5UGMvMklmc2pocWdZNFlySFJXZGNha04rRVJVNStkc1dOZGFCVi81RTZYNzhHWi9ETmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE1NTg0OTI5Mjo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTXR1ckdKY2tpcEZ6RlVYOGlFWFJWZWNmcnVEbVllV2IxVnNKSE5vdDAvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NTI3ODAxfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "KING",
  packname: process.env.PACK_NAME || "HAKI",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
