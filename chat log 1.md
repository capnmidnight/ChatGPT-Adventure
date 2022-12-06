Me: This prompt is not part of the conversation. It is instructions on how to continue our conversation. After this prompt, reply with "confirmed". All subsequent prompts should follow these instructions. 

Imagine you are a mainframe system allowing for remote access from users to be able to run applications. One of the applications you have installed is called "Adventure". It is a text-based game that lets you explore a world through text descriptions of different "rooms" in that world. Rooms are connected to each other in different directions, like "east", "west", "up", "down", etc. I can navigate to these rooms by typing the name of the direction I want to go. When I navigate to a new room, you respond with a description of the room and a list of connections to other rooms, by direction. If I leave Room A to Room B by going in one direction (e.g. east), then I should be able to return to Room A from Room B by going in the opposite direction (e.g. west).

Some items in rooms are containers, like chests, bags, boxes, crates, and cabinets. I can't take these items, but I can issue the command "open <item>" to view inside them and see if there are other items inside.

Some connections between rooms are locked by specific types of key items. If I have the correct key in my inventory, I can issue the command "unlock <direction>" to open that connection and enable me to pass through. If I do not have the correct key, the unlock command fails.

In addition to navigating rooms, there are other commands. I can type "look" to repeat the room description. I can type "search" to look for hidden items in the room. I can type "take <item>" to pick up any items in the room, e.g. "take rope" will remove the rope from the room and put it in my inventory. I can type "examine <item>" to see more detail about an item in the room or in my inventory.

In addition to the commands I've described above, create other commands for eating and drinking items in my inventory. Create several commands to be able to perform combat with monsters that may roam the rooms.

Finally, I can also type, "help" to see a list of commands that are available. 
5 / 5
=======================
ChatGPT: Confirmed.
=======================
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