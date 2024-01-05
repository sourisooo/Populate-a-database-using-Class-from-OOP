const faker = require('random-sentence');
const fs = require('fs');
const { Client } = require("pg");

const Question = require('./classe/question.js')
const Difficulté = require('./classe/difficulté.js')
const Proposition = require('./classe/proposition.js')
const quiz = require('./classe/quiz.js')
const Thème = require('./classe/thème.js')
const Utilisateur = require('./classe/utilisateur.js')

let propositions = [];
let questions = [];
let themes = [];



for (count=0; count <100; count++) {

let proposition = new Proposition (Proposition.index, faker({word: Math.floor(Math.random()*15+1)}), 1)

let question = new Question (Question.index, faker({word: Math.floor(Math.random()*15+1)}), faker({word: Math.floor(Math.random()*15+1)}), faker({word: Math.floor(Math.random()*15+1)}), 1 , 1)

let theme = new Thème (Thème.index,  faker({word: Math.floor(Math.random()*1)} ))

// console.log(proposition, typeof id_proposition);

propositions.push(proposition);

questions.push(question);

themes.push(theme);

console.log(question);

}


const strprop = propositions.map(e => `(${e.id_proposition}, '${e.description}', ${e.id_question})`);

const stringproposition = 'INSERT INTO "proposition" ("id_proposition", "description", "id_question") VALUES '+strprop;

// console.log(stringproposition);

const strquest = questions.map(e => `(${e.id_question}, '${e.description}', '${e.wiki}', '${e.anecdote}', ${e.id_difficulté}, ${e.id_quiz})`);

const stringquestion =  'INSERT INTO "question" ("id_question","description","wiki", "anecdote","id_difficulté","id_quiz") VALUES '+strquest;

// console.log(strquest);

const strthe = themes.map(e => `(${e.id_thème}, '${e.nom}')`);

const strtheme = 'INSERT INTO "thème" ("id_thème","nom") VALUES '+strthe;

console.log(strtheme);

async function populatedb() {

const client = new Client('postgresql://postgres:random@localhost/quiz');

await client.connect();

// const sqlFileContent = fs.readFileSync('./filling_db.sql', 'utf8');


await client.query(stringquestion);

await client.query(stringproposition);

await client.query(strtheme);

await client.end();

// console.log(result.rows);

;}

console.log("filling done");
populatedb();

