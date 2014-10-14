#pragma strict

var targets : GameObject;
var frameCompt : int = 0;
var NB_FRAMES : int = 50;
var NB_SPHERES : int = 10;
var old_sphere_name : String = "";

function Start () {
	//get all targets
	targets = GameObject.Find("Targets"); 
	
	for (var i : int = 1; i < 11; i++) {
		var obj = targets.transform.Find(String.Concat("target",i)).gameObject;
		obj.SetActive(false);
	}
}

function Update () {
	frameCompt++;
	Debug.Log(frameCompt);
	//If we have to update the spheres
	if (frameCompt == NB_FRAMES) {	
		frameCompt = 0;
		var sphereName = getRandomNameSphere(NB_SPHERES);
		var obj = targets.transform.Find(sphereName).gameObject;	
		obj.SetActive(true);
		if (old_sphere_name != "") {
			var obj2 = targets.transform.Find(old_sphere_name).gameObject;
			obj2.SetActive(false);
		}
		old_sphere_name = sphereName;
	}

}

function getRandomNameSphere(number : int) {
	//Return number between 1 inclusive and number inclusive.
	var randNumber = Random.Range(1, number);
	var name = String.Concat("target",randNumber);
	Debug.Log(name);
	return name;
}