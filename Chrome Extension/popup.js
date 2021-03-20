// Add event handler for on click event to start bot
document.getElementById("start").onclick = function() {
    /* =======================
     * Game choice logic
     * ======================= */
    // Fetch game type
    var element = document.getElementById("game_choice");
    var selected_game_value = element.options[element.selectedIndex].value;

    // Store the game type in memory
    chrome.storage.local.set({"game_choice": selected_game_value});

    /* =======================
     * Autoplay mode logic
     * ======================= */
    // Fetch autoplay mode
    if (selected_game_value == "1") {
        element = document.getElementById("monopoly_autoplay");
    } else if (selected_game_value == "2") {
        element = document.getElementById("dream_catcher_autoplay");
    } else if (selected_game_value == "3") {
        element = document.getElementById("crazy_time_autoplay");
    } else if (selected_game_value == "4") {
        element = document.getElementById("football_studio_autoplay");
    }

    // Get autoplay mode
    var autoplay_mode = element.options[element.selectedIndex].value;

    // Store the game type in memory
    chrome.storage.local.set({"autoplay_mode": autoplay_mode});

    /* =======================
     * Disable video logic
     * ======================= */
    // Get disable video setting
    var disable_video_setting = document.getElementById("disable_video").checked;

    // Store temporary variable
    var temp_disable_video = 0;

    // Store disable video flag in memory
    if (disable_video_setting) {
        // Store disable video flag in memory
        temp_disable_video = 1;
        chrome.storage.local.set({"disable_video": temp_disable_video});
    } else {
        // Store disable video flag in memory
        temp_disable_video = 0;
        chrome.storage.local.set({"disable_video": temp_disable_video});
    }

    /* =======================
     * Clean interface logic
     * ======================= */
    // Get clean interface setting
    var clean_interface_setting = document.getElementById("user_clean_interface").checked;

    // Store temporary variable
    var temp_clean_interface_setting = 0;

    // Store clean interface flag in memory
    if (clean_interface_setting) {
        // Store clean interface flag in memory
        temp_clean_interface_setting = 1;
        chrome.storage.local.set({"user_clean_interface": temp_clean_interface_setting});
    } else {
        // Store clean interface flag in memory
        temp_clean_interface_setting = 0;
        chrome.storage.local.set({"user_clean_interface": temp_clean_interface_setting});
    }

    /* =======================
     * Big Chat logic
     * ======================= */
    // Get big chat setting
    var big_chat_setting = document.getElementById("big_chat").checked;

    // Store temporary variable
    var temp_big_chat = 0;

    // Store big chat flag in memory
    if (big_chat_setting) {
        // Store big chat flag in memory
        temp_big_chat = 1;
        chrome.storage.local.set({"big_chat": temp_big_chat});
    } else {
        temp_big_chat = 0;
        chrome.storage.local.set({"big_chat": temp_big_chat});
    }

   /* =======================
     * User round limit logic
     * ======================= */
    // Fetch limit value
    var element = document.getElementById("user_round_limit");
    var selected_user_round_limit = element.options[element.selectedIndex].value;

    // Store the round limit in memory
    chrome.storage.local.set({"user_round_limit": selected_user_round_limit});

   /* =======================
     * Click delay logic
     * ======================= */
    // Fetch click delay
    var element = document.getElementById("click_delay");
    var selected_click_delay = element.options[element.selectedIndex].value;

    // Store the click delay in memory
    chrome.storage.local.set({"click_delay": selected_click_delay});

   /* =======================
     * Wager size logic
     * ======================= */
    // Fetch wager size
    var element = document.getElementById("user_wager_amount");
    var selected_user_wager_amount = element.options[element.selectedIndex].value;

    // Store the wager size in memory
    chrome.storage.local.set({"user_wager_amount": selected_user_wager_amount});

    /* =======================
     * On Screen Debug logic
     * ======================= */
    // Get on screen debug setting
    var form = document.getElementById("on_screen_debug");
    var user_on_screen_debug_setting = form.elements["on_screen_debug"].value
    var temp_user_on_screen_debug= 0;

    // Store on screen debug flag in memory
    if (user_on_screen_debug_setting == 1) {
        // Store on screen debug flag in memory
        temp_user_on_screen_debug = 1;
        chrome.storage.local.set({"user_on_screen_debug": temp_user_on_screen_debug});
    } else if (user_on_screen_debug_setting == 2) {
        // Store on screen debug flag in memory
        temp_user_on_screen_debug = 2;
        chrome.storage.local.set({"user_on_screen_debug": temp_user_on_screen_debug});
    } else {
        temp_user_on_screen_debug = 0;
        chrome.storage.local.set({"user_on_screen_debug": temp_user_on_screen_debug});
    }

    /* =======================
     * Get loss limit value
     * ======================= */
    var temp_user_loss_limit_balance = document.getElementById("user_loss_limit_balance").value;

    chrome.storage.local.set({"user_loss_limit_balance": temp_user_loss_limit_balance});

    /* =======================
     * Get win limit value
     * ======================= */
    var temp_user_win_limit_balance = document.getElementById("user_win_limit_balance").value;

    chrome.storage.local.set({"user_win_limit_balance": temp_user_win_limit_balance});

    /* =======================
     * Break Time logic
     * ======================= */
    // Get break time setting
    var temp_break_times_setting = document.getElementById("break_times").checked;

    // Store temporary variable
    var temp_break_times = 0;

    // Store break time in memory
    if (temp_break_times_setting) {
        // Store break time in memory
        temp_break_times = 1;
        chrome.storage.local.set({"break_times": temp_break_times});
    } else {
        temp_break_times = 0;
        chrome.storage.local.set({"break_times": temp_break_times});
    }

    /* =======================
     * Get session duration value
     * ======================= */
    var temp_time_between_breaks = document.getElementById("time_between_breaks").value;

    chrome.storage.local.set({"time_between_breaks": temp_time_between_breaks});

    /* =======================
     * Get break time duration value
     * ======================= */
    var temp_break_duration = document.getElementById("break_duration").value;

    chrome.storage.local.set({"break_duration": temp_break_duration});

    /* =======================
     * Insurance logic
     * ======================= */
    if (selected_game_value == 1 || selected_game_value == 3) {
        // Fetch Insurance
        var element = document.getElementById("user_insurance_bet");
        var selected_user_insurance_bet= element.options[element.selectedIndex].value;

        // Store the Insurance in memory
        chrome.storage.local.set({"user_insurance_bet": selected_user_insurance_bet});
    }

    /* =======================
     * No Bot Mode logic
     * ======================= */
    // Get No Bot Mode setting
    var no_bot_mode_setting = document.getElementById("no_bot_mode").checked;

    // Store temporary variable
    var temp_no_bot_mode= 0;

    // Store No Bot Mode flag in memory
    if (no_bot_mode_setting) {
        // Store No Bot Mode flag in memory
        temp_no_bot_mode = 1;
        chrome.storage.local.set({"no_bot_mode": temp_no_bot_mode});
    } else {
        temp_no_bot_mode = 0;
        chrome.storage.local.set({"no_bot_mode": temp_no_bot_mode});
    }

    /* =======================
     * User round skipping frequency logic
     * ======================= */
    // Fetch user round skipping value
    var element = document.getElementById("user_round_skipping");
    var selected_user_round_skipping = element.options[element.selectedIndex].value;

    // Store the click delay in memory
    chrome.storage.local.set({"user_round_skipping": selected_user_round_skipping})

    // Store the start variable in memory so the main bot listener can pick it up
    chrome.storage.local.set({"start": "1"});
};

