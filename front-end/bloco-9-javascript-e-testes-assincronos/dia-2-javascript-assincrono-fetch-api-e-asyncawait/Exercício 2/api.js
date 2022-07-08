// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets';
const ol = document.getElementById('cryptoList');

const fetchCrypto = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ data }, i) => {
      data.slice(0, 10).forEach(crypto => {
        const li = document.createElement('li');
        let num = Math.round(crypto.supply);
        li.innerHTML = `${crypto.name} (${crypto.symbol}): ${num}`
        ol.appendChild(li);
      });
    });

};

window.onload = () => fetchCrypto();
