import { useState } from "react";

function Quiz(){
    const quiz = [
  [
    "Q1) Which company developed JavaScript?",
    "Microsoft",
    "Netscape",
    "Google",
    "IBM",
    "b"
  ],
  [
    "Q2) Which of the following is the correct syntax to print a message in the console in JavaScript?",
    "print('Hello, World!');",
    "console.log('Hello, World!');",
    "System.out.println('Hello, World!');",
    "echo 'Hello, World!';",
    "b"
  ],
  [
    "Q3) What will be the output of the following code?\n\nconsole.log(typeof null);",
    "'null'",
    "'undefined'",
    "'object'",
    "'boolean'",
    "c"
  ],
  [
    "Q4) Which method is used to add one or more elements to the end of an array in JavaScript?",
    "push()",
    "pop()",
    "shift()",
    "unshift()",
    "a"
  ],
  [
    "Q5) What will be the output of the following code?\n\nconsole.log(2 + '2' - 1);",
    "21",
    "3",
    "22",
    "11",
    "a"
  ],
  [
    "Q6) Which of the following is not a reserved word in JavaScript?",
    "interface",
    "throws",
    "program",
    "short",
    "c"
  ],
  [
    "Q7) Which of the following methods is used to access HTML elements using JavaScript?",
    "getElementById()",
    "getElementsByClassName()",
    "querySelector()",
    "All of the above",
    "d"
  ],
  [
    "Q8) What is the correct way to write a JavaScript array?",
    "var colors = 'red', 'green', 'blue';",
    "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');",
    "var colors = ['red', 'green', 'blue'];",
    "var colors = (1:'red', 2:'green', 3:'blue');",
    "c"
  ],
  [
    "Q9) How can you add a comment in JavaScript?",
    "<!-- This is a comment -->",
    "// This is a comment",
    "' This is a comment",
    "/* This is a comment */",
    "b"
  ],
  [
    "Q10) Which built-in method combines the text of two strings and returns a new string?",
    "append()",
    "concat()",
    "attach()",
    "None of the above",
    "b"
  ]
];

    const [valueOfQuestion,setValueOfQuestion] = useState(0);
    const [final , setFinal] = useState(false);
    const [totalScore,setTotalScore] = useState(0);
    const [onchecked , setChecked] = useState('')
    const changer = ()=>{
      
      if(valueOfQuestion<9){
        setValueOfQuestion(valueOfQuestion+1)
        setChecked('')
      }
      if(valueOfQuestion==9){
        // alert(`quiz is done your total score is ${totalScore} `)
        setFinal(true)
        console.log(totalScore)
        // window.location.reload()
      }

      if(onchecked===quiz[valueOfQuestion][5]){
        setTotalScore(totalScore+1)
      }


    }

    const HandleClick = (e)=>{
      setChecked(e.target.value);
      console.log(onchecked)
    }

    const closeBtn = ()=>{
      setTotalScore(0)
      setFinal(false)
      window.location.reload()
    }

    return(
        <>
        <div className=" w-full flex justify-center items-center h-[600px] flex-wrap">
            <div className="bg-violet-400  md:h-[550px] md:w-[560px] rounded-xl p-10 cursor-pointer sm:h-[500px] sm:w-[450px] h-[490px] w-[330px]">
              <h1 className="md:text-2xl font-medium sm:text-[23px] text-[15px]">{quiz[valueOfQuestion][0]}</h1>
              
              
              <div className="relative top-4 p-4">
                <input className="h-7 w-7 cursor-pointer text-xl" type="radio" value='a' checked={onchecked==='a'} onChange={HandleClick}></input>
                <span className="ml-2 md:font-extrabold md:text-xl text-[14px] relative bottom-2">{quiz[valueOfQuestion][1]}</span>
              </div>

              <div className="relative top-4 p-4">
                <input className="h-7 w-7 cursor-pointer" type="radio" value='b' checked={onchecked==='b'} onChange={HandleClick}></input>
                <span className="ml-2 md:font-extrabold md:text-xl text-[14px] relative bottom-2">{quiz[valueOfQuestion][2]}</span>
              </div>

              <div className="relative top-4 p-4">
                <input className="h-7 w-7 cursor-pointer" type="radio" value='c' checked={onchecked==='c'} onChange={HandleClick}></input>
                <span className="ml-2 md:font-extrabold md:text-xl text-[14px] relative bottom-2">{quiz[valueOfQuestion][3]}</span>
              </div>

              <div className="relative top-4 p-4">
                <input className="h-7 w-7 cursor-pointer" type="radio" value='d' checked={onchecked==='d'} onChange={HandleClick}></input>
                <span className="ml-2 md:font-extrabold md:text-xl text-[14px] relative bottom-2">{quiz[valueOfQuestion][4]}</span>
              </div>
             
             {final &&(
              <div className="absolute bg-white inset-0 bg-opacity-80 flex justify-center items-center">
              <div className="bg-gray-600 rounded-[20px] text-white flex flex-col justify-center items-center w-[350px] h-[300px] z-10">
                <h1 className="text-2xl font-extrabold">Your total score is : {totalScore}</h1>
                  <button className="absolute top-[400px] bg-red-500 text-white p-4 rounded-[10px] font-semibold" onClick={closeBtn}>Restart</button>
              </div>
              </div>
             
             )}
             
              <button className="bg-green-400 p-2 md:w-[200px] sm:w-[200px] flex justify-center items-center  relative md:top-[50px] md:left-[24%]  sm:top-[30px] sm:left-[24%] top-[13px] left-[15%] text-[20px] h-[30px] w-[150px] rounded-xl font-extrabold text-white md:text-3xl sm:text-2xl md:transition-transform duration-300 ease-in-out md:hover:scale-130 sm:hover:scale-130" onClick={changer}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Quiz
