for (let índice = 0; índice <= 2; índice++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - índice)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("VAI")
