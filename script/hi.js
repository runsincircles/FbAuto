let hiFlag = true; // Initialize the hi flag

const config = {
		name: "hi",
		version: "2.0.0",
		role: 0,
		hasPrefix: true,
		credits: "Prince Osorio",
		description: "hi with sticker",
		aliases: [],
		usages: "",
		cooldown: 5
}

const handleEvent = async ({ event, api }) => {
		let KEY = [
				"hello",
				"hi",
				"hello po",
				// Add other keywords as needed
		];

		if (!hiFlag || !KEY.includes(event.body.toLowerCase())) return;

		let data = [
				"184002922217363", "184023658881956", "184003212217334", "184002655550723", "184003438883978", "2379545595403511", "1926234657415528", "4046655705381617", "4046877352026119", "4046884992025355", "4070816262965561"
		];
		const prefix = "";
		let sticker = data[Math.floor(Math.random() * data.length)];
		let juswa = ["Have you eaten?", "What are you doing?", "How are you senpai?", "I'm a chat bot nice to meet you", "I'm updating my commands, What are you doing?", "Can you interact with my admin (Cliff Vincent)", "You're so beautiful/handsome binibini/ginoo", "I love you mwa */kiss your forehead.", "Are you bored? talk to my admin", "How are you my dear", "Sana okay kalang.", "Are you ok?", "Be safe, Mwaa.", "Wag magpapagutom mahal.", `Use ${prefix}help to see my commands. `];
		let juswa1 = juswa[Math.floor(Math.random() * juswa.length)];

		let moment = require("moment-timezone");
		let hours = moment.tz('Asia/Manila').format('HHmm');
		let session = (
				hours > 0001 && hours <= 400 ? "Blessed Morning" :
				hours > 401 && hours <= 700 ? "Morning" :
				hours > 701 && hours <= 1000 ? "Morning" :
				hours > 1001 && hours <= 1100 ? "Morning" :
				hours > 1100 && hours <= 1500 ? "Afternoon" :
				hours > 1501 && hours <= 1800 ? "Evening " :
				hours > 1801 && hours <= 2100 ? "Evening.." :
				hours > 2101 && hours <= 2400 ? "Late Night Sleep Well..." :
				"error");
		let name = "User";
		let mentions = [];
		mentions.push({
				tag: name,
				id: event.senderID
		});
		let msg = { body: `Hi ${name}, have a Good ${session} Master🥰, ${juswa1}`, mentions };
		api.sendMessage(msg, event.threadID, (e, info) => {
				setTimeout(() => {
						api.sendMessage({ sticker: sticker }, event.threadID);
				}, 100);
		}, event.messageID);
}

const run = async ({ event, api }) => {
		hiFlag = !hiFlag; // Toggle the hi flag
		return api.sendMessage(`${hiFlag ? "on" : "off"} success!`, event.threadID, event.messageID);
}

module.exports = {
		config,
		handleEvent,
		run
};
