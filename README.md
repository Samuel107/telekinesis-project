# Telekinesis Project
Unity Google Cardboard VR Application

A classmate and I decided to start working on creating a virtualy reality application for iPhones/android. We presented our VR application in one of our IU Bloomington classes to demonstarte the uniqueness of virtual reality. I really enjoyed my time working with VR so I decided to work on the project in my spare time. I will be posting my Javascript here that I create, along with a short screenshot video to demonstrate the script in Unity. My goal is to create simple, understandable scripts that works with the Google Cardboard magnet input. There is a few things that you need to set up before using these exact scripts which I will not go over (such as putting certain components on gameObjects, moving certain files since C# files are compilied before Javascript, or hierarchy order of GameObjects). 

I recommend using Unity 5.3.3f1 with my scripts as other version will most likely cause errors. The Cardboard SDK for Unity I used is version 0.7.2 (or maybe 0.6.0, no clear cut answer). I will be using the prefabs CardboardMain for headset motion tracking and CardboardReticle for crosshairs/gameObject selection that you get when importing the Cardboard SDK for Unity (link will be below to download this). Note the Cardboard SDK requires Unity 5.2.1 or later on 5/17/2016. The OS I will mostly be working on is Windows 7/10, but will be importing zip Unity project to Mac to build for iPhones. All testing is done on iPhone 5s.
https://developers.google.com/cardboard/unity/download

If anyone would like further explanation or have questions on how I used these scripts in Unity, go ahead and email me at selefthe@indiana.edu. If you would like a copy of the unity project working, have any ideas of what I should make, or any tips/tricks, LET ME KNOW! I like sharing/hearing thoughts and ideas from people. I am mostly a beginner to Javascript, Unity, and first time using GitHub so please bear with my sloppy, unorthodox skills. 

*Edit 5/19/2016*  ||  I am starting to become very limited with just a single input (cardboard magnit), so either I will make an ingame control panel with buttons (allowing more functions) or start making functions with gaze input with magnit input. Screenshot videos are coming very soon. Seeing is better then reading after all.

## Goal

The main goal of this project is to properly implement working VR scripts into a program. I am not focusing on beautiful visual aspects or audio. This will be a demo to demonstrate off the scripts.

The next stage is to use these VR scripts as referrence to create a complete VR application with visual/audio/functionality aspects at 100% complete. This will be another project in the future. I am thinking of developing it for a Oculus Rift. Hopefully I can get my hands on one! I will also be looking for people to collaborate with, whether its code programmers, 3D model artists, or audio makers in this future project. I will post here in the future when I am looking for people. Though I want to get comfortable enough in my skills first, before trying to create a group.

## Project Layout

#### Software Using: 
Unity3D 5.3.1/5.3.3, Blender3D Modeling (For Quick Editting)

#### Title of Project: 
Fabulous Nutmeg (Working Title).

#### Theme of Room:
Outdoor Playground Area.

#### Controls / Inputs:
	
Google Cardboard: Manipulating objects with single button click on headset.

Headset Movement: Two quick button clicks

Crosshair with headset: wherever you look, crosshair follows with center of headset camera

Shooting Ability with button input: Launches object forward at high velocity

###### Future Ideas:

Controller Movement With Razer Hydra? (Like left controller stick input can move camera around, while right controller can be arm that can control objects?)	**Ask a fellow classmate about it. Motion tracking with Razor Hydra isn't completely accurate when he tried (first time he used them though). Probably will stick with just headset in this project.

If access to tracking controller movement for arms, have crosshair (raycaster) be put on one of the controller. Now you must point your controller to manipulate GameObjects.

#### Environment:

Lighting: Sun, maybe street lamps later in project.

Textured Walls and Floors: Grass, woodchips, brick walls (Going off playground theme).

Objects Floating Around: Gravity On/Off Switch for GameObjects that can be manipulated.

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

When manipulating object (moving, have control), have particle effect or glow on object.
    
    
#### Sounds:

Background Music: Simple music, though change in music for different situations.

Sound Effects: Grabbing objects, Object collisions.
