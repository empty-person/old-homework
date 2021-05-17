let testt ;

async function asdasdsad() {
    const response = await fetch("https://restcountries.eu/rest/v2/all?fields=name;population;flag;timezones");
    const yes = await response.json();

    return yes;
}

let tableBody = document.getElementById("myTableBody");
let input = document.getElementById("input");


 asdasdsad().then(yes => {

     yes.forEach(element => {
         
         let tr = document.createElement("tr");
         let name = document.createElement("td");
         name.id = "name";
         let nameText = document.createTextNode(element.name);         
         name.appendChild(nameText);
         let population = document.createElement("td");
         let populationText = document.createTextNode(element.population);         
         population.appendChild(populationText);
         let flag = document.createElement("td");
         let flagImg = document.createElement("img"); 
         flagImg.src = element.flag;  
         flagImg.width = 50;
         flagImg.height = 50;
         flag.appendChild(flagImg);
         let timezone = document.createElement("td");
         let timezoneText = document.createTextNode(element.timezones);   
         timezone.appendChild(timezoneText);
         tr.appendChild(name);
         tr.appendChild(population);
         tr.appendChild(flag);
         tr.appendChild(timezone);




         tableBody.appendChild(tr);
     });


});

function filter(param) { 
    let trs = tableBody.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++){
        let name = trs[i].getElementsByTagName("td")[0];
        if(!name){
            return; 
        }
        nameString = name.textContent || name.innerText;
        if(nameString.toLowerCase().indexOf(param.toLowerCase())> -1){
            trs[i].style.display = "";
        }else {
            trs[i].style.display = "none";
        }
    }
}






