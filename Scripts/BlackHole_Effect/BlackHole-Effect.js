#pragma strict

/*

This script is put on the button to start the whole BlackHole Effect. 
	
Notes:
	This script is for the button to activate the black hole game object.
	
	Problem with moveable objects colliding with other moveable GameObject. With the now misdirect path, it will not head towards the black hole.
	Will most likely create another collision function on the moveable GameObjects to push it back towards black hole.  
	
*/

// public
public var blackHole : GameObject; // the black hole object
var activate : boolean = false;

function Start () {
	
}

function Update () {

}

function blackHoleActivated() {
	if (activate == false) {
		//Debug.Log("Button 7 Turned On");
		blackHole.SetActive(true); // the black hole object becomes active
		GetComponent.<Renderer>().material.color = Color.green; // changes button color to red
		activate = true; // boolean change to activate (for collision purposes)
		
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) { // finds all GameObjects with "abc" tag
			var strength : int = Random.Range(3,15); // random int between 3 and 15
			go.GetComponent.<Rigidbody>().useGravity = false; // turns off gravity
			go.GetComponent.<Rigidbody>().AddForce( (blackHole.GetComponent.<Transform>().position - go.GetComponent.<Transform>().position) * strength); // adds force to black hole
		}
		
	}
	else {
		//Debug.Log("Button 7 Turned Off");
		blackHole.SetActive(false); // deactivate black hole object
		GetComponent.<Renderer>().material.color = Color.red; // changes button color to red
		activate = false; // boolean change
		
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) {
			go.GetComponent.<Rigidbody>().useGravity = true; // returns gravity 
			go.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None; // no constraints on any gameObjects (can clean this up later)
		}
			
	}
}
