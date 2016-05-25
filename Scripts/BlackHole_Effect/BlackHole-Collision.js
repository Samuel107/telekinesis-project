#pragma strict

/*

This script is put on the Black Hole GameObject. Whatever collides into this GameObject will be frozen in position and rotation.
(Need other scripts in folder in order to work)

Notes: 
	It has come to my attention that GameObject.Find() takes quite a long time if you have alot of GameObjects.
	I will avoid this for now on and put references to GameObjects. I will leave it in just incase if no references are set.
	
*/

// public
public var BlackHole : GameObject; // Black Hole GameObject

function Start () {
	if (BlackHole == null) { // if null (nothing assigned to BlackHole GameObject)
		BlackHole = GameObject.Find("Black Hole"); // finds GameObject named "Black Hole"
	}
}

function Update () {

}

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.tag == "abc") {
		//Debug.Log("Collision Detected");
		col.gameObject.GetComponent.<Rigidbody>().velocity = Vector3(0, 0, 0); // Stops all velocity
		col.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeAll; // Freezes all coords rotation and position
	}
}
