

var autos = ["Nissan","Buggati","Ferrari","Maserati","Mitsubishi","Peugeot","Honda","Lamborghini"];



var funcion = function (letra) {

	for (var i = 0; i < letra.length; i++) {

		var firstLetter = letra[i].charAt(0).toLowerCase(),final="";


			if (firstLetter === 'm') {
  			  final="| GoodBye "+letra[i]+" |" ;
  			} else {
  			  final= "| Hello "+letra[i]+" | ";
  			}
 document.write(final);

	}	
}

funcion(autos);
    







document.getElementById("demo").innerHTML = autos;






