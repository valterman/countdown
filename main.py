for índice in range(3):
    music.play_tone(262, music.beat(BeatFraction.QUARTER))
    basic.show_number(3 - índice)
music.play_tone(392, music.beat(BeatFraction.WHOLE))
basic.show_string("VAI")