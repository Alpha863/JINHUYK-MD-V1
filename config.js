//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "224622503739";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZvRzR1NTRtSGU2aURnMm1FOERhbG9QdnZiVUZPNGZtUlIrMFppNkJHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTNnRE84UEdRR21EMDdyUTlkRzdRWUtvN090cTJDSzAzSmk4eWZjMDZpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT2dqRHFiYzVINGFVbEFPLzJWY3BRZk1MeG5GaHlnLzFYOG5GdVhxUWtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUUpyRUtKcTk4ZnlodU5haURyRW1mck5HRDdGMlVhbm9xMXVwajFBUWpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KN2FPaDRhcVI1M1dPVlpLVEVmcE83UG10cjVGQjV5VHY0ZlJMSytDbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkZVVuNkxPUlRGb2dmZE5LOEswRllGZHJMbzdUbVk1UDgrRHIwT2dwR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JlN2UrUkVJbktBcnZrcnJmcjNNbFRTVXhkZk1NM085bHBTdEJobjhVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlTdXdVcTc4SmhnNnZFd2U2OHo4YlYrRTd0dnFJUUhENVVObFNpOHprRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwrUm95RndFM29HTnZZYnJKSk9sSEJFRDBaRXhGQmxScDgvLzExdWFyamVtRnF1a3ZGR3lWSSttQ1BkVHVOYVZ4Y1dST0pqdWxoVVNnZXRLT05SUUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJZM0E1VTI1ak5Cc2EyV0lQQ0Y0Q3BKSWV2a1hCbU8wQTZOYWw4MkNPY2xrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlMVp2Nm82cVFiMnN2bEJNOWw2cGV3IiwicGhvbmVJZCI6IjNkZTRiNzVjLTkyMjYtNDBmMC05MzAyLWJkZmQzMjUxNWRmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhejZ2UTgyTzROK3Z3cnlGOHFXZlBuNHpDVFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFBaaHRRQmV1NTR4b3BIcU9ZVmdYQXRSMHdvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdLRkNSWU0yIiwibWUiOnsiaWQiOiIyMjQ2MjI1MDM3Mzk6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC8J2QjvCdkJHwnZCL8J2QhPCdkI7wnZCN8J2QhCDwnZCG8J2Qh/CdkI7wnZCS8J2QkyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkdhNmJvREVMR3Y3TDBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicTROSjFYSFBPZ1RRVEl5S0pPN0NFdVp0S2syY213dzVtdHpoUmJ1M04wbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZEIyWEo3ZzdwMnJudnNCVVlhSGVFeFlkWW1wK1VzR1A4QlRkdURhMlFqU29tcVRMd1oyVjNrcm02MkFyam4vZ1NnTE5lNFdVRUs5cDdPTzVEWGFkQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBidXFzbnpnSDdLOUNpUDNQSStzWWtwMkRKZ0ozbmNQRnhFanhoMGxRYXlsdGphdWNVYS9MY001bzJpWGdtNitKS3ZIMHl2MGV1dUZwVUFiSk00RUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI0NjIyNTAzNzM5OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXVEU2RWeHp6b0UwRXlNaWlUdXdoTG1iU3BObkpzTU9acmM0VVc3dHpkSyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDMxNDU1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDbnMifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
