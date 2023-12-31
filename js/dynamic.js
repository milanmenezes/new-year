var queryString = _.chain( location.search.slice( 1 ).split( /&/g ) ).map( function ( item ) { if ( item ) return item.split( /=/ ).map( function ( str ) { return decodeURIComponent( str ); } ); } ).compact().object().value();
console.log(queryString);

var name;
if(queryString.name){
	name=queryString.name;
}
if(queryString.n){
  name=queryString.n;
}

if(name){
  name=name.replace("-"," ");
  name=titleCase(name);
  document.getElementById("name").innerHTML=name+"!!!";
  document.title="Happy New Year "+name+"!";
  document.getElementsByTagName('meta')["description"].content = "Happy New Year "+name+"!";
}
if(queryString.from){
  document.getElementById("from").innerHTML=queryString.from;
}

document.addEventListener("click",()=>{    
  document.getElementById('music').play();
  document.removeEventListener('click', this);})

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}

