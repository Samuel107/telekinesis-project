using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class B6SendToPlanets : MonoBehaviour {
	
	public void BlueNoPlanet() {
		SceneManager.LoadScene("BlueNoPlanet"); // using UnityEngine.SceneManagement is required (at top), put name of scene in LoadScene()
	}
	
	public void BluePlanet() {
		SceneManager.LoadScene("BluePlanet"); 
	}
	
	public void GreenNoPlanet() {
		SceneManager.LoadScene("GreenNoPlanet"); 
	}
	
	public void GreenPlanet() {
		SceneManager.LoadScene("GreenPlanet"); 
	}
	
	public void RedNoPlanet() {
		SceneManager.LoadScene("RedNoPlanet"); 
	}
	
	public void RedPlanet() {
		SceneManager.LoadScene("RedPlanet"); 
	}
	
	public void Room() {
		SceneManager.LoadScene("Room");
	}
}
