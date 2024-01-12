let boxes=document.querySelectorAll(".box");
let rebutton=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn1 =true //player x, player y

const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was clicked");
        
        if(turn1===true){
            //player X
            box.innerText="X";
            turn1=false;
        }
        else{
            //player O
            box.innerText="O";
            turn1=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const reset=()=>{
    turn1=true;
    enable();
    msgContainer.classList.add("hide");

};
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};





const checkWinner=()=>{
    for(let pattern of wins){
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" &&  pos2Val!=""&&  pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }




    }

};

newGamebtn.addEventListener("click", reset);
rebutton.addEventListener("click" , reset);










