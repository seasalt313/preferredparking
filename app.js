//Created an array of objects with car info.
let cars = [{
    make: "Honda",
    model: "CRV",
    spaces: 1,
    money: 45
}, {
    make: "Honda",
    model: "Civic",
    spaces: 2,
    money: 55
}, {
    make: "Land Rover",
    model: "Range Rover",
    spaces: 3,
    money: 35
}, {
    make: "Acura",
    model: "rsx",
    spaces: 4,
    money: 42
}, {
    make: "Toyota",
    model: "Matrix",
    spaces: 5,
    money: 63
}, {
    make: "Acura",
    model: "TSX",
    spaces: 4,
    money: 29
}, {
    make: "Lexus",
    model: "RS350",
    spaces: 3,
    money: 53
}]

//Wrote function that will loop through car objects and create elements to render HTML.
function init() {
    let parent = document.querySelector('.cars');
    for (let i = 0; i < cars.length; i++) {

        let body = document.querySelector("body");
        let div = document.createElement("div")
        let carMakeModel = document.createElement("h2");
        let carSpaces = document.createElement("h4");
        carSpaces.setAttribute("class", "spaces")

        let money = document.createElement("h5");
        carSpaces.setAttribute("class", "cash")

        let btndiv = document.createElement("div");
        btndiv.setAttribute("class", "btndiv");

        let button0 = document.createElement("button");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        let button3 = document.createElement("button");

        //After creating elements, added event listeners on each button to post for each Lot.

        const URI = 'https://quiet-reef-60052.herokuapp.com/park';

        button0.addEventListener('click', function() {
            let request = new XMLHttpRequest();
            console.log('Soon to post to LOT 0 ' + URI);
            request.open('POST', URI);
            let body = JSON.stringify({
                make: cars[i].make,
                model: cars[i].model,
                spaces: cars[i].spaces,
                money: cars[i].money,
                id: 0
            });
            request.send(body);
        });

        button1.addEventListener('click', function() {
            let request = new XMLHttpRequest();
            console.log('Soon to post to LOT 1');

            request.open('POST', URI);
            let body = JSON.stringify({
                make: cars[i].make,
                model: cars[i].model,
                spaces: cars[i].spaces,
                money: cars[i].money,
                id: 1
            });
            request.send(body);
        });

        button2.addEventListener('click', function() {
            let request = new XMLHttpRequest();
            console.log('Soon to post to LOT 2');

            request.open('POST', URI);
            let body = JSON.stringify({
                make: cars[i].make,
                model: cars[i].model,
                spaces: cars[i].spaces,
                money: cars[i].money,
                id: 2
            });
            request.send(body);
        });

        button3.addEventListener('click', function() {
            let request = new XMLHttpRequest();
            console.log('Soon to post to LOT 3');

            request.open('POST', URI);
            let body = JSON.stringify({
                make: cars[i].make,
                model: cars[i].model,
                spaces: cars[i].spaces,
                money: cars[i].money,
                id: 3
            });
            request.send(body);

        });

        body.appendChild(div);
        div.appendChild(carMakeModel);
        div.appendChild(carSpaces);
        div.appendChild(money);
        div.appendChild(btndiv);
        btndiv.appendChild(button0);
        btndiv.appendChild(button1);
        btndiv.appendChild(button2);
        btndiv.appendChild(button3);

        carMakeModel.textContent = cars[i].make + " " + cars[i].model;
        carSpaces.textContent = "The amount of spaces this car needs is: " + cars[i].spaces;
        money.textContent = "The amount of money the driver has is $" + cars[i].money;
        button0.textContent = "LOT 0";
        button1.textContent = "LOT 1";
        button2.textContent = "LOT 2";
        button3.textContent = "LOT 3";

        button0.className = "button";
        button1.className = "button";
        button2.className = "button";
        button3.className = "button";
    }
}


//Wrote GET request to get the information from the heroku url.
function availableParking() {
  let array0 = [];
  let array1 = [];
  let array2 = [];
  let array3 = [];

    const URI = 'https://quiet-reef-60052.herokuapp.com/lot';
    let request = new XMLHttpRequest();
    request.open('GET', URI);

    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        console.log(response);

        for (let i = 0; i < response.length; i++) {
            let car = response[i].parkedCars;
            let id = response[i].id

            for (var j = 0; j < car.length; j++) {
              if (id === 0) {
                let carName0 = car[j].make + " " + car[j].model;
                console.log(carName0);
                array0.push(carName0)
              } else if (id === 1) {
                let carName1 = car[j].make + " " + car[j].model;
                console.log(carName1);
                array1.push(carName1)
              } else if (id === 2) {
                let carName2 = car[j].make + " " + car[j].model;
                console.log(carName2);
                array2.push(carName2)
              } else if (id === 3){
                let carName3 = car[j].make + " " + car[j].model;
                console.log(carName3);
                array3.push(carName3)
              }
            }
        }
        showLots(response, array0, array1, array2, array3);

    });

    //Wrote function that is called in the GET function, that will create HTML elements rendering the information I am GETting from backend.
    function showLots(lot, array0, array1, array2, array3) {
        let list = document.querySelector("ul");

        for (let i = 0; i < lot.length; i++) {
            let lotid = document.createElement("h3");
            let capacity = document.createElement("h3");
            let cost = document.createElement("h3");
            let name = document.createElement("h4");
            let listdiv = document.createElement("div");
            listdiv.setAttribute("class", "listdiv");

            lotid.textContent = lot[i].id;
            capacity.textContent = "Capacity: " + lot[i].capacity + "/" + lot[i].totalSpaces;
            cost.textContent = "Cost: $" + lot[i].rate;

            if (lot[i].id === 0) {
              name.textContent = "Cars: " + array0
            } else if (lot[i].id === 1) {
              name.textContent = "Cars: " + array1;
            } else if (lot[i].id === 2) {
            name.textContent = "Cars: " + array2;
          } else if (lot[i].id === 3) {
            name.textContent = "Cars: " + array3;
          }

            list.appendChild(listdiv);
            listdiv.appendChild(lotid);
            listdiv.appendChild(capacity);
            listdiv.appendChild(cost);
            listdiv.appendChild(name);
        }
    }
    request.send();
}


window.addEventListener('load', init);
window.addEventListener('load', availableParking);
