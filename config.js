const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102813963";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_20_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNZREk2aUtWazBuWGtXenBscUZqeGt0bHVySmFFY2tXby84VWVsbWgwSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhZX3dwRVM1VDYyQ0tjNzBncnBMMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJlNWQzNmEtYjVhOC00NDc2LWFkZmEtMTQ1ZDczYTg5OTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgNzksXG4gICAgICA3MyxcbiAgICAgIDIwNixcbiAgICAgIDYzLFxuICAgICAgMTMsXG4gICAgICAxOTMsXG4gICAgICAxODIsXG4gICAgICAyMTgsXG4gICAgICAxMDEsXG4gICAgICA1NCxcbiAgICAgIDE4OCxcbiAgICAgIDQ1LFxuICAgICAgMjI3LFxuICAgICAgMjA4LFxuICAgICAgMixcbiAgICAgIDEzMyxcbiAgICAgIDE3NyxcbiAgICAgIDEwOSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDQ1LFxuICAgICAgMjYsXG4gICAgICA5MSxcbiAgICAgIDYzLFxuICAgICAgMjM3LFxuICAgICAgMTI5LFxuICAgICAgMjQxLFxuICAgICAgMCxcbiAgICAgIDg3LFxuICAgICAgMTU3LFxuICAgICAgMTksXG4gICAgICAxMjMsXG4gICAgICAxMzAsXG4gICAgICAxODksXG4gICAgICAyNDUsXG4gICAgICAyMzMsXG4gICAgICAyNTMsXG4gICAgICA4MixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSM1hKOEZIOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMjgxMzk2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ1MDAyNjg1ODkyNTU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQejVqNTBIRVBYcXNMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNNblZ4Q2tBWHZ1OWFSY2Q1Z0MxbWdlZnlRdjZ1RWJod0lvZ3pxY0k2Uzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVphU0hvKzEzcTVKVTRpTG9rZ09EUlpkZkM4MXBvb0dCZG4zQjdRM0tSYXhWbEhJQjhyQy9SSkVTRDcxa0JJanI4M1dnSEFnZmVSaEdLZmE3WFhvRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiem84TzNtZllJTkZoMWNFeUtHT0VubnVuRjYzRGJMbzhYTXVGNS9pU01OWjRVWXdmYkdkQkVILzJhdUx1SVdqN2dsVktOZm56UTlMR1AyZEtKNVFMQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMjgxMzk2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNjc2MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBWcC5qc29uIjogIntcImtleURhdGFcIjpcIlpDOGtFcHBUcW5saTVoS25lOUptVmZ3UFZRc0QyeDlZWnRQVFNQT2czT3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0MDEyNjk3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzY3NjE1MzI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
