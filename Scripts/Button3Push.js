#pragma strict

private var buttonActivate2 : boolean = false; // determines whether button1 is activated
public var rotationSpeed : int = 5;

function Start () {

}

function Update () {

}

function buttonOnOff() {
	if (buttonActivate2 == false) {
		Debug.Log("You turned on button2");
		buttonActivate2 = true;
		gameObject.GetComponent.<Renderer>().material.color = Color.green;
		gameObject.GetComponent.<AudioSource>().Play();
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) {
			var leftOrRight : int = Random.Range(1,3);
			var addedForce : int = Random.Range(10,50);
			go.GetComponent.<Rigidbody>().useGravity = false;
			go.GetComponent.<Rigidbody>().AddForce(go.transform.up * addedForce); // always goes up
			go.transform.Rotate(rotationSpeed, rotationSpeed, rotationSpeed); // always rotate
			if (leftOrRight == 1) { // pushes either left or right
				go.GetComponent.<Rigidbody>().AddForce(go.transform.right * addedForce);
			}
			else {
				go.GetComponent.<Rigidbody>().AddForce(-go.transform.right * addedForce);
			}
		}
	}
	else {
		Debug.Log("You turned off button2");
		buttonActivate2 = false;
		gameObject.GetComponent.<Renderer>().material.color = Color.red;
		gameObject.GetComponent.<AudioSource>().Stop();
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) {
			go.GetComponent.<Rigidbody>().useGravity = true;
		}
	}
}