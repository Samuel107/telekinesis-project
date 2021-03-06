# Nutmeg Project
Unity Google Cardboard VR Application

A classmate and I decided to start working on creating a virtualy reality application for iPhones/Androids using Unity. We presented our VR application in one of our IUB classes to demonstarte the uniqueness of virtual reality. I really enjoyed my time working with VR so I decided to continue working on the project in my spare time. I will be posting mostly Javascript (and some C#) that I created, along with a short screenshot video to demonstrate the script in Unity. My goal is to create simple, understandable scripts that works with the Google Cardboard magnet input. There are a few things that you need to set up before using these exact scripts which I will not go over (such as using certain components on gameObjects, moving Google Cardboard folder since C# files are compilied before Javascript which can cause conflictions, or hierarchy order of GameObjects). 

I recommend using Unity 5.3.3f1 with my scripts as other version will most likely cause errors. The Cardboard SDK for Unity I used is version 0.7.2 (or maybe 0.6.0, no clear cut answer). I will be using the prefabs CardboardMain for headset motion tracking and CardboardReticle for crosshairs/gameObject selection. You get these when importing the Cardboard SDK for Unity (link will be below to download this). Note the Cardboard SDK requires Unity 5.2.1 or later on 5/17/2016. The OS I will mostly be working on is Windows 7/10, but will be importing zip to Mac to build for iPhones. All testing is done on iPhone 5s.
https://developers.google.com/cardboard/unity/download

If anyone would like further explanation or have questions on how I used these scripts in Unity, go ahead and email me at selefthe@indiana.edu. If you would like a copy of the unity project, have any ideas of what I should make, or any tips/tricks, let me know! I like sharing/hearing thoughts and ideas from people. I am somewhat familiar with Javascript, Unity, but this is my first time using GitHub so please bear with my unorthodox skills. 

###### Edits:

*5/19/2016:* I am starting to become very limited with just a single input (cardboard magnit), so either I will make an ingame control panel with buttons (allowing more workarounds) or start making functions with focusing on gaze input. 

*5/23/2016:* Screenshot videos are coming very soon. Seeing is better then reading after all. 
	
*5/26/2016:* I ran out of ideas so I am taking a break with this project until some inspirational ideas hit me in the head. I have short gifs up in each readme.md to show off the scripts. 

*5/30/2016:* Having some major issues getting it to work on iOS. I will most likely have to back track to a version that worked then continue with the new stuff slowly to find the problem. This will take a while.


## Goal

The main goal of this project is to properly implement working VR scripts into a program. I am not focusing on beautiful visual or audio aspects. This will be just a simple demo to demonstrate the scripts.

The next stage is to use these VR scripts as referrences to create a complete VR application while focusing on visual/audio/functionality aspects. This will be another project in the future. I will most likely developing it for a Oculus Rift. Hopefully I can get my hands on one. I will be looking for people to collaborate with, whether its code programmers, 3D model artists, audio makers, or even just creative people for future projects.

## Project Layout

#### Software Using: 
Unity 5.3.3f1, Blender3D Modeling (For Quick Editting)

#### Title of Project: 
Fabulous Nutmeg (Working Title).

#### Theme of Room:
Outdoor Playground Area.

#### Controls / Inputs:
	
Google Cardboard Magnet: Lets You Interact With The World In Different Ways
	
	1a) Pick Up: Hover Crosshair Over Object, Trigger Cardboard Magnet To Pick Up
	1b) Throw: Once Object Is Picked Up, Trigger Again To Throw
	2) Movement: Walk Around At A Slow Pace With Two Quick Trigger Pulls, Look In Different Directions To Walk That Way

InGame Control Panel: Allows More Possibilities, Use Cardboard Magnet Click While Looking At One Of The Buttons

	1) Button 1 - Activate Game Objects In Scene
	2) Button 2 - Bomb Minigame (My classmate made this, so I will not show code or video of it)
	3) Button 3 - Zero Gravity To Moveable Objects
	4) Button 4 - Reset Scene (The scene gets messy pretty quick)
	5) Button 5 - Gives Ability To Shoot Bullet/Grenades 
	6) Button 6 - Changes Scene
	7) Button 7 - Spawns Black Hole (All moveable items pulls to it)

###### Other Ideas:

Razer Hydra: 

Using Razer Hydra for Hand Tracking. Asked a fellow classmate about it. Motion tracking with Razor Hydra isn't completely accurate when he tried creating with it (though it was his first time using it). Probably will stick with just headset in this project.

Have crosshair (raycaster) be put on one of the controller. Not headbased choosing, now you must point your controller to manipulate GameObjects.

#### Environment:

Lighting: Sun

Textured Walls and Floors: Grass, Woodchips, Brick Walls (Going off playground theme).

Objects Floating Around: Gravity On/Off Switch for GameObjects That Can Be Manipulated.

List Of Random Objects To Be Put In (Only using free imports from Unity asset store): 
	Whale,
	Bowling Ball,
	Lamp,
	Chairs,
	Table,
	Tire,
	Shoes,
	Pictures,
	Fruits/Food (Apple, Banana, Oranges),
	Manakin,
	etc etc.

When Manipulating Object (Moving, Have Control), Have Particle Effect or Glow On Object.
    
    
#### Sounds:

Background Music: Simple music, though change in music for different situations.

Sound Effects: Grabbing Objects, Object Collisions.
