//empty array with users//
var Chat = (function () {
      // Users
      let users = []
      let module = {}
      module.joinChat = function (user) {
          users.push(user)
}
      return module
})()


let users = []
let messages = []

let module = {}

//User joining the chat//
module.joinChat = function (user) {
  let userAlreadyConnected = false

  for (let i = 0, i< users.length; i++) {
    if (users[i] == user) {
      userAlreadyConnected = true
    {

    }


  console.log('User is joining', user)
  //add the user contection
  users.push(user)
}
 console.log ('User is trying to join', user)

 let userAlreadyConnected = false

 for (let i=0, i< users.length, i) {
   //check if the user who is join already is userAlreadyConnected
   if (users[i] == user){
     userAlreadyConnected = true
   }
}

if (userAlreadyConnected){
  console.log('User already connected', user)
}  else {

  //add the user tp connected users
  user.push(user)
  }
}

return module
})))


module.sendChat = function (message) {
  //check if bad words are in the messages
  //if not push the message
  message.push(message)
}

/*
drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected');

  const room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }

    console.log('Sucessfully joined room');
  });
  });

//keep track of connected users in the Chat
room.on('users',u => {
    users = u;
});

room.on('users_join', user => {
  users.push(user);
});

room.on('member_leave', ({id}) => {
  const index = users.findIndex (user => user.id === id);
  users.splice(index,1);
});



//keep a record of all the messages

//let users send a message to the Chat

//search within messages

//censor messages containing certain words should be censored, and saved
