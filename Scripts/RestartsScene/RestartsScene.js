#pragma strict

/*
	Restarts Current Scene:
		This Script Is Actualy Very Wrong In Someway, But It Reloads Current Scene Which Is What I Wanted It To Do.
		Probably has something to do with the SceneManager Variable. It is NULL now that I realize it.
		Look at B6SendToPlanets.cs script if you want to learn to load other scenes properly.
*/

var ls : UnityEngine.SceneManagement.SceneManager; // created variable with SceneManagement Options

function Start () {

}

function Update () {

}

function resetTheScene() {
	ls.LoadScene("newRoom"); // restarts scene ("Room" is my scene name)
}
