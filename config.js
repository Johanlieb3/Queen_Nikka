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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRRcnEyKzZvQ0hjazY4eGdWd3ZNdEVmVWM4cXFtVzZ0V2pEeDRnTHRWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGx0VWN5MmUyQTVMck9odDVVN0VLd1FUV0JCNFpnS0tJaU1RRHZ4ai9Haz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRUlPbjZ4NTJVYjhTS1dDb0NaeHVwWnJPcHQ3MzhVNzhlYlMzK2o5T0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdysyeFY0OS92bWkzNmdiMkRQeGJYZGNQTUNxdzFiZHJDbExMbVpBUEZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDRjllaG5raVVWMlVrSWtBUUpSTmhUZkI3WkpHZk5PNU9qNlgxdjE4VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0ybHhpc2tnWUJ3aWVGQzRPcFdoMjJPajNBNTQ5aVlZU055WEUvTjEzRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk16RHBtT25ESFgrNE9WVmxZbVhwZG80clJOa1J2cFdZNVZ2N3p6R2ZsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZRajM5ZVIzUEdLNWxIN2l3Wkx3cjlxWTFTeWx4QXZCSk1xQkp1dHFqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhIMzNVZlA3ajd5R0VJRm5XTW5FUVhydjB2Z1NtNTZRTCswL1NsN3pFRWRvTytsQk1GY3QvbGJJMFpITkhvNnJzRWZYMm1NbUltT3hJZWZSR0ZKb0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiIyR3BZODEvNjlFbDRmYkV0OEdncDZpUFBNaXUrVmtIVmlYUXlPYk5aR2ZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdDNoRDVxUFJBLXg5Wk1DV3FoZ2ZBIiwicGhvbmVJZCI6IjY5OTMwMmViLTc5NmEtNDFkOS1iZWZkLWQ4NzRlNzFhYzgzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZk1zV2toSEVyTkwwdmpqQnlQYUdObVAyeVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnZDSmhZMFY2K01wdHE5U0tyVjVkcndmV2FnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVUN1Y1UFhEIiwibWUiOnsiaWQiOiIyMzQ5MTM0NDU3NTA5OjQyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlI3wnZSS8J2Tl/CdlITwnZSRIPCdlI/wnZOY8J2UiPCdlIXwnZSI8J2TofCdlJfhrYThtL/htLHhtLDhtLjhtLXhtLzhtLoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x1enJiY0hFUHVnMnJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ4bDFhQVBPaFNCQjEzdGdMd0NiQm92aGYzaVVGQ2dQTmxFN3hwem85a0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVCWElKSTExRzY0NUpESGFXT0ppbGJyc2J6bVFmNkRJRXRiWGM5Wi9JVnJ5SEUvVGs3ZW5JbW9ya2x3MERRTmRXS1g0Sm82dDZiL1ZjUlhOZXZLN0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRZUw3MVAybU11Y0JjNmUwdlEzTzN5UjRWY0ozL0I4dFpxdUFWck9SU2M4OXRrb21GU1VudnJZWVNxMktxbzlEcnNUZnBaQ04zbHdqZU1FaEpCbmxEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzQ0NTc1MDk6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDhaZFdnRHpvVWdRZGQ3WUM4QW13YUw0WDk0bEJRb0R6WlJPOGFjNlBaQiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzQzNDg4OH0=" // session id here
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
