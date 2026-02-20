fetch("https://api.tvmaze.com/shows")
.then(res => res.json())
.then(data => {
  let html = "";
  data.slice(0,20).forEach(film => {
    html += `
      <div class="card">
        <img src="${film.image.medium}">
        <h3>${film.name}</h3>
        <p>⭐ ${film.rating.average || "-"}</p>
      </div>
    `;
  });
  document.getElementById("movies").innerHTML = html;
});
