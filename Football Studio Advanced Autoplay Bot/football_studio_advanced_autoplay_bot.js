/* =====================
 * Evolution's Football Studio Advanced Autoplay Bot
 * Written by The_Blode
 * 07/11/20
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
var autoplay_mode = 4;
// Set sequence amount to play with
var user_sequence_amount = 3;
// Set streak size to wait for before betting
var user_streak_size = 2;
// Set wager amount (default is 1 unit)
var user_wager_amount = 1;

// Autoplay types
// Autoplay mode #1
// Alternate bets. Example: Bet home, then away, then home, then away, then home, then away, etc
// To disable this mode, set autoplay_mode and bet_type values to 0
if (autoplay_mode == 1) {
    var bet_type = 0;
}

// Autoplay mode #2
// Bet on home and away in numbered sequences. Example: if sequence_amount is set to 3 in a row, the bot will play; home, home, home then away, away, away and repeat.
if (autoplay_mode == 2) {
    bet_type = 1;
    sequence_start = 1;
    sequence_amount = user_sequence_amount;
    sequence_total = sequence_amount * 2;
}

// Autoplay mode #3
// Bet randomly on home or away
if (autoplay_mode == 3) {
    // Bet randomly on home or away
}

// Autoplay mode #4
// Bet only after a certain sequence of results. Example: if streak_size is set to 4, then place a bet after 4 homes or 4 aways in a row
if (autoplay_mode == 4) {
    var streak_size = user_streak_size;
}

// Add some spacing for the output for the user
var spacing = "==========================";
var home_streak = 0;
var away_streak = 0;
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
        var result = $(".genericPhrase--1KynV").html();

        // Main bot logic
        if (result != undefined && check == false) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 10;

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + result);
            console.log(spacing);

            // Autoplay mode #1
            if (autoplay_mode == 1) {
                // Toggle bet type from home to away (or from away to home)
                if (bet_type == 1) {
                    // Set bet type to away
                    bet_type = 2;
                } else {
                    // Set bet type to home
                    bet_type = 1;
                }

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click home betting spot
                            $(".mainBet--3JDdD.dragon--2b_GE.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                        }
                    }, 6000);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click away betting spot
                            $(".mainBet--3JDdD.tiger--1WOoz.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                        }
                    }, 6000);
                }
            }

            // Autoplay mode #2
            if (autoplay_mode == 2) {
                // Toggle bet type from home to away (or from away to home)
                if (sequence_start <= sequence_amount) {
                    // Set bet type to home
                    bet_type = 1;
                } else if (sequence_start <= sequence_total) {
                        // Set bet type to away
                    bet_type = 2;
                }

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on home now. Sequence #" + sequence_start);
                    console.log(spacing);
                    setTimeout(function() {
                        // Click home betting spot
                        $(".mainBet--3JDdD.dragon--2b_GE.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.Sequence #" + sequence_start);
                    console.log(spacing);
                    setTimeout(function() {
                        // Click away betting spot
                        $(".mainBet--3JDdD.tiger--1WOoz.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
                }

                // If sequence is over...reset it
                if (sequence_start == sequence_total) {
                    // Reset sequence
                    sequence_start = 0;
                }

                // Increment sequence
                sequence_start++;
            }

            // Autoplay mode #3
            if (autoplay_mode == 3) {
                // Fetch random number
                bet_type = randomNumber(1, 2);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("The randomizer chose home as the next bet!");
                    console.log(spacing);
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    setTimeout(function() {
                        // Click home betting spot
                        $(".mainBet--3JDdD.dragon--2b_GE.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("The randomizer chose away as the next bet!");
                    console.log(spacing);
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    setTimeout(function() {
                        // Click away betting spot
                        $(".mainBet--3JDdD.tiger--1WOoz.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
                }
            }

            // Reset streak
            if (result == "HOME") {
                // Increase home streak
                home_streak++;

                // Reset away streak
                away_streak = 0;

                console.log(spacing);
                console.log("Home wins! There have been " + home_streak + " wins in a row now.");
                console.log(spacing);
            } else if (result = "AWAY") {
               // Increase away streak
               away_streak++;

               // Reset home streak
               home_streak = 0;

               console.log(spacing);
               console.log("Away wins! There have been " + away_streak + " wins in a row now.");
               console.log(spacing);
            }     

            // Autoplay mode #4
            if (autoplay_mode == 4) {
                if (home_streak == streak_size) {
                    // Place bet
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    setTimeout(function() {
                        // Click home betting spot
                        $(".mainBet--3JDdD.dragon--2b_GE.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
                } else if (away_streak == streak_size) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    setTimeout(function() {
                        // Click away betting spot
                        $(".mainBet--3JDdD.tiger--1WOoz.isTopCard--1JoXM.isDesktop--36XUC").first().click();
                    }, 6000);
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
 * Main code
 * =====================
 */
autoPlay();