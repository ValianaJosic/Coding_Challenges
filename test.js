let readlineSync = require('readline-sync')


let answer1 = 'Sally Ride'
let answer2 = 'True'
let answer3 = '40'
let answer4 = 'Trajectory'
let answer5 = '3'

let candName = readlineSync.question('May I have your name? ')
console.log('Hi ' + candName + '!')

let question1 = readlineSync.question('1) Who was the first American woman in space?')
console.log('Your Answer: ' + question1)
console.log('Correct Answer: ' + answer1)

let question2 = readlineSync.question('2) True or false: 5000 meters = 5 kilometers.')
console.log('Your Answer: ' + question2)
console.log('Correct Answer: ' + answer2)

let question3 = readlineSync.question('3) (5 + 3)/2 * 10 = ?')
console.log('Your Answer: ' + question3)
console.log('Correct Answer: ' + answer3)

let question4 = readlineSync.question('4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?')
console.log('Your Answer: ' + question4)
console.log('Correct Answer: ' + answer4)

let question5 = readlineSync.question('5) What is the minimum crew size for the International Space Station (ISS)?')
console.log('Your Answer: ' + question5)
console.log('Correct Answer: ' + answer5)



let response = [question1, question2, question3, question4, question5]
let answers = [answer1, answer2, answer3, answer4, answer5]

const grade = (response, answers) => {

    let answerValue = []
    let responseValue = []
    let pass = [.60]
    let percentarr = []

    for (let value of answers) {

        answerValue = value.toLowerCase()
    }
    for (let value of response) {

        responseValue = value.toLowerCase()

    }

    if (answerValue === responseValue) {

        let percent = answerValue / 5 * 100

        percentarr.push(percent)

        return `Overall Grade: ${percent}%`

    }
    else if (percentarr !== pass) {
        console.log(percentarr)

        
    }
    else {
        return 'Status: FAILED'
    }

}


console.log(grade(response, answers))


    // for (i = 0; i < answers.length; i++) {

    //     let i = allAnswers

    // }
    //     for (i = 0; i < response.length; i++) {

    //      let i = allResponse

    //     }


    //     if (allResponse === allAnswers)

    //         console.log('Overall Grade: ' + i / 5 * 100 + '%')

// const miniApp = (name, response) => {

//     const message = 'Candidate name: '

//     let candName = name

//     return message + candName



// }

// console.log(miniApp('Vali'))

// let  readlineSync  =  require('readline-sync')

// var userName = readlineSync.question('May I have your name? ')
// console.log('Hi ' + userName + '!')

// var favFood = readlineSync.question('What is your favorite food? ', {
//     hideEchoBack: true 
//   });
//   console.log('Oh, ' + userName + ' loves ' + favFood + '!');

// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
// index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' ate you');