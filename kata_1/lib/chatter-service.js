// Core Chatter service -- a history of users and messages sent
//
var chatter = {
  users: {},   // keyed by username, each user object include a history field
  history: [], // all messages as a single stream

  // Creates a user with the given username, initializing an empty history for them.
  // Returns the new stored user (truthy), or null (falsey) if the user already exists.
  //
  addUser: function(username) {
    if (username in this.users) {
      return null; 
    }
    return this.users[username] = {
      username: username, // to support any later reverse-lookup
      history: [],        // log of this users's sent messages
      // room for additional user details later
    };
  },

  // Adds the given text message from the given user the Irk history.
  // If fromUser doesn't exist yet, they will be created.
  //
  sendMessage: function(fromUser, text) {
    var msg = {
      from: fromUser,
      text: text,
      sent: new Date()
    }
    this.addUser(fromUser);  // make sure they exist
    this.users[fromUser].history.push(msg);
    this.history.push(msg);
  }
}


// Generate some sample Chatter messages using the above service
//
var chatter_demo = function() {
  var users = ['1b1s1b', 'NOOP', 'affluwent', 'do99ee', 'sweetLowRain',
    'CROvoiceWD', 'kittykitty', 'live4candy'];
  var parts = [ 
    ["I'd rather ", "You should ", "I heard you can't ", "Just learned not to ",
    "Please don't ", "If we don't stop them, the government will soon ",
    "I'm planning to ", "Life is just better when you can ", "Let's ", 
    "About to ", "Tonight, I'm going to ", "Suggest you ", "I want to ",
    "Support says we might be able to ", "Today, I learned how to ", "I'll "],
    ["eat ", "feed ", "modify ", "upgrade ", "hide ", "regulate ",
     "liberate ", "steal ", "open-source ", "poison ", "inject ",
     "argue with ", "document ", "recover ", "hug ", "gut ", "save ",
     "try it with ", "engrave ", "test ", "trash ", "catch ", "catch ",
     "find ", "shuffle ", "juggle ", "fix ", "train ", "sugar-coat ", 
     "stop ", "reverse-engineer "],
    ['the ', 'the ', 'the ', 'the ', 'the ', '', 'their ',
     'more ', 'the rest of the ', 'all of the ', 'all of the ', 'some ', 'all ',
     'some of the ', 'all the ', 'the remaining ', 'your ', 'your ', 
     'all of your ', "last year's "],
    ['printer paper', 'bees', 'hedgehogs', 'code', 'servers',
     'viruses', 'malware', 'spoons', 'knives', 'monitors', 'financial records',
     'overly-ripe kiwis', 'cucumbers', 'desk chairs', 'code monkeys',
     'sleepless nights', 'socks', 'trolls', 'fears', 'problems', 'files',
     'smartphones', 'dirty pizza boxes', 'dishes in the sink', 'tennis balls',
     'tears', 'hard drives', 'downloadable content', 'executables', 'hours spent',
     'commits', 'frequent trips to the restroom'],
    ['.', '.', '.', '.', '.', '.', '!', '!', '...',
     '.', '.', '.', '.', '.', '.', '!', '!', '...',
     '.', '.', '.', '.', '.', '.', '!', '', '', 
     ' out there.', ' in my house.', ' in the office.', ' by EOD.'],
    ['', '', '', '', '', '', '', '', '', '', '',
     '', '', '', '', ' #call2action', ' #truth', 
     ' You heard it here first.', ' #morethan1waytodoit']
  ];

  // send a single random message
  var send = function() {
    var user = users[Math.trunc(Math.random() * users.length)];
    var text = '';
    // build a test message by choosing randomly for each part
    for (var i = 0; i < parts.length; i++) {
      text += parts[i][Math.trunc(Math.random() * parts[i].length)];
    }
    chatter.sendMessage(user, text);
  }

  // send 10 initial messages
  for (var i = 0; i < 10; i++) {
    send();
  }

  // start a random addition every 1 to 4 seconds
  var repeating_delayed_send = function() {
    send();
    setTimeout(repeating_delayed_send, Math.random() * 3000 + 1000);
  }

  // kickoff message generation
  repeating_delayed_send();
}

// press the demo start button
chatter_demo();
