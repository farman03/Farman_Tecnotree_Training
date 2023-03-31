# Define a list of questions and answers
questions = [
    {
        "question": "What is the capital of France?",
        "answer": "Paris"
    },
    {
        "question": "What is the highest mountain in the world?",
        "answer": "Mount Everest"
    },
    {
        "question": "What is the largest country in the world by area?",
        "answer": "Russia"
    },
    {
        "question": "What is the smallest country in the world by area?",
        "answer": "Vatican City"
    }
]

# Initialize a variable to keep track of the score
score = 0

# Loop through each question in the list
for q in questions:
    # Display the question to the user and ask for their answer
    answer = input(q["question"] + " ")
    
    # Check if the user's answer is correct
    if answer.lower() == q["answer"].lower():
        print("Correct!")
        score += 1
    else:
        print("Incorrect. The correct answer is:", q["answer"])
        
# Display the final score to the user
print("Your score is:", score)
