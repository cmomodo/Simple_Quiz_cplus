# A dictionary that stores the questions and answers.
questions = {"When Did Manchester United Win The Champions League": "A",
             "When Was The Last Time Manchester United Won a Trophy?":"B",
             "Whose the highest Paid player in the Manchester United Team?": "A",
             "Whose the best midfielder in Manchester United History?": "D",
             "When did Manchester United Resign Cristiano Ronaldo":"D",
             "Whose the best Manchester United Manager In History?": "A",
             "When did Eric Cantona Retire?": "C"}

# A list of lists that stores the answers to the questions.
answers = [["A.2008","B.2018","C.2017","D.2020"],
           ["A.2019","B.2017","C.2007","D.2009"],
           ["A.Cristiano Ronaldo","B.Rashford","C.De Gea","D.Rashford"],
           ["A.Bruno Fernandes","B.Fletcher","C.Anderson","D.Paul Scholes"],
           ["A.2019","B.2009","C.2010","D.2021"],
           ["A.Sir Alex Ferguson","B. Mourinho","C. Solskjær","D.Carrick"],
           ["A.1993","B.1999","C.1997","D.1996"]]

def Display_Game():
    guesses = [] #stores the number of guesses.
    correct_guesses = 0 #stores the correct guesses.
    question_num = 1 #stores the correct number.
    
    for key in questions: #prints the questions.
        print(key)
        for i in answers[question_num-1]:
            print(i) # prints the options.
        
        guess = input("Enter (A,B,C,D): ")
        guess = guess.upper() #makes it upper case.
        guesses.append(guess) #stores it in the guess function.
        
        correct_guesses += check_answer(questions.get(key),guess) #gets the guesses and answers.
        question_num += 1 #return question number + 1
        display_score(correct_guesses,guesses)

def check_answer(answers,guess):
    """
    It takes two arguments, answers and guess, and returns 1 if they are the same, and 0 if they are not
    
    :param answers: the correct answer
    :param guess: the user's guess
    :return: the number of correct answers.
    """
    if answers == guess:
        print("----------------------------")
        print("Correct")
        return 1
    else:
        print("WRONG")
        return 0
    
def display_score(correct_guesses,guesses):
    """
    The function takes in two arguments, correct_guesses and guesses, and prints out the number of
    correct guesses and the number of guesses.
    
    :param correct_guesses: The number of correct guesses the user has made
    :param guesses: The number of guesses the user has made
    """
    print("---------------------")
    print("Result")
    print("-----------------------")
    print("answers",end="")
    
    # Printing the questions.
    for q in questions:
        print(questions.get(q),end="") #gets the questions and loops through them
        print()
    # Printing the answers.
        
    print("Answer: ",end="")
    for a in guesses:
        print(a, end="")
        print()
    # Calculating the score of the user.    
    score = int((correct_guesses/len(questions))*100)
   # Printing the total score of the user.
    print("Your total score is\n"+str(score)+"%")
# A function that displays the game.
Display_Game()
# Checking the answers and questions.
check_answer(answers,questions)