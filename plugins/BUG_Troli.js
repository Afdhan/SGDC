const { MessageType } = require("@adiwajshing/baileys")
let handler = async(m, { conn, text }) => {
	let own = "6282252655313@s.whatsapp.net"
	if(m.sender != own) return m.reply(`Fitur Ini Hanya Bisa Digunakan Oleh Owner @${own.split("@")[0]}`, { contextInfo: { mentionedJid: [own] }})
	if(!text) return m.reply("_Masukkan Teks!_")
	if(text.length > 10) return m.reply("Teks Terlalu Panjang! Maksimal 10 Huruf")
	m.reply("Timeout 5 Detik!")
	setTimeout( () => {
	conn.sendMessage(m.chat, text, MessageType.extendedText, { 
  quoted: { 
          key: { 
            participant: '0@s.whatsapp.net'
          }, 
          message: { 
              orderMessage: {
              itemCount: 9999999,
              status: 1, 
              surface: 1, 
              message: 'SGDC-BOT', 
              orderTitle: '@SobatGretong',
              sellerJid: '0@s.whatsapp.net'
              }
          }
       }
    })
 }, 5000)
 conn.clearMessage(m.chat, m.key.remoteJid)
}

handler.command = /^(troli)$/i

//  MUHAMMAD AFDHAN

module.exports = handler