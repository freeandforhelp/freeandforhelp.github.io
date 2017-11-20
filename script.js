$(document).ready(function() {
    givePage();
    // ask posts
    addEntry("Nick","category-transport","The busses aren't running and I don't have a car","ask");
    addEntry("Sarah","category-shelter","I have no electricity right now","ask");
    addEntry("Johnny","category-food-water","I am looking for distilled water specifically","ask");
    addEntry("Annie","category-labor","I need help moving my couch into my truck","ask");
    addEntry("Thomas","category-transport","I need a ride to the hospital","ask");
    // give posts
    addEntry("Miley","category-food-water","I have 10 cans of beans to provide","give");
    addEntry("Charlie","category-shelter","I have an extra room in my house","give");
    addEntry("Tyler","category-food-water","I have 10 gallons of water","give");
    addEntry("Philip","category-transport","I have space in my pickup to move things","give");
    addEntry("Thomas","category-transport","I have room in my car to drop off kids at the elementary school with my son","give");
});

function askPage() {
    $("#post-content").show();
    $(".give-page").hide();
    $(".ask-page").show();
    $("#home-content").hide();
    $("#learn-content").hide();
    $(window).scrollTop(0);
}

function givePage() {
    $("#post-content").show();
    $(".ask-page").hide();
    $(".give-page").show();
    $("#home-content").hide();
    $("#learn-content").hide();
    $(window).scrollTop(0);
}

function homePage() {
    $("#post-content").hide();
    $("#ask-content").hide();
    $("#give-content").hide();
    $("#home-content").show();
    $("#learn-content").hide();
    $(window).scrollTop(0);
}

function learnPage() {
    $("#post-content").hide();
    $("#ask-content").hide();
    $("#give-content").hide();
    $("#home-content").hide();
    $("#learn-content").show();
    $(window).scrollTop(0);
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

$(".learn-link").click(function() {
    learnPage();
})

$("#submit-give").click(function() {
    addHelp();
    closeModal();
})

$("#submit-ask").click(function() {
    addAsk();
    closeModal();
})



$("#nav-wordmark").click(function() {
    homePage();
});

function closeModal() {
    $('.modal').hide();
    $('.modal').removeClass('in');
    $('.modal').removeAttr('padding-left');
    $('.modal-backdrop').remove();

}

function confirmSubmission() {
    $('.modal').html('<p>Submitted</p>');
}

$(".close").click(function () {
    closeModal();
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
        $(".category-other").show();
    } else {
        $(".category-other").hide();
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

function addEntry(firstName, category, description, askOrGive) {
    if(askOrGive == "ask") {
        $("#ask-list").prepend(createCard(firstName, category, description,askOrGive));
    } else {
        $("#give-list").prepend(createCard(firstName, category, description,askOrGive));
    }
}

function createCard(firstName, category, description, askOrGive) {
    var category;
    if(category == "category-other") {
        categoryName = "Other";
    }
    if(category == "category-transport") {
        categoryName = "Transportation";
    }
    if(category == "category-food-water") {
        categoryName = "Food/Water";
    }
    if(category == "category-shelter") {
        categoryName = "Shelter";
    }
    if(category == "category-labor") {
        categoryName = "Labor";
    }

    var newEntry = "";
    newEntry += "<li class=\"post-card\"><div class=\"card "+category+"\"><div class=\"card-block\"><div class=\"row\">";
    newEntry += "<div class=\"col-sm-2\">";
    newEntry += "<img class=\"profpic\" src=\"images\\blank-profile.png\">";
    newEntry += "</div>";
    newEntry += "<div class=\"col-sm-7\">";
    newEntry += "<h4 class=\"card-title\">"+firstName+"</h4>";
    newEntry += "<h6 class=\"card-subtitle mb-2 text-muted\">needs "+categoryName+"</h6>";
    newEntry += "<p class=\"card-text\">"+description+"</p>";
    newEntry += "<p class=\"distance text-muted\">1 mile away</p>";
    newEntry += "<a class=\"card-link\">Contact "+firstName+"</a>";
    newEntry += "</div>";
    newEntry += "</div></div></div></li>";

    return newEntry;
}

function createEntry(firstName, category, description, askOrGive) {

    var category;
    if(category == "category-other") {
        categoryName = "Other";
    }
    if(category == "category-transport") {
        categoryName = "Transportation";
    }
    if(category == "category-food-water") {
        categoryName = "Food/Water";
    }
    if(category == "category-shelter") {
        categoryName = "Shelter";
    }
    if(category == "category-labor") {
        categoryName = "Labor";
    }

    var newEntry = "";
    newEntry += "<li class=\""+category+"\"> <h4> <b class=\"name\">" + firstName + "</b>";
    console.log("hello");
    console.log(askOrGive);
    if(askOrGive == "ask") {
        newEntry += " needs ";
    } else {
        newEntry += " offers ";
    }
    newEntry += "<b class=\"category\">" + categoryName + "</b></h4>";
    newEntry += "<p class=\"description\">" + description + "</p></li>";

    return newEntry;

}

function addHelp() {
    var firstName = $("#give-first-name").val();
    var lastName = $("#give-last-name").val();
    var category = "";
    var description = $("#give-description").val();
    if($("#give-cat-labor").is(':checked')) {
        categoryName = "Labor";
        category = "category-labor";
    } else if($("#give-cat-food-water").is(':checked')) {
        categoryName = "Food/Water";
        category = "category-food-water";
    } else if($("#give-cat-transport").is(':checked')) {
        categoryName = "Transportation";
        category = "category-transport";
    } else if($("#give-cat-other").is(':checked')) {
        categoryName = "Other";
        category = "category-other";
    } else if($("#give-cat-shelter").is(':checked')) {
        categoryName = "Shelter";
        category = "category-shelter";
    }

    var newEntry = createEntry(firstName, category, description, "give");
    // newEntry += "<li class=\""+category+"\"> <h4> <b class=\"name\">" + firstName + "</b>";
    // newEntry += " offers <b class=\"category\">" + categoryName + "</b></h4>";
    // newEntry += "<p class=\"description\">" + description + "</p></li>";

    $("#give-list").prepend(newEntry);

}

function addAsk() {
    var firstName = $("#give-first-name").val();
    var lastName = $("#give-last-name").val();
    var category = "";
    var description = $("#give-description").val();
    if($("#give-cat-labor").is(':checked')) {
        categoryName = "Labor";
        category = "category-labor";
    } else if($("#give-cat-food-water").is(':checked')) {
        categoryName = "Food/Water";
        category = "category-food-water";
    } else if($("#give-cat-transport").is(':checked')) {
        categoryName = "Transportation";
        category = "category-transport";
    } else if($("#give-cat-other").is(':checked')) {
        categoryName = "Other";
        category = "category-other";
    } else if($("#give-cat-shelter").is(':checked')) {
        categoryName = "Shelter";
        category = "category-shelter";
    }

    var newEntry = createEntry(firstName, category, description, "ask");
    // newEntry += "<li class=\""+category+"\"> <h4> <b class=\"name\">" + firstName + "</b>";
    // newEntry += " offers <b class=\"category\">" + categoryName + "</b></h4>";
    // newEntry += "<p class=\"description\">" + description + "</p></li>";

    $("#ask-list").prepend(newEntry);

}
