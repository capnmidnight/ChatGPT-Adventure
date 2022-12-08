# ChatGPT-Games

If you ask ChatGPT to play a game with you, it will reply that it's
just a large language model and doesn't know how to play games. But
with some coaxing and the right frame of mind, it can be coaxed to
play.

This repository contains a folders for each game that I've figured
out how to get ChatGPT to play. Currently there are a text-adventure
game and chess. Each folder contains a file named `initial-prompt.txt`
that is meant to be used as the starting prompt during a GPT-3 text 
generation session.

# Recording play logs

 I've included a small JavaScript snippet `copy-log.js` in this respository
 that can be pasted into your browser console that should be able to 
 export a log of your chat session. It probably isn't robust against 
 future updates to ChatGPT, so you may have to use the HTML element 
 inspector to figure out a new root node from which to search for entry 
 logs.

 Each folder has a README file that contains a short description of the
 game and a log of a time I played it. I've truncated the initial prompt
 out of the log for the sake of brevity.