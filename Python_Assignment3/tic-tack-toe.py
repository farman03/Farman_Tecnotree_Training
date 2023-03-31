# Define a function to display the Tic-Tac-Toe board
def display_board(board):
    print(board[7] + "|" + board[8] + "|" + board[9])
    print("-+-+-")
    print(board[4] + "|" + board[5] + "|" + board[6])
    print("-+-+-")
    print(board[1] + "|" + board[2] + "|" + board[3])

# Define a function to check if a player has won
def check_win(board, player):
    return (
        (board[7] == player and board[8] == player and board[9] == player) or
        (board[4] == player and board[5] == player and board[6] == player) or
        (board[1] == player and board[2] == player and board[3] == player) or
        (board[7] == player and board[4] == player and board[1] == player) or
        (board[8] == player and board[5] == player and board[2] == player) or
        (board[9] == player and board[6] == player and board[3] == player) or
        (board[7] == player and board[5] == player and board[3] == player) or
        (board[9] == player and board[5] == player and board[1] == player)
    )

# Define a function to check if the board is full
def check_board_full(board):
    for i in range(1, 10):
        if board[i] == " ":
            return False
    return True

# Define a function to play the game
def play_game():
    # Initialize the board with empty spaces
    board = [" "] * 10
    
    # Initialize the players and the starting player
    player1 = "X"
    player2 = "Y"
    current_player = player1
    
    # Display the board
    display_board(board)
    
    # Loop through each turn
    while True:
        # Get the player's move
        move = input("It's " + current_player + "'s turn. Enter a position (1-9): ")
        
        # Validate the player's move
        while True:
            if move.isdigit() and int(move) in range(1, 10) and board[int(move)] == " ":
                break
            move = input("Invalid move. Enter a position (1-9): ")
        
        # Update the board with the player's move
        board[int(move)] = current_player
        
        # Display the updated board
        display_board(board)
        
        # Check if the game has ended
        if check_win(board, current_player):
            print(current_player + " wins!")
            break
        elif check_board_full(board):
            print("Tie!")
            break
        
        # Switch to the other player
        if current_player == player1:
            current_player = player2
        else:
            current_player = player1

# Play the game
play_game()
