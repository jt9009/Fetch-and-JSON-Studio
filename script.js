window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            let container = document.getElementById("container");

          let oldJson =  json.sort((a, b) => (a.hoursInSpace - b.hoursInSpace));
          let newJson = oldJson.reverse();
          let numberOfAstronauts = newJson.length;
          container.innerHTML = `Number of Astronauts: ${numberOfAstronauts}`;

            for (let i = 0; i < newJson.length; i++) {
                let activeInfo;
                if (newJson[i].active) {
                    activeInfo =  `<li style = "color: green">Active: ${newJson[i].active}</li>`
                } else {
                    activeInfo = `<li>Active: ${newJson[i].active}</li>`
                }
                                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                <h3>${newJson[i].firstName} ${newJson[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${newJson[i].hoursInSpace}</li>
                                  
                                                             
                            ${activeInfo}
                        
                        <li>Skills: ${newJson[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${newJson[i].picture}>
            </div>
                `
             }
           
            });

    });

});




