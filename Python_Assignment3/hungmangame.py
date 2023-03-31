import random

# List of words to choose from
word_list = ["farman", "aleen", "ruby", "sanjana", "html", "css"]

# Select a random word from the list
chosen_word = random.choice(word_list)

# Create a list to store the correctly guessed letters
correct_letters = []

# Create a list to store the incorrectly guessed letters
incorrect_letters = []

# Loop until the game is over
while True:
    # Display the word with underscores for each unguessed letter
    display_word = ""
    for letter in chosen_word:
        if letter in correct_letters:
            display_word += letter
        else:
            display_word += "_"
    print(display_word)

    # If all letters have been guessed correctly, the player wins
    if "_" not in display_word:
        print("You win!")
        break

    # Ask the user to guess a letter
    guess = input("Guess a letter: ").lower()

    # If the letter has already been guessed, ask the user to try again
    if guess in correct_letters or guess in incorrect_letters:
        print("You already guessed that letter. Try again.")
        continue

    # If the letter is in the chosen word, add it to the list of correct letters
    if guess in chosen_word:
        correct_letters.append(guess)

    # If the letter is not in the chosen word, add it to the list of incorrect letters
    else:
        incorrect_letters.append(guess)

        # If the player has made too many incorrect guesses, they lose
        if len(incorrect_letters) == 6:
            print("You lose. The word was", chosen_word)
            break
