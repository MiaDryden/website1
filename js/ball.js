const ball = document.createElement('div')
const SB = document.createElement('div')
const ballRadius = 50
const LPaddleWidth = 10
const LPaddleHeight = 150
let LPaddleSpeed = 20
const windowHeight = window.innerHeight
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
setInterval(moveBall, 10)
let score = 0
let level = 1

//have the score change each time the paddle hits the ball. If the paddle misses the ball, game over.
//score starts at 0 and level starts at 1, i have that in my defined variables
// i created the scoreboard which is the blue box
// but i dont know where to create the text to display score or the levels
// how can i increase ball speed as levels increase to increase difficulty?



function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if(ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1;
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1;
    }

}



createBall()
function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = "red"
    LPaddle.style.position = "absolute"
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
    LPaddle.style.borderRadius = "15px"
}

function createSB() {
    document.body.appendChild(SB)
    SB.style.height = "100px"
    SB.style.width = "200px"
    SB.style.backgroundColor = "lightBlue"
    SB.style.top = "25px"
    SB.style.right = "600px"
    SB.style.position = "absolute"
}

function displayScore() {
    document.body.appendChild(displayScore)
    displayScore.style.innerHTML = "Score: "
    displayScore.style.backgroundColor = "black"
    displayScore.style.innerHTML = "Level: "
    if (LPaddle.addEventListener(''))
}


let wKey = false
let sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = 50 + LPaddleWidth

    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition -= LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition += LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}

createBall()
createLPaddle()
createSB()
displayScore()
animate()
