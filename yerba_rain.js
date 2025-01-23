function generateYerba() {
    // Create a random yerba element
    var $enlightenmint = $('<img class="yerba" src="/media/Enlightenmint.png">');
    var $berrylemonade = $('<img class="yerba" src="/media/BerryLemonade.png">');
    var $looseleaf = $('<img class="yerba" src="/media/LooseLeaf.png">');
    var $unsweetglass = $('<img class="yerba" src="/media/UnsweetGlass.png">');

    var $roll = Math.floor(Math.random() * 10); // Random number between 0-9
    var $currentyerba;

    if ($roll === 9) {
        $currentyerba = $looseleaf;
    } else if ($roll === 8) {
        $currentyerba = $unsweetglass;
    } else if ($roll % 2 === 0) {
        $currentyerba = $enlightenmint;
    } else {
        $currentyerba = $berrylemonade;
    }

    // Set random initial position above the container
    $currentyerba.css({
        left: Math.random() * $('main').width() + 'px',
        top: -Math.random() * $('main').height() + 'px',
        transform: 'rotate(' + (Math.random() * 90 - 45) + 'deg)' // Rotate between -45 to 45 degrees
    });

    $('#yerba').prepend($currentyerba); // Add the yerba to the DOM
    animateYerba($currentyerba); // Animate the newly created yerba
}

function animateYerba($yerba) {   
    $yerba.animate({
        top: $('main').height() - $($yerba).height(), // Stop above the footer based on its position
    }, Math.random() * 2000 + 8000, "swing", function () {
        $(this).remove(); // Remove the yerba after it reaches the bottom
        generateYerba(); // Generate a new yerba immediately
    });
}

// Start the initial trickle of yerbas
for (var i = 0; i < 15; ++i) {
    setTimeout(function() {
        generateYerba();
    }, Math.random() * 5000)
}
