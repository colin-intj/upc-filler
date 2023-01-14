# UPC Filler

As part of my job, I must often lookup products by manually entering their UPCs
on my phone, and I'll sometimes come across UPCs which contain a long repeating
digit in the middle, e.g. "123000000456." I've always found it bothersome to
count and type the repeating digits, so I wrote Python 3 script which takes the
beginning, end, and repeating digit in the middle of a UPC, then returns the
full UPC by filling in the missing digits.

I originally used Termux, an open-source terminal emulator for Android, to run
my script, but I soon decided that I'd like to share my project with my
co-workers—who are mostly iOS users. Thus, I've translated my script to JS and
turned it into a web app which will not only work on iOS, but just about every
other OS in existence!
