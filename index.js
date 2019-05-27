'use strict';

function getDogImages(num){
    console.log("In the getDogImages function. Number of images requested " + num);
    clearImages();
    let getUrl = "https://dog.ceo/api/breeds/image/random/" + num;
    console.log(getUrl);
    fetch(getUrl)
    .then(response => response.json())
    .then(responeJson => displayResults(responeJson))
    .catch(error => alert('Something went wrong'));
}

function displayResults(responeJson){
    console.log(responeJson);
    for(let i=0; i<responeJson.message.length; i++){
        //console.log(responeJson.message[i]);
        addImage(responeJson.message[i]);
    }
}

function clearImages(){
  console.log("in the clearimages function");
  $('img').remove();
}

function addImage(message){
    console.log("in the add image function");
    let imageToAdd = `<img src="${message}" alt="Dog Image">`;
    console.log(imageToAdd);
    $('.js-image-section').append(imageToAdd);
}


function watchForm(){
  console.log("In the watchform function");
  $('form').submit(function(){
    event.preventDefault();
  console.log("form submitted");
  let numImages = $('input').val();
  console.log(numImages);
  getDogImages(numImages);
  });
}


$(function() {
console.log('App loaded!');
$('input').val(3);
watchForm();
});