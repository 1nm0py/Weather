let api = {
    key: "84a3781201a7f9a9bda21e4f05b6c2f0",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
  }

  let searchBox = document.querySelector('.search-box');
  searchBox.addEventListener("keypress", setQuery)
  
  function setQuery(e) {
    if(e.keyCode == 13){
        getResult(searchBox.value)
        searchBox.value = ""
    }
    
  }

  function getResult(query) {
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) =>{
        console.log(weather);
    })
  }