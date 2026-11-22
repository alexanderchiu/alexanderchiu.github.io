// Shows the time in Cape Town. Runs in the browser only, makes no requests and stores nothing.
const clock = document.getElementById("clock");
if (clock) {
  const format = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Johannesburg" });
  const show = () => { clock.textContent = `Local time ${format.format(new Date())}, UTC+2`; };
  show();
  setInterval(show, 15000);
}
