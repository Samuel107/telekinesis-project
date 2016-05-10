#pragma strict

// Activates existing gameObjects that were not active. Note that the gameObjects were never SetActive(true) at start, 
// so make sure to have your gameObjects set to false (not activated/displayed)

public var button1GameObject : GameObject; // gameObject activated from activating button1, assign what gameObjects you want to setActive.
private var buttonActivate1 : boolean = false; // determines whether button1 (we created a gameObject that acted like a button) is activated

function Start () {

}

function Update () {

}

function buttonOnOff() {
	if (buttonActivate1 == false) {
		Debug.Log("You turned on button1"); //debugging log
		buttonActivate1 = true; // // button is activated (set true)
		gameObject.GetComponent.<Renderer>().material.color = Color.green; // button turned green for visual confirmation
		button1GameObject.SetActive(true); // gameObjects now visable
	}
	else {
		Debug.Log("You turned off button1"); // debugging log
		buttonActivate1 = false; // button is not active
		gameObject.GetComponent.<Renderer>().material.color = Color.red; // button turns red for visual confirmation
		button1GameObject.SetActive(false); // gameObjects not visable anymore
	}
}

