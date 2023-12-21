// burger

// la variable btn definit l'icone burger
let btn = document.querySelector('.burger');
// la variable nav definit la div nav qui contient les li
let nav = document.querySelector('.d-none');


// pour la variable btn ajoute une action le clique, ()=> = quand je clique 
btn.addEventListener('click', ()=>{
// va sur le css et recupere la classe active et fait la  basculer
nav.classList.toggle('active');

// si la nav class liste contient "active" affiche la croix
if(nav.classList.contains('active')) {
    btn.innerHTML= "&#x2715;"
}
 // sinon affiche les traits
else{
  btn.innerHTML="&#x2630;"
}
})

// carrousel
// assigne  btn à la class button
let button = document.querySelectorAll('.button');
console.log(button)
// assigne  img à la class "à tous aux élèments de la div slider ul li"
let img = document.querySelectorAll('.slider ul li');
console.log(img)


for (let i = 0; i < button.length; i++) {
      let calc = 0;

  //quand je click (addvenlistener) cobalc 
  button[i].addEventListener('click', (e) => {
      // assigne imgActive  à la classe "active"`
      const imgActive = document.querySelector('.active');
      // assigne  curentIndex COMME la position de imgActive dans la liste (le tableau) des img
      const curentIndex = [...img].indexOf(imgActive);
      // definis calc COMME 1 SI l'identifiant du bouton est "next", 
    //   SINON tu definis calc COMME -1 quand l'identifiant est sur prev
      if (button[i].id == 'next') {
          calc = 1;
      } else {
          calc = -1;
      }
      // assigne  index à curentIndex + calc`
      let index = curentIndex + calc;
        // SINON SI curentIndex est égal à la longueur de img - 1
      // ET l'identifiant du bouton est "next" alors assigne  index à 0`
      // SI curentIndex est égal à 0 ET l'identifiant du bouton est égal à "prev" assigne à index 
      // la longueur de img - 1,
      if (curentIndex >= img.length - 1 && button[i].id == 'next') { index = 0; }
      if (curentIndex == 0 && button[i].id == 'prev') { index = img.length - 1; }

      // ajoutes la classe "active" à img[index]`
      img[index].classList.add('active');
      //retires la classe "active" de imgActive`
      imgActive.classList.remove('active');


  })
}

