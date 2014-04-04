#pragma strict

var speed : float = -10.0f;

private var gameManagerScript : scriptGameManager;

function Start () {
	gameManagerScript = GameObject.Find("GameManager").GetComponent("scriptGameManager");
}

function Update () {
	transform.Translate(0, speed * Time.deltaTime, 0);
}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Bullet")
		gameManagerScript.AddPoint();
		
	if(other.tag == "Player" || other.tag == "Bullet")
		Destroy(gameObject);
}

function OnTriggerExit (other : Collider) {
	if(other.tag == "GameArea")
		Destroy(gameObject);
}





