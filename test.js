var input = require('readline-sync');

let name = []

let answers = ['Sally Ride', 'True', '40', 'Trajectory', '3']

let questions = ['1) Who was the first American woman in space?',
    '2) True or false: 5000 meters = 5 kilometers.',
    '3) (5 + 3)/2 * 10 = ?',
    '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
    '5) What is the minimum crew size for the International Space Station (ISS)?']

let count = 0
let grade = []

const App = () => {

    let response = []

    let cand = input.question('Candidate Name: ')

    name.push(cand)

    for (i = 1; i < questions.length; i++) {

        for (i = 0; i < answers.length; i++) {

            let resp1 = input.question(questions[i])
            response.push(resp1)
            let ans = `Correct Answer: ${answers[i]}`
            let res = `Your Answer:  ${response[i]}`
            console.log(ans, '\n', res)
        }

        for (i = 0; i < response.length; i++) {
            for (i = 0; i < answers.length; i++) {

                let answerValue = answers[i].toLowerCase()
                let responseValue = response[i].toLowerCase()

                if (responseValue === answerValue) {

                    count++

                }
            }
        }

        let grad = (count) / (5) * 100
        grade.push(grad)

        console.log('>>> Overall Grade: ' + grade + '% <<<')

    }

    if (grade < 60) {

        console.log('>>> Status: Failed <<<')
    }
    else {
        console.log('>>> Status: Passed <<<')
    }


}
App()

