/* =====================
* Evolution's Football Studio Advanced Autoplay Bot
* Written by The_Blode
* 07/11/20
* NB! This script must be run in the console of your browser. You must also select the game's iframe by selecting it manually in the Chrome development tools or connecting directly to the iframes URL
* =====================
*/

/* Autoplay mode #1 - Alternate bets. Example: Bet home, then away, then home, then away, then home, then away, etc
* Autoplay mode #2 - Bet on home and away in numbered sequences. Example: if sequence_amount is set to 3 in a row, the bot will play; home, home, home then away, away, away and repeat.
* Autoplay mode #3 - Bet randomly on home or away
* Autoplay mode #4 - Bet only after a certain sequence of results. Example: if streak_size is set to 4, then place a bet after 4 homes or 4 aways in a row
* Autoplay mode #5 - Bet randomly on home or away (with round skipping)

*/
/* ========================================================================
* Set autoplay mode and other game settings
* ======================================================================== */
var autoplay_mode = 4;

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
* Set streak size to wait for before betting
* ======================================================================== */
var user_streak_size = 5;

/* ========================================================================
* Set sequence amount to play with
* ======================================================================== */
var user_sequence_amount = 3;

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
// Default variables used in the script
var bet_type = 1;
var sequence_start = 1;
var sequence_amount = user_sequence_amount;
var sequence_total = sequence_amount * 2;
var streak_size = user_streak_size;
var spacing = "==========================";
var i = 0;
var how_many_times = 1000000;
var home_streak = 0;
var away_streak = 0;
var check = false;
var count = 0;
var clicking = "";
var result = "";
var result_check_found = "";

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
        // Send fake click to keep game alive
        click(200, 200);

        // Disable video
        if (disable_video == 1) {
            var html = document.getElementsByClassName("transformWrapper--1ywHP")[0].innerHTML = "";
        }

        // Get winning result
        result = $("div[data-role='status-text']").html();

        if (result != undefined) {
            var result_check = result.match(/WINS/g);

            if (result_check != null) {
                if (result_check_found == "") {
                    result_check_found = $("div[data-role='status-text']").html();
                }
            }
        }

        var game_state = $("div[data-role='status-text']").html();

        if (game_state != undefined) {
            game_state_check = game_state.match(/PLACE/g);
        }

        // Main bot logic
        if (game_state_check != null && check == false) {
            // Flip check flag
            check = true;

            // Store iteration number
            iteration_number = i;

            // Set counter value
            count = iteration_number + 40;

            // Clear interval
            clearInterval(clicking);

            // Format result
            result_check_found = result_check_found.replace(/ WINS/, "");

            // Output final hand to console
            console.log(spacing);
            console.log("The final result is " + result_check_found);
            console.log(spacing);

            // Debug for page
            if (user_on_screen_debug == 1) {
                if (result_check_found == "Home") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"red\">" + result_check_found + "</font><br />");
                } else if (result_check_found == "Away") {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"blue\">" + result_check_found + "</font><br />");
                } else {
                    // Append to debug area
                    $("#debug_area").append("The final result is <font color=\"yellow\">" + result_check_found + "</font><br />");
                }

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
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on home now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on away now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
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
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on home now. Sequence #" + sequence_start + "<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.Sequence #" + sequence_start);
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on away now. Sequence #" + sequence_start + "<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
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
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("The randomizer chose home as the next bet!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on home now. <br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else {
                    // Output
                    console.log(spacing);
                    console.log("The randomizer chose away as the next bet!");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("The randomizer chose away as the next bet!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on away now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }
            }

            // Autoplay mode #5
            if (autoplay_mode == 5) {
                // Generate number with frequency of skipping rounds.
                random_number = user_round_skipping + 3;

                // Fetch random number
                bet_type = randomNumber(1, random_number);

                // Place bet
                if (bet_type == 1) {
                    // Output
                    console.log(spacing);
                    console.log("The randomizer chose home as the next bet!");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("The randomizer chose home as the next bet!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on home now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (bet_type == 2) {
                        // Output
                    console.log(spacing);
                    console.log("The randomizer chose away as the next bet!");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("The randomizer chose away as the next bet!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on away now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(1).click();

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
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm skipping this round!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                }
            }

            // Reset streak
            if (result_check_found == "Home") {
                // Increase home streak
                home_streak++;

                // Reset away streak
                away_streak = 0;

                console.log(spacing);
                console.log("Home wins! There have been " + home_streak + " home wins in a row now.");
                console.log(spacing);
                // Debug for page
                if (user_on_screen_debug == 1) {
                    // Append to debug area
                    $("#debug_area").append("Home wins! There have been " + home_streak + " home wins in a row now.<br />");

                    // Scroll to top
                    scrollToTopOfDebug();
                }
            } else if (result_check_found = "Away") {
                // Increase away streak
                away_streak++;

                // Reset home streak
                home_streak = 0;

                console.log(spacing);
                console.log("Away wins! There have been " + away_streak + " away wins in a row now.");
                console.log(spacing);
                // Debug for page
                if (user_on_screen_debug == 1) {
                    // Append to debug area
                    $("#debug_area").append("Away wins! There have been " + away_streak + " away wins in a row now.<br />");

                    // Scroll to top
                    scrollToTopOfDebug();
                }
            } else {
                // It's a draw! Increment both sides
                home_streak++;
                away_streak++;
            }

            // Autoplay mode #4
            if (autoplay_mode == 4) {
                if (home_streak == streak_size) {
                    // Place bet
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on away now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on away now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(1).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                } else if (away_streak == streak_size) {
                    // Output
                    console.log(spacing);
                    console.log("I'm placing a bet on home now.");
                    console.log(spacing);
                    // Debug for page
                    if (user_on_screen_debug == 1) {
                        // Append to debug area
                        $("#debug_area").append("I'm placing a bet on home now.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }
                    clicking = setInterval(function() {
                        // Check if bet spot is available to click
                        var test = checkBetSpot();

                        if (test == true) {
                            for (var x = 0; x < user_wager_amount; x++) {
                                // Click betting spot
                                $(".mainBet--3JDdD").eq(0).click();

                                // Clear interval
                                clearInterval(clicking);
                            }
                        }
                    }, click_delay);
                }
            }

            // Reset result
            result_check_found = "";
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
    var betting_spot = $(".perspective--5cLlU.perspectiveActive--2VeJ7").length;

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
        autoplay_mode = parseInt(window.prompt("Autoplay mode #1 - Alternate bets. Example: Bet home, then away, then home, then away, then home, then away, etc\n\nAutoplay mode #2 - Bet on home and away in numbered sequences. Example: if sequence_amount is set to 3 in a row, the bot will play; home, home, home then away, away, away and repeat.\n\nAutoplay mode #3 - Bet randomly on home or away\n\nAutoplay mode #4 - Bet only after a certain sequence of results. Example: if streak_size is set to 4, then place a bet after 4 homes or 4 aways in a row\n\nAutoplay mode #5 - Bet randomly on home or away (with round skipping)", "1"), 10);
    } while(isNaN(autoplay_mode) || autoplay_mode > 5 || autoplay_mode < 1);

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

    if (autoplay_mode == 2) {
        // Ask the user how often they want to skip rounds
        do {
            sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
        } while(isNaN(sequence_amount) || sequence_amount < 1);
    }

    // Ask user if they want a clean interface
    do {
        user_clean_interface = parseInt(window.prompt("Do you want a clean interface?\n\nType 1 to enable, or 0 to disable.", "0"), 10);
    } while(isNaN(user_clean_interface) || user_clean_interface > 1);

    // Ask the user if they want on-screen debug to be display
    do {
        user_on_screen_debug = parseInt(window.prompt("Do you want to view on-screen debug during bot play?\n\nType 1 to enable, or anything else to disable.", "0"), 10);
    } while(isNaN(user_on_screen_debug) || user_on_screen_debug > 1);

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
        $(".footerRightContent--D9xWT").hide();

        // Hide game logo
        $(".footerLeftContent--4fEIj").hide();

        // Hide game limits and all UI information
        $(".box--2RTUm").hide();

        // Football info
        $(".footerLeftContent--4fEIj").hide();

        // Hide winner's chat
        $(".messagesWinnersChat--2UVhf").hide();
        $(".top-container--33V8c").hide();
    } else {
        // Show game history
        $(".statistics--2RWNf").show();
        $(".footerRightContent--D9xWT").show();

        // Show game logo
        $(".footerLeftContent--4fEIj").show();

        // Show game limits and all UI information
        $(".box--2RTUm").show();

        // Football info
        $(".footerLeftContent--4fEIj").show();

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
        autoplay_mode = parseInt(window.prompt("Autoplay mode #1 - Alternate bets. Example: Bet home, then away, then home, then away, then home, then away, etc\n\nAutoplay mode #2 - Bet on home and away in numbered sequences. Example: if sequence_amount is set to 3 in a row, the bot will play; home, home, home then away, away, away and repeat.\n\nAutoplay mode #3 - Bet randomly on home or away\n\nAutoplay mode #4 - Bet only after a certain sequence of results. Example: if streak_size is set to 4, then place a bet after 4 homes or 4 aways in a row\n\nAutoplay mode #5 - Bet randomly on home or away (with round skipping)", "1"), 10);
    } while(isNaN(autoplay_mode) || autoplay_mode > 5 || autoplay_mode < 1);
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
window.alert("Welcome to Football Studio Time Advanced Autoplay Bot!\n\nMake sure you enable classic mode before running this bot.");

setTimeout(function() {
    // Create debug area
    var $div = $("<div />").appendTo("body");
    $div.attr("id", "debug_area");
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