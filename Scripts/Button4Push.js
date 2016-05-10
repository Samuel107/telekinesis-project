#pragma strict

var ls : UnityEngine.SceneManagement.SceneManager;

function Start () {

}

function Update () {

}

function resetTheScene() {
	ls.LoadScene("newRoom");
}