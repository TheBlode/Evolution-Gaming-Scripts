/* =====================
 * Evolution's Lightning Roulette Advanced Autoplay Bot
 * Written by The_Blode
 * 16/01/21
 * NB! This script must be run in the console of your browser. You must also select the game's iframe by selecting it manually in the Chrome development tools or connecting directly to the iframes URL
 * NB2! Lightning Roulette bot is still in active development. It will only work on a standard build of Chrome (with no bookmark bar) running with a screen resolution of 1280 x 720
 * =====================
 */

/* =====================
 * Define your bot settings here!
 * =====================
 */
/* Autoplay mode #1 - Bet randomly on a number (but skip some rounds)
/* Autoplay mode #2 - Bet randomly on a number (don't skip any rounds)
 */
/* ========================================================================
 * Set autoplay mode and other game settings
 * ======================================================================== */
var autoplay_mode = 1;

/* ========================================================================
 * Disable video (when you set this to 1, video will be disabled)
 * ======================================================================== */
var disable_video = 1;

/* ========================================================================
 * Set click delay (if you're having issues with clicks on the UI)
 * ======================================================================== */
var click_delay = 200;

/* ========================================================================
 * Set wager amount in units (default is 1 unit)
 * ======================================================================== */
var user_wager_amount = 1;

/* ========================================================================
 * Set sequence amount to play with in a row
 * ======================================================================== */
var user_sequence_amount = 2;

/* ========================================================================
 * Set round skipping frequency. The higher the number, the more rounds will be skipped.
 * For use of random modes that allow skipping rounds.
 * ======================================================================== */
var user_round_skipping = 37;

/* ========================================================================
 * Hide UI elements if you want a cleaner interface to play with
 * Hides all UI elements apart from the betting spots (0 will disable this option)
 * ======================================================================== */
var user_clean_interface = 1;

/* ========================================================================
 * Show on screen debug on the game window
 * ======================================================================== */
var user_on_screen_debug = 1;

/* =====================
 * End of bot settings
 * =====================
 */
// Set streak size to wait for before betting
var user_streak_size = 2;

// Autoplay mode #1
// Bet randomly on a number
if (autoplay_mode == 1) {
    // Bet randomly on a number
}

// Add some spacing for the output for the user
var spacing = "==========================";
// Initialise all the script's variables
// Starting position (it's best to leave this as it's default of 0)
var i = 0;

