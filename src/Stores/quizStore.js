import { defineStore } from "pinia";


export let useQuizStore = defineStore('quiz',{
    state(){
        return {
            current:0,
            correct:0,
            incorrect:0,
            questions: [
                {
                    question: "What is the capital of France?",
                    options: [
                        "Paris",
                        "London",
                        "Berlin",
                        "Madrid"
                    ],
                    correctAnswer: "Paris"
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: [
                        "Earth",
                        "Mars",
                        "Venus",
                        "Jupiter"
                    ],
                    correctAnswer: "Mars"
                },
                {
                    question: "Who wrote the play 'Romeo and Juliet'?",
                    options: [
                        "Charles Dickens",
                        "William Shakespeare",
                        "Jane Austen",
                        "F. Scott Fitzgerald"
                    ],
                    correctAnswer: "William Shakespeare"
                },
                {
                    question: "What is the largest mammal on Earth?",
                    options: [
                      "Elephant",
                      "Giraffe",
                      "Blue Whale",
                      "Lion"
                    ],
                    correctAnswer: "Blue Whale"
                  },
                  {
                    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
                    options: [
                      "Nitrogen",
                      "Oxygen",
                      "Carbon Dioxide",
                      "Hydrogen"
                    ],
                    correctAnswer: "Carbon Dioxide"
                  },
                  {
                    question: "Who is credited with inventing the World Wide Web (WWW)?",
                    options: [
                      "Bill Gates",
                      "Tim Berners-Lee",
                      "Mark Zuckerberg",
                      "Elon Musk"
                    ],
                    correctAnswer: "Tim Berners-Lee"
                  }
            ]
        };
    }
})