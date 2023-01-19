let obj = {
    a: '1',  
    b: 2
  };
  
  function nestedMas (obj)
  {
    let mas = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop))
      {
        mas.push([prop, obj[prop]]);
      }
    }
    return mas;
  }
  
   console.log(nestedMas(obj));