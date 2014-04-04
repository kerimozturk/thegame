#pragma strict

var speed : float = 25.0f;

function Start () {

}

function Update () {
	transform.Translate(0, speed * Time.deltaTime, 0);
}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Asteroid")
		Destroy(gameObject);
}

function OnTriggerExit (other : Collider) {
	if(other.tag == "GameArea")
		Destroy(gameObject);
}



