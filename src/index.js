import { validateIp } from "./helpers";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__btn");
const ipInfo = document.getElementById("ip");
const locationInfo = document.getElementById("location");
const timezoneInfo = document.getElementById("timezone");
const ispInfo = document.getElementById("isp");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(
      `http://ip-api.com/json/${ipInput.value}`,

    )
      .then(response => response.json())
      .then(setInfo);
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    getData();
  }
}

function setInfo(mapData) {
  const { lat,lon, query, country, region, timezone, isp } = mapData;
  ipInfo.innerText = query;
  locationInfo.innerHTML = country + " " + region;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = isp;
  setMetka(lat, lon);
  setTypeAndPan(lat, lon);
}
