<?php


class DragonBall {

	public $name;
	function setName($name) {
		$this -> $name = $name;
	}
}

class SonGoku {

	public $dragonBalls = array();
	
	function searchDragonBall($integer) {
    	$dragonBall = new DragonBall();
		echo("Searching for dragon ball : ".$integer);
		echo(PHP_EOL);
		$dragonBall -> setName("Ball ".$integer);
		array_push($this -> dragonBalls,$dragonBall);
  	}
}

$goku = new SonGoku();
$i = 1;
while(count($goku -> dragonBalls) < 7){
	$goku -> searchDragonBall($i);
	$i = $i + 1;
}
echo("You collected all 7 Dragon balls what do you want ?");

?>
