#pragma strict

// public
public var secondsBetween : float = 2; // seconds in between button pressess (try to keep it fast, you want to avoid picking up objects/throwing them confliction)
public var walkSpeed : float = 1f; // how fast you walk
 
// private 
private var mainCamera : GameObject; // need camera so you can grab its vector to move forward of where your looking
private var vrPlayer : GameObject; // need player for collision/movement
private var time : float = 0f; // keeps track of time
private var count : int = 0; // count variable
private var isWalking : boolean = false; // true if walking
private var startTime : float = 0f; // time of first trigger click
private var endTime : float = 0f; // time of second trigger click 

function Start () {
	mainCamera = GameObject.Find("Main Camera"); // looks for Main Camera gameobject
	vrPlayer = GameObject.Find("VR Player"); // looks for VR Player gameobject
	time = 0f; // starting time
}

function Update () {
	time += Time.deltaTime; 
	
	if (Cardboard.SDK.Triggered == true) { // if cardboard input triggered
		count += 1; // adds one each time triggered pulled down
		
		if (count == 1) {
			startTime = time; // records time of first pull down
			//Debug.Log("Time 1: " + startTime); 
		}
		if (count == 2) {
			endTime = time; // records time of second pull down
			//Debug.Log("Time 2: " + endTime);
			
			if (endTime - startTime <= secondsBetween) { // checks if both button inputs are fast enough to start walking
				// Debug.Log("Walking");							(can change time inbetween with changing secondsBetween)
				isWalking = true;
			}
			
			if (endTime - startTime > 3) { // if the 2 button inputs not fast enough
				count = 1; // resets count to 1
				startTime = time; // current time now becomes startTime
			}
		}
		if (count == 3) { // after sucessfully walking, stops walk
			count = 0; // resets 
			time = 0; // resets
			// Debug.Log("Stopped Walking");
			isWalking = false;
		}
	}
	
	if (isWalking) {
		vrPlayer.transform.position.y = ycord; // freezes y cord of Player (camera won't go up or down, just move along x and z axis)
		vrPlayer.transform.Translate( mainCamera.transform.forward * Time.deltaTime * walkSpeed); // grabs camera.forward * time * walkSpeed (how fast you want to go)
	}
}
