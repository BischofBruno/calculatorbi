// es werden zuerst die Vorgaben zum Schwierigkeitsgrad gefragt
// es werden dann sechs Zahlen per Zufallsgenerator erstellt und im Array abgelegt
// Zahlen 1 und 2 für eine Addition, Zahlen 3 und 4 für eine Subtraktion und Zahlen 5 und 6 für eine Mulitplikation
  let summandMax = prompt('Wie gross dürfen die Summanden höchstens sein?');
  let minuendMax = prompt('Wie gross darf der Minuend höchstens sein?');
  let subtrahendMax = prompt('Wie gross darf der Subtrahend höchstens sein?');
  let factorMax = prompt('Wie gross dürfen die Faktoren höchstens sein?');
  Number.random = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  };
  var randomNumber1 = Number.random(1,summandMax);
  console.log(randomNumber1);
  var randomNumber2 = Number.random(1,summandMax);
  console.log(randomNumber2);
  var randomNumber3 = Number.random(1,minuendMax);
  console.log(randomNumber3);
  var randomNumber4 = Number.random(1,subtrahendMax);
  console.log(randomNumber4);
  var randomNumber5 = Number.random(1,factorMax);
  console.log(randomNumber5);
  var randomNumber6 = Number.random(1,factorMax);
  console.log(randomNumber6);

// hier folgen die Ablage in einem Array mit Ablage der beiden Zahlen, der Vorgabe des Operators und der Berechnung des Resultats im Array
// vierdimensionales Array mit drei Einträgen
let calculations = [
  [
  randomNumber1,
  randomNumber2,
  '+',
  randomNumber1+randomNumber2
],
[
  randomNumber3,
  randomNumber4,
  '-',
  randomNumber3-randomNumber4
],
[
  randomNumber5,
  randomNumber6,
  '*',
  randomNumber5*randomNumber6
],
]

// Kopfrechnung 1, holt Zahlen, Operator und Resultat aus dem Array
let calculation1 = prompt('Wie viel gibt ' +calculations[0][0] +calculations[0][2] +calculations[0][1]);
let resultat1 = calculations[0][0] +calculations[0][2] +calculations[0][1];
console.log(calculations[0][2]);
console.log(calculations[0][3]);
switch (calculation1 == calculations[0][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
    prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[0][0] +calculations[0][2] +calculations[0][1]);
    break;
}

// Kopfrechnung 2, holt Zahlen, Operator und Resultat aus dem Array
let calculation2 = prompt('Wie viel gibt ' +calculations[1][0] +calculations[1][2] +calculations[1][1]);
let resultat2 = calculations[1][0] +calculations[1][2] +calculations[1][1];
console.log(calculations[1][2]);
console.log(calculations[1][3]);
switch (calculation2 == calculations[1][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
    prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[1][0] +calculations[1][2] +calculations[1][1]);
    break;
}

// Kopfrechnung 3, holt Zahlen, Operator und Resultat aus dem Array
let calculation3 = prompt('Wie viel gibt ' +calculations[2][0] +calculations[2][2] +calculations[2][1]);
let resultat3 = calculations[2][0] +calculations[2][2] +calculations[2][1];
console.log(calculations[2][2]);
console.log(calculations[2][3]);
switch (calculation3 == calculations[2][3]) {
    case true:
    alert('richtig gelöst');
    break;
    case false:
        prompt('leider falsch, versuche es nochmals: \nWie viel gibt '+calculations[2][0] +calculations[2][2] +calculations[2][1]);
    break;
}