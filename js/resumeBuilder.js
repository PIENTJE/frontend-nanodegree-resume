// $("#main").append("Pientje knoenoenoe ");
// $("#header").append("Dorien");
// [string].replace([old],[new]);

var firstname = "Pientje";
var role = "Web Developer"
var email = "dorien.heijting@hotmail.com";
var newEmail = email.replace("hotmail","gmail");

console.log(firstname);
console.log(email);
console.log(newEmail);

//var awesomeThoughts = "I am Dorien and I am AWESOME";
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%",firstname);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

