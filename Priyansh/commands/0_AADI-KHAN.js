const fs = require("fs");
module.exports.config = {
  name: "pari",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("PARRI") ||
     react.includes("Pair") || react.includes("ꜛ-ᰔᩚː᭄") || react.includes("pair") ||
react.includes("PARI") ||
react.includes("Pẫřı֟፝ı") ||     
react.includes("@ꜛ-ᰔᩚː᭄乛 Pẫřı֟፝ı Oīīx'ฝꜛ-ᰔᩚː᭄")) {
    var msg = {
        body: `𝐈𝐓𝐙 ____ 𝐏𝐀𝐑𝐈\n\n\n❤️‍🩹`,attachment: fs.createReadStream(__dirname + `/noprefix/b69f163f2ffe171d94fff030ffd090e8.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }