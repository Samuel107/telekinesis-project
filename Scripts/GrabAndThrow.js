public var throwPower : float = 1000f;
public var thecamera : GameObject;
private var holdingObject : GameObject;
public var distanceFromCamera : int = 5;

function Start () {

}

function Update () {
	if (holdingObject != null) {
		var newPosition : Vector3 = (thecamera.transform.position + thecamera.transform.forward * distanceFromCamera);
		gameObject.transform.position = newPosition;
	}
}

function grabAndShoot() {
	if (holdingObject == null) {
		//Debug.Log("holdingObject became a object");
		holdingObject = gameObject;
		holdingObject.GetComponent.<Rigidbody>().useGravity = false;
	}
	else {
		//Debug.Log("holdingObject is now shot");
		holdingObject.GetComponent.<Rigidbody>().useGravity = true;
		holdingObject.GetComponent.<Rigidbody>().AddForce(thecamera.transform.forward * throwPower);
		holdingObject = null;
	}
}
