'use strict';

/* This file is configured to select a random car and track currently using two separate arrays and functions, one for the track and one for the car
    Asphalt car and track selections only (for now).
*/

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
const trackRandom = Math.floor(Math.random() * trackList.length);

let carList = [
    'ARCA',
    'Late Model Stock',
    'Super Late Model',
    'Legends',
    'Sk Modified',
    'Tour Modified',
    'Street Stock'
]
const carRandom = Math.floor(Math.random() * carList.length);

// gettrack generates a random track from the trackList array
function gettrack(){
    document.getElementById('trackresult').innerHTML = trackList[trackRandom];
}

// getcar generates a random track from the carList array
function getcar(){
    document.getElementById('carresult').innerHTML = carList[carRandom];
}