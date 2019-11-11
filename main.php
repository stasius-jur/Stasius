<?php
//function parameters($var1 = 1, $var2 = 'a', $var3 = null) {
//    echo '<h3>' . $var1 . ' - ' . $var2 . ' - ' . $var3 . '</h3>';
//}
//parameters();
//parameters('c', 'd', 3);
//echo "<br/>";
//?>
<!---->
<?php
//function numbers($num1 = 5, $num2 = 12) {
//    return $num1 * $num2;
//}
//echo numbers(5,12);
//?>

<?php
//Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.
function square($no1 = 3, $no2 = 3) {
    return $no1 * $no2;
}
    echo square(3,3);
echo "<br/>"
?>
<?php
//Parašykite funkciją, kuri grąžina dviejų skaičių sumą. Skaičiai perduodami funkcijos parametrus.
function sum($n1 = 12, $n2 = 10) {
    return $n1 + $n2;
}
    echo sum(12,10);
echo "<br/>";
?>
<?php
//Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.
function math($num1 = 5, $num2 = 10, $num3 = 2) {
    return ($num2 - $num1)/$num3;
}
    echo math(5,10,2);
echo '<br/>';
?>
<?php
//Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7, o grąžina savaitės dieną lietuvių kalba.
    function weekdays($days) {
        switch ($days) {
            case '1':
                return 'Pirmadienis';
                break;
            case '2':
                return 'Antradienis';
                break;
            case '3':
                return 'Treciadienis';
                break;
            case '4':
                return 'Ketvirtadienis';
                break;
            case '5':
                return 'Penktadienis';
                break;
            case '6':
                return 'Sestadienis';
                break;
            case '7':
                return 'Sekmadienis';
                break;
            default:
                echo 'Wrong number';
        }
    }
    echo weekdays(7);
    echo '<br/>'
?>
<?php
//Sukurkite "a", "b", "c" masyvą. Išveskite masyvo reikšmę naudodami funkciją var_dump().
$arr = ['a', 'b', 'c'];
var_dump($arr);
echo '<br/>';
//Naudodamiesi $arr masyvu iš ankstesnės užduoties, išveskite pirmo, antro ir trečio elementų turinį.
    echo $arr[0], $arr[1], $arr[2];
 echo '<br/>';
?>
<?php
//"Nupieškite" tokio tipo piramidę:
//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999

for ($i=0; $i < 10; $i++) {
    # code...
    for ($y=0; $y < $i; $y++) {
        # code...
        echo $i;
    }
    echo "\n";
}
echo "\n";

?>

<?php
//Parašykite funkciją kuri underscore_case konvertuoja i camelCase;

function toCamelCase($value){
    $value = underscore(str_replace(array('-', '_'),' ', $value));
    $value = str_replace('','', $value);
    return firstlowcase($value);
}
?>