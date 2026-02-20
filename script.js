fetch("https://api-lk21.herokuapp.com/api/v1/latest")
  .then(res => res.json())
  .then(data => {
    console.log(data); // buat lihat struktur di console
    let html = "";

    data.forEach(film => {
      html += `
        <a href="${film.link || '#'}" target="_blank" class="card">
          <img src="${film.poster || ''}">
          <h3>${film.title || 'No Title'}</h3>
        </a>
      `;
    });

    document.getElementById("movies").innerHTML = html;
  })
  .catch(err => {
    document.getElementById("movies").innerHTML = "API tidak bisa diakses (CORS / server mati)";
    console.log(err);
  });
