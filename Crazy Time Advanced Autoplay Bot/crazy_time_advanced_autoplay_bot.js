/* =====================
 * Evolution's Crazy Time Catcher Advanced Autoplay Bot
 * Written by The_Blode
 * 11/01/21
 * NB! This script must be run in the console of your browser. You must also select the game's iframe by selecting it manually in the Chrome development tools or connecting directly to the iframes URL
 * =====================
 */

/* =====================
 * Define your bot settings here!
 * =====================
 */
/* Autoplay mode #1 - Bet randomly on a number
 * Autoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)
 * Autoplay mode #3 - decrement bet in a sequence (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)
 * Autoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
 * Autoplay mode #5 - Bet randomly on a number (but skip some rounds)
 * Autoplay mode #6 - Bonus round betting only
 * Autoplay mode #7 - random bonus games only betting
 * Autoplay mode #8 - random bonus games only betting (but skip some rounds)
 * Autoplay mode #9 - Bonus round betting only (double bonus so Coin Flip + Pachinko, Coin Flip + Cash Hunt, Coin Flip + Crazy Time, Pachinko + Cash Hunt, Pachinko + Crazy Time, Cash Hunt + Crazy Time)
 * Autoplay mode #10 - random bonus games only betting (double bonus)
 * Autoplay mode #11 - random bonus games only betting (but skip some rounds) (double bonus)
 */
/* ========================================================================
 * Set autoplay mode and other game settings
 * ======================================================================== */
var autoplay_mode = 11;

/* ========================================================================
 * Disable video (when you set this to 1, video will be disabled)
 * ======================================================================== */
var disable_video = 0;

/* ========================================================================
 * Set click delay (if you're having issues with clicks on the UI)
 * ======================================================================== */
var click_delay = 8000;

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
var user_round_skipping = 2;

/* ========================================================================
 * Hide UI elements if you want a cleaner interface to play with
 * Hides all UI elements apart from the betting spots (0 will disable this option)
 * ======================================================================== */
var user_clean_interface = 1;

/* =====================
 * End of bot settings
 * =====================
 */
// Set streak size to wait for before betting
var user_streak_size = 2;
// Set wager amount (default is 1 unit)
var user_wager_amount = 1;

// Autoplay mode #1
// Bet randomly on a number
if (autoplay_mode == 1) {
    // Bet randomly on a number
}

// Autoplay mode #2
// Increment bet in a sequence (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)
if (autoplay_mode == 2) {
    var increment_sequence = 1;
}

// Autoplay mode #3
// Decrement bet in a sequence (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)
if (autoplay_mode == 3) {
    var decrement_sequence = 8;
}

// Autoplay mode #4
// Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
if (autoplay_mode == 4) {
    var increment_sequence = 1;
}

// Autoplay mode #5
// Bet randomly on a number
if (autoplay_mode == 5) {
    // Bet randomly on a number
}

// Autoplay mode #6
// Bonus round betting only
if (autoplay_mode == 6) {
    var increment_sequence = 1;
}

// Autoplay mode #7
// Random bonus games only betting
if (autoplay_mode == 7) {
    // Bet randomly on a number
}

// Autoplay mode #8
// Random bonus games only betting (but skip some rounds)
if (autoplay_mode == 8) {
    // Bet randomly on a number
}

// Autoplay mode #9
// Bonus round betting only (double bonus)
if (autoplay_mode == 9) {
    var increment_sequence = 1;
}

// Autoplay mode #10
// Random bonus games only betting (double bonus)
if (autoplay_mode == 7) {
    // Bet randomly on a number
}

