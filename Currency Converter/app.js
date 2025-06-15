let inputAmount = document.querySelector('#amount');
let result = document.querySelector('#result');
const convertBtn = document.querySelector('button');
const fromSelect = document.querySelector('#from');
const toSelect = document.querySelector('#to');
const API = 'https://v6.exchangerate-api.com/v6/52c0cd42dbdbdf5e8f360b3d/latest/USD';

const currencyCodes = [
  "USD", "INR", "EUR", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM",
  "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD",
  "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD",
  "EGP", "ERN", "ETB", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ",
  "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "IQD", "IRR", "ISK", "JEP", "JMD",
  "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR",
  "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK",
  "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP",
  "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD",
  "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP",
  "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF",
  "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

currencyCodes.sort();

currencyCodes.forEach((code) => {
    const option1 = document.createElement('option');
    option1.value = code;
    option1.innerHTML = code;
    fromSelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = code;
    option2.innerHTML = code;
    toSelect.appendChild(option2);
})


convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const fromValue = fromSelect.value;
    const toValue = toSelect.value;    
    fetchData(fromValue, toValue, API);
})

const fetchData = async (fromValue, toValue, API) => {
    try {
        const res = await fetch(API);
        const data = await res.json();
        
        const fromRate = data?.conversion_rates[fromValue];
        const toRate = data?.conversion_rates[toValue];
        const temp = toRate/fromRate;
        const finalResult = inputAmount.value*temp.toFixed(2); 
        console.log(finalResult);
        result.innerHTML = finalResult;
    }
    catch {
        console.log("Error");
    }
}




