let mamua = game.createSprite(2, 2)
let pacman = game.createSprite(0, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 50)
let janaria = game.createSprite(4, 4)
janaria.set(LedSpriteProperty.Brightness, 10)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        mamua.move(1)
    }
    mamua.ifOnEdgeBounce()
})
basic.forever(function () {
    basic.pause(100)
    if (input.acceleration(Dimension.X) > 200) {
        pacman.move(1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < -200) {
        pacman.move(-1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (pacman.isTouching(janaria)) {
        music.playMelody("- - - - - - - C ", 500)
        game.addScore(1)
        janaria.delete()
        janaria = game.createSprite(randint(0, 4), randint(0, 4))
        janaria.set(LedSpriteProperty.Brightness, 10)
    }
    if (pacman.isTouching(mamua)) {
        music.playMelody("- - - - - - - C5 ", 500)
        game.gameOver()
    }
})
