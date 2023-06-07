function removeAccent(str) {
    const accents = {
      'a': /[àáâãäå]/g,
      'e': /[èéêë]/g,
      'i': /[ìíîï]/g,
      'o': /[òóôõö]/g,
      'u': /[ùúûü]/g,
      'c': /[ç]/g,
      'n': /[ñ]/g,
    };
  
    for (let key in accents) {
      str = str.replace(accents[key], key);
    }
  
    return str;
  }
  