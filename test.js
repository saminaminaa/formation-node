var filename = __filename.replace(__dirname + '/', '').replace('.js', '')
console.log(filename + " ouais ouais ouais")
msg = "jsp mais c 1msg" //nous avons ici une variable globale, on peut la passe d'un fichier à un autre il ne faut juste pas mettre "var" devant sinon ça ne fonctionne pas
//GLOBAL.msg = "jsp mais c 1msg" //on peut egalement l'ecrire de cette façon //ne fonctionne pas
require('./lib/test2')
// for (var prop in GLOBAL){
//     console.log(prop + "=" + GLOBAL[prop])
// }//ne fonctionne pas