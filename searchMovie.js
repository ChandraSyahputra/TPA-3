let searchMovie = document.getElementById("search");

let cariMovie = async () => {
  let search1 = new URL(document.location).searchParams;
  let search = search1.get("search");
  let ambil1 = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=0194f8276b381a802bbae57271f95092&query=${search}&page=1`);

  let cariMovie = await ambil1.json();

  cariMovie.results.forEach(item => {
    searchMovie.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="...">
    <div class="row">
      <div class="col-9">
        <div class="card-body">
          <p class="card-title">${item.title}</p>
          <p class="card-release">${item.release_date}</p>
        </div>
      </div>
      <div class="col-3">
        <p class="card-rate">${item.vote_average}</p>
      </div>
    </div>
  </div>`;
  });
}

cariMovie();