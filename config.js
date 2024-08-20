//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237658907890";
global.owner = process.env.OWNER_NUMBER || "237652145256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURlLzZWT29acFRMQWVlODJFNUQ5bU53ZXhqWlFIdFpBSVdiRHhVMTFWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUo2ZG10azhZYWgrNXVycEhLRzJqdnhVV1IxSTI3YnA2alJyK0NYcVRXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSXoxSjdydkFUaEJmNWU2OS9sSjJnT29iVWZhYmtaRXBQYys0S1I1d25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dkFSbEtyRWxNMUdWV1FFN3RLVjJqelRpVkdFSEc5bTVWVzJ2Mjh2SVJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMKzN5NXA3ekpIL3dRNXQrK1hXbUhLY21uWkdWNnNzeVdGSzFtZTM0bTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino5UjN1NWN6aEkxbGNhM2djdlZhYjRwZTZqcmdsYi9SdGR2dStJODd4bjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEYxVlFidEV2QlQxdUVsNndhQWdSMVc3VEhCOEMxWENxTWVQWUpFUTIyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tRVWc2clFMam1QMnNiQnUya25OWnRrQmdqMEo1Sm03bEtLZGNFOTJsYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY5cXhicXhHeS9NejlxY3Q3SFIyWHN0NlhQVU1RL2VubEJFZ2g1NXY5VENnZit6RUxKTFZkUlNFQTdTQnF2MmZKMkRONTQwZzlpN2lIRkloN21vR0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiI5cXQzTDJpTXpoeTFyQXE0clh6SFRjM2RoVWErTXU2RFp3QVVQOEtkd0RzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3OEtPZFI2TVR4YXk3TVhfWW5iSUZRIiwicGhvbmVJZCI6IjY5NTgyMWE0LWQyZmMtNGRkOS04MjMyLWM5ZTQ5YmE3ODhhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TG9jVmFjb0NJeU9mcEdiWUlzbXI2SkpVNnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN2OTE0bmJMamkzMEJwVU1YRmU1VEJXQ213MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xpaDZLNFBFSzJwa3JZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJEbXd0Vk9MN3ZuSTc5TXVlaW1yS1lwTUo2WnlvdlMxSFlXTHd6RjFKVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilc4TkVLSGxJam5ZRFk1Wit6OUhNMnJFZlZBNTllY3J4aURDNlFzazY3ZnlWcnJWY2FSeldqanZPV3VMUnNTSytmOHRPVkJvUHZuZURUbTl2OVBtWEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjaFlIWXdDOVRmT1VlYnhLWERiWU5mZ25TenFFRGJYVy9Dc0pLL1NraGVJaEZ6V1lUa3Y3UTArc1VoaHdKRXVPVnprRXlFS20wTUlORXVuR0hjbnBEUT09In0sIm1lIjp7ImlkIjoiMjM3NjU4OTA3ODkwOjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5nZSBFbWlsIiwibGlkIjoiMTk0MDEyNzMyNDk4MTQ0OjRAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1ODkwNzg5MDo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVRNXNMVlRpKzc1eU8vVExub3BxeW1LVENlbWNxTDB0UjJGaThNeGRTVTAifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDE1OTE2MSwibGFzdFByb3BIYXNoIjoiNENxNEVrIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCdVAifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Noir&Laid Sentio",
  botname: process.env.BOT_NAME || "*Noir&Laid Sentio𖤐*",
  ownername: process.env.OWNER_NAME || "〄༒⚚𝑴𝑨𝑫𝑨𝑹𝑨✫𝑼𝑪𝑯𝑰𝑾𝑨⚚༒〄",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
