#pragma strict

var speed : float = -3.0f;

private var maxX : float;
private var maxY : float;

var bulletPrefab : GameObject;


function Start () {
	maxY = Camera.main.orthographicSize;
	maxX = maxY * Camera.main.aspect;
	maxX -= 1;
	maxY -= 1;
}

function Update () {
	var moveX : float;
	var moveY : float;
	
	moveX = Input.GetAxis("Horizontal");
	moveY = Input.GetAxis("Vertical");
	
	transform.Translate(moveX * speed * Time.deltaTime, 
						moveY * speed * Time.deltaTime, 
						0.0f);
						
	transform.position.x = Mathf.Clamp(
							transform.position.x, 
							-maxX, 
							maxX);
	
	transform.position.y = Mathf.Clamp(
							transform.position.y, 
							-maxY, 
							maxY);
	
	if(Input.GetKeyDown(KeyCode.Space)){
		var barrelPosition = transform.FindChild("centerBarrel").transform.position;
		
		Instantiate(bulletPrefab, 
				barrelPosition, 
				Quaternion.identity);
	}
}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Asteroid")
		Destroy(gameObject);
}




