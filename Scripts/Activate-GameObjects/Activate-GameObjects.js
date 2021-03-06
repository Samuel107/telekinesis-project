﻿#pragma strict

// public
public var button1GameObject : GameObject; // gameObject activated from activating button1, assign what gameObjects you want to setActive.

// private
private var buttonActivate1 : boolean = false; // determines whether button1 (we created a gameObject that acted like a button) is activated

function Start () {

}

function Update () {

}

function buttonOnOff() {
	if (buttonActivate1 == false) {
		// Debug.Log("You turned on button1"); 
		buttonActivate1 = true; // button is activated (set true)
		gameObject.GetComponent.<Renderer>().material.color = Color.green; // button turned green for visual confirmation
		button1GameObject.SetActive(true); // gameObjects now visable
	}
	else {
		// Debug.Log("You turned off button1"); 
		buttonActivate1 = false; // button is not active
		gameObject.GetComponent.<Renderer>().material.color = Color.red; // button turns red for visual confirmation
		button1GameObject.SetActive(false); // gameObjects not visable anymore
	}
}

