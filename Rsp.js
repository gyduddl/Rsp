let Person= ['가위','바위','보'];
let Victory = ['이겼음','졌음','비겼음'];
let Computer = Math.floor(Math.random()*3);

const closeModal=()=>{
    let modal = document.getElementById('modal');
    let computerimg = document.getElementById( "computerResult");
    let aimg = document.getElementById("userResult");
    aimg.src='img/물음표 이미지.jpg';
    computerimg.src='img/물음표 이미지.jpg';
    modal.style.display='none';
}

const rockClick = async()=>{
        let aimg = document.getElementById("userResult");
        aimg.src='img/바위 이미지.jpg';
        RockSissors('바위');
}

const sissorsClick = ()=>{
    let aimg = document.getElementById("userResult");
    aimg.src='img/가위 이미지.jpg';
    RockSissors('가위');
}

const paperClick = ()=>{
    let aimg = document.getElementById("userResult");
    aimg.src='img/보 이미지.jpg';
   RockSissors('보');
}

let personValue=[0];
let computerValue=[0];

const RockSissors = (rsp)=>{
    let computerimg = document.getElementById( "computerResult");
    if(Computer===0){
        computerimg.src='img/가위 이미지.jpg';
    }else if(Computer===1){
        computerimg.src='img/바위 이미지.jpg';
    }else computerimg.src='img/보 이미지.jpg';

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
            computerValue=computerValue[0]+1;
            window.localStorage.setItem('computer', computerValue);
        }else{
            personValue=personValue[0]+1;
            localStorage.setItem('person',JSON.stringify(personValue));
        }
        
        let computerValue2= JSON.parse(window.localStorage.getItem("computerValue"))
        let personValue2=JSON.parse(window.localStorage.getItem("personValue"))
    
        console.log(window.localStorage.getItem("computerValue"))
        setTimeout(()=>  {
        modal.style.display='block';
        result.innerHTML = `<div id="result">${Victory[n]}</div>`;
        result_num.innerHTML=`<h2 id="result_num">${personValue2} : ${computerValue2}</h2>`;
    },700 )
    }
}