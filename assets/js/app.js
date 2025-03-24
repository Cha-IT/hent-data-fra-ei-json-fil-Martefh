import sanger from "../json/sanger.json" with {"type": "json"};

const sangliste = document.querySelector("#sangliste");
console.log(sanger);

sanger.Sanger.forEach(sang => {
  sangliste.innerHTML += `
    <div class="sang-item">
      <h2>${sang.tittel}</h2>
      <strong>Artist:</strong> ${sang.artist} <br>
      <img src="${sang.bilde}" alt="${sang.tittel} coverbilde"/> <br>
      <strong>Om artisten:</strong> ${sang.omartist} <br>
      <strong>Sjanger:</strong> ${sang.sjanger} <br>
      <strong>År:</strong> ${sang.år} <br>
      <strong>Beskrivelse:</strong> ${sang.beskrivelse} <br>
      <strong>Anmeldelse:</strong> ${sang.anmeldelse} <br>
      <strong>Streams:</strong> ${sang.streams} <br>
      <strong>Lengde:</strong> ${sang.lengde} <br>
      <a href="${sang.lenke}" target="_blank">Hør på Spotify</a>
    </div>
  `;
});

console.log(sanger.Sanger);