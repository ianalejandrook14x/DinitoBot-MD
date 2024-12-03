let handler = async (m, { conn, isRowner }) => {
    const newName = m.text.trim().split(' ').slice(1).join(' ');
  
   
    if (!newName) {
      return m.reply('> Eliga un nuevo nombre para el bot');
    }
  
   
    global.botname = newName;  
  
    
    m.reply(`> El nombre del bot a sido cambiado a: *${newName}*`);
  
  
  };
  
 
  handler.help = ['setname'];  
  handler.tags = ['set'];
  handler.command = ['setname']; 
  handler.rowner = true

  export default handler;
  