// Autoplay mode #11
// Random bonus games only betting (but skip some rounds) (double bonus)
if (autoplay_mode == 8) {
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
var sequence_counter = 0;
var check = false;
var count = 0;

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

        // Hide game logo
        $(".footerLeftContent--4fEIj").hide();

        // Hide game limits and all UI information
        $(".box--2RTUm").hide();

        // Hide winner's chat
        $(".messagesWinnersChat--2UVhf").hide();
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
        var result = $(".gameResult--neLl-").html();

        if (result != undefined) {
            // Find result
            var regex_match = result.match(/data-role-name=\"(.*?)\"/gi);

            if (regex_match != undefined) {
                // Format result
                var regex_formatted = regex_match[0].replace("data-role-name=", "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                result = regex_formatted;
            }
        }

        // Main bot logic
        if (regex_formatted != undefined && check == false) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 80;

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + regex_formatted);
            console.log(spacing);

            // Autoplay mode #1
            if (autoplay_mode == 1) {
                // Fetch random number
                bet_type = randomNumber(1, 8);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(0).click();
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(1).click();
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(4).click();
                        }
                    }, click_delay);
                } else if (bet_type == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(5).click();
                        }
                    }, click_delay);
                } else if (bet_type == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #2
            if (autoplay_mode == 2) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(0).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(1).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(4).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(5).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #3
            if (autoplay_mode == 3) {
                // Place bet
                if (decrement_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(0).click();
                        }
                    }, click_delay);

                    // Reset increment sequence
                    decrement_sequence = 9;
                } else if (decrement_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(1).click();
                        }
                    }, click_delay);
                } else if (decrement_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (decrement_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (decrement_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(4).click();
                        }
                    }, click_delay);
                } else if (decrement_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(5).click();
                        }
                    }, click_delay);
                } else if (decrement_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                }

                // Increment sequence
                decrement_sequence--;
            }

            // Autoplay mode #4
            if (autoplay_mode == 4) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(0).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(1).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(4).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(5).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);

                    if (sequence_counter >= user_sequence_amount) {
                        // Reset sequence counter
                        sequence_counter = -1;
    
                        // Increment sequence
                        increment_sequence++;
                    }
                }

                // Increment sequence counter
                sequence_counter++;

                if (sequence_counter >= user_sequence_amount) {
                    // Reset sequence counter
                    sequence_counter = 0;

                    // Increment sequence
                    increment_sequence++;
                }
            }

            // Autoplay mode #5
            if (autoplay_mode == 5) {
                // Generate number with frequency of skipping rounds.
                random_number = user_round_skipping + 9;

                // Fetch random number
                bet_type = randomNumber(1, random_number);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(0).click();
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(1).click();
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(4).click();
                        }
                    }, click_delay);
                } else if (bet_type == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(5).click();
                        }
                    }, click_delay);
                } else if (bet_type == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else if (bet_type == 8) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                } else {
                    // Skip the round
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                }
            }

            // Autoplay mode #6
            if (autoplay_mode == 6) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #7
            if (autoplay_mode == 7) {
                // Fetch random number
                bet_type = randomNumber(1, 4);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #8
            if (autoplay_mode == 8) {
                // Generate number with frequency of skipping rounds.
                random_number = user_round_skipping + 5;

                // Fetch random number
                bet_type = randomNumber(1, random_number);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                } else {
                    // Skip the round
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                }
            }

            // Autoplay mode #9
            if (autoplay_mode == 9) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now and Pachinko.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip and Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip and Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko and Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                        // Output
                        console.log(spacing);
                        console.log("I'm placing a bet on Pachinko and Crazy Time now.");
                        console.log(spacing);
                        setTimeout(function() {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();
                                $(".betSpotContainer--3V3jM").eq(7).click();
                            }
                        }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt and Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #10
            if (autoplay_mode == 10) {
                // Fetch random number
                bet_type = randomNumber(1, 4);
                var bet_type_two = bet_type;

                // Find available games
                while (bet_type_two == bet_type) {
                    // Generate another random number
                    bet_type_two = randomNumber(1, 4);

                    if (bet_type_two != bet_type) {
                        // Break out of the loop
                        break;
                    }
                }

                // Place bet
                if (bet_type == 1 || bet_type_two == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 2 || bet_type_two == 2) {
                        // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 3 || bet_type_two == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 4 || bet_type_two == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #11
            if (autoplay_mode == 11) {
                // Generate number with frequency of skipping rounds.
                random_number = user_round_skipping + 5;

                // Fetch random number
                bet_type = randomNumber(1, random_number);
                var bet_type_two = bet_type;

                if (bet_type < 5) { 
                    // Find available games
                    while (bet_type_two == bet_type) {
                        // Generate another random number
                        bet_type_two = randomNumber(1, 4);

                        if (bet_type_two != bet_type) {
                            // Break out of the loop
                            break;
                        }
                    }
                }

                // Place bet
                if (bet_type == 1 || bet_type_two == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(2).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 2 || bet_type_two == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(3).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 3 || bet_type_two == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(6).click();
                        }
                    }, click_delay);
                }

                if (bet_type == 4 || bet_type_two == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    setTimeout(function() {
                        for (var x = 0; x < user_wager_amount; x++) {
                            // Click betting spot
                            $(".betSpotContainer--3V3jM").eq(7).click();
                        }
                    }, click_delay);
                }

                if (bet_type > 4) {
                    // Skip the round
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
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
            setTimeout( f, 2000 );
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