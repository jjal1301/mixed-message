const getNumber = num => Math.floor(Math.random() * num);

const messagesAvailable = {
    animal: ['dolphin','cow','sheep','cat','lion'],
    sentence: ['Get out!','Welcome to my house!','Come here!','Silence please!','I\'m not available'],
    sound: ['Rrrrrr!','Mooouuu!','Meee!','Meow!','Raaawrr!']
}

const message = [];

for (let prop of Object.keys(messagesAvailable)){
    const randomNumber = getNumber(messagesAvailable[prop].length);

    message.push(messagesAvailable[prop][randomNumber]);
}

console.log(message.join('\n'));