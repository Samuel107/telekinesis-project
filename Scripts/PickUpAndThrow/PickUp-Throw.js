#pragma strict

// This script is for picking up objects and throwing them

// public 
public var throwPower : float = 1000f; // how fast you throw
public var thecamera : GameObject; // main camera
public var distanceFromCamera : int = 5; // distance from camera, bigger objects need larger distances
public var allow : boolean = true; // for script ShootAbility

// private
private var holdingObject : GameObject; // object being picked up and thrown


function Start () {

}

function Update () {
	if (holdingObject != null) { 
		if (allow) { // for another script (automatically true at start)
			// Debug.Log("MoveObject Update Going");
			var newPosition : Vector3 = (thecamera.transform.position + thecamera.transform.forward * distanceFromCamera); // Vector3 (position) of holdingObject
			gameObject.transform.position = newPosition; // holdingObject position becomes newPosition
		}
	}
}

function grabAndShoot() {
	if (holdingObject == null) {
		if (allow) {
			//Debug.Log("holdingObject became a object");
			holdingObject = gameObject; // gameObject (object with this script) becomes holdingObject
			holdingObject.GetComponent.<Rigidbody>().useGravity = false; // gravity turned off for this holdingObject
		}
	}
	else {
		if (allow) {
			//Debug.Log("holdingObject is now shot");
			holdingObject.GetComponent.<Rigidbody>().useGravity = true; // gravity turned on
			holdingObject.GetComponent.<Rigidbody>().AddForce(thecamera.transform.forward * throwPower); // add force of throwPower forward on holdingObject
			holdingObject = null; // holdingObject becomes Null
		}
	}
}