// Add event handler to add autoplay menu when game is selected
document.getElementById("game_choice").onchange  = function() {
    // Fetch game type
    var element = document.getElementById("game_choice");
    var selected_game_value = element.options[element.selectedIndex].value;

    // Generate menu for Monopoly
    if (selected_game_value == "1") {
        document.getElementById("autoplay_mode").innerHTML = "<select id=\"monopoly_autoplay\"><option value=\"1\">Bet randomly on a number</option><option value=\"2\">Increment bet in a sequence (1, 2, 5, 10, 2 rolls, 4 rolls then start over)</option><option value=\"3\">Decrement bet in a sequence (4 rolls, 2 rolls, 10, 5, 2, 1 then start over)</option><option value=\"4\">Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)</option><option value=\"5\">Bonus games only betting</option><option value=\"6\">Bet randomly on a number (but skip some rounds)</option><option value=\"7\">Random bonus games only betting</option><option value=\"8\">Random bonus games only betting (but skip some rounds)</option><option value=\"9\">Double bonus round bet</option><option value=\"10\">Bet on everything but randomly skip one</option></select>";
         
        document.getElementById("insurance").innerHTML = "Do you want to place insurance bets?:<select id=\"user_insurance_bet\"><option value=\"0\">Disabled</option><option value=\"1\">1 only</option><option value=\"2\">1 & 2</option>";
    } else if (selected_game_value == "2") {
        document.getElementById("autoplay_mode").innerHTML = "<select id=\"dream_catcher_autoplay\"><option value=\"1\">Bet randomly on a number</option><option value=\"2\">Increment bet in a sequence (1, 2, 5, 10, 20, 40)</option><option value=\"3\">decrement bet in a sequence (40, 20, 10, 5, 2, 1)</option><option value=\"4\">Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)</option><option value=\"5\">Bet randomly on a number (but skip some rounds)</option><option value=\"6\">Bet on 1 and 2 only</option><option value=\"7\">Bet on everything but randomly skip one</option></select>";

        document.getElementById("insurance").innerHTML = "";
    } else if (selected_game_value == "3") {
        document.getElementById("autoplay_mode").innerHTML = "<select id=\"crazy_time_autoplay\"><option value=\"1\">Bet randomly on a number</option><option value=\"2\">Increment bet in a sequence (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)</option><option value=\"3\">Decrement bet in a sequence (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)</option><option value=\"4\">Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)</option><option value=\"5\">Bet randomly on a number (but skip some rounds)</option><option value=\"6\">Bonus round betting only</option><option value=\"7\">Random bonus games only betting</option><option value=\"8\">Random bonus games only betting (but skip some rounds)</option><option value=\"9\">Bonus round betting only (double bonus)</option><option value=\"10\">Random bonus games only betting (double bonus)</option><option value=\"11\">Random bonus games only betting (but skip some rounds) (double bonus)</option><option value=\"13\">Bet on all bonus rounds (Cash Hunt, Coin Flip, Pachinko & Crazy Time)</option><option value=\"14\">Bet on everything but randomly skip one</option></select>";

        document.getElementById("insurance").innerHTML = "Do you want to place insurance bets?:<select id=\"user_insurance_bet\"><option value=\"0\">Disabled</option><option value=\"1\">1 only</option><option value=\"2\">1 & 2</option>";
    } else if (selected_game_value == "4") {
        document.getElementById("autoplay_mode").innerHTML = "<select id=\"football_studio_autoplay\"><option value=\"1\">Alternate bets. Example: Bet home, then away, then home, then away, then home, then away, etc</option><option value=\"2\">Bet on home and away in numbered sequences.</option><option value=\"3\">Bet randomly on home or away</option><option value=\"4\">Bet only after a certain sequence of results. </option><option value=\"5\">Bet randomly on home or away (with round skipping)</option><option value=\"6\">Bet on draw after certain number of rounds without a draw</option></select>";

        document.getElementById("insurance").innerHTML = "";
    }

    // Exit
    return;
};

