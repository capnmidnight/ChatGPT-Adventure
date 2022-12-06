# ChatGPT-Adventure

This repository contains a file `initial-prompt.txt` that is meant
to be used as the starting prompt during a GPT-3 text generation
session.

The prompt instructs GPT-3 to perform a role as if it were a text-
adventure game, ala "Zork" or "Adventure". The prompt describes
the basic idea of rooms and connections between rooms, but leaves
the room descriptions up to the AI.

# Inferred commands

I asked GPT-3 to create its own set of commands for combat, with no
explanation for what "combat" would mean. In the sessions that I've
tried, it came up with "attack", "defend", and "retreat". Unfortunately,
I've yet to win any battles with monsters found in the dungeon.

# Ideas and issues

A few ideas on how this could be extended:

 - Perhaps a sentence describing a particular theme for the dungeon could
   be added, to make different genres of prose.
 - It doesn't appear that the game currently has a sense of health or
   stamina.
 - GPT-3 can't maintain enough context to be able to return to rooms you
   previously left. For example, if you leave Room A by traveling to the
   east into Room B, sometimes Room B doesn't have a "west" exit to return
   to room Room A. Even when it does have the reverse connection, following
   it does not return you to the same room. Every navigation creates a
   whole new room. I've attempted to instruct GPT-3 to remember rooms,
   but so far it isn't working.

 # Recording play logs

 I've included a small JavaScript snippet `copy-log.js` in this respository
 that can be pasted into your browser console that should be able to 
 export a log of your chat session. It probably isn't robust against 
 future updates to ChatGPT, so you may have to use the HTML element 
 inspector to figure out a new root node from which to search for entry 
 logs.
