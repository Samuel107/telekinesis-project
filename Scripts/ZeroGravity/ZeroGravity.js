#pragma strict

// This Script Activates Zero-Gravity On Certain GameObjects with tag "abc".

//public
public var rotationSpeed : int = 5; // rotation speed

//private
private var buttonActivate2 : boolean = false; // determining variable that activates buttonOnOff function

function Start () {

}

function Update () {

}

function buttonOnOff() {
	if (buttonActivate2 == false) { // if button is not on
		//Debug.Log("You turned on button2"); 
		buttonActivate2 = true; // button set true
		gameObject.GetComponent.<Renderer>().material.color = Color.green; // button turned green for visual confirmation
		gameObject.GetComponent.<AudioSource>().Play(); // plays background music (comment out if you include no background music)
		
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) { // looks for every gameObject with tag "abc"
			var leftOrRight : int = Random.Range(1,3); // creates random integer that is either 1 or 2. (decision integer)
			var addedForce : int = Random.Range(10,50); // creates random integer 10-50 (force integer)
			go.GetComponent.<Rigidbody>().useGravity = false; // gravity turned off
			go.GetComponent.<Rigidbody>().AddForce(go.transform.up * addedForce); // always goes up
			go.transform.Rotate(rotationSpeed, rotationSpeed, rotationSpeed); // always rotate
			if (leftOrRight == 1) { // pushes either left or right depending on leftOrRight integer
				go.GetComponent.<Rigidbody>().AddForce(go.transform.right * addedForce); // pushes object right
			}
			else {
				go.GetComponent.<Rigidbody>().AddForce(-go.transform.right * addedForce); //pushes object left
			}
		}
	}
	else { 
		//Debug.Log("You turned off button2"); 
		buttonActivate2 = false; // button set false
		gameObject.GetComponent.<Renderer>().material.color = Color.red; // button turned red for visual confirmation
		gameObject.GetComponent.<AudioSource>().Stop(); // stops audio (comment out if no audio put in)
		for (var go : GameObject in GameObject.FindGameObjectsWithTag("abc")) { // every gameObject with tag "abc" 
			go.GetComponent.<Rigidbody>().useGravity = true; // turns gravity back on for every go
		}
	}
}
