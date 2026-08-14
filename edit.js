console.log("edit");
const params = new URLSearchParams(window.location.search);
console.log (params);
const id = params.get("id");
console.log(id);

if(id){
    axios.get(`http://localhost:3000/movies/${id}`)
    .then ((res)=>{
        const movie = res.data;
        document.getElementById("name").value = movie.name;
        document.getElementById("genre").value = movie.genre;
        document.getElementById("year").value = movie.year;
    }).catch ((err)=> {
        alert("movie not found");
    })
}
document.getElementById("form-edit").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    axios.put(`http://localhost:3000/movies/${id}`,{
        name: name,
        genre: genre,
        year: year 
    }).then ((res)=> {
        alert("update done");
    }).catch ((err)=>{
        alert("update fail");
    })
});