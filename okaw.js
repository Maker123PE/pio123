// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/51902679067?text=bang+aku+mau+donasi+i+love+yuuu'
global.ig = 'https://instagram/@syssolutionsperu' // ubah aja
global.ofc = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'
global.okta = 'https://taaofc-panel.my.id'
global.gh = 'https://github.com/Maker123PE'
global.email = 'Syssolutions.Peru@Outklook.com' //serah
global.region = 'Peru' // serah
global.dana = '51902679067'
global.gopay = '51902679067'
global.pulsa = '51902679067'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['51902679067'] // ubah aja pake nomor lu
global.premium = ['51902679067']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // ubah aja ini nama sticker
global.ta = '•' //cuma simbol
global.author = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'oka' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./baseoka/image/thum.jpeg") 
global.good = fs.readFileSync("./baseoka/image/good.jpeg") 

//doc
//global.doc = pickRandom(["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"])

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ loo',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ loo',
    group: 'Fitur ini buat _*Group Chat*_ loo',
    private: 'Fitur ini buat _*Admin Group*_ loo',
    wait: 'Lu olang tunggu bentar loo',
    endLimit: 'Lu olang punya limit sudah abis, tunggu jam 12 malam untuk reset',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ loo'
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})