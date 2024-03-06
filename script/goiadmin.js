module.exports.config = {
	name: "goiadminn",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will rep ng tag admin or rep ng tagbot",
	usages: "",
	hasPrefix: true,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {
	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"hiiii!!!",
					"this could take a while, she's probably lost again 😗",
					"My Creator is currently offline 😢",
					"𝗍𝖺𝗀 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇 again and I will accidently violate all your backdoors 🙂",
					"busy pa ata yun kaya mag-antay ka","🖕🏿", "👀", "wanna see a magic trick?", 
					"leave a message after the beep...🛸",
					"She ignores me too, Why dont you add her instead https://www.facebook.com/100029520645001 😏",
					"You are grounded!"
				];
				api.setMessageReaction("😍", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ admin }) {
};
