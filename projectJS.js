let form = document.getElementById("form");
let submitButton = document.getElementById("submitButton");
let resetButton = document.getElementById("resetButton");

submitButton.addEventListener("click", createPlanner)

function createPlanner(){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    if (emailRegex.test(email)) { // ensures an email is entered
        let breakfast = document.getElementById("breakfast").value;
        let snack1 = document.getElementById("snack1").value;
        let lunch = document.getElementById("lunch").value;
        let snack2 = document.getElementById("snack2").value;
        let dinner = document.getElementById("dinner").value;

        let plannerWin = window.open();
        
        plannerWin.document.write(`
            <head>
                <title>Planner Table</title>
            </head>
        `); // create a title for the new web page

        plannerWin.document.write(`
            <div id="plannerSection">

            </div>

            <br>
        `); // Create the framework for the planner

        buildPlanner();

        let printButton = plannerWin.document.createElement("button"); // Create the button used to print or download the planner, both actions can be done in the same window
        printButton.id = "printButton";
        printButton.textContent = "Print/Download";
        printButton.onclick = printPlanner;

        plannerWin.document.body.appendChild(printButton);

        let clearButton = plannerWin.document.createElement("button"); // Creates the button used to clear the planner
        clearButton.id = "clearButton";
        clearButton.textContent = "Clear";
        clearButton.onclick = clearPlanner;

        plannerWin.document.body.appendChild(clearButton);

        function printPlanner() {
            plannerWin.window.print();
        }

        function buildPlanner() { // function that builds the planner table when called
            plannerWin.document.getElementById("plannerSection").innerHTML = `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Goal: ${goal}</p>

                <table border="1">
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednsday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>

                    <tr>
                        <th>Breakfast</th>
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                        <td>${breakfast}</td> 
                    </tr>

                    <tr>
                        <th>Snack</th>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                        <td>${snack1}</td>
                    </tr>

                    <tr>
                        <th>Lunch</th>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                        <td>${lunch}</td>
                    </tr>

                    <tr>
                        <th>Snack</th>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                        <td>${snack2}</td>
                    </tr>

                    <tr>
                        <th>Dinner</th>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                        <td>${dinner}</td>
                    </tr>
                </table>`
        }

        function clearPlanner() { // sets all variables used to empty strings and reconstructs the planner table
            name = "";
            email = "";
            goal = "";
            breakfast = "";
            snack1 = "";
            lunch = "";
            snack2 = "";
            dinner = "";
            
            buildPlanner();
        }
    } else {
        window.alert("Please provide an email address");
    }
}