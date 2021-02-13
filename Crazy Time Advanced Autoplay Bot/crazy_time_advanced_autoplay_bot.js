/* =====================
 * Evolution's Crazy Time Advanced Autoplay Bot
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
 * Autoplay mode #12 - bet on 1 and 2 only
 */
/* ========================================================================
 * Set autoplay mode and other game settings
 * ======================================================================== */
var autoplay_mode = 10;

/* ========================================================================
 * Disable video (when you set this to 1, video will be disabled)
 * ======================================================================== */
var disable_video = 0;

/* ========================================================================
 * Set click delay (if you're having issues with clicks on the UI)
 * ======================================================================== */
var click_delay = 2000;

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

/* ========================================================================
 * Show on screen debug on the game window
 * ======================================================================== */
var user_on_screen_debug = 1;

/* ========================================================================
 * Insurance on main bet by betting on one (set to 0 to disable) (best used for bonus rounds only)
 * Set to 1 to cover only 1
 * Set to 2 to cover 1 & 2
 * ======================================================================== */
var user_insurance_bet = 1;

/* ========================================================================
 * Set the loss limit balance
 * ======================================================================== */
var user_loss_limit_balance = 0;

/* ========================================================================
 * Set the win limit balance
 * ======================================================================== */
var user_win_limit_balance = 0;

/* ========================================================================
 * Set break variables
 * ======================================================================== */
var break_times = 0;
var break_duration = 0;
var break_counter = 0;
var time_between_breaks = 0;
var time_between_breaks_counter = 0;
var break_time = false;

/* ========================================================================
 * Set big chat
 * ======================================================================== */
big_chat = 0;

/* =====================
 * End of bot settings
 * =====================
 */
