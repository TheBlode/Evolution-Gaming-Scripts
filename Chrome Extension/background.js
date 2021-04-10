chrome.storage.local.set({"start": "0"});
chrome.storage.local.set({"big_chat": "0"});
chrome.storage.local.set({"autoplay_mode": "0"});
chrome.storage.local.set({"user_clean_interface": "0"});
chrome.storage.local.set({"disable_video": "0"});
chrome.storage.local.set({"user_round_limit": "0"});
chrome.storage.local.set({"click_delay": "0"});
chrome.storage.local.set({"user_wager_amount": "0"});
chrome.storage.local.set({"user_on_screen_debug": "0"});
chrome.storage.local.set({"user_insurance_bet": "0"});
chrome.storage.local.set({"user_loss_limit_balance": "0"});
chrome.storage.local.set({"user_win_limit_balance": "0"});
chrome.storage.local.set({"time_between_breaks": "0"});
chrome.storage.local.set({"break_duration": "0"});
chrome.storage.local.set({"break_times": "0"});
chrome.storage.local.set({"no_bot_mode": "0"});
chrome.storage.local.set({"user_round_skipping": "0"});
chrome.storage.local.set({"betting_progression": "0"});
chrome.storage.local.set({"responsible_mode": "0"});
var bot_type = 0;
var autoplay_mode = 0;
var disable_video = 0;
var user_clean_interface = 0;
var big_chat = 0;
var no_bot_mode = 0;
var time_between_breaks = 0;
var break_times = 0;
var break_duration = 0;
var user_round_skipping = 0;
var betting_progression = 1;
var responsible_mode = 0;

// Set global start variable
var start = "0";

// Poll to see if user has started the bot
var start_check = setInterval(function() {
    chrome.storage.local.get("start", function(data) {
        if (data.start) {
            // Set flag
            start = data.start;
        }

        // If player has stated they want to play...play!
        if (start == "1") {
            // Alert the user the bot will start
            window.alert(`Welcome to the Advanced Autoplay!\n\nPlease make sure you have classic mode enabled on your game before proceeding.\n\nYou have 30 seconds to activate it.`);

            chrome.storage.local.get("game_choice", function(data) {
                bot_type = data.game_choice;

                // Assign to the script
                assignChromeStorageLocally("1", bot_type);
            });

            chrome.storage.local.get("autoplay_mode", function(data) {
                autoplay_mode = data.autoplay_mode;

                // Assign to the script
                assignChromeStorageLocally("1", autoplay_mode);
            });

            chrome.storage.local.get("disable_video", function(data) {
                disable_video = data.disable_video;

                // Assign to the script
                assignChromeStorageLocally("2", disable_video);
            });

            chrome.storage.local.get("user_clean_interface", function(data) {
                user_clean_interface = data.user_clean_interface;

                // Assign to the script
                assignChromeStorageLocally("3", user_clean_interface);
            });

            chrome.storage.local.get("big_chat", function(data) {
                big_chat = data.big_chat;

                // Assign to the script
                assignChromeStorageLocally("4", big_chat);
            });

            chrome.storage.local.get("user_round_limit", function(data) {
                user_round_limit = data.user_round_limit;

                // Assign to the script
                assignChromeStorageLocally("5", user_round_limit);
            });

            chrome.storage.local.get("click_delay", function(data) {
                click_delay = data.click_delay;

                // Assign to the script
                assignChromeStorageLocally("6", click_delay);
            });

            chrome.storage.local.get("user_wager_amount", function(data) {
                user_wager_amount = data.user_wager_amount;

                // Assign to the script
                assignChromeStorageLocally("7", user_wager_amount);
            });

            chrome.storage.local.get("user_on_screen_debug", function(data) {
                user_on_screen_debug = data.user_on_screen_debug;

                // Assign to the script
                assignChromeStorageLocally("8", user_on_screen_debug);
            });

            chrome.storage.local.get("user_insurance_bet", function(data) {
                user_insurance_bet = data.user_insurance_bet;

                // Assign to the script
                assignChromeStorageLocally("9", user_insurance_bet);
            });

            chrome.storage.local.get("user_loss_limit_balance", function(data) {
                user_loss_limit_balance = data.user_loss_limit_balance;

                // Assign to the script
                assignChromeStorageLocally("10", user_loss_limit_balance);
            });

            chrome.storage.local.get("user_win_limit_balance", function(data) {
                user_win_limit_balance = data.user_win_limit_balance;

                // Assign to the script
                assignChromeStorageLocally("11", user_win_limit_balance);
            });

            chrome.storage.local.get("time_between_breaks", function(data) {
                time_between_breaks = data.time_between_breaks;

                // Assign to the script
                assignChromeStorageLocally("12", time_between_breaks);
            });

            chrome.storage.local.get("break_duration", function(data) {
                break_duration = data.break_duration;

                // Assign to the script
                assignChromeStorageLocally("13", break_duration);
            });

            chrome.storage.local.get("break_times", function(data) {
                break_times = data.break_times;

                // Assign to the script
                assignChromeStorageLocally("14", break_times);
            });

            chrome.storage.local.get("no_bot_mode", function(data) {
                no_bot_mode = data.no_bot_mode;

                // Assign to the script
                assignChromeStorageLocally("15", no_bot_mode);
            });

            chrome.storage.local.get("user_round_skipping", function(data) {
                user_round_skipping = data.user_round_skipping;

                // Assign to the script
                assignChromeStorageLocally("16", user_round_skipping);
            });

            chrome.storage.local.get("betting_progression", function(data) {
                betting_progression = data.betting_progression;

                // Assign to the script
                assignChromeStorageLocally("17", betting_progression);
            });

            chrome.storage.local.get("responsible_mode", function(data) {
                responsible_mode = data.responsible_mode;

                // Assign to the script
                assignChromeStorageLocally("18", responsible_mode);
            });

            // Start playing!
            startPlaying();

            // Clear bot start interval
            clearInterval(start_check);
        }
    });
}, 1000);

/* =====================
 * Function name: assignChromeStorageLocally
 * Function description: this function will assign Chrome storage variables locally
 * Date: 22/02/21
 * =====================
 */
function assignChromeStorageLocally(variable, value) {
    if (variable == "1") {
        autoplay_mode = value;
    }

    if (variable == "2") {
        disable_video = value;
    }

    if (variable == "3") {
        user_clean_interface = value;
    }

    if (variable == "4") {
        big_chat = value;
    }

    if (variable == "5") {
        user_round_limit = value;
    }

    if (variable == "6") {
        click_delay = value;
    }

    if (variable == "7") {
        user_wager_amount = value;
    }

    if (variable == "8") {
        user_on_screen_debug = value;
    }

    if (variable == "9") {
        user_insurance_bet = value;
    }

    if (variable == "10") {
        user_loss_limit_balance = value;
    }

    if (variable == "11") {
        user_win_limit_balance = value;
    }

    if (variable == "12") {
        time_between_breaks = value;
    }

    if (variable == "13") {
        break_duration = value;
    }

    if (variable == "14") {
        break_times = value;
    }

    if (variable == "15") {
        no_bot_mode = value;
    }

    if (variable == "16") {
        user_round_skipping = value;
    }

    if (variable == "17") {
        betting_progression = value;
    }

    if (variable == "18") {
        responsible_mode = value;
    }
}

/* =====================
 * Function name: startPlaying
 * Function description: this function will start playing
 * Date: 22/02/21
 * =====================
 */
