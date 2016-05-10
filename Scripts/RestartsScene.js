#pragma strict

// Restarts Scene

var ls : UnityEngine.SceneManagement.SceneManager; // created variable with SceneManagement Options

function Start () {

}

function Update () {

}

function resetTheScene() {
	ls.LoadScene("newRoom"); // restarts scene ("newRoom" is our scene name)
}
