alert("ATTENZIONE!!! STAI PER VEDERE LA PIZZA PIÚ BELLA DI TUTTE NON LASCIARE CHE CONDIZIONI LA TUA SCELTA!! \n...PREMI OK PER CONTINUARE");

fetch('http://127.0.0.1:5500/the-net-pizza/pizze/diego-fois/diego.html')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))