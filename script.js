$(document).ready(function () {

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let essai = 0;
    $("button").click(function () {
        essai++
        let guess = $("input").val();
        if (parseInt(guess, 10) === randomNumber) {
            alert("BINGO GAGNER !");
            alert("T'AS TROUVE EN " + essai + " ESSAI(S) !");
            return;
        } else if (essai === 5) {
            alert("T'AS PERDU LOOSER ! C'ETAIT : " + randomNumber);
            return;
        } else if (guess < randomNumber) {
            alert("TROP PETIT COCO !");
        } else {
            alert("TROP GRAND COCO !");
        }
        // 
    });
    console.log(randomNumber);
});
