// Get the reference to the DOM element where the chessboard will be rendered
var boardElement = document.getElementById('board1');

var element = document.getElementById('board1');
var id = element.id;

// Create a new instance of the chessboard
var board = ChessBoard(id, {
	position: 'start',
	draggable: true
});

// Create a new instance of the chess game
var game = new Chess();

// Function to handle move events
function handleMove(source, target) {
	// Check if the move is valid
	var move = game.move({
		from: source,
		to: target,
		promotion: 'q' // Promote pawn to a queen for simplicity
	});

	// If the move is invalid, return
	if (move === null) return;

	// Update the board with the new position
	board.position(game.fen());
}

// Set the move handler for the chessboard
board.on('drop', handleMove);
