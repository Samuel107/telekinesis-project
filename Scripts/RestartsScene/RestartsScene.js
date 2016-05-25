#pragma strict

var ls : UnityEngine.SceneManagement.SceneManager; // created variable with SceneManagement Options

function Start () {

}

function Update () {

}

function resetTheScene() {
	ls.LoadScene("newRoom"); // restarts scene ("Room" is my scene name)
}
