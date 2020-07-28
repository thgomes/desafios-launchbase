module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
      age = age - 1
    }

    return age
  },

  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year
    }
  },

  graduation: function(level) {
    let formattedLevel

    switch (level) {
      case 'medio':
        formattedLevel = 'Ensino Médio Completo'
        break
      case 'superior':
        formattedLevel = 'Ensino Superior Completo'
        break  
      case 'mestrado':
        formattedLevel = 'Mestrado'
        break
      case 'doutorado':
        formattedLevel = 'Doutorado'
        break
      default:
        formattedLevel = 'Invalid value'
    }

    return formattedLevel
  },

  classType: function(type) {
    let formattedType

    switch (type) {
      case 'inperson':
        formattedType = 'Aulas presenciais'
        break
      case 'online':
        formattedType = 'Aulas a distância'
        break  
      default:
        formattedType = 'Invalid value'
    }

    return formattedType
  }
}