function startPlaying() {
    if (start == "1") {
        // Get confirmation that classic mode is enabled
        setTimeout(function() {
            // Grab answer from the user
            if (window.confirm("Is classic mode enabled on your game?")) {
                // Classic mode is enabled
                classic_mode = 1;
            } else {
                // Classic mode is enabled
                classic_mode = 0;
            }

            // If classic mode is not enabled...exit
            if (classic_mode != 1) {
                // Exit message
                window.alert("You have not enabled classic mode. The Advanced Autoplay requires classic mode to work.\n\nPlease refresh your page to try again.");

                // We're gone
                return;
            }

            // Calculate break times
            time_between_breaks = (time_between_breaks * 60) * 2;
            break_duration = (break_duration * 60) * 2;

            // If selection is 1, then start Monopoly bot logic
            if (bot_type == 1) {
                /* =====================
                 * Evolution's Monopoly Advanced Autoplay Bot
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
                 * Autoplay mode #2 - increment bet in a sequence (1, 2, 5, 10, 2 rolls, 4 rolls then start over)
                 * Autoplay mode #3 - decrement bet in a sequence (4 rolls, 2 rolls, 10, 5, 2, 1 then start over)
                 * Autoplay mode #4 - sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
                 * Autoplay mode #5 - bonus games only betting
                 * Autoplay mode #6 - Bet randomly on a number (but skip some rounds)
                 * Autoplay mode #7 - random bonus games only betting
                 * Autoplay mode #8 - random bonus games only betting (but skip some rounds)
                 * Autoplay mode #9 - double bonus round bet
                 * Autoplay mode #10 - bet on everything but randomly skip one
                /* ========================================================================
                 * Set autoplay mode and other game settings
                 * ======================================================================== */
                // var autoplay_mode = 8;

                /* ========================================================================
                 * Disable video (when you set this to 1, video will be disabled)
                 * ======================================================================== */
                // var disable_video = 1;

                /* ========================================================================
                 * Set click delay (if you're having issues with clicks on the UI)
                 * ======================================================================== */
                // var click_delay = 200;

                /* ========================================================================
                 * Set wager amount in units (default is 1 unit)
                 * ======================================================================== */
                // var user_wager_amount = 1;

                /* ========================================================================
                 * Set sequence amount to play with in a row
                 * ======================================================================== */
                var user_sequence_amount = 2;

                /* ========================================================================
                 * Hide UI elements if you want a cleaner interface to play with
                 * Hides all UI elements apart from the betting spots (0 will disable this option)
                 * ======================================================================== */
                // var user_clean_interface = 1;

                /* ========================================================================
                 * Show on screen debug on the game window
                 * ======================================================================== */
                // var user_on_screen_debug = 1;

                /* ========================================================================
                 * Insurance on main bet by betting on one (set to 0 to disable) (best used for bonus rounds only)
                 * Set to 1 to cover only 1
                 * Set to 2 to cover 1 & 2
                 * ======================================================================== */
                // var user_insurance_bet = 1;

                /* ========================================================================
                 * Set the loss limit balance
                 * ======================================================================== */
                // var user_loss_limit_balance = 0;

                /* ========================================================================
                 * Set the win limit balance
                 * ======================================================================== */
                // var user_win_limit_balance = 0;

                /* ========================================================================
                 * Set big chat
                 * ======================================================================== */
                // var big_chat = 0;

                /* ========================================================================
                 * Round limit
                 * ======================================================================== */
                // var user_round_limit = 0;

                /* ========================================================================
                 * Set break variables
                 * ======================================================================== */
                // var break_times = 0;
                // var break_duration = 0;
                var break_counter = 0;
                // var time_between_breaks = 0;
                var time_between_breaks_counter = 0;
                var break_time = false;

                /* =====================
                 * End of bot settings
                 * =====================
                 */
                // Default variables used in the script
                var spacing = "==========================";
                var i = 0;
                var how_many_times = 1000000;
                var sequence_counter = 0;
                var check = false;
                var count = 0;
                var clicking = "";
                var bonus_round = false;
                var bonus_round_counter = 0;
                var chance_check = false;
                var game_state_check = null;
                var regex_formatted = "";
                var clicking_insurance = "";
                var skip = false;
                var increment_sequence = 1;
                var decrement_sequence = 6;
                var old_autoplay_mode = 0;
                var old_user_insurance_bet = 0;
                var round_count = 0;
                var player_win = false;
                var number_one_bet = false;
                var number_two_bet = false;
                var number_five_bet = false;
                var number_ten_bet = false;
                var two_rolls_bet = false;
                var four_rolls_bet = false;
                var blode_progression = 1;

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
                        $("#video-wrapper").html("");
                    }

                    // Debug for the console
                    console.log(spacing);
                    console.log("I'm going to start playing!");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "I'm going to start playing!<br />");

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
                                result = result.replace(/^0+/, "");
                            }
                        }

                        var game_state = $("div[data-role='status-text']").html();

                        if (game_state != undefined) {
                            game_state_check = game_state.match(/PLACE/g);
                        }

                        // Enable big chat
                        bigChat(big_chat);

                        // Main bot logic
                        if (game_state_check != null && check == false && bonus_round == false && chance_check == false && break_time == false) {
                            // Flip check flag
                            check = true;

                            // Store iteration number
                            iteration_number = i;

                            // Set counter value
                            count = iteration_number + 60;

                            // Check if round limit has been reached
                            if (user_round_limit != 0) {
                                if (round_count >= user_round_limit) {
                                    roundLimitReached();
                                }
                            }

                            // Increment round count
                            round_count++;

                            // Check for bonus round
                            var bonus_round_check = regex_formatted.match(/r/g);

                            if (bonus_round_check != null) {
                                bonus_round = true;
                            }

                            // Check for bonus round
                            var chance_round_check = regex_formatted.match(/ch/g);

                            if (chance_round_check != null) {
                               chance_check = true;
                            }

                            if (bonus_round_check != null) {
                                bonus_round = true;

                                // Format bonus output
                                if (regex_formatted == "2r") {
                                    // Cash Hunt
                                    regex_formatted = "2 Rolls";
                                } else if (regex_formatted == "4r") {
                                    // Pachinko
                                    regex_formatted = "4 Rolls";
                                } else if (regex_formatted == "ch") {
                                    // Coin Flip
                                    regex_formatted = "Chance";
                                }
                            }

                            // Clear interval
                            clearInterval(clicking);
                            clearInterval(clicking_insurance);

                            // Output final hand to console
                            console.log(spacing);
                            console.log("The final result is !==== " + regex_formatted + " ====!");
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (regex_formatted == "1") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#05C3DD\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "2") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#00FF00\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "5") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"pink\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "10") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#05C3DD\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "2 Rolls") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"silver\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "4 Rolls") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"gold\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "Chance") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"yellow\">" + regex_formatted + "</font> ====!<br />");
                                }

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Reset player win flag
                            player_win = false;

                            // Check if the player placed a bet in the previous round
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || two_rolls_bet == true || four_rolls_bet == true) {
                                // Player bet was placed in the previous round...but did they win?
                                if (regex_formatted == "1" && number_one_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "2" && number_two_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "5" && number_five_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "10" && number_ten_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "2 Rolls" && two_rolls_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "4 Rolls" && four_rolls_bet == true) {
                                    player_win = true;
                                }
                            }

                            if (player_win == true) {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You WON this round! Congrats!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You WON this round! Congrats!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            } else {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You LOST this round! Better luck next time!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You LOST this round! Better luck next time!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            }

                            // If player bet, increase progression
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || two_rolls_bet == true || four_rolls_bet == true || no_bot_mode == 1) {
                                // Progression logic
                                if (player_win == false) {
                                    // Martingale
                                    if (betting_progression == 2) {
                                        user_wager_amount = user_wager_amount * 2;
                                    }
                                } else {
                                    user_wager_amount = 1
                                }

                                // Special Blode progression
                                if (betting_progression == 3) {
                                    // Blode progression
                                    if (blode_progression == 1) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 2) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 3) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 4) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 5) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 6) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 7) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 8) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 9) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 10) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 11) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 12) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression = 1;
                                    }
                                }
                            }

                            // Reset bet values
                            number_one_bet = false;
                            number_two_bet = false;
                            number_five_bet = false;
                            number_ten_bet = false;
                            two_rolls_bet = false;
                            four_rolls_bet = false;

                            // Debug for the console
                            console.log(spacing);
                            var winnings = getWinnings();
                            console.log("Your winnings are: " + winnings);
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (winnings == "0") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"red\">" + winnings + "</font><br />");
                                } else {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"green\">" + winnings + "</font><br />");
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
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your balance is: " + balance + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

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
                            if (autoplay_mode == 1 && chance_check == false && break_time == false) {
                                // Fetch random number
                                bet_type = randomNumber(1, 6);

                                // Place bet
                                if (bet_type == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on #5 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    console.log("I'm placing a bet on #10 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                four_rolls_bet = true;

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
                            if (autoplay_mode == 2 && chance_check == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on #5 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    console.log("I'm placing a bet on #10 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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

                            // Autoplay mode #3
                            if (autoplay_mode == 3 && chance_check == false && break_time == false) {
                                // Place bet
                                if (decrement_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

                                                // Clear bonus round flag
                                                bonus_round = false;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on #5 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    console.log("I'm placing a bet on #10 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

                                                // Clear bonus round flag
                                                bonus_round = false;

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
                            if (autoplay_mode == 4 && chance_check == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on #5 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    console.log("I'm placing a bet on #10 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                            if (autoplay_mode == 5 && chance_check == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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

                            // Autoplay mode #6
                            if (autoplay_mode == 6 && chance_check == false && break_time == false) {
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on #5 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    console.log("I'm placing a bet on #10 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");

                                    // Clear bonus round flag
                                    bonus_round = false;
                                }
                            }

                            // Autoplay mode #7
                            if (autoplay_mode == 7 && chance_check == false && break_time == false) {
                                // Fetch random number
                                bet_type = randomNumber(1, 2);

                                // Place bet
                                if (bet_type == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                            if (autoplay_mode == 8 && chance_check == false && break_time == false) {
                                // Generate number with frequency of skipping rounds.
                                random_number = user_round_skipping + 3;

                                // Fetch random number
                                bet_type = randomNumber(1, random_number);

                                // Place bet
                                if (bet_type == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on 2 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("2 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;

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
                                    console.log("I'm placing a bet on 4 rolls now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on 4 rolls now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("4 rolls");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");

                                    // Clear bonus round flag
                                    bonus_round = false;
                                }
                            }

                            // Autoplay mode #9
                            if (autoplay_mode == 9 && chance_check == false && break_time == false) {
                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on 2 & 4 rolls now.");
                                console.log(spacing);
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet on 2 & 4 rolls now.<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                                // Prompts for no bot mode
                                noBotModeMessage("2 & 4 rolls");
                                clicking = setInterval(function() {
                                    // Check if bet spot is available to click
                                    var test = checkBetSpot();

                                    // Increment bonus round counter
                                    bonus_round_counter++;

                                    if (test == true && bonus_round_counter > 3) {
                                        for (var x = 0; x < user_wager_amount; x++) {
                                            // Click betting spot
                                            $(".betSpot--VXrdG").eq(2).click();
                                            $(".betSpot--VXrdG").eq(5).click();

                                            // Flag bet
                                            two_rolls_bet = true;

                                            // Flag bet
                                            number_ten_bet = true;

                                            // Clear bonus round flag
                                            bonus_round = false;

                                            // Clear interval
                                            clearInterval(clicking);
                                        }
                                    }
                                }, click_delay);
                            }

                            // Autoplay mode #10
                            if (autoplay_mode == 10 && chance_check == false && break_time == false) {
                                // Fetch random number
                                skip_bet_type = randomNumber(1, 6);

                                // Format name for output
                                var skip_bet_name = "";

                                if (skip_bet_type == 1) {
                                    skip_bet_name = "#1";
                                } else if (skip_bet_type == 2) {
                                    skip_bet_name = "#2";
                                } else if (skip_bet_type == 3) {
                                    skip_bet_name = "#5";
                                } else if (skip_bet_type == 4) {
                                    skip_bet_name = "#10";
                                } else if (skip_bet_type == 5) {
                                    skip_bet_name = "2 Rolls";
                                } else {
                                    skip_bet_name = "4 Rolls";
                                }

                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on everthing except " + skip_bet_name + ".");
                                console.log(spacing);
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet on everything except " + skip_bet_name + ".<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }

                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on 2 rolls now.");
                                console.log(spacing);
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet on 2 rolls now.<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                                // Prompts for no bot mode
                                noBotModeMessage("2 rolls");
                                clicking = setInterval(function() {
                                    // Check if bet spot is available to click
                                    var test = checkBetSpot();

                                    // Increment bonus round counter
                                    bonus_round_counter++;

                                    if (test == true && bonus_round_counter > 3) {
                                        for (var x = 0; x < user_wager_amount; x++) {
                                            if (skip_bet_type != 1) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;
                                            }

                                            if (skip_bet_type != 2) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;
                                            }

                                            if (skip_bet_type != 3) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(3).click();

                                                // Flag bet
                                                number_five_bet = true;
                                            }

                                            if (skip_bet_type != 4) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(4).click();

                                                // Flag bet
                                                number_ten_bet = true;
                                            }

                                            if (skip_bet_type != 5) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(2).click();

                                                // Flag bet
                                                two_rolls_bet = true;
                                            }

                                            if (skip_bet_type != 6) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;
                                            }

                                            // Clear bonus round flag
                                            bonus_round = false;

                                            // Clear interval
                                            clearInterval(clicking);
                                        }
                                    }
                                }, click_delay);
                            }

                            if (skip == false) {
                                if (user_insurance_bet == 1) {
                                    console.log(spacing);
                                    console.log("I'm placing an insurance bet on #1!");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing an insurance bet on #1!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("insurance bet on #1");
                                    clicking_insurance = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing an insurance bet on #1 & #2!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("insurance bet on #1 & #2");
                                    clicking_insurance = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot--VXrdG").eq(0).click();
                                                $(".betSpot--VXrdG").eq(1).click();

                                                // Flag bet
                                                number_one_bet = true;

                                                // Flag bet
                                                number_two_bet = true;

                                                // Clear bonus round flag
                                                bonus_round = false;

                                                // Clear interval
                                                clearInterval(clicking_insurance);
                                            }
                                        }
                                    }, click_delay);
                                }
                            }

                            // Reset skip flag
                            skip = false;
                        }

                        // Unset chance check
                        chance_check = false;

                        if (i > count) {
                            check = false;
                            iteration_number = 0;
                            chance_check = false;
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
                    // Check if no bot mode is active
                    if (no_bot_mode == 1) {
                        clearInterval(clicking);
                        clearInterval(clicking_insurance);

                        // Exit
                        return;
                    }

                    // Grab betting spot
                    var betting_spot = $(".perspectiveContainer--TPit_.collapsed--3MolW").length;

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
                    if (autoplay_mode == 4) {
                        // Ask the user how often they want to skip rounds
                        do {
                            user_sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
                        } while(isNaN(user_sequence_amount) || user_sequence_amount > 1);
                    }

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
                        $(".footerRightContent--D9xWT").hide();
                        $(".historyStatisticContainer--25GyA").hide();

                        // Hide game logo
                        $(".footerLeftContent--4fEIj").hide();

                        // Hide game limits and all UI information
                        $(".box--2RTUm").hide();

                        // Hide winner's chat
                        $(".messagesWinnersChat--2UVhf").hide();
                        $(".top-container--33V8c").hide();
                    } else {
                        // Show game history
                        $(".footerRightContent--D9xWT").show();
                        $(".historyStatisticContainer--25GyA").show();

                        // Show game logo
                        $(".footerLeftContent--4fEIj").show();

                        // Show game limits and all UI information
                        $(".box--2RTUm").show();

                        // Show winner's chat
                        $(".messagesWinnersChat--2UVhf").hide();
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
                    } else if (state == "2") {
                        $("#debug_area").css({"position": "relative", "font-size": "small", "width": "33%", "height": "53%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "float": "right"});
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the loss balance has been reached.<br />");

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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the win balance has been reached.<br />");

                            // Scroll to top
                            scrollToTopOfDebug();
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;

                        // Stop insurance bets
                        user_insurance_bet = 0;

                        // Reset bonus round
                        bonus_round = false;
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
                        $(".scrollableWrapper--2nhZl").css({"height": "270%", "width": "120%"});

                        $(".input--2nx2R").css({"left": "120%"});

                        $(".message--1ERGD").css({"font-size": "18px", "line-height": "30px", "background": "black"});

                        $(".senderName--3tGIw").css({"font-size": "18px", "line-spacing": "5px"});

                        $(".messageList--3vpQn").css({"width": "140%"});

                        $(".contentWrapper--RB3-t").scrollTop(10000000);
                    } else {
                        // Output break screen
                        $(".scrollableWrapper--2nhZl").css({"height": "100%", "width": "100%"});

                        $(".input--2nx2R").css({"left": "0%"});

                        $(".messageList--3vpQn").css({"width": "100%"});
                    }
                }

                /* =====================
                 * Function name: getTimestamp
                 * Function description: this function will return the current time
                 * Date: 13/02/21
                 * =====================
                 */
                function timestamp() {
                    // Return current time
                    return new Date().toLocaleTimeString() + ": ";
                }

                /* =====================
                 * Function name: roundLimitReached
                 * Function description: this function will stop playing if round limit has been reached
                 * Date: 15/02/21
                 * =====================
                 */
                function roundLimitReached() {
                    // Debug for the console
                    console.log(spacing);
                    console.log("The bot will stop playing as the round limit has been reached.");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "The bot will stop playing as the round limit has been reached.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Set autoplay to erroneous number
                    autoplay_mode = 1000000;

                    // Stop insurance bets
                    user_insurance_bet = 0;
                }

                /* =====================
                 * Function name: noBotModeMessage
                 * Function description: this function will output messages about the next play on the UI
                 * Date: 24/02/21
                 * =====================
                 */
                function noBotModeMessage(plays) {
                    if (no_bot_mode == 1) {
                        // Inform user via alert
                        $("#popup").html("Place your next bet on: " + plays);

                        // Inform player using console
                        console.log(spacing);
                        console.log("Place your next bet on: " + plays);
                        console.log(spacing);
                    } else {
                        // Hide popup
                        $("#popup").hide();
                    }

                    // Exit
                    return;
                }

                /* =====================
                 * Main code
                 * =====================
                 */
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
                    // Create debug area
                    var $div = $("<div />").appendTo("body");
                    $div.attr("id", "popup");

                    $("#popup").css({"background": "white", "width": "30%", "height": "29px", "position": "absolute", "margin-left": "34%", "margin-right": "30%", "z-index": "10000000", "border": "5px solid black", "border-radius": "10px", "color": "black", "font-size": "18px", "padding-left": "17px", "padding-top": "8px"});
                }, 2000);

                setTimeout(function() {
                    if (responsible_mode == 1) {
                        // Create debug area
                        var $div = $("<div />").appendTo("body");
                        $div.attr("id", "responsible");

                        $("#responsible").css({"background": "yellow", "width": "100%", "height": "3%", "position": "absolute", "margin": "0 auto", "color": "black", "font-size": "20px", "padding": "10px", "z-index": "10000000", "top": "49%"});

                        $("#responsible").html("When the fun stops...STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEVER gamble more than you can afford to lose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

                        (function($) {
                            $.fn.textWidth = function(){
                                var calc = "<span style=\"display:none\">" + $(this).text() + "</span>";
                                $("body").append(calc);
                                var width = 800;
                                $("body").find("span:last").remove();
                                return width;
                            };

                            $.fn.marquee = function(args) {
                                var that = $(this);
                                var textWidth = that.textWidth(),
                                    offset = that.width(),
                                    width = offset,
                                    css = {
                                        "text-indent" : that.css("text-indent"),
                                        "overflow" : that.css("overflow"),
                                        "white-space" : that.css("white-space")
                                    },
                                    marqueeCss = {
                                        "text-indent" : width,
                                        "overflow" : "hidden",
                                        "white-space" : "nowrap"
                                    },
                                    args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
                                        i = 0,
                                        stop = textWidth*-1,
                                        dfd = $.Deferred();

                                    function go() {
                                        if (!that.length) return dfd.reject();

                                        if (width == stop) {
                                            i++;
                                            if (i == args.count) {
                                                that.css(css);
                                                return dfd.resolve();
                                            }

                                            if (args.leftToRight) {
                                                width = textWidth*-1;
                                            } else {
                                                // Add responsible new gambling message
                                                var responsible_gambling_messages = [
                                                    "When the fun stops...STOP PLAYING!",
                                                    "Be a PROUD QUITTER!",
                                                    "Never bet more than you can afford to lose!",
                                                    "In gambling, the many must lose in order that the few may win.",
                                                    "There are many harsh lessons to be learned from gambling, but the harshest one of all is the difference between having fun and being smart.",
                                                    "Quit while you're ahead. All the best gamblers do.",
                                                    "Of all gambling strategies, knowing when to quit may be the best!",
                                                    "The only sure thing about luck is that it will change.",
                                                    "The only way to be a millionaire gambler is to start out as a billionaire!",
                                                    "In the end, the house ALWAYS WINS!",
                                                    "This is a CASINO, not a CHARITY!",
                                                    "Gambling is predictable, that is you can't be the winner forever",
                                                    "LUCK RUNS OUT!",
                                                    "It's only a gambling problem when you lose. Stop before it's too late.",
                                                    "Gambling is a family disease. One person may be addicted but the whole family suffers.",
                                                    "Change your life TODAY, don't gamble on the FUTURE, act NOW WITHOUT DELAY!",
                                                    "The safest way to double your money is to fold it over once and put it in your pocket!",
                                                    "The best throw of the dice is to throw them away...",
                                                    "A gambler is nothing but a man or woman who makes his living out of false hope.",
                                                ];

                                                // Get random messages
                                                var message_one = responsible_gambling_messages[Math.floor(Math.random() * responsible_gambling_messages.length)];
                                                var message_two = responsible_gambling_messages[Math.floor(Math.random() * responsible_gambling_messages.length)];

                                                $("#responsible").html(message_one + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + message_two + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                                                width = offset;
                                            }
                                        }

                                        that.css("text-indent", width + "px");

                                        if (args.leftToRight) {
                                            width++;
                                        } else {
                                            width--;
                                        }

                                        setTimeout(go, args.speed);
                                    };

                                    if (args.leftToRight) {
                                        width = textWidth*-1;
                                        width++;
                                        stop = offset;
                                    } else {
                                        width--;            
                                    }

                                    that.css(marqueeCss);

                                    go();

                                    return dfd.promise();
                                };
                            })(jQuery);

                        $("#responsible").marquee({speed: 10});
                    }
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
            }

            // If selection is 2, then start Dream Catcher bot logic
            if (bot_type == 2) {
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
                 * Autoplay mode #7 - bet on everything but randomly skip one
                 */
                /* ========================================================================
                 * Set autoplay mode and other game settings
                 * ======================================================================== */
                // var autoplay_mode = 1;

                /* ========================================================================
                 * Disable video (when you set this to 1, video will be disabled)
                 * ======================================================================== */
                // var disable_video = 0;

                /* ========================================================================
                 * Set click delay (if you're having issues with clicks on the UI)
                 * ======================================================================== */
                // var click_delay = 1000;

                /* ========================================================================
                 * Set wager amount in units (default is 1 unit)
                 * ======================================================================== */
                // var user_wager_amount = 1;

                /* ========================================================================
                 * Set sequence amount to play with in a row
                 * ======================================================================== */
                var user_sequence_amount = 2;

                /* ========================================================================
                 * Hide UI elements if you want a cleaner interface to play with
                 * Hides all UI elements apart from the betting spots (0 will disable this option)
                 * ======================================================================== */
                // var user_clean_interface = 1;

                /* ========================================================================
                 * Show on screen debug on the game window
                 * ======================================================================== */
                // var user_on_screen_debug = 1;

                /* ========================================================================
                 * Set the loss limit balance
                 * ======================================================================== */
                // var user_loss_limit_balance = 0;

                /* ========================================================================
                 * Set the win limit balance
                 * ======================================================================== */
                // var user_win_limit_balance = 0;

                /* ========================================================================
                 * Set big chat
                 * ======================================================================== */
                // var big_chat = 0;

                /* ========================================================================
                 * Round limit
                 * ======================================================================== */
                // var user_round_limit = 0;

                /* ========================================================================
                 * Set break variables
                 * ======================================================================== */
                // var break_times = 0;
                // var break_duration = 0;
                var break_counter = 0;
                // var time_between_breaks = 0;
                var time_between_breaks_counter = 0;
                var break_time = false;

                /* =====================
                 * End of bot settings
                 * =====================
                 */
                // Default variables used in the script
                var spacing = "==========================";
                var i = 0;
                var how_many_times = 1000000;
                var sequence_counter = 0;
                var check = false;
                var count = 0;
                var clicking = "";
                var bonus_round = false;
                var bonus_round_counter = 0;
                var increment_sequence = 1;
                var decrement_sequence = 6;
                var old_autoplay_mode = 0;
                var round_count = 0;
                var player_win = false;
                var number_one_bet = false;
                var number_two_bet = false;
                var number_five_bet = false;
                var number_ten_bet = false;
                var number_twenty_bet = false;
                var number_forty_bet = false;
                var blode_progression = 1;

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
                        $("#video-wrapper").html("");
                    }

                    // Debug for the console
                    console.log(spacing);
                    console.log("I'm going to start playing!");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "I'm going to start playing!<br />");

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

                        // Enable big chat
                        bigChat(big_chat);

                        // Main bot logic
                        if (regex_formatted != undefined && check == false && bonus_round == false && break_time == false) {
                            // Flip check flag
                            check = true;

                            // Store iteration number
                            iteration_number = i;

                            // Set counter value
                            count = iteration_number + 40;

                            // Check if round limit has been reached
                            if (user_round_limit != 0) {
                                if (round_count >= user_round_limit) {
                                    roundLimitReached();
                                }
                            }

                            // Increment round count
                            round_count++;

                            // Check for bonus round
                            var bonus_round_check = regex_formatted.match(/x/g);

                            if (bonus_round_check != null) {
                                bonus_round = true;
                            }

                            // Clear interval
                            clearInterval(clicking);

                            // Output final hand to console
                            console.log(spacing);
                            console.log("The final result is !==== " + regex_formatted + " ====!");
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (regex_formatted == "1") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"yellow\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "2") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"blue\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "5") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"purple\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "10") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"green\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "20") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"orange\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "40") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"red\">" + regex_formatted + "</font> ====!<br />");
                                }

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Reset player win flag
                            player_win = false;

                            // Check if the player placed a bet in the previous round
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || number_twenty_bet == true || number_forty_bet == true) {
                                // Player bet was placed in the previous round...but did they win?
                                if (regex_formatted == "1" && number_one_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "2" && number_two_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "5" && number_five_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "10" && number_ten_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "20" && number_twenty_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "40" && number_forty_bet == true) {
                                    player_win = true;
                                }
                            }

                            if (player_win == true) {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You WON this round! Congrats!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You WON this round! Congrats!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            } else {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You LOST this round! Better luck next time!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You LOST this round! Better luck next time!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            }

                            // If player bet, increase progression
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || number_twenty_bet == true || number_forty_bet == true || no_bot_mode == 1) {
                                // Progression logic
                                if (player_win == false) {
                                    // Martingale
                                    if (betting_progression == 2) {
                                        user_wager_amount = user_wager_amount * 2;
                                    }
                                } else {
                                    user_wager_amount = 1
                                }

                                // Special Blode progression
                                if (betting_progression == 3) {
                                    // Blode progression
                                    if (blode_progression == 1) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 2) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 3) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 4) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 5) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 6) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 7) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 8) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 9) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 10) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 11) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 12) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression = 1;
                                    }
                                }
                            }

                            // Reset bet values
                            number_one_bet = false;
                            number_two_bet = false;
                            number_five_bet = false;
                            number_ten_bet = false;
                            number_twenty_bet = false;
                            number_forty_bet = false;

                            // Debug for the console
                            console.log(spacing);
                            var winnings = getWinnings();
                            console.log("Your winnings are: " + winnings);
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (winnings == "0") {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"red\">" + winnings + "</font><br />");
                                } else {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"green\">" + winnings + "</font><br />");
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
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your balance is: " + balance + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

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
                            if (autoplay_mode == 1 && bonus_round == false && break_time == false) {
                                // Fetch random number
                                bet_type = randomNumber(1, 6);

                                // Place bet
                                if (bet_type == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #20 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#20");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_twenty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #40 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#40");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();

                                                // Flag bet
                                                number_forty_bet = true;

                                                // Clear interval
                                                clearInterval(clicking);
                                            }
                                        }
                                    }, click_delay);
                                }
                            }

                            // Autoplay mode #2
                            if (autoplay_mode == 2 && bonus_round == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #20 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#20");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_twenty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #40 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#40");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();

                                                // Flag bet
                                                number_forty_bet = true;

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
                            if (autoplay_mode == 3 && bonus_round == false && break_time == false) {
                                // Place bet
                                if (decrement_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #20 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#20");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_twenty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #40 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#40");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();

                                                // Flag bet
                                                number_forty_bet = true;

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
                            if (autoplay_mode == 4 && bonus_round == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #20 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#20");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_twenty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #40 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#40");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();

                                                // Flag bet
                                                number_forty_bet = true;

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
                            if (autoplay_mode == 5 && bonus_round == false && break_time == false) {
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #20 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#20");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_twenty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #40 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#40");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();

                                                // Flag bet
                                                number_forty_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");
                                }
                            }

                            // Autoplay mode #6
                            if (autoplay_mode == 6 && bonus_round == false && break_time == false) {
                                // Place bet
                                if (increment_sequence == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on #1 now.");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                            if (autoplay_mode == 7 && bonus_round == false && break_time == false) {
                                // Fetch random number
                                skip_bet_type = randomNumber(1, 6);

                                // Format name for output
                                var skip_bet_name = "";

                                if (skip_bet_type == 1) {
                                    skip_bet_name = "#1";
                                } else if (skip_bet_type == 2) {
                                    skip_bet_name = "#2";
                                } else if (skip_bet_type == 3) {
                                    skip_bet_name = "#5";
                                } else if (skip_bet_type == 4) {
                                    skip_bet_name = "#10";
                                } else if (skip_bet_type == 5) {
                                    skip_bet_name = "#20";
                                } else {
                                    skip_bet_name = "#40";
                                }

                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on everthing except " + skip_bet_name + ".");
                                console.log(spacing);
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet on everything except " + skip_bet_name + ".<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                                // Prompts for no bot mode
                                noBotModeMessage("on everything except " + skip_bet_name);
                                clicking = setInterval(function() {
                                    // Check if bet spot is available to click
                                    var test = checkBetSpot();

                                    if (test == true) {
                                        for (var x = 0; x < user_wager_amount; x++) {
                                            if (skip_bet_type != 1) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;
                                            }

                                            if (skip_bet_type != 2) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;
                                            }

                                            if (skip_bet_type != 3) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(2).click();

                                                // Flag bet
                                                number_five_bet = true;
                                            }

                                            if (skip_bet_type != 4) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(3).click();

                                                // Flag bet
                                                number_ten_bet = true;
                                            }

                                            if (skip_bet_type != 5) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(4).click();

                                                // Flag bet
                                                number_forty_bet = true;

                                                // Flag bet
                                                number_twenty_bet = true;
                                            }

                                            if (skip_bet_type != 6) {
                                                // Click betting spot
                                                $(".betSpot---OSvn").eq(5).click();
                                            }

                                            // Clear bonus round flag
                                            bonus_round = false;

                                            // Clear interval
                                            clearInterval(clicking);
                                        }
                                    }
                                }, click_delay);
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
                    // Check if no bot mode is active
                    if (no_bot_mode == 1) {
                        clearInterval(clicking);

                        // Exit
                        return;
                    }

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
                    if (autoplay_mode == 4) {
                        // Ask the user how often they want to skip rounds
                        do {
                            user_sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
                        } while(isNaN(user_sequence_amount) || user_sequence_amount > 1);
                    }

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
                        $(".top-left-2IjNG").hide();
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
                        $(".top-left-2IjNG").show();
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
                        $("#debug_area").css({"position": "absolute", "font-size": "x-large", "width": "100%", "height": "98%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "z-index": "1000000"});
                    } else if (state == "2") {
                        $("#debug_area").css({"position": "relative", "font-size": "small", "width": "33%", "height": "53%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "float": "right"});
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the loss balance has been reached.<br />");

                            // Scroll to top
                            scrollToTopOfDebug();
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the win balance has been reached.<br />");

                            // Scroll to top
                            scrollToTopOfDebug();
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;
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
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;

                        // Stop insurance bets
                        user_insurance_bet = 0;
                    } else {
                        // Hide debug
                        $("#break_screen").hide();
                        // Hide debug
                        $("#break_screen").hide();

                        // Start playing again
                        // Set autoplay to erroneous number
                        autoplay_mode = old_autoplay_mode;
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
                        $(".scrollableWrapper--2nhZl").css({"height": "270%", "width": "120%"});

                        $(".input--2nx2R").css({"left": "120%"});

                        $(".message--1ERGD").css({"font-size": "18px", "line-height": "30px", "background": "black"});

                        $(".senderName--3tGIw").css({"font-size": "18px", "line-spacing": "5px"});

                        $(".messageList--3vpQn").css({"width": "140%"});

                        $(".spots--3txwK").css({"margin-left": "150px"});

                        $(".contentWrapper--RB3-t").scrollTop(10000000);
                    } else {
                        // Output break screen
                        $(".scrollableWrapper--2nhZl").css({"height": "100%", "width": "100%"});

                        $(".input--2nx2R").css({"left": "0%"});

                        $(".messageList--3vpQn").css({"width": "100%"});

                        $(".spots--3txwK").css({"margin-left": "0px"});
                    }
                }

                /* =====================
                 * Function name: getTimestamp
                 * Function description: this function will return the current time
                 * Date: 13/02/21
                 * =====================
                 */
                function timestamp() {
                    // Return current time
                    return new Date().toLocaleTimeString() + ": ";
                }

                /* =====================
                 * Function name: roundLimitReached
                 * Function description: this function will stop playing if round limit has been reached
                 * Date: 15/02/21
                 * =====================
                 */
                function roundLimitReached() {
                    // Debug for the console
                    console.log(spacing);
                    console.log("The bot will stop playing as the round limit has been reached.");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "The bot will stop playing as the round limit has been reached.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Set autoplay to erroneous number
                    autoplay_mode = 1000000;

                    // Stop insurance bets
                    user_insurance_bet = 0;
                }

                /* =====================
                 * Function name: noBotModeMessage
                 * Function description: this function will output messages about the next play on the UI
                 * Date: 24/02/21
                 * =====================
                 */
                function noBotModeMessage(plays) {
                    if (no_bot_mode == 1) {
                        // Inform user via alert
                        $("#popup").html("Place your next bet on: " + plays);

                        // Inform player using console
                        console.log(spacing);
                        console.log("Place your next bet on: " + plays);
                        console.log(spacing);
                    } else {
                        // Hide popup
                        $("#popup").hide();
                    }

                    // Exit
                    return;
                }

                /* =====================
                 * Main code
                 * =====================
                 */
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
                    // Create debug area
                    var $div = $("<div />").appendTo("body");
                    $div.attr("id", "popup");

                    $("#popup").css({"background": "white", "width": "40%", "height": "29px", "position": "absolute", "margin-left": "30%", "margin-right": "30%", "z-index": "10000000", "border": "5px solid black", "border-radius": "10px", "color": "black", "font-size": "18px", "padding-left": "17px", "padding-top": "8px"});
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
            }

            // If selection is 3, then start Crazy Time bot logic
            if (bot_type == 3) {
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
                 * Autoplay mode #13 - bet on all bonus rounds (Cash Hunt, Coin Flip, Pachinko & Crazy Time)
                 * Autoplay mode #14 - bet on everything but randomly skip one
                 */
                /* ========================================================================
                 * Set autoplay mode and other game settings
                 * ======================================================================== */
                // var autoplay_mode = 10;

                /* ========================================================================
                 * Disable video (when you set this to 1, video will be disabled)
                 * ======================================================================== */
                // var disable_video = 0;

                /* ========================================================================
                 * Set click delay (if you're having issues with clicks on the UI)
                 * ======================================================================== */
                // var click_delay = 1000;

                /* ========================================================================
                 * Set wager amount in units (default is 1 unit)
                 * ======================================================================== */
                // var user_wager_amount = 1;

                /* ========================================================================
                 * Set sequence amount to play with in a row
                 * ======================================================================== */
                var user_sequence_amount = 2;

                /* ========================================================================
                 * Hide UI elements if you want a cleaner interface to play with
                 * Hides all UI elements apart from the betting spots (0 will disable this option)
                 * ======================================================================== */
                // var user_clean_interface = 1;

                /* ========================================================================
                 * Show on screen debug on the game window
                 * ======================================================================== */
                // var user_on_screen_debug = 1;

                /* ========================================================================
                 * Insurance on main bet by betting on one (set to 0 to disable) (best used for bonus rounds only)
                 * Set to 1 to cover only 1
                 * Set to 2 to cover 1 & 2
                 * ======================================================================== */
                // var user_insurance_bet = 1;

                /* ========================================================================
                 * Set the loss limit balance
                 * ======================================================================== */
                // var user_loss_limit_balance = 0;

                /* ========================================================================
                 * Set the win limit balance
                 * ======================================================================== */
                // var user_win_limit_balance = 0;

                /* ========================================================================
                 * Set break variables
                 * ======================================================================== */
                // var break_times = 0;
                // var break_duration = 0;
                var break_counter = 0;
                // var time_between_breaks = 0;
                var time_between_breaks_counter = 0;
                var break_time = false;


                /* ========================================================================
                 * Set big chat
                 * ======================================================================== */
                // var big_chat = 0;

                /* ========================================================================
                 * Round limit
                 * ======================================================================== */
                // var user_round_limit = 0;

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
                var round_count = 0;
                var player_win = false;
                var number_one_bet = false;
                var number_two_bet = false;
                var number_five_bet = false;
                var number_ten_bet = false;
                var coin_flip_bet = false;
                var pachinko_bet = false;
                var cash_hunt_bet = false;
                var crazy_time_bet = false;
                var blode_progression = 1;

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
                        $("#video-wrapper").html("");
                    }

                    // Debug for the console
                    console.log(spacing);
                    console.log("I'm going to start playing!");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "I'm going to start playing!<br />");

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
                        if (check == false && bonus_round == false && game_state_check != null && break_time == false) {
                            // Flip check flag
                            check = true;

                            // Store iteration number
                            iteration_number = i;

                            // Set counter value
                            count = iteration_number + 40;

                            // Check if round limit has been reached
                            if (user_round_limit != 0) {
                                if (round_count >= user_round_limit) {
                                    roundLimitReached();
                                }
                            }

                            // Increment round count
                            round_count++;

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
                            console.log("The final result is !==== " + regex_formatted + " ====!");
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (regex_formatted == "1") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#05C3DD\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "2") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"yellow\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "5") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"pink\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "10") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"purple\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "Coin Flip") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#006994\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "Cash Hunt") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#32CD32\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "Crazy Time") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#fe2c54\">" + regex_formatted + "</font> ====!<br />");
                                } else if (regex_formatted == "Pachinko") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"#7F00FF\">" + regex_formatted + "</font> ====!<br />");
                                }

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Reset player win flag
                            player_win = false;

                            // Check if the player placed a bet in the previous round
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || coin_flip_bet == true || pachinko_bet == true || cash_hunt_bet == true || crazy_time_bet == true) {
                                // Player bet was placed in the previous round...but did they win?
                                if (regex_formatted == "1" && number_one_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "2" && number_two_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "5" && number_five_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "10" && number_ten_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "Coin Flip" && coin_flip_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "Pachinko" && pachinko_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "Cash Hunt" && cash_hunt_bet == true) {
                                    player_win = true;
                                } else if (regex_formatted == "Crazy Time" && crazy_time_bet == true) {
                                    player_win = true;
                                }
                            }

                            if (player_win == true) {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You WON this round! Congrats!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You WON this round! Congrats!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            } else {
                                // Output final hand to console
                                console.log(spacing);
                                console.log("You LOST this round! Better luck next time!");
                                console.log(spacing);

                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "You LOST this round! Better luck next time!</font><br />");
                     
                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            }

                            // If player bet, increase progression
                            if (number_one_bet == true || number_two_bet == true || number_five_bet == true || number_ten_bet == true || coin_flip_bet == true || pachinko_bet == true || cash_hunt_bet == true || crazy_time_bet == true || no_bot_mode == 1) {
                                // Progression logic
                                if (player_win == false) {
                                    // Martingale
                                    if (betting_progression == 2) {
                                        user_wager_amount = user_wager_amount * 2;
                                    }
                                } else {
                                    user_wager_amount = 1
                                }

                                // Special Blode progression
                                if (betting_progression == 3) {
                                    // Blode progression
                                    if (blode_progression == 1) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 2) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 3) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 4) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 5) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 6) {
                                        // Beginning of progression
                                        user_wager_amount = 1;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 7) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 8) {
                                        // Beginning of progression
                                        user_wager_amount = 2;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 9) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 10) {
                                        // Beginning of progression
                                        user_wager_amount = 3;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 11) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression++;
                                    } else if (blode_progression == 12) {
                                        // Beginning of progression
                                        user_wager_amount = 4;

                                        // Increase progression
                                        blode_progression = 1;
                                    }
                                }
                            }

                            // Reset bet values
                            number_one_bet = false;
                            number_two_bet = false;
                            number_five_bet = false;
                            number_ten_bet = false;
                            coin_flip_bet = false;
                            pachinko_bet = false;
                            cash_hunt_bet = false;
                            crazy_time_bet = false;

                            // Debug for the console
                            console.log(spacing);
                            var winnings = getWinnings();
                            console.log("Your winnings are: " + winnings);
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (winnings == "0") {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"red\">" + winnings + "</font><br />");
                                } else {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"green\">" + winnings + "</font><br />");
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
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your balance is: " + balance + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #5 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#5");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #10 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#10");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip and Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip and Pachinko");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip and Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip and Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip and Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip and Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko and Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko and Cash Hunt");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

                                                // Flag bet
                                                pachinko_bet = true;

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
                                        if (user_on_screen_debug > 1) {
                                            // Append to debug area
                                            $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko and Crazy Time now.<br />");

                                           // Scroll to top
                                           scrollToTopOfDebug();
                                        }
                                        // Prompts for no bot mode
                                        noBotModeMessage("Pachinko and Crazy Time");
                                        clicking = setInterval(function() {
                                            // Check if bet spot is available to click
                                            var test = checkBetSpot();
                    
                                            if (test == true) {
                                                for (var x = 0; x < user_wager_amount; x++) {
                                                    // Click betting spot
                                                    $(".betSpotContainer--3V3jM").eq(3).click();
                                                    $(".betSpotContainer--3V3jM").eq(7).click();

                                                    // Flag bet
                                                    crazy_time_bet = true;

                                                    // Flag bet
                                                    pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt and Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt and Crazy Time");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking_two = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking_three = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking_four = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Coin Flip now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Coin Flip");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Pachinko now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Pachinko");
                                    clicking_two = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Cash Hunt now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Cash Hunt");
                                    clicking_three = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on Crazy Time now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Crazy Time");
                                    clicking_four = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");

                                    // Clear bonus round flag
                                    bonus_round = false;
                                }
                            }

                            if (skip == false) {
                                if (user_insurance_bet == 1) {
                                    console.log(spacing);
                                    console.log("I'm placing an insurance bet on #1!");
                                    console.log(spacing);
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing an insurance bet on #1<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("insurance bet on #1");
                                    clicking_insurance = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing an insurance bet on #1 & #2<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("insurance bet on #1 & #2");
                                    clicking_insurance = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

                                                // Flag bet
                                                number_two_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #1 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#1");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        // Increment bonus round counter
                                        bonus_round_counter++;

                                        if (test == true && bonus_round_counter > 3) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on #2 now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("#2");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;

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

                            // Autoplay mode #13
                            if (autoplay_mode == 13 && break_time == false) {
                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on all bonus rounds now.");
                                console.log(spacing);
                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet all bonus rounds now.<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                                    // Prompts for no bot mode
                                    noBotModeMessage("all bonus rounds");
                                clicking = setInterval(function() {
                                    // Check if bet spot is available to click
                                    var test = checkBetSpot();

                                    // Increment bonus round counter
                                    bonus_round_counter++;

                                    if (test == true && bonus_round_counter > 3) {
                                        for (var x = 0; x < user_wager_amount; x++) {
                                            // Click betting spot
                                            $(".betSpotContainer--3V3jM").eq(7).click();
                                            $(".betSpotContainer--3V3jM").eq(3).click();
                                            $(".betSpotContainer--3V3jM").eq(6).click();
                                            $(".betSpotContainer--3V3jM").eq(2).click();

                                            // Flag bet
                                            crazy_time_bet = true;

                                            // Flag bet
                                            cash_hunt_bet = true;

                                            // Flag bet
                                            pachinko_bet = true;

                                            // Flag bet
                                            coin_flip_bet = true;

                                            // Clear bonus round flag
                                            bonus_round = false;

                                            // Clear interval
                                            clearInterval(clicking);
                                        }
                                    }
                                }, click_delay);
                            }

                            // Autoplay mode #14
                            if (autoplay_mode == 14 && break_time == false) {
                                // Fetch random number
                                skip_bet_type = randomNumber(1, 8);

                                // Format name for output
                                var skip_bet_name = "";

                                if (skip_bet_type == 1) {
                                    skip_bet_name = "#1";
                                } else if (skip_bet_type == 2) {
                                    skip_bet_name = "#2";
                                } else if (skip_bet_type == 3) {
                                    skip_bet_name = "#5";
                                } else if (skip_bet_type == 4) {
                                    skip_bet_name = "#10";
                                } else if (skip_bet_type == 5) {
                                    skip_bet_name = "Coin Flip";
                                } else if (skip_bet_type == 6) {
                                    skip_bet_name = "Pachinko";
                                } else if (skip_bet_type == 7) {
                                    skip_bet_name = "Cash Hunt";
                                } else {
                                    skip_bet_name = "Crazy Time";
                                }

                                // Place bet
                                // Output
                                console.log(spacing);
                                console.log("I'm placing a bet on everthing except " + skip_bet_name + ".");
                                console.log(spacing);
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "I'm placing a bet on everything except " + skip_bet_name + ".<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                                // Prompts for no bot mode
                                noBotModeMessage("everything except " + skip_bet_name);
                                clicking = setInterval(function() {
                                    // Check if bet spot is available to click
                                    var test = checkBetSpot();

                                    if (test == true) {
                                        for (var x = 0; x < user_wager_amount; x++) {
                                            if (skip_bet_type != 1) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(0).click();

                                                // Flag bet
                                                number_one_bet = true;
                                            }

                                            if (skip_bet_type != 2) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(1).click();

                                                // Flag bet
                                                number_two_bet = true;
                                            }

                                            if (skip_bet_type != 3) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(4).click();

                                                // Flag bet
                                                number_five_bet = true;
                                            }

                                            if (skip_bet_type != 4) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(5).click();

                                                // Flag bet
                                                number_ten_bet = true;
                                            }

                                            if (skip_bet_type != 5) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(2).click();

                                                // Flag bet
                                                coin_flip_bet = true;
                                            }

                                            if (skip_bet_type != 6) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(3).click();

                                                // Flag bet
                                                pachinko_bet = true;
                                            }

                                            if (skip_bet_type != 7) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(6).click();

                                                // Flag bet
                                                cash_hunt_bet = true;
                                            }

                                            if (skip_bet_type != 8) {
                                                // Click betting spot
                                                $(".betSpotContainer--3V3jM").eq(7).click();

                                                // Flag bet
                                                crazy_time_bet = true;
                                            }

                                            // Clear bonus round flag
                                            bonus_round = false;

                                            // Clear interval
                                            clearInterval(clicking);
                                        }
                                    }
                                }, click_delay);
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
                    // Check if no bot mode is active
                    if (no_bot_mode == 1) {
                        clearInterval(clicking);
                        clearInterval(clicking_two);
                        clearInterval(clicking_three);
                        clearInterval(clicking_four);
                        clearInterval(clicking_insurance);

                        // Exit
                        return;
                    }

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
                    if (autoplay_mode == 4) {
                        // Ask the user how often they want to skip rounds
                        do {
                            user_sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
                        } while(isNaN(user_sequence_amount) || user_sequence_amount > 1);
                    }

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
                    } else if (state == "2") {
                        $("#debug_area").css({"position": "relative", "font-size": "small", "width": "33%", "height": "53%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "float": "right"});
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the loss balance has been reached.<br />");

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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the win balance has been reached.<br />");

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
                        $(".scrollableWrapper--2nhZl").css({"height": "270%", "width": "120%"});

                        $(".input--2nx2R").css({"left": "120%"});

                        $(".message--1ERGD").css({"font-size": "18px", "line-height": "30px", "background": "black"});

                        $(".senderName--3tGIw").css({"font-size": "18px", "line-spacing": "5px"});

                        $(".contentWrapper--RB3-t").scrollTop(10000000);

                        $(".messageList--3vpQn").css({"width": "140%"});

                        $(".grid--2CRmd").css({"margin-left": "400px"});
                    } else {
                        // Output break screen
                        $(".scrollableWrapper--2nhZl").css({"height": "100%", "width": "100%"});

                        $(".input--2nx2R").css({"left": "0%"});

                        $(".grid--2CRmd").css({"margin-left": "0px"});

                        $(".messageList--3vpQn").css({"width": "100%"});
                    }
                }

                /* =====================
                 * Function name: getTimestamp
                 * Function description: this function will return the current time
                 * Date: 13/02/21
                 * =====================
                 */
                function timestamp() {
                    // Return current time
                    return new Date().toLocaleTimeString() + ": ";
                }

                /* =====================
                 * Function name: roundLimitReached
                 * Function description: this function will stop playing if round limit has been reached
                 * Date: 15/02/21
                 * =====================
                 */
                function roundLimitReached() {
                    // Debug for the console
                    console.log(spacing);
                    console.log("The bot will stop playing as the round limit has been reached.");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "The bot will stop playing as the round limit has been reached.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Set autoplay to erroneous number
                    autoplay_mode = 1000000;

                    // Stop insurance bets
                    user_insurance_bet = 0;
                }

                /* =====================
                 * Function name: noBotModeMessage
                 * Function description: this function will output messages about the next play on the UI
                 * Date: 24/02/21
                 * =====================
                 */
                function noBotModeMessage(plays) {
                    if (no_bot_mode == 1) {
                        // Inform user via alert
                        $("#popup").html("Place your next bet on: " + plays);

                        // Inform player using console
                        console.log(spacing);
                        console.log("Place your next bet on: " + plays);
                        console.log(spacing);
                    } else {
                        // Hide popup
                        $("#popup").hide();
                    }

                    // Exit
                    return;
                }

                /* =====================
                 * Main code
                 * =====================
                 */
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
                    // Create debug area
                    var $div = $("<div />").appendTo("body");
                    $div.attr("id", "popup");

                    $("#popup").css({"background": "white", "width": "40%", "height": "29px", "position": "absolute", "margin-left": "30%", "margin-right": "30%", "z-index": "10000000", "border": "5px solid black", "border-radius": "10px", "color": "black", "font-size": "18px", "padding-left": "17px", "padding-top": "8px"});
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
            }

            // If selection is 4, then start Football Studio bot logic
            if (bot_type == 4) {
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
                * Autoplay mode #6 - Bet on draw after certain number of rounds without a draw
                */
                /* ========================================================================
                * Set autoplay mode and other game settings
                * ======================================================================== */
                // var autoplay_mode = 4;

                /* ========================================================================
                * Disable video (when you set this to 1, video will be disabled)
                * ======================================================================== */
                // var disable_video = 1;

                /* ========================================================================
                * Set click delay (if you're having issues with clicks on the UI)
                * ======================================================================== */
                // var click_delay = 200;

                /* ========================================================================
                * Set wager amount in units (default is 1 unit)
                * ======================================================================== */
                // var user_wager_amount = 1;

                /* ========================================================================
                * Set streak size to wait for before betting
                * ======================================================================== */
                var user_streak_size = 5;

                /* ========================================================================
                * Set sequence amount to play with
                * ======================================================================== */
                var user_sequence_amount = 3;

                /* ========================================================================
                * Hide UI elements if you want a cleaner interface to play with
                * Hides all UI elements apart from the betting spots (0 will disable this option)
                * ======================================================================== */
                // var user_clean_interface = 1;

                /* ========================================================================
                * Show on screen debug on the game window
                * ======================================================================== */
                // var user_on_screen_debug = 1;

                /* ========================================================================
                 * Set the loss limit balance
                 * ======================================================================== */
                // var user_loss_limit_balance = 0;

                /* ========================================================================
                 * Set the win limit balance
                 * ======================================================================== */
                // var user_win_limit_balance = 0;

                /* ========================================================================
                 * Set big chat
                 * ======================================================================== */
                // var big_chat = 0;

                /* ========================================================================
                 * Round limit
                 * ======================================================================== */
                // var user_round_limit = 0;

                /* ========================================================================
                 * Set break variables
                 * ======================================================================== */
                // var break_times = 0;
                // var break_duration = 0;
                var break_counter = 0;
                // var time_between_breaks = 0;
                var time_between_breaks_counter = 0;
                var break_time = false;

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
                var old_autoplay_mode = 0;
                var old_user_insurance_bet = 0;
                var round_count = 0;
                var draw_streak_size = 0;
                var draw_streak = 0;

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
                        $("#video-wrapper").html("");
                    }

                    // Debug for the console
                    console.log(spacing);
                    console.log("I'm going to start playing!");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "I'm going to start playing!<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Perform main loop
                    function f() {
                        // Send fake click to keep game alive
                        click(200, 200);

                        // Disable video
                        if (disable_video == 1) {
                            $("#video-wrapper").html("");
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

                        // Enable big chat
                        bigChat(big_chat);

                        // Main bot logic
                        if (game_state_check != null && check == false && break_time == false) {
                            // Flip check flag
                            check = true;

                            // Store iteration number
                            iteration_number = i;

                            // Set counter value
                            count = iteration_number + 40;

                            // Check if round limit has been reached
                            if (user_round_limit != 0) {
                                if (round_count >= user_round_limit) {
                                    roundLimitReached();
                                }
                            }

                            // Increment round count
                            round_count++;

                            // Clear interval
                            clearInterval(clicking);

                            // Format result
                            result_check_found = result_check_found.replace(/ WINS/, "");

                            // Output final hand to console
                            console.log(spacing);
                            console.log("The final result is !==== " + result_check_found + " ====!");
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (result_check_found == "Home") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"red\">" + result_check_found + "</font> ====!<br />");
                                } else if (result_check_found == "Away") {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"blue\">" + result_check_found + "</font> ====!<br />");
                                } else {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "The final result is !==== <font color=\"yellow\">" + result_check_found + "</font> ====!<br />");
                                }

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Debug for the console
                            console.log(spacing);
                            var winnings = getWinnings();
                            console.log("Your winnings are: " + winnings);
                            console.log(spacing);

                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                if (winnings == "0") {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"red\">" + winnings + "</font><br />");
                                } else {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Your winnings are: <font color=\"green\">" + winnings + "</font><br />");
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
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + "Your balance is: " + balance + "<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Padding for new round
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                $("#debug_area").append(timestamp() + spacing + "<br />");

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on home now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Home");
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on away now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Away");
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
                            if (autoplay_mode == 2 && break_time == false) {
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on home now. Sequence #" + sequence_start + "<br />");

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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on away now. Sequence #" + sequence_start + "<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Away");
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
                            if (autoplay_mode == 3 && break_time == false) {
                                // Fetch random number
                                bet_type = randomNumber(1, 2);

                                // Place bet
                                if (bet_type == 1) {
                                    // Output
                                    console.log(spacing);
                                    console.log("The randomizer chose home as the next bet!");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "The randomizer chose home as the next bet!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    console.log(spacing);
                                    console.log("I'm placing a bet on home now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on home now. <br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Home");
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "The randomizer chose away as the next bet!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    console.log(spacing);
                                    console.log("I'm placing a bet on away now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on away now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Away");
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
                            if (autoplay_mode == 5 && break_time == false) {
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "The randomizer chose home as the next bet!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    console.log(spacing);
                                    console.log("I'm placing a bet on home now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on home now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Home");
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "The randomizer chose away as the next bet!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    console.log(spacing);
                                    console.log("I'm placing a bet on away now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on away now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Away");
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm skipping this round!<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }

                                    // Prompts for no bot mode
                                    noBotModeMessage("Skip this round!");
                                }
                            }

                            // Reset streak
                            if (result_check_found == "Home") {
                                // Increase home streak
                                home_streak++;

                                // Reset away streak
                                away_streak = 0;

                                // Increment rounds since draw streak
                                draw_streak++;

                                console.log(spacing);
                                console.log("Home wins! There have been " + home_streak + " home wins in a row now.");
                                console.log(spacing);
                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Home wins! There have been " + home_streak + " home wins in a row now.<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            } else if (result_check_found = "Away") {
                                // Increase away streak
                                away_streak++;

                                // Reset home streak
                                home_streak = 0;

                                // Increment rounds since draw streak
                                draw_streak++;

                                console.log(spacing);
                                console.log("Away wins! There have been " + away_streak + " away wins in a row now.");
                                console.log(spacing);
                                // Debug for page
                                if (user_on_screen_debug > 1) {
                                    // Append to debug area
                                    $("#debug_area").append(timestamp() + "Away wins! There have been " + away_streak + " away wins in a row now.<br />");

                                    // Scroll to top
                                    scrollToTopOfDebug();
                                }
                            } else {
                                // It's a draw! Increment both sides
                                home_streak++;
                                away_streak++;
                                draw_streak = 0;
                            }

                            console.log(spacing);
                            console.log("There have been " + draw_streak + " rounds without a draw.");
                            console.log(spacing);
                            // Debug for page
                            if (user_on_screen_debug > 1) {
                                // Append to debug area
                                    $("#debug_area").append(timestamp() + "There have been " + draw_streak + " rounds without a draw.<br />");

                                // Scroll to top
                                scrollToTopOfDebug();
                            }

                            // Autoplay mode #4
                            if (autoplay_mode == 4 && break_time == false) {
                                if (home_streak == streak_size) {
                                    // Place bet
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on away now.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on away now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Away");
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
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on home now.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Home");
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

                            // Autoplay mode #6
                            if (autoplay_mode == 6 && break_time == false) {
                                if (draw_streak >= draw_streak_size) {
                                    // Place bet
                                    // Output
                                    console.log(spacing);
                                    console.log("I'm placing a bet on a draw.");
                                    console.log(spacing);
                                    // Debug for page
                                    if (user_on_screen_debug > 1) {
                                        // Append to debug area
                                        $("#debug_area").append(timestamp() + "I'm placing a bet on a draw.<br />");

                                        // Scroll to top
                                        scrollToTopOfDebug();
                                    }
                                    // Prompts for no bot mode
                                    noBotModeMessage("Draw");
                                    clicking = setInterval(function() {
                                        // Check if bet spot is available to click
                                        var test = checkBetSpot();

                                        if (test == true) {
                                            for (var x = 0; x < user_wager_amount; x++) {
                                                // Click betting spot
                                                $(".tie--181yr").eq(0).click();

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
                    // Check if no bot mode is active
                    if (no_bot_mode == 1) {
                        clearInterval(clicking);

                        // Exit
                        return;
                    }

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
                    if (autoplay_mode == 2) {
                        // Ask the user how often they want to skip rounds
                        do {
                            sequence_amount = parseInt(window.prompt("How many bets in a row do you want to play in your sequence?\n\nDefault is 2.", "2"), 10);
                        } while(isNaN(sequence_amount) || sequence_amount < 1);
                    }

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
                    } else if (state == "2") {
                        $("#debug_area").css({"position": "relative", "font-size": "small", "width": "33%", "height": "53%", "overflow": "overlay", "line-height": "20pt", "background": "black", "z-index": "1000000", "float": "right"});
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the loss balance has been reached.<br />");

                            // Scroll to top
                            scrollToTopOfDebug();
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;
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
                        if (user_on_screen_debug > 1) {
                            // Append to debug area
                            $("#debug_area").append(timestamp() + "The bot will stop playing as the win balance has been reached.<br />");

                            // Scroll to top
                            scrollToTopOfDebug();
                        }

                        // Set autoplay to erroneous number
                        autoplay_mode = 1000000;
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
                        $(".scrollableWrapper--2nhZl").css({"height": "270%", "width": "120%"});

                        $(".input--2nx2R").css({"left": "120%"});

                        $(".message--1ERGD").css({"font-size": "18px", "line-height": "30px", "background": "black"});

                        $(".senderName--3tGIw").css({"font-size": "18px", "line-spacing": "5px"});

                        $(".messageList--3vpQn").css({"width": "140%"});

                        $(".contentWrapper--RB3-t").scrollTop(10000000);
                    } else {
                        // Output break screen
                        $(".scrollableWrapper--2nhZl").css({"height": "100%", "width": "100%"});

                        $(".input--2nx2R").css({"left": "0%"});

                        $(".messageList--3vpQn").css({"width": "100%"});
                    }
                }

                /* =====================
                 * Function name: getTimestamp
                 * Function description: this function will return the current time
                 * Date: 13/02/21
                 * =====================
                 */
                function timestamp() {
                    // Return current time
                    return new Date().toLocaleTimeString() + ": ";
                }

                /* =====================
                 * Function name: roundLimitReached
                 * Function description: this function will stop playing if round limit has been reached
                 * Date: 15/02/21
                 * =====================
                 */
                function roundLimitReached() {
                    // Debug for the console
                    console.log(spacing);
                    console.log("The bot will stop playing as the round limit has been reached.");
                    console.log(spacing);

                    // Debug for page
                    if (user_on_screen_debug > 1) {
                        // Append to debug area
                        $("#debug_area").append(timestamp() + "The bot will stop playing as the round limit has been reached.<br />");

                        // Scroll to top
                        scrollToTopOfDebug();
                    }

                    // Set autoplay to erroneous number
                    autoplay_mode = 1000000;

                    // Stop insurance bets
                    user_insurance_bet = 0;
                }

                /* =====================
                 * Function name: noBotModeMessage
                 * Function description: this function will output messages about the next play on the UI
                 * Date: 24/02/21
                 * =====================
                 */
                function noBotModeMessage(plays) {
                    if (no_bot_mode == 1) {
                        // Inform user via alert
                        $("#popup").html("Place your next bet on: " + plays);

                        // Inform player using console
                        console.log(spacing);
                        console.log("Place your next bet on: " + plays);
                        console.log(spacing);
                    } else {
                        // Hide popup
                        $("#popup").hide();
                    }

                    // Exit
                    return;
                }

                /* =====================
                * Main code
                * =====================
                */
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
                    // Create debug area
                    var $div = $("<div />").appendTo("body");
                    $div.attr("id", "popup");

                    $("#popup").css({"background": "white", "width": "40%", "height": "29px", "position": "absolute", "margin-left": "30%", "margin-right": "30%", "z-index": "10000000", "border": "5px solid black", "border-radius": "10px", "color": "black", "font-size": "18px", "padding-left": "17px", "padding-top": "8px"});
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
            }
        }, 30000);
    }
}
