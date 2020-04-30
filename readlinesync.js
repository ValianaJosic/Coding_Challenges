var input = require('readline-sync');

let name =[]

let answers = ['Sally Ride', 'True', '40', 'Trajectory', '3']

let questions = ['What is your name?','1) Who was the first American woman in space?', '2) True or false: 5000 meters = 5 kilometers.', '3) (5 + 3)/2 * 10 = ?' , '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', '5) What is the minimum crew size for the International Space Station (ISS)?'  ]


const App = () => {


    let response = []
    for( i=0; i < questions.length; i++){
         
        let resp1 = input.question(questions[i])
        response.push(resp1)
        
    }
  
    name.push(response[0])
   console.log(name)
    
    // for(i=0; i < questions.length; i++){
        
    //     let resp = input.question(questions);
    //     resp.push()


    // for(i=0; i < response.length; i++){

    //     let answerValue = answers[i].toLowerCase()

    // if(responseValue[i] === answerValue[j])    

    // console.log(answerValue[j])


    // }
        
    // }

}     
console.log(App())  

