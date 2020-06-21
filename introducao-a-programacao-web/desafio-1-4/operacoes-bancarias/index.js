const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


/**
 * Criar transações
 */
function createTransaction({ type, value }) {
  user.transactions.push({ type, value })

  if (type === 'credit') {
    user.balance += value
  }

  if (type === 'debit') {
    user.balance -= value
  }
}


/**
 * Relatório
 */
function getHigherTransactionByType(type) {
  let higherValue = 0
  let higherTransiton = {}

  for (let i = 0; i <  user.transactions.length; i++) {
    if (user.transactions[i].type === type && user.transactions[i].value > higherValue) {
      higherValue = user.transactions[i].value
      higherTransiton = user.transactions[i]
    }
  }

  return higherTransiton
}


function getAverageTransactionValue() {
  let total = 0

  for (let i = 0; i < user.transactions.length; i++) {
    total += user.transactions[i].value
  }

  const averange = total / user.transactions.length

  return averange
}


function getTransactionsCount() {
  let countCredit = 0
  let countDebit = 0

  for (let i = 0; i < user.transactions.length; i ++) {
    if (user.transactions[i].type === 'credit') {
      countCredit += 1
    }

    if (user.transactions[i].type === 'debit') {
      countDebit += 1
    }
  }

  return ({ credit: countCredit, debit: countDebit })
}


/**
 * Testar funcionalidade e imprimir resultados
 */
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }