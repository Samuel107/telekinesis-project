#pragma strict

// Activates existing gameObjects that were not active.

public var button1GameObject : GameObject; // gameObject activated from clicking button1
private var buttonActivate1 : boolean = false; // determines whether button1 is activated

function Start () {

}

function Update () {

}

function buttonOnOff() {
	if (buttonActivate1 == false) {
		Debug.Log("You turned on button1");
		buttonActivate1 = true;
		gameObject.GetComponent.<Renderer>().material.color = Color.green;
		button1GameObject.SetActive(true);
	}
	else {
		Debug.Log("You turned off button1");
		buttonActivate1 = false;
		gameObject.GetComponent.<Renderer>().material.color = Color.red;
		button1GameObject.SetActive(false);
	}
}

