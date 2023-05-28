let Person= ['가위','바위','보'];
let Victory = ['이겼음','졌음','비겼음'];
let Computer = Math.floor(Math.random()*3);

//모달창
const closeModal=()=>{
    let modal = document.getElementById('modal');
    let computerimg = document.getElementById( "computerResult");
    let aimg = document.getElementById("userResult");
    aimg.src='img/물음표.png';
    computerimg.src='img/물음표2.png';
    modal.style.display='none';
}

//가위바위보
const rockClick = async()=>{
        let aimg = document.getElementById("userResult");
        aimg.src='img/바위.png';
        RockSissors('바위');
}

const sissorsClick = ()=>{
    let aimg = document.getElementById("userResult");
    aimg.src='img/가위.png';
    RockSissors('가위');
}

const paperClick = ()=>{
    let aimg = document.getElementById("userResult");
    aimg.src='img/보.png';
   RockSissors('보');
}
//점수변수
let personValue=0;
let computerValue=0;

//리셋버튼
const reset=()=>{
    let result_num = document.getElementById('result_num')
    personValue =0;
    computerValue=0;
    result_num.innerHTML=`<h2 id="result_num">${personValue} : ${computerValue}</h2>`;
}



const RockSissors = (rsp)=>{
    let computerimg = document.getElementById( "computerResult");
    if(Computer===0){
        computerimg.src='img/가위.png';
    }else if(Computer===1){
        computerimg.src='img/바위.png';
    }else computerimg.src='img/보.png';

    if(rsp==='가위'&&Computer===2||rsp==='바위'&&Computer===0
    || rsp==='보'&&Computer===1){
        win(0)
    }else if(rsp==='가위'&&Computer===1||rsp==='바위'&&Computer===2
    ||rsp==='보'&&Computer===0){
        win(1)
    }else win(2);


    function win(n){
        let modal =  document.getElementById("modal");
        let result = document.getElementById('result');
        let result_num = document.getElementById('result_num')


        if(Victory[n]==='졌음') {
            computerValue=computerValue+1;
            window.localStorage.setItem('computer', JSON.stringify(computerValue));
        }else if(Victory[n]==='이겼음'){
            personValue=personValue+1;
            localStorage.setItem('person',JSON.stringify(personValue));
        }
        //어떻게 localStorage에서 값을 어떻게 가져오는거야.
        // let computerValue2= window.localStorage.getItem("computerValue");
        // let personValue2=JSON.parse(localStorage.getItem("personValue"));
    
        setTimeout(()=>  {
        modal.style.display='block';
        result.innerHTML = `<div id="result">${Victory[n]}</div>`;
        result_num.innerHTML=`<h2 id="result_num">${personValue} : ${computerValue}</h2>`;
    },700 )
    }
}