const ball = document.createElement('div')
const ballRadius = 100
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let BallYDirection = 1

setInterval(moveBall, 10)


function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition = ballSpeed * ballYDirection
    ball.style.left = `${ballYPosition}px`
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
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}


