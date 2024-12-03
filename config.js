import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.botNumberCode = ''
global.confirmCode = ''
global.owner = [
   ['51985817138', 'Dinito.xtlv', true]
  ['5493876639332', 'ianalejandrook15x', true],
]
global.mods = ['50587043137']
global.prems = ['50587043137']

global.sessions = 'session'
global.jadi = 'jadibot'
global.vs = '0.0.1'
global.languaje = 'Español'
global.nameqr = 'Bot'
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'

global.botname = '《■DINITO-MD■》'
global.author = 'Dinito.xtlv'
global.dev = 'Ian'

global.grupos = ''
global.grupo2 = ''
global.grupo3 = ''
global.channel = ''
// Rutas de imagenes
global.imagen1 = fs.readFileSync('.//Menu.jpg')
global.imagen2 = fs.readFileSync('.//Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.avatar = fs.readFileSync('./avatar_contact.jpg')

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment
global.multiplier = 69
global.maxwarn = '1'

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '《■DINITO-MD■》', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.esti = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": `《■DINITO-MD■》`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `WhatsApp Bot`, 'jpegThumbnail': catalogo }}}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
