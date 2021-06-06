'use strict';

/* This file is configured to select a random car and track currently using two separate arrays and functions, one for the track and one for the car
    Asphalt car and track selections only (for now).
*/
// JQuery - to be determined/ for future use
// data structures
let trackList = [
    'Bristol',
    'Five Flags',
    'Iowa',
    'Irwindale',
    'Langley',
    'Lanier',
    'Lucas Oil',
    'Martinsville',
    'Myrtle Beach',
    'Nashville Speedway',
    'New Smyrna',
    'North Wilkesboro',
    'Oxford',
    'Richmond',
    'South Boston',
    'Southern National',
    'Milwaukee Mile',
    'Thompson',
    'USA'
]
// function iterates through trackList and outputs each (item) into the html #tracks div
function displayTracks() {
    let tracks = '';
    trackList.forEach(function (item) {
        tracks += "<div class='row' style='display: inline-flex; place-content: flex-end; margin: 15px;'><li style='font-size: large;'>" + item + "<button id='track-btn' style='margin-left: 330px' class='btn btn-danger'>Delete</button></div>" + "</li>";
    });
    document.getElementById("tracks").innerHTML = tracks;
}
displayTracks();

let carList = [
    'ARCA',
    'Late Model Stock',
    'Super Late Model',
    'Legends',
    'Sk Modified',
    'Tour Modified',
    'Street Stock'
]
// function iterates through carList and outputs each item into the Car list: card
function displayCars() {
    let cars = '';
    carList.forEach(function (item) {
        cars += "<div class='row' style='display: inline-flex; place-content: flex-end; margin: 15px;'><li style='font-size: large;'>" + item + "<button onclick='deleteItem()' style='margin-left: 330px' class='btn btn-danger'>Delete</button></div>" + "</li>";
    });
    document.getElementById('cars').innerHTML = cars;

}
displayCars();

// function to clear selections and allow for new track/car combo, I chose this method over remove() due to extra browser support via innerHTML (IE)
function clearChoices(){
    document.getElementById('trackresult').innerHTML = "";
    document.getElementById('carresult').innerHTML = "";
}
// Grabs a random track and car combo, then outputs to separately designated results sections via one button
function trackAndCar() {
    const trackRandom = Math.floor(Math.random() * trackList.length);
    document.getElementById('trackresult').innerHTML = trackList[trackRandom];
    const carRandom = Math.floor(Math.random() * carList.length);
    document.getElementById('carresult').innerHTML = carList[carRandom];
}
// adding items
function addTrack() {

}
function addCar() {

}
// removing items from the array (tracks and cars) pass in desired array (trackList or carList) to remove an item
function removeTrack() {

}
function removeCar() {
    
}