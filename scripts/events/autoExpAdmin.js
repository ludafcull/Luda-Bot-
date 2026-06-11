const config = require("../../config.json");

module.exports = {
  config: {
    name: "autoExpAdmin",
    version: "1.4",
    author: "Tu",
    countDown: 0,
    role: 0
  },

  onChat: async function ({ event, usersData }) {
    const { senderID } = event;
    const botAdmins = config.adminBot || [];
    
    if (!botAdmins.includes(senderID)) return;

    try {
      const userData = await usersData.get(senderID);
      userData.exp += 10000;
      await usersData.set(senderID, userData);
    } catch (e) {
      console.log("Erro autoExpAdmin:", e);
    }
  }
};