function convertToCelcius() {
  var inputTemp = document.getElementById('inputTemp').value;
  if (inputTemp === '') {
    alert('Masukkan suhu terlebih dahulu!');
    return;
  }
  var celcius = (parseFloat(inputTemp) * 9) / 5 + 32;
  document.getElementById('result').innerText = `${inputTemp} Celcius = ${celcius.toFixed(2)} Fahrenheit`;
}

function convertToFahrenheit() {
  var inputTemp = document.getElementById('inputTemp').value;
  if (inputTemp === '') {
    alert('Masukkan suhu terlebih dahulu!');
    return;
  }
  var fahrenheit = ((parseFloat(inputTemp) - 32) * 5) / 9;
  document.getElementById('result').innerText = `${inputTemp} Fahrenheit = ${fahrenheit.toFixed(2)} Celcius`;
}
