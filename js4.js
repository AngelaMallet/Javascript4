/* sur le boutton submit avec La méthode addEventListener va me permettre de lier du code
à un évènement. On parlera alors de gestionnaire d’évènements. L'événement demandé ici est quand je clique
je souhaite que les fonctions aqui sont en violet s'execute*/
submit.addEventListener("click", function(){
  // si la valeur lastname est
  if (lastname.value !=="" && firstname.value !=="" && city.value !=="")
  {
    // si les saisies sont bien des lettres en minuscule et ou majuscule la boite de dialogue inscrit le Nom
    //le Prénom et la ville.
    if (/^[a-zA-Z]+$/.test(lastname.value + firstname.value + city.value)){
      alert("Nom : " + lastname.value + "\nPrénom : " + firstname.value + "\nVille : " + city.value)
    }
    //sinon
    else {
      alert("Un des champs a été mal rempli")
    }
  }
  //sinon
  else {
    alert("Un des champs est vide")
  }
}
)
