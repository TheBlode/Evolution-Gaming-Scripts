# Evolution-Gaming-Scripts

## Introduction
Welcome to my Evolution Gaming Scripts page! Evolution's autoplay feature is severely lacking in it's functionality for us players so I wrote these scripts to optimize your gaming experience! I hope you enjoy them and they improve your fortunes!

![alt text](https://i.imgur.com/8xFPJ7v.png)

**NB: It may be against some casinos Terms & Conditions to perform automated actions using this bot. To get around this, use "No Bot Mode" which disables automated play and enables hints on where to place your bets manually.**

## How to run these scripts
**ALL** bots will only work with Evolution's "classic" UI so make sure that is enabled before starting.

## Method 1 (probably the easiest method)
I have built a Chrome Extension to make it easier to run the bot code. Here are the steps to get started with it;

1) Go to Chrome Extensions page (chrome://extensions/).

2) Enable "Developer Mode" (this is necessary to load the extension).

3) Click "Load Unpacked".

4) Pick the "Chrome Extension" folder.

5) Done! Load up your game on your favourite casino and enjoy!

NB: The Chrome Extension will only work if you load the game directly (ie not in a casino iFrame).

## Method 2 (slightly easier than method 3)
You can choose to inject the bot code using one of the many Code Injection extensions available on the Chrome Web Store. There are many to choose from here;

https://chrome.google.com/webstore/search/inject%20code?hl=en&_category=extensions

## Method 3 (requires more competence with running code manually)
- These scripts run entirely inside your browser's console. Nothing else is required.
- **ALL** bots will only work with Evolution's "classic" UI.
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
- All bots have the ability to show on screen debug of play to make things easier to track. It can be displayed full screen or in compact mode.
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

## Sequence of 10 Catcher
![alt text](https://i.imgur.com/neP92nV.png)

**NB: Compiled for x64 Windows machines only. I will compile for x32 Windows machines soon.**

The Sequence of 10 Catcher is a small script that will allow users to catch rounds where #1, the most common number on the gaming wheels (Crazy Time, Monopoly & Dream Catcher), hasn't appeared for 10 or more rounds. Whilst this is a somewhat rare instance (from statistics, it happens anywhere from 3 times a day to 10 times a day), it's an opportunity to make steady profit. Simply run `Sequence of 10.exe` and you will be notified after 7 consecutive rounds without a #1 with an on-screen prompt. You'll have 3 rounds to get logged into the game and place your bet. Hopefully a #1 hasn't appeared until then.

For this kind of betting, you can experiment with a betting progression of your choice, I have seen instances where a #1 didn't appear for 20 rounds so be careful with intensive progressions like Martingale. You can use what I call an "elongated Martingale" progression which is the Martingale but stretched over the series of these rare instances. For example;
- Current Balance = 20 units. Bet 1 unit. First sequence of 10 rounds without a #1 - #1 appeared at the 12th spin. -1 unit.
- Current Balance = 19 units. Bet 2 units. First sequence of 10 rounds without a #1 - #1 appeared at the 14th spin. -2 units.
- Current Balance = 17 units. Bet 4 units. First sequence of 10 rounds without a #1 - #1 appeared at the 16th spin. -4 units.
- Current Balance = 13 units. Bet 8 units. First sequence of 10 rounds without a #1 - #1 appeared at the 11th spin. +16 units.
- Current Balance = 25 units.

To run and use the script;

1) Run the script.

2) Select a sound file to use as a notification (this will allow you to use your computer to do other things and still get notified).

3) When a sequence of 7 is detected, the notification sound will play and a splash screen notification will be displayed on the screen. The splash screen should not steal focus from other applications.

4) To hide the notification and stop playing the music, press Control key + 1.

## Troubleshooting
- If clicks are not registering on your game, try adjusting the click_delay value in the script to a higher or lower value.

## Currently known bugs
- When disabling video during bot play, video cannot be restored.
- For bots to run effectively, they must be active on your screen. Chrome will slow down JavaScript for non-active windows. To run multiple games with bots at the same time, resize all the windows to fit on the screen.
- Settings can only be applied once using the Chrome Extension.
- Only tested with Chrome. May work with other browsers with some effort.

## Coming Soon
- Infinite Blackjack / Power Blackjack / Freebet Blackjack Advanced Autoplay Bots.
- Lightning Dice.
- More betting modes for all bots.
- Autoswitching of autoplay modes based on game results.
- Implementing progressive betting patterns such as Martingale, Fibonacci, D'Alembert etc
- Publishing my game simulators (which hook into Tracksino) to allow you to run simulations on the live games.
- Simulation mode (using play money).
- Streaks betting for all games.
- User guides.
- Chrome Store Extension (currently it's in review by Google).

