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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUV3ZG0vbS92aVkrcHVYTlpCS2FDcEEwRDNVak1PQXJLNlMxU0RZY1hVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1JnYnptaHdBWkI4TVlsQm4yZXNMbytOZ0U3Y1FYM3poUlFudHJmRDAxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUGVHZFR2TnVJR05ZWWFmQlpqUzRQcHZxcUNPNzlMV2owSjNoVVFwaUUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQWw0ZUZsYmcvMGZIdHBEaTFWenRWVjJlVDJaRGJ6cFFKaEJ1SmFzVW1ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIQW1VV0ZScjdUd0hza0ZYcFBtbmQ2RDhLcjFMblFma29rY1B4eHBtMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloyVlI2MSsyUDJtaWpENGtFSFZuU1dJbVR5QkxQMUo0RTMxSUxsanBYejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUMzSWxxaWNseHREcnlVM0RKcTZWT2Raam5nSnJ2Z2UxNkdWUmdrVUtYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWZlQTNxdUwyL0VRRGIwc3ZIdndlaUd4dnRkSjIwc2JmYUVoeGxxaFdsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJsSnNIOUVnZGhxUDV1WHdkWTlVVExyd25sM0JuaHQvNkc2dWcxWEUyT2thOFd4cW5GaDF1OFlDT3czcFArNnBZQUhOV09lYzMwR053UUhxanlsdUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiIwVVdTRWZaSHJtNXhtQWREYnc2WDN3aCt2WGs4WDFpNWo1eHdwQmwrd1lrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTA2MzkyOTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEE5NjgxMDEwMjJBN0IxNUFEQTM4MjkxNjVCRUY5NTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzYwMDk0M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid2pWMUNSX0lSbkNWSmZYMVpYdVNnQSIsInBob25lSWQiOiIxNzcwNTlhOS1kMDlkLTRiNjktYjM3NC0zYmEwZTNiY2ZlMWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2hKQkF1dnozd3pHK2RoY1Z4Mm5yY0tZOTcwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNyWG56bWlnS01xeWZTbTVjZEJNclFIVnJ6Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIOUVFRFpaRiIsIm1lIjp7ImlkIjoiMjM0NzA1MDYzOTI5MzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJFTU1JLS0tQ1JZUFRPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMjM3ZXdFRUo2eTVMY0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3UVBROUpvcmVYaENTVHBJa2ZMa0FpTmRIdko3NUtGeHJ1UThka3hWdVFJPSIsImFjY291bnRTaWduYXR1cmUiOiJQQWdaQXMzallteHJpOHFSanBqNnluaElpUkdlbW5Wa3NEZ0JZa09VbGlPdGtka2o0TDR3cnJOY0JzVXBwWU1RY1B4K1JNYStZQ2dPRWo0SkJ2Y0xCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL0NIVldZWk5hSXZrSjhPWWIvSGEyREVnVjlValJ5M3FNWDlFb0tXRys5YWpMZ21lZWhBc3pKYUNONnRXbm1TVTRraUFIdUdNYy9jbER4MzVsWktwREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUwNjM5MjkzOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNFRDBQU2FLM2w0UWtrNlNKSHk1QUlqWFI3eWUrU2hjYTdrUEhaTVZia0MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2MDA5MzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSW4zIn0=" // session id here
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
