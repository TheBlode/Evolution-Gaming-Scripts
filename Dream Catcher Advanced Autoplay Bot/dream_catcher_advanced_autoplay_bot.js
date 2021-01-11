/* =====================
 * Evolution's Dream Catcher Advanced Autoplay Bot
 * Written by The_Blode
 * 11/01/21
 * NB! This script must be run in the console of your browser. You must also select the game's iframe by selecting it manually in the Chrome development tools or connecting directly to the iframes URL
 * =====================
 */

/* =====================
 * Define your bot settings here!
 * =====================
 */
// Initialise all the script's variables
// Starting position (it's best to leave this as it's default of 0)
var i = 0;

// This variable will determine how long the bot will run for (a setting of 100 means the bot will run for 50 seconds. (The sum is how_many_times / 2) * 1 = x seconds)
var how_many_times = 1000000;

// Disable video (when you set this to 1, video will be disabled
var disable_video = 0;

// Set autoplay mode and other game settings
// Set autoplay mode
var autoplay_mode = 1;
// Set sequence amount to play with
var user_sequence_amount = 3;
// Set streak size to wait for before betting
var user_streak_size = 2;
// Set wager amount (default is 1 unit)
var user_wager_amount = 1;

// Autoplay mode #1
// Bet randomly on a number
if (autoplay_mode == 1) {
    // Bet randomly on a number
}


// Add some spacing for the output for the user
var spacing = "==========================";
var one_streak = 0;
var two_streak = 0;
var five_streak = 0;
var ten_streak = 0;
var twenty_streak = 0;
var forty_streak = 0;
var check = false;
var count = 0;

/* =====================
 * End of bot settings
 * =====================
 */

/* =====================
 * Functions that will be used by the bot
 * =====================
 */
/* =====================
 * Function name: autoPlay
 * Function description: this function will perform the autoplaying
 * Date: 07/11/20
 * =====================
 */
function autoPlay() {
    // Disable video
    if (disable_video == 1) {
        var html = document.getElementsByClassName("transformWrapper--1ywHP")[0].innerHTML = "";
    }

    // Debug for the console
    console.log(spacing);
    console.log("I'm going to start playing!");
    console.log(spacing);

    // Perform main loop
    function f() {
        // Send fake click to keep game alive
        click(0, 0);

        // Get winning result
        var result = $(".gameResult--neLl-.visible--2IevP").html();

        if (result != undefined) {
            // Find result
            var regex_match = result.match(/data-role-name=\"(.*?)\"/gi);

            // Format result
            var regex_formatted = regex_match[0].replace("data-role-name=", "");
            regex_formatted = regex_formatted.replace(/\"/, "");
            regex_formatted = regex_formatted.replace(/\"/, "");
            result = regex_formatted;
            result = result.replace(/^0+/, "");
        }

        // Main bot logic
        if (result != undefined && check == false) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 40;

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + result);
            console.log(spacing);

            // Autoplay mode #1
            if (autoplay_mode == 1) {
                // Fetch random number
                bet_type = randomNumber(1, 6);

                // Toggle bet type
                if (bet_type == 1) {
                    // Set bet type to 1
                    bet_type = 1;
                } else if (bet_type == 2) {
                    // Set bet type to 2
                    bet_type = 2;
                } else if (bet_type == 3) {
                    // Set bet type to 2
                    bet_type = 5;
                } else if (bet_type == 4) {
                    // Set bet type to 2
                    bet_type = 10;
                } else if (bet_type == 5) {
                    // Set bet type to 2
                    bet_type = 20;
                } else {
                    // Set bet type to 2
                    bet_type = 40;
                }

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(0).click();
                        }
                    }, 12000);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(1).click();
                        }
                    }, 12000);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(2).click();
                        }
                    }, 12000);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(3).click();
                        }
                    }, 12000);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(4).click();
                        }
                    }, 12000);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpot--VXrdG.isBettingTime--17ZIL.isDesktop--F1JN6.showFront--qNrYi").eq(5).click();
                        }
                    }, 12000);
                }
            }
        }

        // Check
        if (i > count) {
            check = false;
            iteration_number = 0;
        }

        // Increment counter
        i++;

        if (i < how_many_times) {
            setTimeout( f, 500 );
        }
    }

    f();
}

/* =====================
 * Function name: randomNumber
 * Function description: this function will generate a random number
 * Date: 07/11/20
 * =====================
 */
function randomNumber(min, max) {
    // Minimum and maximum numbers included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* =====================
 * Function name: click
 * Function description: this function will send a simulated mouse click
 * Date: 07/11/20
 * =====================
 */
function click(x, y) {
    var ev = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });

    var el = document.elementFromPoint(x, y);

    el.dispatchEvent(ev);
}

/* =====================
 * Main code
 * =====================
 */
// Inject jQuery for us to use
javascript:(function() {
    function l(u, i) {
        var d = document;
        if (!d.getElementById(i)) {
            var s = d.createElement('script');
            s.src = u;
            s.id = i;
            d.body.appendChild(s);
        }
    }
    l('//code.jquery.com/jquery-3.2.1.min.js', 'jquery')
})();

// Run bot after 5 seconds
setTimeout(function() {
    // Play!
    autoPlay();
}, 5000);