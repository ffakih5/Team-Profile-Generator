const fs = require('fs');

function generateHTML(data) {
   const teamCards = ""
   console.log(data);
   
  ` <div class="card-col">
   <div class="card-body card-header">
       <h5 class="card-title">Priyanka </h5> 
       <h6 class="card-subtitle mb-2 text-muted">Manager  <i class="fas fa-coffee"></i></h6>
   </div>
   <ul class="list-group-item list-group-flush">
       <li class="list-group-item">Email: <a href="mailto:priyanka@team.com"></a>priyanka@team.com</li>
       <li class="list-group-item">Employee ID: #24567 </li>
       <li class="list-group-item">Office No: 17</li>
   </ul>
</div>
<div class="card-col">
   <div class="card-body card-header">
       <h5 class="card-title">Ivan</h5>
       <h6 class="card-subtitle mb-2 text-muted">Engineer  <i class="fas fa-glasses"></i></h6>
   </div>
   <ul class="list-group-item list-group-flush">
       <li class="list-group-item">Email: <a href="mailto:ivan@team.com"></a>ivan@team.com</li>
       <li class="list-group-item">Employee ID: #41984 </li>
       <li class="list-group-item">GitHub : <a href= "https://www.github.com/IamIvan" target="_blank">IamIvan</a></li>
   </ul>
</div>
<div class="card-col">
   <div class="card-body card-header">
       <h5 class="card-title">Nari</h5>
       <h6 class="card-subtitle mb-2 text-muted">Engineer  <i class="fas fa-glasses"></i></h6>
   </div>
   <ul class="list-group-item list-group-flush">
       <li class="list-group-item">Email: <a href="mailto:nari@team.com"></a>nari@team.com</li>
       <li class="list-group-item">Employee ID: #327896</li>
       <li class="list-group-item">GitHub: <a href= "https://www.github.com/Nari" target="_blank">Nari</a></li>
   </ul>
</div>
<div class="card-col">
   <div class="card-body card-header">
       <h5 class="card-title">Hose</h5>
       <h6 class="card-subtitle mb-2 text-muted">Intern  <i class="fas fa-user-graduate"></i></h6>
   </div>
   <ul class="list-group-item list-group-flush">
       <li class="list-group-item">Email: <a href="mailto:hose@team.com"></a>hose@team.com</li>
       <li class="list-group-item">Employee ID: #042679</li>
       <li class="list-group-item">School : UTS</li>
   </ul>
</div> `

    let teamHtml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width-device-width, initial-scale-1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/405935787f.js" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-header">
            <span class="navbar-brand">Meet The Team</span>
        </div>
    </nav>

    <main class="container">
        <div class="row">
    
    ${teamCards}

        </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
            
    
</html> 
    

`

    fs.writeFile("index.html", teamHtml, (err) =>
        err ? console.log(err) : console.log("!")
        )

}

module.exports = generateHTML;