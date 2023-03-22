//Seleziono il con container 
const container = document.querySelector('.container');
console.log(container)

for(let i = 1; i <= 100; i++){
  console.log(i)
//Creo un "box" ad ogni ciclo
const box = document.createElement('div')
//Adesso assegniamo una class al nostro box
box.classList.add('box')
//Se multiplo di 3 stampa "Fizz"
if (!(i % 15)) {
  box.classList.add('rose')
}else if (!(i % 3) && i){
  box.classList.add('orange')
}else if (!(i % 5) && i){
  box.classList.add('yellow')
}
//Scriviamo il testo nell'InnerHTML
box.append(i)
container.append(box)
};

box.addEventListener('click',function(){
  const text = document.createElement('text');

  if(!(i % 15)){
    box.append('Fizz')
  }else if(!(i % 3) && i){
    box.append('Fizz')
  }else if(!(i % 5) && i){
    box.append('BuzzFizz')
  }
})

//box.append('Fizz')
//box.append('Fizz')
//box.append('BuzzFizz')






