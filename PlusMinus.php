<?php

// Complete the plusMinus function below.
function plusMinus($arr) {
$pos = 0;
$neg = 0;
$zeros = 0;

for($i=0; $i<count($arr); $i++){
    if($arr[$i]>0){
        $pos++;
    }elseif($arr[$i]<0){
        $neg++;
    }else{
        $zeros++;
    }
}
echo number_format($pos/count($arr), 6);
echo "\n";
echo number_format($neg/count($arr), 6);
echo "\n";
echo number_format($zeros/count($arr), 6);
}

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $n);

fscanf($stdin, "%[^\n]", $arr_temp);

$arr = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));

plusMinus($arr);

fclose($stdin);
