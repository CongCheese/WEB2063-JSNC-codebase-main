document.getElementById("form-add").addEventListener("submit",(e)=> {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    axios.post("http://localhost:3000/movies",{
        name: name,
        genre: genre,
        year: year
    }).then ((res)=>{
        console.log("add done");
    }).catch((err) => {
      console.error("add fail:", err);
      alert("add fail");
    });
});
