// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



// render partials for time-based clicks

$(document).ready(function(){

// two minutes click
    $("#twoMinutes").on("click", function(){
        console.log(this)
        if ($("h1").hasClass("twoMinutes") == true){
            $('div.one-third.column').animate({
                width: "30.6666666667%"
            }, 500, function() {
                $('div.one-third.column').css("display", "block")
                // Animation complete.
            });
        }
        if ($("h1").hasClass("twoMinutes") !== true) {
            console.log("hello")
            $('div.one-third.column').animate({
                width: "0"
            }, 500, function() {
                $('div.one-third.column').css("display", "none")
                // Animation complete.
            });
        }
    }); // closes #twoMinutes click

// four mintues click
    $("#fourMinutes").on("click", function(){
        console.log(this)
        if ($("h1").hasClass("fourMinutes") == true){
            $('div.one-third.column').animate({
                width: "30.6666666667%"
            }, 500, function() {
                $('div.one-third.column').css("display", "block")
                // Animation complete.
            });
        }
        if ($("h1").hasClass("fourMinutes") !== true) {
            console.log("hello")
            $('div.one-third.column').animate({
                width: "0"
            }, 500, function() {
                $('div.one-third.column').css("display", "none")
                // Animation complete.
            });
        }
    }); // closes #fourMinutes click

// six mintues click
$("#sixMinutes").on("click", function(){
    console.log(this)
    if ($("h1").hasClass("sixMinutes") == true){
        $('div.one-third.column').animate({
            width: "30.6666666667%"
        }, 500, function() {
            $('div.one-third.column').css("display", "block")
            // Animation complete.
        });
    }
    if ($("h1").hasClass("sixMinutes") !== true) {
        console.log("hello")
        $('div.one-third.column').animate({
            width: "0"
        }, 500, function() {
            $('div.one-third.column').css("display", "none")
            // Animation complete.
        });
    }
}); // closes #sixMinutes click


// ten mintues click

$("#tenMinutes").on("click", function(){
    console.log(this)
    if ($("h1").hasClass("tenMinutes") == true){
        $('div.one-third.column').animate({
            width: "30.6666666667%"
        }, 500, function() {
            $('div.one-third.column').css("display", "block")
            // Animation complete.
        });
    }
    if ($("h1").hasClass("tenMinutes") !== true) {
        console.log("hello")
        $('div.one-third.column').animate({
            width: "0"
        }, 500, function() {
            $('div.one-third.column').css("display", "none")
            // Animation complete.
        });
    }
}); // closes #tenMinutes click


// most read  click

$("#mostRead").on("click", function(){
    console.log(this)
    if ($("h1").hasClass("MostRead") == true){
        $('div.one-third.column').animate({
            width: "30.6666666667%"
        }, 500, function() {
            $('div.one-third.column').css("display", "block")
            // Animation complete.
        });
    }
    if ($("h1").hasClass("MostRead") !== true) {
        console.log("hello")
        $('div.one-third.column').animate({
            width: "0"
        }, 500, function() {
            $('div.one-third.column').css("display", "none")
            // Animation complete.
        });
    }
}); // closes #mostRead click






}); // closes document.ready
