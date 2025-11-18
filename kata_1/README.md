> **Part of [fe-bootcamp](https://github.palantir.build/education/fe-bootcamp)**

# fe-chatter-basic

> **Elevator Pitch**  
> Chatter is a new approach to [online chat](https://en.wikipedia.org/wiki/Online_chat).
> It's the next step in the 40-year evolution of real-time short-message communication
> in the digital arena.  Chatter will liberate you from all of the chat annoyances you've 
> chafed under in the past. Less restrictive than Twitter.  More disruptive than Slack.
> Greater protocol freedom than IRC.  Chatter will be a game-changer!

## Instructions

Write a simple browser-based chat client using only HTML, CSS, and ES5-style Javascript. 

This first version will just display locally-generated messages. We'll then expand on 
this same project in later exerices to explore more advanced tooling.

### Initial setup

You will only need to edit `index.html` for this exercise.

`lib/chatter-service.js` will provide you some sample messages to process.
Look over this code before you start to understand what you'll be working with.

The `lib/` folder also contains JQuery, which you can use if you want to. 
You may also add additional libraries here if you like.

### Requirements

* Add some CSS style so that the messages are a little more readable
* Show the time that each message was created.
  * Import a library (such as a [Moment.js](http://momentjs.com/)) to show this 
    in a user-friendly style.
* Allow the user to follow the stream of incoming messages
  * Perhaps add an Update button, or else update the view regularly every few seconds.
  * If updating regularly, you may want a Pause button
* Allow the user to click on a username to see/follow only messages from that user
  * And some way to return to the full stream
* Allow the user to post messages of their own to the stream

### Optional Additions

* With all of these messages, the page will get really long over time.  Find a way 
  to cap the number of messages shown on the page at some reasonable max, but still 
  allow the user to see the full set if they want to (such as by clicking a button 
  or loading more whenever they reach the bottom of the page).
