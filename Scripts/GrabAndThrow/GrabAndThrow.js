
// Gives option to pick up and throw objects. Apply script to gameObject with a Event Trigger component.

// public
public var throwPower : float = 1000f; // how much force you want to add to your throw
public var thecamera : GameObject; // drag camera gameobject into this variable
public var distanceFromCamera : int = 5; // bigger gameObjects will need a greater distanceFromCamera

// private
private var holdingObject : GameObject; // remembers gameObject after using input


function Start () {

}

function Update () {
	if (holdingObject != null) { 
		var newPosition : Vector3 = (thecamera.transform.position + thecamera.transform.forward * distanceFromCamera); // creates vector3 just infront of camera by distanceFromCamera
		gameObject.transform.position = newPosition; // the gameObject positions becomes the newPosition
	}
}

function grabAndShoot() {
	if (holdingObject == null) { // if nothing is being grabbed
		//Debug.Log("holdingObject became a object");
		holdingObject = gameObject; // holdingObject becomes gameObject
		holdingObject.GetComponent.<Rigidbody>().useGravity = false; // gravity is disabled when being grabbed
	}
	else {
		//Debug.Log("holdingObject is now shot"); 
		holdingObject.GetComponent.<Rigidbody>().useGravity = true; // gravity turned back on for holdingobject
		holdingObject.GetComponent.<Rigidbody>().AddForce(thecamera.transform.forward * throwPower); // adds force to holdingObject
		holdingObject = null; // holdingObject becomes NULL
	}
}
