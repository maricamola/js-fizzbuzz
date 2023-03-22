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
if(!(i % 3) && i) {
  box.classList.add('orange')
}

//Scriviamo il numero nel box
box.append(i)

container.append(box)
}