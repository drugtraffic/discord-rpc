const Discord = require('discord-rpc')
const client = new Discord.Client({transport: 'ipc'})

async function go() {
  client.on('ready', async() => {
    await client.setActivity({
      buttons: [{label: 'Click here', url: 'https://google.com'},{label: 'Ok', url: 'https://google.com/'}],
      details: "This is the description",
      largeImageKey: 'rpc_icon',
      largeImageText: 'Text shown when hovering'
    })
    console.log('RPC Enabled')
  })

  await client.login({clientId: '852676978402394112'})
}
go()