Sixth Script Made:

Load Unity Scenes

Notes:
	
Straightforward script, though I did this in C# because it was a real pain to get LoadScene to work with Javascript. I really should have done most of my scripts in C#, considering there is more support out there.
	
-

Important Note: 

You must do this before you are able to load scenes. File -> Build Settings -> Add Open Scene Button. This will add the scene that you are currently on into your build. Do this for each scene you want to load.
			
Also if you do not have visual studios installed (either one that you download with or by itself), you may have a issue with audiopluginvrunity.dll using Windows 7. This error causes no audio play on Windows 7. Though I read that the sound plays on iPhones/Androids. (This info above is from one of the forums). More info on this after I solve this issue for myself, I am not worried about it at the moment. 

-
		
In each scene, I have a InGame button that you click to move on into the next scene. Each button has a different function that leads you to a different scene, making a loop. My scenes included a very nicely done outerspace skyboxes. These skyboxes are very popular in the unity store. I greatly recommend it and its free! Well done Hedgehog Team.

Link: Skybox Volume 2 (Nebula) - Publisher: Hedgehog Team - https://www.assetstore.unity3d.com/en/#!/content/3392
		
Also if you are going to put some background music in a space theme, I recommend the 2001 Space Odyssey Theme Song. So good.

![Example Video](https://i.gyazo.com/aa23642fc58d60f316272dce402109a4.gif)
