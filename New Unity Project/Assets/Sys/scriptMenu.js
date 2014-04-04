#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	if(GUI.Button (Rect (10,10,150,100), "Start Game"))
		Application.LoadLevel("Level_1");
		
	if(GUI.Button (Rect (10,120,150,100), "Exit Game"))
		Application.Quit();
}