const generateManager = function (manager) {
    return `
    <div class="card-col">
           <div class="card-body card-header">
               <h5 class="card-title">${manager.teamMemberName} </h5> 
               <h6 class="card-subtitle mb-2 text-muted">Manager  <i class="fas fa-coffee"></i></h6>
           </div>

           <ul class="list-group-item list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.id}</li>
               <li class="list-group-item">Email: <a href="mailto:${manager.email}"></a>${manager.email}</li>
               <li class="list-group-item">Office No: ${manager.office}</li>
           </ul>
        </div>
           `;

}

const generateEngineer = function (engineer) {
    return `
    <div class="card-col">
           <div class="card-body card-header">
               <h5 class="card-title">${engineer.teamMemberName}</h5>
               <h6 class="card-subtitle mb-2 text-muted">Engineer  <i class="fas fa-glasses"></i></h6>
           </div>

           <ul class="list-group-item list-group-flush">
               <li class="list-group-item">Employee ID: ${engineer.id}</li>
               <li class="list-group-item">Email: <a href="${engineer.email}"></a>${engineer.email}</li>
               <li class="list-group-item">GitHub : <a href= "https://www.github.com/${engineer.GitHub}" target="_blank">${engineer.Github}</a></li>
           </ul>
        </div>

        <div class="card-col">
        <div class="card-body card-header">
            <h5 class="card-title">${engineer.teamMemberName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer  <i class="fas fa-glasses"></i></h6>
        </div>

        <ul class="list-group-item list-group-flush">
            <li class="list-group-item">Employee ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}"></a>${engineer.email}</li>
            <li class="list-group-item">GitHub: <a href= "https://www.github.com/${engineer.GitHub}" target="_blank">${engineer.GitHub}</a></li>
        </ul>
     </div>
  
    `;
}

const generateIntern = function (intern) {
    return`
    <div class="card-col">
    <div class="card-body card-header">
        <h5 class="card-title">${intern.teamMemberName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern  <i class="fas fa-user-graduate"></i></h6>
    </div>

    <ul class="list-group-item list-group-flush">
        <li class="list-group-item">Employee ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}"></a>${intern.email}</li>
        <li class="list-group-item">School : ${intern.School}</li>
    </ul>
 </div> `;

}

 generateHTML = (data) => {

    teamArray = [];
   
    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const teamRole = teamMember.getRole();
 
        if (teamRole === "Manager") {
            const managerCard = generateManager(teamMember);
            
            teamArray.push(managerCard)
        }
        if (teamRole === "Engineer") {
            const engineerCard = generateEngineer(teamMember);
 
            teamArray.push(engineerCard);
        }
        if (teamRole === "Intern") {
            const internCard = generateIntern(teamMember);
 
            teamArray.push(internCard);
        }
     }
     const teamCards = teamArray.join("");
 
     const generateTeam = generateTeamPage(teamCards);
     return generateTeam;
 
 }

   const generateTeamPage = function(teamCards){
    return `
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

   
   ` ;


   } 

 
module.exports = generateHTML;
