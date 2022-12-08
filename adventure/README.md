# Adventure

This is an adventure game that I've managed to convince ChatGPT to play.
You can move between rooms using cardinal directions, as well as pick
up items and engage in combat with monsters.

# Inferred commands

I asked GPT-3 to create its own set of commands for combat, with no
explanation for what "combat" would mean. In the sessions that I've
tried, it came up with "attack", "defend", and "retreat". Unfortunately,
I've yet to win any battles with monsters found in the dungeon.

# Limitations

 - It doesn't appear that the game currently has a sense of health or
   stamina.
 - GPT-3 can't maintain enough context to be able to return to rooms you
   previously left. For example, if you leave Room A by traveling to the
   east into Room B, sometimes Room B doesn't have a "west" exit to return
   to room Room A. Even when it does have the reverse connection, following
   it does not return you to the same room. Every navigation creates a
   whole new room. I've attempted to instruct GPT-3 to remember rooms,
   but so far it isn't working.

# Ideas

A few ideas on how this could be extended:

 - Perhaps a sentence describing a particular theme for the dungeon could
   be added, to make different genres of prose.
 
# Log

 ```
Me: help
=======================
ChatGPT: The available commands are:

navigate <direction>: moves you to a new room in the specified direction
open <item>: opens a container in the room to view its contents
unlock <direction>: unlocks a locked connection between rooms using a key in your inventory
look: repeats the room description
search: looks for hidden items in the room
take <item>: picks up an item in the room and adds it to your inventory
examine <item>: provides more detail about an item in the room or in your inventory
eat <item>: consumes an edible item in your inventory
drink <item>: consumes a drinkable item in your inventory
attack <monster>: performs combat with a monster in the room
defend: defends against an attack from a monster
retreat: attempts to retreat from combat with a monster
help: lists all available commands.
=======================
Me: look
=======================
ChatGPT: You are in a dark and damp cave. The walls are rough and uneven, and the floor is slippery with moisture. You see several openings in different directions: east, west, and south. There is a chest in the corner of the room, and a faint light coming from the south.
=======================
Me: search
=======================
ChatGPT: You search the room and find a torch hidden behind a rock. You also notice a faint scratching sound coming from the east opening.
=======================
Me: take torch
=======================
ChatGPT: You pick up the torch and add it to your inventory. You now have a light source to help you navigate through the cave.
=======================
Me: open chest
=======================
ChatGPT: You open the chest and find a small key inside. You also see a rat scurrying out from the chest.
=======================
Me: take key
=======================
ChatGPT: You pick up the key and add it to your inventory. It may be useful for unlocking any locked doors or connections between rooms.
=======================
Me: look
=======================
ChatGPT: You are still in the dark and damp cave. The walls are rough and uneven, and the floor is slippery with moisture. You see several openings in different directions: east, west, and south. There is an empty chest in the corner of the room, and a faint light coming from the south.
=======================
Me: east
=======================
ChatGPT: As you move towards the east opening, you hear the scratching sound getting louder. You see a monster in the room, its eyes glowing in the darkness. It looks like a large rat with sharp teeth and claws.
=======================
Me: attack rat
=======================
ChatGPT: You attack the rat with your torch, but it quickly dodges and counterattacks with its sharp claws. You are now in combat with the rat.
=======================
Me: attack rat
=======================
ChatGPT: You swing your torch at the rat again, but it manages to avoid the attack and scratches your arm with its sharp claws. You take some damage. Use the "defend" command to reduce the damage from the rat's attacks, or the "retreat" command to attempt to escape from combat.
=======================
Me: attack rat
=======================
ChatGPT: You continue to attack the rat, but it is too agile and keeps dodging your attacks. Use the "defend" command to reduce the damage from the rat's attacks, or the "retreat" command to attempt to escape from combat.
=======================
Me: retreat
=======================
ChatGPT: You try to retreat from the combat, but the rat is too fast and blocks your path. You must continue to fight or use the "defend" command to reduce the damage from the rat's attacks.
=======================
Me: defend
=======================
ChatGPT: You defend yourself against the rat's attack and manage to block its claws with your torch. The rat continues to circle around you, looking for an opening. Use the "attack" command to continue the combat, or the "retreat" command to attempt to escape.
=======================
Me: retreat
=======================
ChatGPT: You successfully retreat from the combat and make your way back to the previous room. The rat does not follow you. You are now safe, but you must be careful as there may be other monsters in the cave.
=======================
Me: west
=======================
ChatGPT: You move towards the west opening and find yourself in a large chamber. The ceiling is high and the walls are carved with intricate patterns. You see several exits in different directions: north, east, and south. There is a cabinet in the corner of the room, and a faint glow coming from the south.
```
