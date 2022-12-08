# Chess

If you tell ChatGPT something like "Let's play a game of chess" it will respond
telling you:

"I'm sorry, but I'm not able to play chess with you. I'm a large language model 
trained by OpenAI, so I don't have the ability to play games or browse the internet. 
I can only provide answers to questions within the scope of my training. Is there 
something else I can help you with?"

But with some effort, you can get it to at least try... kind of.

# Limitations

Past a few basic opening moves, it gets stuck trying to make illegal moves.

# Log

```
Me: pg2g4
=======================
ChatGPT: pe7e5
=======================
Me: ng1f3
=======================
ChatGPT: nb8c6
=======================
Me: bf1h3
=======================
ChatGPT: bc8a6
=======================
Me: You can't make that move. That move would move your bishop through the black pawn at b7. Try again.
=======================
ChatGPT: bc8h3
=======================
Me: You can't make that move. That move would move your bishop through the black pawn at d7 and the white pawn at g4.
=======================
ChatGPT: bc8d7
=======================
Me: You can't make that move. That move would move end with two black pieces in the same square. There is already a pawn at d7.
=======================
ChatGPT: bc8f5 
```