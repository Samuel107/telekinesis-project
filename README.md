# Telekinesis Project
Unity Google Cardboard VR Application

A classmate and I decided to start working on creating a virtualy reality application for iphones (can build for android as well). We presented our VR application in one of our IU Bloomington classes to demonstarte the uniqueness of virtual reality. I really enjoyed my time working with VR so I decided to keep working on the project in my spare time. I will be posting my Javascript here that I create, along with a short screenshot video to demonstrate the script in Unity. My goal is to create simple, understandable scripts that works with the Google Cardboard magnet input. I will be using the prefabs CardboardMain for headset motion tracking and CardboardReticle for crosshairs/gameObject selection that you get when importing the Cardboard SDK for Unity (link will be below to get this). There is a few things that you need to set up before using these exact scripts which I will not go over (such as putting certain components on gameObjects, moving certain files since C# files are compilied before Javascript, or hierarchy order of GameObjects). 

I recommend using Unity 5.3.1/5.3.3 with my scripts as other version will most likely cause errors. The Cardboard SDK for Unity I used is version 0.7.2 (or maybe 0.6.0, no clear cut answer). Note the Cardboard SDK requires Unity 5.2.1 or later on 5/17/2016. All testing is done on iPhone 5s.
https://developers.google.com/cardboard/unity/download

If anyone would like further explanation or have questions on how I used these scripts in Unity, go ahead and email me at selefthe@indiana.edu. If you would like a copy of the unity project working, have any ideas of what I should make, or any tips/tricks, LET ME KNOW! I especially like sharing/hearing ideas from people. I am mostly a beginner to Javascript, Unity, and first time using GitHub so please bear with my sloppy, unorthodox skills. 

*Edit 5/19/2016*  ||  I am starting to become very limited with just a single input (cardboard magnit), so either I will make an ingame control panel with buttons (allowing more functions) or start making functions with gaze input with magnit input. Screenshot videos are coming as well very soon. Seeing is better then reading after all.

## Goal

The main goal of this project is to properly implement working VR aspects into a program. I am not focusing on visual aspects or 100% perfect audio. The main focus will be creating scripts that manipulating objects in different ways.

The next stage is to use these VR scripts to create a complete VR application. This will be another project in the future. 

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

Controller Movement With Razer Hydra? (Like left controller stick input can move camera around, while right controller can be arm that can control objects?)	**Ask a fellow colleague about it. Motion tracking with Razor Hydra isn't completely accurate he said, which is important with precisely manipulating game objects. Probably will stick with just headset.

If access to tracking controller movement for arms, have crosshair (raycaster) be put on controllers. So now you must point your controller to manipulate GameObjects.

#### Environment:

Lighting: Sun, maybe street lamps later in project.

Textured Walls and Floors: Grass, woodchips, brick walls (Going off playground theme).

Objects Floating Around: Gravity On/Off Switch for GameObjects that can be manipulated.

List Of Random Objects To Be Put In (All of these will be from free Unity asset store): 
	Whale,
	Bowling Ball,
	Lamp,
	Chairs,
	Table,
	Tire,
	Shoes,
	Pictures,
	Fruits/Food (Apple, Banana, Oranges),
	(Add anything else you can think of),
	Manakin.

When manipulating object (moving, have control), have particle effect or glow on object
    
    
#### Sounds:

Background Music: Goes with whatever theme is, simple background music, different music for different situations.

Sound Effects: Grabbing objects, Objects hitting walls.
