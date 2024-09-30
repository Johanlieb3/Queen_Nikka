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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUc5djA2dTlxMkFtbGw2dkRiSWJwbW5SeHdJZ3luMnEyYlJGcTBDZlNWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW9pU3JBbEJQVFNiSEhtZ2luZGRvWjI5VjRUc3ZVMG5uc1pjTlRGOHNUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT0RNZitMVTBqWEY3MGpHZXBhUTFiQWh1OXBzL0F5Q3A1RHdSNVJKZm5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0QzNkblVOamJIaVBmR3Q5VGN6cUlZWmpObU5kZm1qdUFRVU9xY2VzYndzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DSUdOTWd3ckpGN2hkNi9zR2NTd24vcHl6Z1J0V3pUUSt4OHFPMjFKbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0vMW83VU82SE1aSnhMUi85VHk3VEV5QzZ4V2FyR0ZiZ2FGV0NDbkJ4a3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9VaThtZ0NUdUE1NVNXZFBCZ1gxaEJQRG1CM0x3MXNtWENEZVpFZmlFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDk5azllZXFsb3pUYjkrM0FzUTUxeVpXUnd4U0wxdDlWWHFPUEkxVGtBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InliTW5KeEVVTzlvUlM5Y0F6cnFUWGhaSm9vU2xFaHoxU2JRczdJTk43SFdlQnFwOWdNSS8wTlMyam4wQU0rY1M1SS9CYUQ5R1NNYnFHYVV1QkdmbGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJ2eHJvdWdabE1jOS9udFJnaTVPVGlJY2ZhN09xQWQwNnJSbGppQlpHWnBJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTA2MzkyOTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjNERkQ4RDY5ODBEMDIwM0NGOEFFQTQzNkI0QjIwOTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzY5MDA5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV2taNGtyeURRdEdwa3Mzc19DSl9IdyIsInBob25lSWQiOiJhMjNiOWQ3YS05MGMyLTQxMzUtOTUxNy1hZTI1MTk1Yjc5ZGIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1ZIOEZVcXUrQWkxUkloU21ma0tVT2FyWlhZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFhVHhsMWdoQ3JxNFJBVnNXbXMvTnFtTCt5cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1UlJSQVg2USIsIm1lIjp7ImlkIjoiMjM0NzA1MDYzOTI5MzoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJFTU1JLS0tQ1JZUFRPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLKzM3ZXdFRU52cTZiY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3UVBROUpvcmVYaENTVHBJa2ZMa0FpTmRIdko3NUtGeHJ1UThka3hWdVFJPSIsImFjY291bnRTaWduYXR1cmUiOiJhRVFwYU1uNFB1UjZDbzN3d0JGVFI3dUVRNTFwSXNZdjYyRDFSNTc2YllQYTJrNVJhSVJidFBJM3JSeEF4bW85M3pMbUVSQ2pnL1lBL1dqUEZiT2FDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTmVnR2JuNWM4bnZWWHhpMXAwRlZtMUx6OEI1dzcxNjNDeXIySW9MbXRhT2duQ1IyQVh1cEhrZkpBRGFrOUR2SHMvQmZlWHBhN1pHTW1GNWhndTBXaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUwNjM5MjkzOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNFRDBQU2FLM2w0UWtrNlNKSHk1QUlqWFI3eWUrU2hjYTdrUEhaTVZia0MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2OTAwODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSExsIn0=" // session id here
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
