function activateYerba() {
    var $yerbas = $();
    var qt = 10; // Number of yerbas to generate

    for (var i = 0; i < qt; ++i) {
        var $enlightenmint = $('<img class="yerba" src="/media/Enlightenmint.png">');
        var $berrylemonade = $('<img class="yerba" src="/media/BerryLemonade.png">');
        var $looseleaf = $('<img class="yerba" src="/media/LooseLeaf.png">');
        var $unsweetglass = $('<img class="yerba" src="/media/UnsweetGlass.png">');

        var $roll = Math.floor(Math.random() * 10); // Random number between 0-9

        var $currentyerba = $(); // Initialize empty jQuery object

        if ($roll === 9) { // Adjusted for valid range (0-9)
            $currentyerba = $looseleaf;
        } else if ($roll === 8) {
            $currentyerba = $unsweetglass;
        } else if ($roll % 2 === 0) {
            $currentyerba = $enlightenmint;
        } else {
            $currentyerba = $berrylemonade;
        }

        $currentyerba.css({
            'left': Math.random() * $('#site').width() + 'px',
            'top': -Math.random() * $('#site').height() + 'px'
        });

        $yerbas = $yerbas.add($currentyerba); // Add the current yerba to the collection
    }

    $('#yerba').prepend($yerbas); // Add all yerbas to the DOM at once

    $yerbas.animate({
        top: $(window).height(), // Animate falling
    }, Math.random() * 2000 + 5000, function () { // Random animation duration between 5-7 seconds
        $(this).remove(); // Remove the element after animation

        // Re-activate yerba if all have fallen
        if (--qt < 1) {
            activateYerba();
        }
    });
}
