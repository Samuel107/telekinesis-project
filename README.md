# Telekinesis-Project
Unity Google Cardboard VR Application

A classmate and I decided to start working on creating a virtualy reality application for iphones (most likely works for android as well). We presented our VR application in one of our IU Bloomington classes to demonstarte the uniqueness of virtual reality. I really enjoyed my time working with VR so I decided to keep working on the project in my spare time. I will be posting my Javascript here that I create, along with a short screenshot video to demonstrate the script in Unity. My goal is to create simple, understandable scripts that works with the Google Cardboard magnet input. I will be using the prefabs CardboardMain for headset motion tracking and CardboardReticle for crosshairs/gameObject selection that you get when importing the Cardboard SDK for Unity (link will be below to get this). There is a few little things that you need to set up before using these scripts which I will not go over (such as putting certain components on gameObjects or moving certain files for certain C# files are compilied before Javascript), but I am not worried as most intermediate Unity users could most likely google the problem or find a simple solution themselves. If you would like a copy of the unity project all working, contact me at the email below. 

I really recommend using Unity 5.3.1/5.3.3 as other version will most likely cause errors. The Cardboard SDK for Unity I used is version 0.7.2 (or maybe 0.6.0, no clear cut answer), and it requires Unity 5.2.1 or later. All testing is done on iPhone 5s.
https://developers.google.com/cardboard/unity/download

If anyone would like further explanation or have questions on how I used these scripts in Unity, go ahead and email me at selefthe@indiana.edu. I am mostly a beginnerer to coding and Unity so please bear with my sloppy skills. 

## Project Layout

#### Software Using: 
Unity3D 5.3.1/5.3.3, 3D Modeling Program (For Quick Editting)

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

## Goal:

The main goal of this project is to properly implement working VR aspects into a program.

The next stage is to use these VR aspects to create something. This will be another project in the future. 