// This variable will determine how long the bot will run for (a setting of 100 means the bot will run for 50 seconds. (The sum is how_many_times / 2) * 1 = x seconds)
var how_many_times = 1000000;
var one_streak = 0;
var two_streak = 0;
var five_streak = 0;
var ten_streak = 0;
var twenty_streak = 0;
var forty_streak = 0;
var sequence_counter = 0;
var check = false;
var count = 0;
var clicking = "";
var new_round = false;
var bet_type = "";

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

    // Hide all game elements to make the interface nice and clean
    if (user_clean_interface == 1) {
        // Hide game history
        $(".statistics--2RWNf").hide();
        $(".historyStatisticContainer--3KMr5").hide();
        $(".footerLeft--2qet-").hide();
        $(".footer-right--naPva").hide();

        // Hide game logo
        $(".footerLeftContent--4fEIj").hide();

        // Hide game limits and all UI information
        $(".box--2RTUm").hide();

        // Hide winner's chat
        $(".messagesWinnersChat--2UVhf").hide();
    }

    // Output debug on game screen if user wants it
    if (user_on_screen_debug == 1) {
        // Create debug area
        var $div = $("<div />").appendTo("body");
        $div.attr("id", "debug_area");

        // CSS
        $("#debug_area").css({"position": "absolute", "font-size": "x-large", "width": "30%", "height": "98%", "overflow": "overlay", "line-height": "20pt"});
    }

    // Debug for the console
    console.log(spacing);
    console.log("I'm going to start playing!");
    console.log(spacing);

    // Debug for page
    if (user_on_screen_debug == 1) {
        // Append to debug area
        $("#debug_area").append("I'm going to start playing!<br />");

        // Scroll to top
        scrollToTopOfDebug();
    }

    // Perform main loop
    function f() {
        // Get winning result
        var result = $(".winning-number--1pkMK").html();

        if (result != undefined) {
            // Find result
            var regex_match = result.match(/data-role=\"winning-number\">(.*?)</gi);

            if (regex_match != undefined) {
                // Format result
                var regex_formatted = regex_match[0].replace("data-role=\"winning-number\"", "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                regex_formatted = regex_formatted.replace(/</, "");
                regex_formatted = regex_formatted.replace(/>/, "");
                result = regex_formatted;
                result = result.replace(/^0+/, "");
            }
        }

        // Check for new round
        new_round = checkForNewRound();

        // Main bot logic
        if (regex_formatted != undefined && check == false && new_round == true) {
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

            // Debug for page
            if (user_on_screen_debug == 1) {
                // Append to debug area
                $("#debug_area").append("The final result is " + result + "<br />");

              // Scroll to top
              scrollToTopOfDebug();
            }

            // Autoplay mode #1
            if (autoplay_mode == 1) {
                // Decide how many rounds to skip
                var skip_total = user_round_skipping + 37;
                // Fetch random number
                bet_type = randomNumber(1, skip_total);

                setTimeout(function() {
                    // Bet on the spot
                    betOnSpot(bet_type);
                }, 5000);

                if (bet_type < 38) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #" + bet_type + " now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #" + bet_type + " now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                }
            }

            // Autoplay mode #2
            if (autoplay_mode == 2) {
                // Fetch random number
                bet_type = randomNumber(1, 37);

                setTimeout(function() {
                    // Bet on the spot
                    betOnSpot(bet_type);
                }, 5000);

                // Output
                console.log(spacing);
                console.log("I'm placing a bet on #" + bet_type + " now.");
                console.log(spacing);
                // Debug for page
                if (user_on_screen_debug == 1) {
                    // Append to debug area
                    $("#debug_area").append("I'm placing a bet on #" + bet_type + " now.<br />");

                   // Scroll to top
                   scrollToTopOfDebug();
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
            setTimeout(f, 500);
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
console.log(el);
    el.dispatchEvent(ev);
}

/* =====================
 * Function name: checkForNewRound
 * Function description: this function will check for a new round
 * Date: 07/11/20
 * =====================
 */
function checkForNewRound() {
    // Grab betting spot
    var new_round_text = $(".text--1jzYQ").html();

    var new_round_check = new_round_text.match(/PLACE/gi);

    if (new_round_check != null) {
        return true;
    } else {
        return false;
    }
}

/* =====================
 * Function name: betOnSpot
 * Function description: this function will place a bet on a number
 * Date: 07/11/20
 * =====================
 */
function betOnSpot(number_input) {
    switch(number_input) {
        case 1:
            click(570, 620);
            break;
        case 2:
            click(570, 580);
            break;
        case 3:
            click(570, 540);
            break;
        case 4:
            click(620, 620);
            break;
        case 5:
            click(620, 580);
            break;
        case 6:
            click(620, 540);
            break;
        case 7:
            click(670, 620);
            break;
        case 8:
            click(660, 580);
            break;
        case 9:
            click(670, 540);
            break;
        case 10:
            click(700, 610);
            break;
        case 11:
            click(700, 580);
            break;
        case 12:
            click(700, 540);
            break;
        case 13:
            click(730, 620);
            break;
        case 14:
            click(730, 580);
            break;
        case 15:
            click(720, 540);
            break;
        case 16:
            click(770, 620);
            break;
        case 17:
            click(780, 580);
            break;
        case 18:
            click(770, 540);
            break;
        case 19:
            click(820, 620);
            break;
        case 20:
            click(820, 580);
            break;
        case 21:
            click(820, 540);
            break;
        case 22:
            click(860, 620);
            break;
        case 23:
            click(860, 580);
            break;
        case 24:
            click(860, 540);
            break;
        case 25:
            click(910, 610);
            break;
        case 26:
            click(910, 580);
            break;
        case 27:
            click(910, 540);
            break;
        case 28:
            click(960, 620);
            break;
        case 29:
            click(960, 580);
            break;
        case 30:
            click(960, 540);
            break;
        case 31:
            click(1010, 620);
            break;
        case 32:
            click(1010, 590);
            break;
        case 33:
            click(1010, 540);
            break;
        case 34:
            click(1050, 620);
            break;
        case 35:
            click(1050, 590);
            break;
        case 36:
            click(1050, 540);
            break;
        case 37:
            click(530, 620);
            break;
        default:
            break;
    }
}

/* =====================
 * Function name: scrollToTopOfDebug
 * Function description: this function show the freshest line of debug on the onscreen debug
 * Date: 07/11/20
 * =====================
 */
function scrollToTopOfDebug() {
    // Scroll to top of debug area
    $("#debug_area").scrollTop(1000000);
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