/*
An overall module for a chat application
• Keep track of connected users in the chat
  - A user should have a unique identifier, otherwise they should not be allowed to join
  - A user also needs to be able to leave
• Keep a record of all the messages
• Let users send a message to the chat
  - A message need to contain: A message, a send date and an author
• Search within messages
  - By content and by author
• Censor messages containing certain words
  - Censored messages should still be saved
• A window/box to display chat messages in
• A list to display connected users on
• A field to input chat messages in
• A field to search for messages in
  - A place to display the search results (you could reuse you main view for regular messages)
  */


// Module
var Chat = (function () {
  // defining array of users
  let users = []
  let messages = []
  let badMessages = []
  let module = {}

    //User joining the chat//
    module.joinChat = function (user) {
      alert('User is trying to join', user)

      let userAlreadyConnected = false

      for (let i = 0; i< users.length; i++) {
        //evaluating if user is in users-array
        if (users[i] == user) {
          userAlreadyConnected = true
          alert('User is joining', user)
        }
      }
      //if user is already connected
      if (userAlreadyConnected){
        alert('User already connected', user)
      }  else {
        //add the user to connected users
        users.push(user)
      }
    }

    //censoring messages before sending
    module.sendMessage = function (message) {
      //check if bad words are in the messages
      let badWord = "poop" //it is case sensitive

      if (message.message.indexOf(badWord) != -1) {
        // There is a bad word
        alert('Message got censored', message)
        badMessages.push(message)
      } else {
        messages.push(message)
      }
    }

    //search for words in messages
    module.searchMessage = function (keyword) {

      let results = messages.filter(m => {
        //does this current message match what I'm looking for
        return m.message.indexOf(keyword) != -1
      })

      return results
    }

    module.leaveChat = function (user) {
      alert('User is trying to leave', user)
    }

    return module
})//End of module

//messages
function ChatMessage(message, user){
  this.message = message
  this.user = user
  this.createdAt = new Date()
}

//display messages
let message = new ChatMessage("besked", "bruger")

//messages.push(message)
Chat.sendMessage(message)

alert("Search results:", Chat.searchMessage("ord"));
