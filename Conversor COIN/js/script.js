let api = "https://v6.exchangerate-api.com/v6/0bf811bd500c1ad4c29bff25/latest/USD";
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "USD"
toDropDown.value = "BRL"

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.lenght != 0) {
        fetch(api)
            .then(resp => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates
                [fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * 
                toExchangeRate
                result.innerHTML = ` ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency} `;
        });

    } else {
        alert("Please fill in the amounth");
    }
};

document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
