
//----- All Renders of Assingment-----------
//Render Orignil HTML Page (happens autmatically) ~
//Render List of Party Names (data recieved from API, must be translated by JSON) - state change ~
//Render message to click on party name - no state change ~
//Once party name clicked, render name, ID, date, description, and location of the selected party (data recieved) - state change


//Steps
//HTML Loaded Automatically ~
//Fetch & Translate Data -> update state ~
//Show message to click on a party name ~
//Once clicked, render translated data for selected party on UI screen -> update state

//-----Mechanics-----
//Need a state ~
//Whenever fetching from API need Try/Catch ~
//AddClickEventListener for selected Party ~
//Each render is a function, aka a set of instructions that updates the state & UI screen
//Each function needs to be invoked


const state = {
  parties: []
  selectedParty: null
}

const getParties = async () => {
  try {
    const response = await fetch("https://partypalace.co/api/v2/party");
    const data = await response.json();
    state.parties= data.results;
    render();
    
    const p = document.createElement('p')
    p.textContent = `Select One Of The Parties`
    renderSelectedParty();
  }catch(err){
    console.log(err)
  }
}


const render = () => {
const conatiner = document.createElement("section"); // contains list of extracted party names and data
container.innerHTML = ""; // clears conatiner anew for each state update

const ol = createElement("ol")

state.parties.forEach (individualParty) => {
const li = createElement('li')
li.innerText = individualParty.name
ol.appendChild(li)
}

container.appendChild(ol)

};


const renderSelectedParty = () => {

  button.addEventListener('click', () => {

const conatiner1 = document.createElement("section1"); // contains list of extracted party names and data
container1.innerHTML = ""; // clears conatiner anew for each state update

const ol = createElement("ol")

state.parties (clickedOnParty) => {
const li = createElement('li')
li.innerText = data.results.name.extractedinfo
ol.appendChild(li)
}

container1.appendChild(ol)

});

};

getParties();





// vvv Mapped From The Pokemon Example vvv

// const state = {
//   parties: [],
//   selectedParty: null;
// };

// const getParties = async () => {
//   try {
//     const response = await fetch("https://partypalace.co/api/v2/party");
//     const data = await response.json();
//     state.parties = data.results;
//     renderParties();
//     renderSelectedParty();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const renderParties = () => {
//   const container = document.createElement(`section`);
//   container.innerHTML = "";

//   const ol = document.createElement("ol");

//   state.partyList.forEach((singleParty) => {
//     const li = document.createElement("li");
//     li.innerText = singleParty.name;
//     ol.appendChild(li);

//      li.addEventListener("click", () => { //if any of the names it clicked on render to display info of slected partty
//       state.selectedParty = data.name;
//       renderSelectedParty();
//   });

//   container.appendChild(ol);
// };

// getParties();


// function renderSelectedParty = () => {
  
// if state.selectedParty = data.name;


// }


