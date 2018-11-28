
client.on('message', message =>{

    if(message.content === '*ping'){

let start = Date.now(); message.channel.send('pong').then(message => { 

message.edit(\``js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms
`);

    });

    }

});