const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "marry",
        aliases: ["m"],
        version: "1.1",
        author: "MR.AYAN",
        countDown: 5,
        role: 0,
        shortDescription: "get a wife",
        longDescription: "",
        category: "love",
        guide: "{pn}"
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
      if(mention.length == 0) return message.reply("𝗣𝗹𝗲𝗮𝘀𝗲 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗦𝗼𝗺𝗲𝗼𝗻𝗲.. ❤️‍🩹");
else if(mention.length == 1){
const one = event.senderID, two = mention[0];
                bal(one, two).then(ptth => { message.reply({ body: "✨𝗛𝗬 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗙𝗢𝗥 𝗬𝗢𝗨✨", attachment: fs.createReadStream(ptth) }) })
} else{
 const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "✨𝗛𝗬 𝗧𝗛𝗜𝗦 𝗜𝗦 𝗙𝗢𝗥 𝗬𝗢𝗨✨" , attachment: fs.createReadStream(ptth) }) })
}
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "marry2.png"
    let img = await jimp.read("https://i.ibb.co/5TwSHpP/Guardian-Place-full-1484178.jpg")

    img.resize(600, 338).composite(avone.resize(75, 75), 262, 0).composite(avtwo.resize(80, 80), 350, 69);

    await img.writeAsync(pth)
    return pth
      }
