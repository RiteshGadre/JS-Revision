const clock = document.querySelector("#clock");

setInterval(() => {
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, '0');
  let minute = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerHTML = `${hour} : ${minute} : ${seconds}`;
}, 1000);
