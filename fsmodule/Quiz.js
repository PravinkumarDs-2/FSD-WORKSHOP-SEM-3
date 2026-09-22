const startBtn = document.getElementById("startBtn");
const quizForm = document.getElementById("quizForm");
const questions = document.querySelectorAll(".question");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
let current = 0;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizForm.style.display = "block";
  showQuestion(current);
});

function showQuestion(index) {
  questions.forEach((q,i)=>q.style.display = i===index ? "block":"none");
  prevBtn.style.display = index===0 ? "none":"inline-block";
  nextBtn.style.display = index===questions.length-1 ? "none":"inline-block";
  submitBtn.style.display = index===questions.length-1 ? "inline-block":"none";
}

prevBtn.addEventListener("click", () => {
  if(current>0){current--;showQuestion(current);}
});

nextBtn.addEventListener("click", () => {
  if(current<questions.length-1){current++;showQuestion(current);}
});

submitBtn.addEventListener("click", () => {
  let marks=0;
  const answers={q1:"Line break",q2:"750",q3:"Large Langauge Model",q4:"Hyper Text Markup Language"};
  const marksPerQ={q1:2,q2:1,q3:2,q4:3};
  for(let q in answers){
    let selected=document.querySelector(`input[name=${q}]:checked`);
    if(selected && selected.value===answers[q]) marks+=marksPerQ[q];
  }
  let name=document.getElementById("name").value;
  let roll=document.getElementById("roll").value;
  let section=document.querySelector("input[name=section]:checked")?.value||"Not selected";
  document.getElementById("result").innerHTML=`Name: ${name}<br>Roll No: ${roll}<br>Section: ${section}<br>Total Marks: ${marks}`;
});