// Add event handler to add autoplay menu when game is selected
document.getElementById("break_times").onchange  = function() {
    var break_setting = document.getElementById("break_times").checked;

    if (break_setting) {
        document.getElementById("break_time_settings").innerHTML = "Session Time (in minutes): <input id=\"time_between_breaks\" type=\"number\" /><br />Break Time Duration (in minutes): <input id=\"break_duration\" type=\"number\" />";
        document.getElementById("time_between_breaks").defaultValue = "0";
        document.getElementById("break_duration").defaultValue = "0";
    } else {
        document.getElementById("break_time_settings").innerHTML = "Session Time (in minutes): <input id=\"time_between_breaks\" type=\"number\" disabled/><br />Break Time Duration (in minutes): <input id=\"break_duration\" type=\"number\" disabled/>";
        document.getElementById("time_between_breaks").defaultValue = "0";
        document.getElementById("break_duration").defaultValue = "0";
    }
};

// Generate autoplay options on first run
document.getElementById("game_choice").onchange();
document.getElementById("user_loss_limit_balance").defaultValue = "0";
document.getElementById("user_win_limit_balance").defaultValue = "0";
document.getElementById("break_time_settings").innerHTML = "Session Time (in minutes): <input id=\"time_between_breaks\" type=\"number\" disabled/><br />Break Time Duration (in minutes): <input id=\"break_duration\" type=\"number\" disabled/>";
document.getElementById("time_between_breaks").defaultValue = "0";
document.getElementById("break_duration").defaultValue = "0";