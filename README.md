# Evolution-Gaming-Scripts

## Introduction
Welcome to my Evolution Gaming Scripts page! Evolution's autoplay feature is severely lacking in it's functionality for us players so I wrote these scripts to optimize your gaming experience! I hope you enjoy them and they improve your fortunes!

## How to run these scripts
## Method 1 (probably the easiest method)
I have built a Chrome Extension to make it easier to run the bot code. Here are the steps to get started with it;

1) Go to Chrome Extensions page (chrome://extensions/).

2) Enable "Developer Mode" (this is necessary to load the extension).

3) Click "Load Unpacked".

4) Pick the "Chrome Extension" folder.

5) Done! Currently, the bot is hardcoded to work with Unibet. However, you can change the URL to your own casino by editing line 24 in `manifest.json` (located in the Chrome Extension folder).

NB: The Chrome Extension will only work if you load the game directly (ie not in a casino iFrame).

## Method 2 (requires more competence with running code manually)
- These scripts run entirely inside your browser's console. Nothing else is required.
- **ALL** bots will only work in Evolution's "classic" UI.
- Open up your browser's developer tools (usually F12).
- Make sure you select the iFrame that the game is loaded into;
    - You can right click on the game to discover the game's direct URL and can load the game directly in your browser with no need to select the iFrame. The iFrame URLs for Unibet are as follows;
        - Crazy Time: https://evolivecasino.unibet.co.uk/frontend/evo/r2/#table_id=CrazyTime0000001&category=crazytime&game=crazytime
        - Dream Catcher: https://evolivecasino.unibet.co.uk/frontend/evo/r2/#table_id=MOWDream00000001&category=moneywheel&game=moneywheel
        - Monopoly: https://evolivecasino.unibet.co.uk/frontend/evo/r2/#table_id=Monopoly00000001&category=monopoly&game=monopoly
        - Football Studio: https://evolivecasino.unibet.co.uk/frontend/evo/r2/#table_id=TopCard000000001&category=topcard&game=topcard
        - Lightning Roulette: https://evolivecasino.unibet.co.uk/frontend/evo/r2/#table_id=LightningTable01&category=roulette&game=roulette
    - Otherwise, in Chrome, you can select the iFrame by navigating to the Console tab, selecting the "top" dropdown and selecting "KindredGameIframe". 
- Open up the JavaScript file in any text editor, copy **ALL** the text, paste into your browsers console and run the code.
- You can adjust the settings of each bot at startup. You can also change these bot settings by pressing the following hotkeys;
    - Control + 1 - allows you to change all bot settings dynamically.
    - Control + 2 - allows you to change just the betting mode / autoplay mode.
- All bots have win thresholds and loss thresholds which you can customise when you run the bot code.
- All bots have the ability to clean up the game interface to make place less clutters.
- All bots have the ability to show on screen debug of play to make things easier to track.
- All bots allow you to customise how long you play for and how long your breaks will be.
- All bots allow you to enter "big chat" mode which increase the chat area and font size.

## Autoplay Modes
## Crazy Time Advanced Autoplay Bot
Crazy Time Advanced Autoplay Bot offers the following autoplay modes;
- Random bets
- Incremental betting eg: (1, 2, 5, 10, Coin Flip, Pachinko, Cash Hunt, Crazy Time then start over)
- Decremental betting eg: (Crazy Time, Cash Hunt, Pachunko, Coin Flip, 10, 5, 2, 1 then start over)
- Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
- Random bets (with round skipping)
- Bonus game betting eg: (cycling through Coin Flip, Pachinko, Cash Hunt and Crazy Time)
- Random bonus games only betting
- Random bonus games only betting (but skip some rounds)
- Bonus round betting only (double bonus so Coin Flip + Pachinko, Coin Flip + Cash Hunt, Coin Flip + Crazy Time, Pachinko + Cash Hunt, Pachinko + Crazy Time, Cash Hunt + Crazy Time)
- Random bonus games only betting (double bonus)
- Random bonus games only betting (but skip some rounds) (double bonus)
- Bet on 1 & 2 only
- Bet on all bonus rounds (Cash Hunt, Coin Flip, Pachinko & Crazy Time)
- Bet on everything but randomly skip one
- Insurance bets are also offered on this game;
    - Insurance bets can be placed on #1 only
    - Insurance bets can be placed on #1 & #2

## Dream Catcher Advanced Autoplay Bot
Dream Catcher Advanced Autoplay Bot offers the following autoplay modes;
- Random bets
- Incremental betting eg: (1, 2, 5, 10, 20, 40 then start over)
- Decremental betting eg: (40, 20, 10, 5, 2, 1 then start over)
- Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
- Random bets (with round skipping)
- Bet on everything but randomly skip one

## Monopoly Advanced Autoplay Bot
Monopoly Autoplay Bot offers the following autoplay modes;
- Random bets
- Incremental betting eg: (1, 2, 5, 10, 2 rolls, 4 rolls then start over)
- Decremental betting eg: (4 rolls, 2 rolls, 10, 5, 2, 1 then start over)
- Sequence betting eg: (if sequence amount set to 2, then 1-1, 2-2, 5-5, 10-10, etc)
- Bonus game betting eg: (alternates between 2 rolls and 4 rolls)
- Random bets (with round skipping)
- Random bonus games only betting
- Random bonus games only betting (but skip some rounds)
- Double bonus betting (betting on both 2 rolls and 4 rolls)
- Bet on everything but randomly skip one
- Insurance bets are also offered on this game;
    - Insurance bets can be placed on #1 only
    - Insurance bets can be placed on #1 & #2

## Football Studio Advanced Autoplay Bot
Football Studio offers the following autoplay modes;
- Random bets
- Alternate betting eg: (home, away, home, away, etc)
- Sequence betting eg: (home, home, away, away, home, home, away, away, etc)
- Streak betting eg: (4 home wins in a row, bet on away)
- Random bets (with round skipping)
- Bet on draw after certain number of rounds without a draw

## Lightning Roulette Advanced Autoplay Bot
**NB: Lightning Roulette bot is still in active development. It will only work on a standard build of Chrome (with no bookmark bar), with the window maximized and running with a screen resolution of 1280 x 720**

Lightning Roulette offers the following autoplay modes;
- random number betting (and skipping some rounds)
- random number betting (without skipping any rounds)

## Troubleshooting
- If clicks are not registering on your game, try adjusting the click_delay value in the script to a higher or lower value.

## Currently known bugs
- When disabling video during bot play, video cannot be restored.
- For bots to run effectively, they must be active on your screen. Chrome will slow down JavaScript for non-active windows. To run multiple games with bots at the same time, resize all the windows to fit on the screen.
- Only tested with Chrome. May work with other browsers with some effort.

## Coming Soon
- Infinite Blackjack / Power Blackjack / Freebet Blackjack Advanced Autoplay Bots
- Lightning Dice
- More betting modes for all bots
- Autoswitching of autoplay modes based on game results
- Implementing progressive betting patterns such as Martingale, Fibonacci, D'Alembert etc
- Publishing my game simulators (which hook into Tracksino) to allow you to run simulations on the live games
- Simulation mode (using play money)
- Streaks betting for all games
- User guides

