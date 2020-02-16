<?php

function staircase($n) {

$x=1;
for ($j=$n; $j>0; $j--){
echo str_repeat(" ", $j-1);

for($i=0; $i<$x; $i++){
    echo"#";
}
echo"\n";
$x++;
}
}

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $n);

staircase($n);

fclose($stdin);