// Default variables used in the script
var spacing = "==========================";
var i = 0;
// This variable will determine how long the bot will run for (a setting of 100 means the bot will run for 50 seconds. (The sum is how_many_times / 2) * 1 = x seconds)
var how_many_times = 1000000;
var sequence_counter = 0;
var check = false;
var count = 0;
var clicking = "";
var clicking_two = "";
var clicking_three = "";
var clicking_four = "";
var bonus_round = false;
var bonus_round_counter = 0;
var clicking_insurance = "";
var game_state_check = null;
var regex_formatted = "";
var skip = false;
var increment_sequence = 1;
var decrement_sequence = 8;
var old_autoplay_mode = 0;
var old_user_insurance_bet = 0;

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
        var result = $(".gameResult--neLl-").html();

        if (result != undefined) {
            // Find result
            var regex_match = result.match(/data-role-name=\"(.*?)\"/gi);

            if (regex_match != undefined) {
                // Format result
                regex_formatted = regex_match[0].replace("data-role-name=", "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                regex_formatted = regex_formatted.replace(/\"/, "");
                result = regex_formatted;
            }
        }

        var game_state = $("div[data-role='status-text']").html();

        if (game_state != undefined) {
            game_state_check = game_state.match(/PLACE/g);
        }

        // Enable big chat
        bigChat(big_chat);

        // Main bot logic
        if (check == false && bonus_round == false && game_state_check != null) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 40;

            // Check for bonus round
            var bonus_round_check = regex_formatted.match(/b/g);

            if (bonus_round_check != null) {
                bonus_round = true;

                // Format bonus output
                if (regex_formatted == "b1") {
                    // Cash Hunt
                    regex_formatted = "Cash Hunt";
                } else if (regex_formatted == "b2") {
                    // Pachinko
                    regex_formatted = "Pachinko";
                } else if (regex_formatted == "b3") {
                    // Coin Flip
                    regex_formatted = "Coin Flip";
                } else if (regex_formatted == "b4") {
                    // Crazy Time
                    regex_formatted = "Crazy Time";
                }
            }

            // Clear pending clicks
            clearInterval(clicking);
            clearInterval(clicking_two);
            clearInterval(clicking_three);
            clearInterval(clicking_four);
            clearInterval(clicking_insurance);

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + regex_formatted);
            console.log(spacing);

            // Debug for page
            if (user_on_screen_debug == 1) {
                if (regex_formatted == "1") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"#05C3DD\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "2") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"yellow\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "5") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"pink\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "10") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"purple\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "Coin Flip") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"#006994\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "Cash Hunt") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"#32CD32\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "Crazy Time") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"#fe2c54\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "Pachinko") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"#7F00FF\">" + regex_formatted + "</font><br />");
                }

                // Scroll to top
                scrollToTopOfDebug();
            }

            // Debug for the console
            console.log(spacing);
            var winnings = getWinnings();
            console.log("Your winnings are: " + winnings);
            console.log(spacing);

            // Debug for page
            if (user_on_screen_debug == 1) {
                if (winnings == "0") {
                // Append to debug area
                $("#debug_area").append("Your winnings are: <font color=\"red\">" + winnings + "</font><br />");
                } else {
                    // Append to debug area
                    $("#debug_area").append("Your winnings are: <font color=\"green\">" + winnings + "</font><br />");
                }
 
                // Scroll to top
                scrollToTopOfDebug();
            }

            // Debug for the console
            console.log(spacing);
            var balance = getBalance();
            console.log("Your balance is: " + balance);
            console.log(spacing);

            // Debug for page
            if (user_on_screen_debug == 1) {
                // Append to debug area
                $("#debug_area").append("Your balance is: " + balance + "<br />");

                // Scroll to top
                scrollToTopOfDebug();
            }

            // Padding for new round
            if (user_on_screen_debug == 1) {
                // Append to debug area
                $("#debug_area").append(spacing + "<br />");

                // Scroll to top
                scrollToTopOfDebug();
            }

            // Check if loss limit has been reached
            if (user_loss_limit_balance != 0) {
                // Check for loss limit
                stopPlayLimit(balance);
            }

            // Check if win limit has been reached
            if (user_win_limit_balance != 0) {
                // Check for loss limit
                stopPlayWinLimit(balance);
            }

            // Autoplay mode #1
            if (autoplay_mode == 1 && break_time == false) {
                // Fetch random number
                bet_type = randomNumber(1, 8);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #5 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(4).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #10 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(5).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #2
            if (autoplay_mode == 2 && break_time == false) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #5 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(4).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #10 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(5).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Reset bonus round delay counter
                                bonus_round_counter = 0;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #3
            if (autoplay_mode == 3 && break_time == false) {
                // Place bet
                if (decrement_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset increment sequence
                    decrement_sequence = 9;
                } else if (decrement_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #5 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(4).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #10 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(5).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }

                // Increment sequence
                decrement_sequence--;
            }

            // Autoplay mode #4
            if (autoplay_mode == 4 && break_time == false) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #5 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(4).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #10 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(5).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
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
            if (autoplay_mode == 5 && break_time == false) {
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
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #5 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #5 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(4).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #10 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #10 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(5).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 7) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 8) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Skip the round
                    skip = true;
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Clear bonus round flag
                    bonus_round = false;
                }
            }

            // Autoplay mode #6
            if (autoplay_mode == 6 && break_time == false) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #7
            if (autoplay_mode == 7 && break_time == false) {
                // Fetch random number
                bet_type = randomNumber(1, 4);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #8
            if (autoplay_mode == 8 && break_time == false) {
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
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Skip the round
                    skip = true;
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Clear bonus round flag
                    bonus_round = false;
                }
            }

            // Autoplay mode #9
            if (autoplay_mode == 9 && break_time == false) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip now and Pachinko.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip and Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip and Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip and Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Coin Flip and Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip and Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko and Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko and Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                        // Output
                        console.log(spacing);
                        console.log("I'm placing a bet on Pachinko and Crazy Time now.");
                        console.log(spacing);
                        if (user_on_screen_debug == 1) {
                            // Append to debug area
                            $("#debug_area").append("I'm placing a bet on Pachinko and Crazy Time now.<br />");

                           // Scroll to top
                           scrollToTopOfDebug();
                        }
                        clicking = setInterval(function() {
                            // Check if bet spot is available to click
                            var test = checkBetSpot();
    
                            if (test == true) {
                                for (var x = 0; x < user_wager_amount; x++) {
                                    // Click betting spot
                                    $(".betSpotContainer--3V3jM").eq(3).click();
                                    $(".betSpotContainer--3V3jM").eq(7).click();

                                    // Clear bonus round flag
                                    bonus_round = false;

                                    // Clear interval
                                    clearInterval(clicking);
                                }
                            }
                        }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt and Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt and Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Autoplay mode #10
            if (autoplay_mode == 10 && break_time == false) {
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
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 2 || bet_type_two == 2) {
                        // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_two = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_two);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 3 || bet_type_two == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_three = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_three);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 4 || bet_type_two == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_four = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_four);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #11
            if (autoplay_mode == 11 && break_time == false) {
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
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Coin Flip now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(2).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 2 || bet_type_two == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Pachinko now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Pachinko now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_two = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(3).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_two);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 3 || bet_type_two == 3) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Cash Hunt now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Cash Hunt now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_three = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(6).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_three);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type == 4 || bet_type_two == 4) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on Crazy Time now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on Crazy Time now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_four = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(7).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_four);
                            }
                        }
                    }, click_delay);
                }

                if (bet_type > 4) {
                    // Skip the round
                    skip = true;
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Clear bonus round flag
                    bonus_round = false;
                }
            }

            if (skip == false) {
                if (user_insurance_bet == 1) {
                    console.log(spacing);
                    console.log("I'm placing an insurance bet on #1!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing an insurance bet on #1<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_insurance = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_insurance);
                            }
                        }
                    }, click_delay);
                } else if (user_insurance_bet == 2) {
                    console.log(spacing);
                    console.log("I'm placing an insurance bet on #1 & #2!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing an insurance bet on #1 & #2<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking_insurance = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking_insurance);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #12
            if (autoplay_mode == 12 && break_time == false) {
                // Place bet
                if (increment_sequence == 1) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #1 now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #1 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        // Increment bonus round counter
                        bonus_round_counter++;

                        if (test == true && bonus_round_counter > 3) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(0).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 2) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #2 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #2 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpotContainer--3V3jM").eq(1).click();

                                // Clear bonus round flag
                                bonus_round = false;

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset increment sequence
                    increment_sequence = 0;
                }

                // Increment sequence
                increment_sequence++;
            }

            // Reset skip flag
            skip = false;
        }

        // Check
        if (i > count) {
            check = false;
            iteration_number = 0;
        }

        // Increment counter
        i++;

        // Increment break timer
        if (break_times == 1) {
            // Check if playing session is over
            if (time_between_breaks_counter > time_between_breaks) {
                // Increment break timer
                break_counter++;

                // Show break timer
                showBreakScreen(1);

                // Set break flag
                break_time = true;

                if (break_counter > break_duration) {
                    // Hide break timer
                    showBreakScreen(0);

                    // Unset break flag
                    break_time = false;

                    // Reset session time counter
                    time_between_breaks_counter = 0;

                    // Reset break time counter
                    break_counter = 0;
                }
            } else {
                // Increment session timer
                time_between_breaks_counter++;
            }
        }

        if (i < how_many_times) {
            setTimeout(f, 750);
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
 * Function name: checkBetSpot
 * Function description: this function will check if the betting spot is available
 * Date: 07/11/20
 * =====================
 */
function checkBetSpot() {
    // Grab betting spot
    var betting_spot = $(".perspectiveContainer--3orzS.collapsed--D0F2p").length;

    // Determine if it's available to click or not
    if (betting_spot == 1) {
        return false;
    } else {
        return true;
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
 * Function name: getBalance
 * Function description: this function fetch your balance
 * Date: 07/11/20
 * =====================
 */
function getBalance() {
    // Grab balance
    return $("span[data-role='balance-label__value']").html();
}

/* =====================
 * Function name: getWinnings
 * Function description: this function fetch your winnings
 * Date: 07/11/20
 * =====================
 */
function getWinnings() {
    // Grab balance
    return $("span[data-role='total-bet-label__value']").html();
}

/* =====================
 * Function name: changeOptionsHotkey
 * Function description: this function will allow the user to change options during play by pressing a hotkey
 * Date: 28/01/21
 * =====================
 */
function changeOptions() {
    // Get autoplay mode from the user
    do {
        autoplay_mode = parseInt(window.prompt("Autoplay mode #1 - Bet randomly on a number\nAutoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)\nAutoplay mode #3 - decrement bet in a sequence (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)\nAutoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)\nAutoplay mode #5 - Bet randomly on a number (but skip some rounds)\nAutoplay mode #6 - Bonus round betting only\nAutoplay mode #7 - random bonus games only betting\nAutoplay mode #8 - random bonus games only betting (but skip some rounds)\nAutoplay mode #9 - Bonus round betting only (double bonus so Coin Flip + Pachinko, Coin Flip + Cash Hunt, Coin Flip + Crazy Time, Pachinko + Cash Hunt, Pachinko + Crazy Time, Cash Hunt + Crazy Time)\nAutoplay mode #10 - random bonus games only betting (double bonus)\nAutoplay mode #11 - random bonus games only betting (but skip some rounds) (double bonus)\nAutoplay mode #12 - bet on 1 and 2 only", "1"), 10);
    } while(isNaN(autoplay_mode) || autoplay_mode > 12 || autoplay_mode < 1);

    // Ask the user if they want to disable video
    do {
        disable_video = parseInt(window.prompt("Do you want to disable video in the game?\n\nType 1 for yes or 0 for no.", "0"), 10);
    } while(isNaN(disable_video) || disable_video > 1);

    // Ask user for click delay
    do {
        click_delay = parseInt(window.prompt("Would you like to adjust the click delay?\n\nThe value is in miliseconds.\n\nDefault is 2 seconds.", "2000"), 10);
    } while(isNaN(click_delay) || click_delay < 100);

    // Ask user for wager amount
    do {
        user_wager_amount = parseInt(window.prompt("What is the size of your wager?\n\nDefault wager is 1 unit.", "1"), 10);
    } while(isNaN(user_wager_amount) || user_wager_amount < 1);

    if (autoplay_mode == 5 || autoplay_mode == 8 || autoplay_mode == 11) {
        // Ask the user how often they want to skip rounds
        do {
            user_round_skipping = parseInt(window.prompt("How often do you want the bot to skip rounds?\n\nDefault is 2 but the higher you set this amount, the more rounds the bot will skip.", "2"), 10);
        } while(isNaN(user_round_skipping) || user_round_skipping < 2);
    }

    if (autoplay_mode == 4) {
        // Ask the user how often they want to skip rounds
        do {
            user_sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
        } while(isNaN(user_sequence_amount) || user_sequence_amount > 1);
    }

    // Ask user if they want a clean interface
    do {
        user_clean_interface = parseInt(window.prompt("Do you want a clean interface?\n\nType 1 to enable, or 0 to disable.", "0"), 10);
    } while(isNaN(user_clean_interface) || user_clean_interface > 1);

    // Ask the user if they want on-screen debug to be display
    do {
        user_on_screen_debug = parseInt(window.prompt("Do you want to view on-screen debug during bot play?\n\nType 1 to enable, or anything else to disable.", "0"), 10);
    } while(isNaN(user_on_screen_debug) || user_on_screen_debug > 1);

    // Ask the user if they want on-screen debug to be display
    do {
        user_insurance_bet = parseInt(window.prompt("Do you want to place insurance bets? Set to 1 to cover just 1 and set to 2 to cover 1 & 2. Set to 0 to disable insurance bets.", "0"), 10);
    } while(isNaN(user_insurance_bet) || user_insurance_bet > 2);

    // Ask the user if they want to set a loss limit balance
    do {
        user_loss_limit_balance = parseFloat(window.prompt("Set the loss balance you wish the bot to stop playing when reached.\n\nSet to 0 to disabled.", "0"), 10);
    } while(isNaN(user_loss_limit_balance));

    // Ask the user if they want to set a win limit balance
    do {
        user_win_limit_balance = parseFloat(window.prompt("Set the win balance you wish the bot to stop playing when reached.\n\nSet to 0 to disabled.", "0"), 10);
    } while(isNaN(user_win_limit_balance));

    // Ask the user if they want to be reminded of breaks
    do {
        break_times = parseInt(window.prompt("Do you want to be reminded of break times?\n\nSet to 1 to enable reminders or set to 0 to disable.", "0"), 10);
    } while(isNaN(break_times));

    // Find time between breaks
    if (break_times == 1) {
        do {
            time_between_breaks = parseInt(window.prompt("How long do you want to play before the breaks?\n\nSet a value in minutes.", "0"), 10);
        } while(isNaN(time_between_breaks) || time_between_breaks < 1);

        // Calculate break duration
        time_between_breaks = (time_between_breaks * 60) * 2;

        do {
            break_duration = parseInt(window.prompt("How long do you want the breaks to be?\n\nSet a value in minutes.", "0"), 10);
        } while(isNaN(break_duration) || break_duration < 1);

        // Calculate break duration
        break_duration = (break_duration * 60) * 2;
    }

    // Ask the user if they want big chat or not
    do {
        big_chat = parseInt(window.prompt("Do you want to activate big chat?\n\nSet to 1 to enable big chat or set to 0 to disable.", "0"), 10);
    } while(isNaN(big_chat) || big_chat > 1);

    // Enable big chat
    bigChat(big_chat);

    // Adjust UI
    changeInterface(user_clean_interface);

    // Toggle debug
    toggleDebugMode(user_on_screen_debug);
}

/* =====================
 * Function name: changeOptionsHotkey
 * Function description: this function will allow the user to change options during play by pressing a hotkey
 * Date: 28/01/21
 * =====================
 */
function changeOptionsHotkey(e) {
    // If Control+1 is pressed
    if (e.ctrlKey && e.keyCode == 49) {
        // Change bot options
        changeOptions();
    }
}

/* =====================
 * Function name: changeInterface
 * Function description: this function will allow the user to change the interface
 * Date: 28/01/21
 * =====================
 */
function changeInterface(state) {
    // Hide all game elements to make the interface nice and clean
    if (state == "1") {
        // Hide game history
        $(".statistics--2RWNf").hide();
        $(".historyStatisticContainer--3KMr5").hide();

        // Hide game logo
        $(".footerLeftContent--4fEIj").hide();

        // Hide game limits and all UI information
        $(".box--2RTUm").hide();

        // Hide winner's chat
        $(".messagesWinnersChat--2UVhf").hide();
        $(".top-container--33V8c").hide();
    } else {
        // Show game history
        $(".statistics--2RWNf").show();
        $(".historyStatisticContainer--3KMr5").show();

        // Show game logo
        $(".footerLeftContent--4fEIj").show();

        // Show game limits and all UI information
        $(".box--2RTUm").show();

        // Show winner's chat
        $(".messagesWinnersChat--2UVhf").show();
        $(".top-container--33V8c").show();
    }
}

/* =====================
 * Function name: toggleDebugMode
 * Function description: this function will toggle the onscreen debug
 * Date: 28/01/21
 * =====================
 */
function toggleDebugMode(state) {
    // Output debug on game screen if user wants it
    if (state == "1") {
        // CSS
        $("#debug_area").css({"position": "absolute", "font-size": "x-large", "width": "100%", "height": "98%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000"});
    } else {
        // Hide debug
        $("#debug_area").hide();
    }
}

/* =====================
 * Function name: changeAutoplayMode
 * Function description: this function will allow the user to change autoplay mode dynamically
 * Date: 31/01/21
 * =====================
 */
function changeAutoplayMode() {
    // Get autoplay mode from the user
    do {
        autoplay_mode = parseInt(window.prompt("Autoplay mode #1 - Bet randomly on a number\nAutoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)\nAutoplay mode #3 - decrement bet in a sequence (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)\nAutoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)\nAutoplay mode #5 - Bet randomly on a number (but skip some rounds)\nAutoplay mode #6 - Bonus round betting only\nAutoplay mode #7 - random bonus games only betting\nAutoplay mode #8 - random bonus games only betting (but skip some rounds)\nAutoplay mode #9 - Bonus round betting only (double bonus so Coin Flip + Pachinko, Coin Flip + Cash Hunt, Coin Flip + Crazy Time, Pachinko + Cash Hunt, Pachinko + Crazy Time, Cash Hunt + Crazy Time)\nAutoplay mode #10 - random bonus games only betting (double bonus)\nAutoplay mode #11 - random bonus games only betting (but skip some rounds) (double bonus)\nAutoplay mode #12 - bet on 1 and 2 only", "1"), 10);
    } while(isNaN(autoplay_mode) || autoplay_mode > 12 || autoplay_mode < 1);
}

/* =====================
 * Function name: stopPlayLimit
 * Function description: this function will stop playing if the balance falls below user limit
 * Date: 31/01/21
 * =====================
 */
function stopPlayLimit(balance) {
    // Convert balance to float
    var balance_as_float = parseFloat(balance);

    // If balance is less than loss limit balance
    if (balance_as_float < user_loss_limit_balance) {
        // Debug for the console
        console.log(spacing);
        console.log("The bot will stop playing as the loss balance has been reached.");
        console.log(spacing);

        // Debug for page
        if (user_on_screen_debug == 1) {
            // Append to debug area
            $("#debug_area").append("The bot will stop playing as the loss balance has been reached.<br />");

            // Scroll to top
            scrollToTopOfDebug();
        }

        // Set autoplay to erroneous number
        autoplay_mode = 1000000;

        // Stop insurance bets
        user_insurance_bet = 0;
    }
}

/* =====================
 * Function name: stopPlayWinLimit
 * Function description: this function will stop playing if the balance is above the threshold
 * Date: 31/01/21
 * =====================
 */
function stopPlayWinLimit(balance) {
    // Convert balance to float
    var balance_as_float = parseFloat(balance);

    // If balance is less than loss limit balance
    if (balance_as_float > user_win_limit_balance) {
        // Debug for the console
        console.log(spacing);
        console.log("The bot will stop playing as the win balance has been reached.");
        console.log(spacing);

        // Debug for page
        if (user_on_screen_debug == 1) {
            // Append to debug area
            $("#debug_area").append("The bot will stop playing as the win balance has been reached.<br />");

            // Scroll to top
            scrollToTopOfDebug();
        }

        // Set autoplay to erroneous number
        autoplay_mode = 1000000;

        // Stop insurance bets
        user_insurance_bet = 0;
    }
}

/* =====================
 * Function name: showBreakScreen
 * Function description: this function will remind the player to take their scheduled break
 * Date: 31/01/21
 * =====================
 */
function showBreakScreen(state) {
    // Output break screen
    if (state == "1") {
        // CSS
        $("#break_screen").css({"position": "absolute", "font-size": "x-large", "width": "100%", "height": "98%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "z-index": "1000000", "text-align": "center"});
        $("#break_screen").html("Break Time!");
        $("#break_screen").show();

        // Stop playing
        // Store current values
        if (autoplay_mode != 1000000) {
            old_autoplay_mode = autoplay_mode;
            old_user_insurance_bet = user_insurance_bet;
        }

        // Set autoplay to erroneous number
        autoplay_mode = 1000000;

        // Stop insurance bets
        user_insurance_bet = 0;
    } else {
        // Hide debug
        $("#break_screen").hide();

        // Start playing again
        // Set autoplay to erroneous number
        autoplay_mode = old_autoplay_mode;

        // Stop insurance bets
        user_insurance_bet = old_user_insurance_bet;

        // Reset bonus round
        bonus_round = false;
    }
}

/* =====================
 * Function name: bigChat
 * Function description: this function will display a big chat
 * Date: 31/01/21
 * =====================
 */
function bigChat(state) {
    if (state == 1) {
        // Output break screen
        $(".scrollableWrapper--2nhZl").css({"height": "230%", "width": "170%"});

        $(".input--2nx2R").css({"left": "120%"});

        $(".message--1ERGD").css({"font-size": "18px", "line-spacing": "5px"});

        $(".senderName--3tGIw").css({"font-size": "18px", "line-spacing": "5px"});
    } else {
        // Output break screen
        $(".scrollableWrapper--2nhZl").css({"height": "100%", "width": "100%"});

        $(".input--2nx2R").css({"left": "0%"});
    }
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

// Welcome message!
window.alert("Welcome to Crazy Time Advanced Autoplay Bot!\n\nMake sure you enable classic mode before running this bot.");

setTimeout(function() {
    // Create debug area
    var $div = $("<div />").appendTo("body");
    $div.attr("id", "debug_area");
}, 2000);

setTimeout(function() {
    // Create debug area
    var $div = $("<div />").appendTo("body");
    $div.attr("id", "break_screen");
}, 2000);

setTimeout(function() {
    // Show setup wizard
    changeOptions();
}, 2000);

// Register the event handlers
document.addEventListener('keyup', changeOptionsHotkey, false);
document.addEventListener('keyup', changeAutoplayMode, false);

// Run bot after 5 seconds
setTimeout(function() {
    // Play!
    autoPlay();
}, 5000);