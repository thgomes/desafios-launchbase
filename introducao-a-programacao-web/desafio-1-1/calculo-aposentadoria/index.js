const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

if (sexo === 'H') {
  if (idade + contribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}

if (sexo === 'F') {
  if (idade + contribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}
