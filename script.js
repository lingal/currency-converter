const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const btnSwap = document.getElementById('swap');




function getCurrencyRates() {
  let currencyOneValue = currencyOne.value;
  let currencyTwoValue = currencyTwo.value;
  fetch(`https://v6.exchangerate-api.com/v6/57108df80e67a2d56d2b2167/latest/${currencyOneValue}`)
    .then(response => response.json())
    .then(rates => {
      const rate =  rates.conversion_rates[currencyTwoValue];
      const total = rate * amountOne.value;
      rateEl.innerText = rate.toFixed(2);
      amountTwo.value = total.toFixed(2);
    })
}

getCurrencyRates();


// event listeners
currencyOne.addEventListener('change', getCurrencyRates);
amountOne.addEventListener('input', getCurrencyRates);
currencyTwo.addEventListener('change', getCurrencyRates);
amountTwo.addEventListener('input', getCurrencyRates);

btnSwap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  getCurrencyRates();
})