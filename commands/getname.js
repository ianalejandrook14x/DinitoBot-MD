let handler = async (m, { conn }) => {
    const botName = global.botname || 'Bot'; 
    m.reply(`El nombre actual del bot es: ${botName}`);
  };
  
handler.help = ['getname']
handler.tags = ['set']
handler.command = ['getname', 'getnamebot', 'botname']
  
  export default handler;
  
