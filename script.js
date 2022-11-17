const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

onkeydown = jump

requestAnimationFrame(check)

function jump() {
  if (dino.className != "jump") dino.className = "jump"
  setTimeout(() => (dino.className = ""), 610)
}

function check() {
  const bottom = 148 - dino.getBoundingClientRect().top
  const left = parseInt(getComputedStyle(cactus).left)

  if (left < 45 && left > 0 && bottom <= 30) alert("game over!!")

  requestAnimationFrame(check)
}
