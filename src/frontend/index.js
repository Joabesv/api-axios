const addGame = () => {
  const titleInput = document.querySelector('#title');
  const priceInput = document.querySelector('#price');
  const yearInput = document.querySelector('#year');

  const game = {
    title: titleInput.value,
    price: priceInput.value,
    year: yearInput.value,
  };

  // adicionando dados para a API
  axios
    .post('http://localhost:4444/game', game)
    .then(response => {
      if (response.status === 200) {
        alert('Jogo Cadastrado');
        location.reload();
      }
    })
    .catch(err => console.log(err));
};

axios
  .get('http://localhost:4444/games')
  .then(response => {
    const games = response.data;
    const list = document.querySelector('#games');

    games.forEach(game => {
      const item = document.createElement('li');
      item.innerHTML = `
 Id: ${game.id} <br />
  Nome: ${game.title}
  <br /> 
  Ano de lançamento: ${game.year}
  <br /> 
  Preço: R$${game.price}
  `;
      list.appendChild(item);
    });
  })
  .catch(error => console.log(error));
