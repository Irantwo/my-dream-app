function lanzar() {
  var prueba = document.getElementById('numero').value;
  document.getElementById('example').innerHTML = "<span>This is your input</span> : " + prueba;

  do {

      var num=document.getElementById('numero').value;

      if(num<1 || num>3999){
        alert("Input out of range" );
        break;
      }

    }

while(num>3999 || num<1)
var mil=parseInt(num/1000);
var cen=parseInt(num%1000/100);
var dec=parseInt(num%1000%100/10);
var uni=parseInt(num%1000%100%10);

var thousand = "";
var hundreds = "";
var tens = "";
var units = "";

//document.write('éste es tu numero ' + num + '<br>');

//Thousands
switch (mil) {
  case 1: thousand = "M";
    break;
  case 2: thousand = "MM";
    break;
  case 3: thousand = "MMM";
    break;
}


switch(cen) {
case 1: hundreds = "C";
break;
case 2: hundreds = "CC";
break;
case 3: hundreds = "CCC";
break;
case 4: hundreds = "CD";
break;
case 5: hundreds = "D";
break;
case 6: hundreds = "DC";
break;
case 7: hundreds = "DCC";
break;
case 8: hundreds = "DCCC";
break;
case 9: hundreds = "CM";
break;
}

var myString = thousand;
myString += hundreds;


switch(dec){
case 1: tens = "X";
break;
case 2: tens = "XX";
break;
case 3: tens = "XXX";
break;
case 4: tens = "XL";
break;
case 5: tens = "L";
break;
case 6: tens = "LX";
break;
case 7: tens = "LXX";
break;
case 8: tens = "LXXX";
break;
case 9: tens = "XC";
break;}


myString += tens;
switch(uni){
case 1: units = "I";
break;
case 2: units = "III";
break;
case 3: units = "III";
break;
case 4: units = "IV";
break;
case 5: units = "V";
break;
case 6: units = "VI";
break;
case 7: units = "VII";
break;
case 8: units = "VIII";
break;
case 9: units = "IX";
break;

}

  if(num<1 || num>3999) {
    document.getElementById('final').innerHTML = "Input out of range"
  }

  else {
    myString += units;
    document.getElementById('final').innerHTML = '<p>This is your output :<br><span>' + myString + '</span></p>';
  }

}
