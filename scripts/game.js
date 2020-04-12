const initGamePage = () => {
    if (isUserLoggedIn()) {
        setUsernameToHeader();
    } else {
        alert('Please enter your username before starting the game');
        logout();
    }
};

const setUsernameToHeader = () => {
    document.getElementById('gameHeaderText').textContent = `Enjoy playing Tetris, ${getCurrentUserUsername()} !`;
};

const startGame = () => {
    const context = document.getElementById('gameCanvas')
        .getContext('2d');

    const O_figure = new Image();
    O_figure.src = '../media/O_figure.png';

    moveFigure(context, O_figure, drawFigureX, drawFigureY);
};

const moveFigure = (context, figure, startX, startY) => {
    let nextX = startX;
    let nextY = startY;

    document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyA') {
            nextX -= moveFigureLength;
        } else if (event.code === 'KeyD') {
            nextX += moveFigureLength;
        }
    });

    const timerId = setInterval(() => {
        context.drawImage(figure, nextX, nextY);
        context.clearRect(nextX, nextY - moveFigureLength, 100, 100 / 2);

        nextY += moveFigureLength;

        if (nextY + moveFigureLength >= context.canvas.height) {
            clearInterval(timerId);
        }
    }, moveFigureTimeout);
};
