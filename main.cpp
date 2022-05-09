#include <iostream>
#include <random>
#include <ctime>    

using namespace std;
int Q_NO = 1;
int CORRECT = 0;
int WRONG = 0;
bool ask[10] = {true,true,true,true, true, true, true, true, true, true};

void display_random_question();
void display();
void question(string question, string a, string b, string c, string d, char correct_answer);
void result();

int main() {
    display();
    return 0;
}

void display() {

system("cls");
cout <<"Question NO:" <<"Q_NO"<<"\t\tCorrect Answers: "<<CORRECT << "\t\tWrong Answers:" << WRONG << endl << endl;
display_random_question();
}
//This one gives the questions.
void display_random_question() {

    srand(time(0)); 
    bool is_question_remaining = false;
    for (int i = 0; i <10; i++){
        if(ask[i]){
            is_question_remaining = true;
            break;
        }
    }
    while(is_question_remaining){
        int no = rand()%10;
        if(ask[no])
        {ask[no] = false;
            switch(no){
                case 0 : 
                question("which langauge supports the object oriented programming Technique?", "C Language", "C++ Programming Language", "Python Language", "Fortan Langauge", 'b');
                break;
                case 1 : 
                question("what is a variable?", "A Empty Container in which we store data", "box", "Data type", "language", 'a');
                break;
                case 2 : 
                question("Who Is  Machester United Best Player?", "Bruno Fernandes", "box", "Data type", "language", 'a');
                break;
            } 
        }
    }
    result();
}
//this stores the result.
void result(){
    system("cls");
    cout << "Total Question = " <<  Q_NO-1 << endl;
    cout << "Correct Answers = " << CORRECT << endl;
    cout << "Wring Answers = " << WRONG << endl;
    if(CORRECT > WRONG)
        cout << "Result = PASS" << endl;
    else if(WRONG > CORRECT)
        cout <<"Result = FAIL" << endl;
    else
        cout <<"Result = Tie" << endl;
}

//this stores the answer.
void question(string question, string a, string b, string c, string d, char correct_answer){
    cout << question << endl;
    cout <<"A.\t" << a << endl;
    cout <<"B.\t" << b << endl;
    cout <<"C.\t" << c << endl;
    cout <<"D.\t" << d << endl;
    char answer;
    cin >> answer;
    if(answer == correct_answer)
    CORRECT++;
    else
    WRONG++;
    Q_NO++;
    display();

}