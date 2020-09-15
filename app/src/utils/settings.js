export const languages = ( lan ) =>{
  if (lan === 'en') {
    return 'Inglês'
  }
  else if (lan === 'pt') {
    return 'Português'
  }
  else if (lan === 'es') {
    return 'Espanhol'
  }
  else if (lan === 'nl') {
    return 'Holandês'
  }
  else if (lan === 'ko') {
    return 'Koreano'
  }
  else if (lan === 'fr') {
    return 'Francês'
  }
  else if (lan === 'it') {
    return 'Italiano'
  }
  else if (lan === 'ru') {
    return 'Russo'
  }
  else if (lan === 'zh') {
    return 'Mandarin'
  }
  else if(lan === 'ja'){
    return 'Japônes'
  }
}

export const date = (date) => {
  if(date) {
    let splitDate = date.split('-');
    let ajustDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return ajustDate
  }
}

export const statusMovie = ( movies ) => {
  if(movies === 'Released'){
    return 'Lançado'
  } else {
    return 'Em breve'
  }  
}

