Sixth Script Made:

Function: Gives the ability to shoot out objects (objectFired). You can customize the object to include cool effects like explosions.

Notes:

I am starting to get very limited with the single input, I am going to start turning off and on scripts for simple input use. The scripts I turned off was moving script and pick up object script.

The runtime will be huge (if I have alot of "abc" gameObjects) since I am changing each individual script, but I had to do it this way since I used a component event trigger/raycaster (limiting scripting skills). Next project I will do everything from script (no raycaster or event system/trigger components, everything scripted) so I can easily just change around the raycaster script, making the time complexity faster. Then again, now I'm curious that if it was possible to just turn off raycaster, since we do not use raycaster in shoot ability. Would have saved me alot of time. I'll try it later, but for now, its working.

![Example Video](https://i.gyazo.com/35f712cfedbdef8b553d8a0298da8356.gif)

-

*5/31/2016:* I decided to make this more fun by adding a gernade as the object being fired:

![Example Video](https://gyazo.com/9c85201fadf4b443a48072bd812327c8)

