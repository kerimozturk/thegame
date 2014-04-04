#pragma strict

var playerPrefab : GameObject;

var asteroidPrefab : GameObject;

private var maxX : float;
private var maxY : float;

private var score : int = 0;

function Start () {
	maxY = Camera.main.orthographicSize;
	maxX = maxY * Camera.main.aspect;
	maxX -= 1;
	maxY -= 1;

	Instantiate(playerPrefab, 
				Vector3(0, -7, 0), 
				Quaternion.identity);
				
	InvokeRepeating("CreateAsteroid", 2.0f, 1.0f);
}

function Update () {

}

function CreateAsteroid () {
	Instantiate(asteroidPrefab, 
				Vector3(Random.Range(-maxX, maxX), maxY + 2.0f, 0), 
				Quaternion.identity);
}

function OnGUI () {
	GUI.Label (Rect (10,10,150,100), 
	"Score : " + score);
}

function AddPoint () {
	score += 1;
}




