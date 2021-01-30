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
/* Autoplay mode #1 - Bet randomly on a number
 * Autoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, 20, 40 then start over)
 * Autoplay mode #3 - decrement bet in a sequence (40, 20, 10, 5, 2, 1 then start over)
 * Autoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
 * Autoplay mode #5 - Bet randomly on a number (but skip some rounds)
 * Autoplay mode #6 - Bet on 1 and 2 only
 */
/* ========================================================================
 * Set autoplay mode and other game settings
 * ======================================================================== */
var autoplay_mode = 1;

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

/* =====================
 * End of bot settings
 * =====================
 */
// Set streak size to wait for before betting
var user_streak_size = 2;

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
var bonus_round = false;
var bonus_round_counter = 0;
var increment_sequence = 1;
var decrement_sequence = 6;

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

        // Hide game logo
        $(".footerLeftContent--4fEIj").hide();

        // Hide game limits and all UI information
        $(".box--2RTUm").hide();

        // Hide winner's chat
        $(".messagesWinnersChat--2UVhf").hide();
        $(".top-left-2IjNG").hide();
        $(".top-container--33V8c").hide();
    }

    // Output debug on game screen if user wants it
    if (user_on_screen_debug == 1) {
        // Create debug area
        var $div = $("<div />").appendTo("body");
        $div.attr("id", "debug_area");

        // CSS
        $("#debug_area").css({"position": "absolute", "font-size": "x-large", "width": "100%", "height": "98%", "overflow": "overlay", "line-height": "20pt", "background": "black"});
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
                regex_formatted = regex_formatted.replace(/^0+/, "");
                result = regex_formatted;
                result = result.replace(/^0+/, "");
            }
        }

        // Main bot logic
        if (regex_formatted != undefined && check == false && bonus_round == false) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 40;

            // Check for bonus round
            var bonus_round_check = regex_formatted.match(/x/g);

            if (bonus_round_check != null) {
                bonus_round = true;
            }

            // Clear interval
            clearInterval(clicking);

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + regex_formatted);
            console.log(spacing);

            // Debug for page
            if (user_on_screen_debug == 1) {
                if (regex_formatted == "1") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"yellow\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "2") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"blue\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "5") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"purple\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "10") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"green\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "20") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"orange\">" + regex_formatted + "</font><br />");
                } else if (regex_formatted == "40") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"red\">" + regex_formatted + "</font><br />");
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

            // Autoplay mode #1
            if (autoplay_mode == 1 && bonus_round == false) {
                // Fetch random number
                bet_type = randomNumber(1, 6);

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

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(0).click();

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
                                $(".betSpot---OSvn").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
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
                                $(".betSpot---OSvn").eq(2).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
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
                                $(".betSpot---OSvn").eq(3).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #20 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(4).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #40 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(5).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #2
            if (autoplay_mode == 2 && bonus_round == false) {
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
                                $(".betSpot---OSvn").eq(0).click();

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
                                $(".betSpot---OSvn").eq(1).click();

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
                                $(".betSpot---OSvn").eq(2).click();

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
                                $(".betSpot---OSvn").eq(3).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #20 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(4).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #40 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(5).click();

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
            if (autoplay_mode == 3 && bonus_round == false) {
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
                                $(".betSpot---OSvn").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);

                    // Reset sequence
                    decrement_sequence = 7;
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
                                $(".betSpot---OSvn").eq(1).click();

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
                                $(".betSpot---OSvn").eq(2).click();

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
                                $(".betSpot---OSvn").eq(3).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (decrement_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #20 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(4).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #40 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(5).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }

                // Decrement sequence
                decrement_sequence--;
            }

            // Autoplay mode #4
            if (autoplay_mode == 4 && bonus_round == false) {
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
                                $(".betSpot---OSvn").eq(0).click();

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
                                $(".betSpot---OSvn").eq(1).click();

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
                                $(".betSpot---OSvn").eq(2).click();

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
                                $(".betSpot---OSvn").eq(3).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (increment_sequence == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #20 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(4).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #40 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(5).click();

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
            if (autoplay_mode == 5 && bonus_round == false) {
                // Generate number with frequency of skipping rounds.
                random_number = user_round_skipping + 7;

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
                                $(".betSpot---OSvn").eq(0).click();

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
                                $(".betSpot---OSvn").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 3) {
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
                                $(".betSpot---OSvn").eq(2).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 4) {
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
                                $(".betSpot---OSvn").eq(3).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 5) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #20 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #20 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(4).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 6) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on #40 now.");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on #40 now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".betSpot---OSvn").eq(5).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Skip the round
                    console.log(spacing);
                    console.log("I'm skipping this round!");
                    console.log(spacing);
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                }
            }

            // Autoplay mode #6
            if (autoplay_mode == 6 && bonus_round == false) {
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
                                $(".betSpot---OSvn").eq(0).click();

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
                                $(".betSpot---OSvn").eq(1).click();

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
        }

        // Check
        if (i > count) {
            check = false;
            iteration_number = 0;
            bonus_round = false;
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

    el.dispatchEvent(ev);
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
 * Function name: checkBetSpot
 * Function description: this function will check if the betting spot is available
 * Date: 07/11/20
 * =====================
 */
function checkBetSpot() {
    // Grab betting spot
    var betting_spot = $(".footerBettingGrid--9QTFm.collapsed--3oC2R").length;

    // Determine if it's available to click or not
    if (betting_spot == 1) {
        return false;
    } else {
        return true;
    }
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
        autoplay_mode = parseInt(window.prompt("Autoplay mode #1 - Bet randomly on a number\n\nAutoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, 20, 40 then start over)\n\nAutoplay mode #3 - decrement bet in a sequence (40, 20, 10, 5, 2, 1 then start over)\n\nAutoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)\n\nAutoplay mode #5 - Bet randomly on a number (but skip some rounds)\n\nAutoplay mode #6 - Bet on 1 and 2 only", "1"), 10);
    } while(isNaN(autoplay_mode) || autoplay_mode > 6 || autoplay_mode < 1);

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

    if (autoplay_mode == 5) {
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
window.alert("Welcome to Dream Catcher Advanced Autoplay Bot!\n\nMake sure you enable classic mode before running this bot.");

// Show setup wizard
changeOptions();

// Register the event handler 
document.addEventListener('keyup', changeOptionsHotkey, false);

// Run bot after 5 seconds
setTimeout(function() {
    // Play!
    autoPlay();
}, 5000);