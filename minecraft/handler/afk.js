module.exports = (bot) => {
  let rotater
  let rotated = false
  bot.afk = {}

  bot.afk.start = () => {
    if (rotater) return
    rotater = setInterval(rotate, 3000)
    bot.setControlState('jump', true)
  }

  bot.afk.stop = () => {
    if (!rotater) return
    clearInterval(rotater)
    bot.setControlState('jump', false)
  }

  function rotate() {
    bot.look(rotated ? 0 : Math.PI, 0)
    rotated = !rotated
  }
}