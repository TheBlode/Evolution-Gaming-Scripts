#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; Sequence Catcher
; by The_Blode
; 18/12/20

dc_sequence = ""
mo_sequence = ""
ct_sequence = ""
fs_sequence = ""

; Get mp3 file to play to the user
FileSelectFile, music_file, , , Please select the music file you want to play when a sequence is detected

Loop
	{
	; Check sequence for Dream Catcher
	; Grab stats
	URLDownloadToFile, https://tracksino.com/dreamcatcher, dc.txt

	; Loop through lines to grab sequence
	Loop, Read, dc.txt
	{
		IfInString, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">
		{
			; Grab just the number
			StringReplace, dc_sequence, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">, , All
			StringReplace, dc_sequence, dc_sequence, <b>, , All
			StringReplace, dc_sequence, dc_sequence, </b>, , All
			dc_sequence := RegExReplace(dc_sequence, "^\s+")
			dc_sequence := RegExReplace(dc_sequence, "\s+$")

			; Debug
			;MsgBox %dc_sequence%

			; Exit
			break
		}
	}

	; Check sequence for Monopoly
	; Grab stats
	URLDownloadToFile, https://tracksino.com/monopoly, mo.txt

	; Loop through lines to grab sequence
	Loop, Read, mo.txt
	{
		IfInString, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">
		{
			; Grab just the number
			StringReplace, mo_sequence, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">, , All
			StringReplace, mo_sequence, mo_sequence, <b>, , All
			StringReplace, mo_sequence, mo_sequence, </b>, , All
			mo_sequence := RegExReplace(mo_sequence, "^\s+")
			mo_sequence := RegExReplace(mo_sequence, "\s+$")

			; Debug
			;MsgBox %mo_sequence%

			; Exit
			break
		}
	}

	; Delete temp file
	FileDelete, mo.txt

	; Check sequence for Crazy Time
	; Grab stats
	URLDownloadToFile, https://tracksino.com/crazytime, ct.txt

	; Loop through lines to grab sequence
	Loop, Read, ct.txt
	{
		IfInString, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">
		{
			; Grab just the number
			StringReplace, ct_sequence, A_LoopReadLine, </div></div> <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="subtitle">, , All
			StringReplace, ct_sequence, ct_sequence, <b>, , All
			StringReplace, ct_sequence, ct_sequence, </b>, , All
			ct_sequence := RegExReplace(ct_sequence, "^\s+")
			ct_sequence := RegExReplace(ct_sequence, "\s+$")

			; Debug
			;MsgBox %ct_sequence%

			; Exit
			break
		}
	}

	; Delete temp file
	FileDelete, ct.txt

	Loop, Read, C:\Users\Martin\Desktop\PortableApps\PuTTYPortable\App\putty\test.txt
	{
		fs_sequence = %A_LoopReadLine%
	}

	; Detect sequences
	IfGreater, dc_sequence, 6
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, DC, DC Sequence Detected, Start betting after 2 more spins
	}

	IfGreater, mo_sequence, 6
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, MO,  Monopoly Sequence Detected, Start betting after 2 more spins
	}

	IfGreater, ct_sequence, 6
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, CT,  Crazy Time Sequence Detected, Start betting after 2 more spins
	}

	IfEqual, fs_sequence, A
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, CT,  10 rounds without away win!
	}

	IfEqual, fs_sequence, H
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, CT,  10 rounds without home win!
	}

	IfEqual, fs_sequence, D
	{
		; Alert user
		SoundPlay, %music_file%

		; Display message to user
		SplashTextOn, 200, 50, CT,  25 rounds without draw!
	}

	; Sleep for a bit
	Sleep, 1000
}

^1::
{
	; Play silence
	SoundPlay, empty.mp3

	; Hide splash screen
	SplashTextOff
}