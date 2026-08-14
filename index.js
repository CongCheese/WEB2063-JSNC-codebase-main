axios.get ("http://localhost:3000/movies").then((res) =>{
    console.log("call API",res.data);
    const movies = res.data;
    document.getElementById("movie").innerHTML = movies.map((movie) => {
        return`<tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">${movie.id}</td>
                <td class="px-4 py-2 border border-gray-300">${movie.name}</td>
                <td class="px-4 py-2 border border-gray-300">${movie.genre}</td>
                <td class="px-4 py-2 border border-gray-300">${movie.year}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">

                  <button
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onclick="goToEditPage(${movie.id})"
                  >
                    Edit
                  </button>

                  <button onclick="deleteMovie(${movie.id})"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`;

    }).join("");
})

function deleteMovie(id) {
    const result = confirm("delete?");
    if (result){
        axios.delete(`http://localhost:3000/movies/${id}`).then (()=>{
            loadMovies();
        });
    }
}

function goToEditPage(id) {
    location.replace(`edit.html?id=${id}`);
}

