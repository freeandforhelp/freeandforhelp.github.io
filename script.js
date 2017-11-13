$(document).ready(function() {
    givePage();
});

function askPage() {
    $("#post-content").show();
    $(".give-page").hide();
    $(".ask-page").show();
    $("#home-content").hide();
}

function givePage() {
    $("#post-content").show();
    $(".ask-page").hide();
    $(".give-page").show();
    $("#home-content").hide();
}

function homePage() {
    $("#ask-content").hide();
    $("#give-content").hide();
    $("#home-content").show();
}

$(".ask-link").click(function() {
    askPage();
})

$(".give-link").click(function() {
    givePage();
})

$(".home-link").click(function() {
    homePage();
})

$("#submit-give").click(function() {
    addHelp();
})

function filters() {
    var foodWater = $("#filter-food-water").prop('checked');
    var shelter = $("#filter-shelter").prop('checked');
    var transport = $("#filter-transport").prop('checked');
    var labor = $("#filter-labor").prop('checked');

    if(!foodWater && !shelter && !transport && !labor) {
        $(".category-food-water").show();
        $(".category-shelter").show();
        $(".category-transport").show();
        $(".category-labor").show();
    } else {
        if(foodWater) {
            $(".category-food-water").show();
        } else {
            $(".category-food-water").hide();
        }
        if(shelter) {
            $(".category-shelter").show();
        } else {
            $(".category-shelter").hide();
        }
        if(transport) {
            $(".category-transport").show();
        } else {
            $(".category-transport").hide();
        }
        if(labor) {
            $(".category-labor").show();
        } else {
            $(".category-labor").hide();
        }
    }
}

$("#filter-food-water").click(function() {
    filters();

});

$("#filter-shelter").click(function() {
    filters();

});
$("#filter-transport").click(function() {
    filters();

});
$("#filter-labor").click(function() {
    filters();

});

function addHelp() {
    var firstName = $("#give-first-name").val();
    var lastName = $("#give-last-name").val();
    var category = "";
    var description = $("#give-description").val();
    if($("#give-cat-labor").is(':checked')) {
        category = "Labor";
    } else if($("#give-cat-food-water").is(':checked')) {
        category = "Food/Water";
    } else if($("#give-cat-transport").is(':checked')) {
        category = "Transportation";
    } else if($("#give-cat-other").is(':checked')) {
        category = "Other";
    } else if($("#give-cat-shelter").is(':checked')) {
        category = "Shelter";
    }

    var newEntry = "";
    newEntry += "<li> <h4> <b class=\"name\">" + firstName + "</b>";
    newEntry += " offers <b class=\"category\">" + category + "</b></h4>";
    newEntry += "<p class=\"description\">" + description + "</p></li>";

    $("#give-list").prepend(newEntry);

}
