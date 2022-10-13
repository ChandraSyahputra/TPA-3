let movieContent = document.getElementById("containerMovie");

let movieList = async () => {
  let ambil = await fetch("https://api.themoviedb.org/3/discover/movie/?api_key=0194f8276b381a802bbae57271f95092&sort_by=popularity.desc");
  let movie = await ambil.json();

  movie.results.forEach((item) => {
    console.log(item);
    // movieContent.innerHTML += `<div class="card" style="width: 18rem;">
    //     <img src = "https://image.tmdb.org/t/p/w500/${item.poster_path}" class = "card-img-top" alt = "..." >
    //       <div class="card-body"></div>
    //         <h5 class="card-title">${item.title}</h5>
    //         <p class="card-rate">${item.vote_average}</p>
    //         <p class="card-realease">${item.release_date}</p>
    //       </div>
    // </div >`;
    movieContent.innerHTML += `<div class="card" style="width: 18rem;">
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
  })
}

movieList();