

var Chat = (function () {
  // defining array of users
  let users = []
  let module = {}

  module.joinChat = function (user) {
    users.push(user)
  }

  //check if user is connected
  for (let i = 0, i< users.length; i++) {
    if (users[i] == user) {
      userAlreadyConnected = true
    }
  return module
  }
})()

//User joining the chat//
module.joinChat = function (user) {
  alert('User is trying to join', user)

  let userAlreadyConnected = false

  for (let i = 0, i< users.length; i++) {
    //evaluating if user is in users-array
    if (users[i] == user) {
      userAlreadyConnected = true

      alert('User is joining', user)

      //add the user connection
      users.push(user)
    }

    //if user is already connected
    if (userAlreadyConnected){
      alert('User already connected', user)
    }  else {
      //add the user to connected users
      users.push(user)
    }
  }

  return module
})))

//messages
let messages = []

function ChatMessage(message,date,user){
  this.message = message
  this.user = user
  this.createdAt = new Date()
}

//display messages
let message = new ChatMessage(userInput, user, createdAt)
message.push(message)

//search for words in messages
let keyword = "hello" //it is case sensitive

let results = messages.filter(m => {
  //does this current message match what I'm looking for
  return m.message.indexOf(keyword) !== -1
})

//censoring messages
module.sendChat = function (message) {
  //check if bad words are in the messages
  let badWord = "poop" //it is case sensitive

  let results = messages.filter(m => {

  //does this current message match what I'm looking for?
  return m.message.indexOf(badWord) == -1

  //if word not present push the message
  message.push(message)
}

//Censoring filter
var Filter = require('bad-words'),
filter = new Filter();

//bad words what should be filtered out
filter.addWords(['poop', 'fart', 'boobs']);
filter.clean(message)
