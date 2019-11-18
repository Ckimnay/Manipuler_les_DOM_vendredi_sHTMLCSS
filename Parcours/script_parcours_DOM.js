//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>,
//le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
 //Affiche-le dans la console.

var classA = document.querySelector('div>ul:last-child>li:first-child');
console.log(classA.textContent)
