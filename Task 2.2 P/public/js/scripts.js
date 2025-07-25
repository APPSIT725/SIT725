function addNumbers() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  fetch(`/add?num1=${num1}&num2=${num2}`)
    .then(async res => {
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      return res.json();
    })
    .then(data => {
      document.getElementById("result").innerText = `Result: ${data.result}`;
    })
    .catch(err => {
      document.getElementById("result").innerText = 'Error: ' + err.message;
    });
}
