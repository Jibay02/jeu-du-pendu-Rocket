let listeMots = ["chien","chat","vache","pomme","poire","homme","femme","poivre","sel", "bicyclette","orange","moucheron", "punaise", "poutre",
                "aeroport", "fantasme", "javascript","ordinateur", "telephonne","windows","chocolat","vanille","fraise", "enfant", "adulte",
                 "tapis","souris", "peignoire", "pedalo","randonee","vestiaire","boite","conserve","reserve", "ecran","imprimante","porte","fenetre",
                "collegue","professeur","infirmier","ami","copain","pote","frere","soeur","papa","maman","papy","mamie","voisin","copain","copine",
                "armoire","meuble","velo","voiture","bus","metro","bulle","aquarium","tennis","football","arcade","mario","sonic","clavier","sarbacane",
                "arc","fleches","direction","nord","sud","est","ouest","emisphere","longitude","latitude","clown","girafe","jonquile","route","pont","mer",
                "terre","masque","carnaval","histoire","geographie","retard","compter","heure","minute","seconde","premier","stylo","feutre","chargeur","classeur",
                "manugel","gomme","crayon","cafetiere","graine","ascenseur","escalier","peinture","tableau","multiplication","addition","soustraction","division"];
let nombreDeChances           =  8;
let motAleatoire; //GENERER PAR MA FONCTION CREERMOTALEATOIR
let nombreDeLettres;// GENERE PAR MA FONCTION LETTREADEVINER
let motDecoupe;// NE SERT STRICTEMENT A RIEN ICI.
let motEnPointille;// GENERE LE MOT AU ALEATOIRE EN POINTILLES
let touchePressee;


// FONCTIONS


                // COTE JOUEUR
// PROPOSER LETTRE 
function retenirTouchePressee(){
    document.addEventListener('keyup',() => {
        touchePressee = input.value;
        return(touchePressee);
    })
}
console.log(touchePressee);

                // COTE ORDI 

// CREER MOT ALEATOIREMENT
function creerMotAleatoire(){
    let Aleatoire           = Math.floor(Math.random()* listeMots.length);
    motAleatoire            = listeMots [Aleatoire];
    return(motAleatoire);
}
creerMotAleatoire();

// FAIRE RESSORTIR LE NOMBRE DE LETTRES
function LettresaDeviner(){
    nombreDeLettres         = motAleatoire.length;
    return(nombreDeLettres);
}
LettresaDeviner();

// DECOUPER LES MOTS DU TABLEAU LETTRE PAR LETTRE
function decouperMot(){
    motDecoupe              = [...motAleatoire];
    return(motDecoupe);
}
decouperMot();

// AFFICHER _ _ _ _ A LA PLACE DES LETTRES VIDES
function pointille(){
    motEnPointille          = motAleatoire.replace(/[A-Za-z]/g," _");
}
pointille();



// AFFICHER NOMBRE DE CHANCES:
function afficherChances(){
    alert('Il vous reste ' + nombreDeChances);
}

function partiePerdue(){
    if (nombreDeChances === 0) {
        alert('La partie est terminée, vous avez perdu. ');
    }
}

// ESSAIS CONSOLE.LOG / ALERT
console.log(motAleatoire);
console.log(nombreDeLettres);
console.log(motDecoupe);
console.log(motEnPointille);