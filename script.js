//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleFormSubmit() {
  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value);
  if (isNaN(delayTime) || delayTime < 0) {
    document.getElementById("output").textContent = "Please enter a valid delay time.";
    return;
  }
  await delay(delayTime);
  document.getElementById("output").textContent = text;
}
document.getElementById("btn").addEventListener("click", handleFormSubmit);