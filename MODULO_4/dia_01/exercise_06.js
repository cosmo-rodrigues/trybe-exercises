//Font: https://www.ichess.net/blog/chess-pieces-moves/
var chessPiece=prompt("Type your chess piece:");
var pieceResult=chessPiece.toLowerCase();
if(pieceResult=="pawn"){
    console.log("Pawns have the fewest options of movement of all the pieces. On their first move, they have the option to go one or two squares forward. On all other moves, a pawn can only go one square straight forward. The exception to this is when pawns capture the opponent’s chess pieces – then they move forward one square diagonally. Moreover, there is one exceptional rule for pawn moves which is called 'en passant'.")
} else if(pieceResult=="rook"){
    console.log("The movement is the easiest to learn of all pieces – rooks can go forward, backward, to the left or to the right. Of course, the rook can not change directions in the same move. As long as no other piece is in their way, as they cannot jump over pieces, they are able to move any number of squares in the chosen direction.")
} else if(pieceResult=="knight"){
    console.log("This chess piece, sometimes called “horse”, has a quite mysterious way of moving on the board which can puzzle beginners just start to learning the chess rules. The knight is the only piece that can jump over other pieces. It moves in an L-shape over the squares. This means that this chess piece first moves two squares in one direction (to the left, to the right, back- or forwards) and then one square into a horizontal or vertical direction. If that sounds confusing, don’t worry – just check the diagram on the right.")
} else if(pieceResult=="bishop"){
    console.log("Happily, the movement of the bishops, which were originally called elephants, is far easier than the knight. The bishop is the ruler over the diagonals of the chess board. One of them is light-squared, the other one is dark-squared. When there are no other pieces in their way, bishops can move in any direction diagonally, as many squares as desired. They can capture any piece along the diagonals, and as they can reach so many squares (they can move from one end of the board right to the other in one move), they can prove very useful, especially when working in tandem.")
} else if(pieceResult=="queen"){
    console.log("As she has the widest reach of all pieces, she can become the most dangerous member of the game for your opponents. It is essential to protect her and use her effectively at the same time. For most players, the loss of the queen means the loss of the whole game. So, always be careful with your Queen as she is unique. She can move in any direction and any number of squares. The one thing she can’t do is jump over other pieces. The Queen can capture any of the opponent’s pieces that are in her way. This piece is very useful for different kinds of tactics and attacks. Be careful not to bring your queen out into the open too soon as you may find her in danger from the opponent’s pieces.")
} else if (pieceResult=="king"){
    console.log("Thus, it is crucial to keep your king safe and try to weaken the opponents’. The king is limited in his movement. He can move just one square in any direction, but only if he isn’t placed in check by doing so. Besides, this square mustn’t be occupied by any other of your pieces (only one piece can ever occupy a square).  The king can participate in a special move called “castling”. When you castle, you simultaneously move your king and one of your rooks. Thereby, you move the king two squares towards your rook and then move the rook to the square over which the king crossed (be sure to do it in this order – if you move your rook first, it’s counted as a normal rook move and you’ll lose the chance to castle).")
} else {
    console.log("This piece don't exist!")
}