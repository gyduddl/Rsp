
let strArray = ['가위', '바위', '보'];
let [result] = strArray.sort(() => 0.5 - Math.random()); //배열을 무작위로 (재)배열하여 [0]의 인덱스를 result에 넣어줌
let Computer= [result].join();


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
    [result] = strArray.sort(() => 0.5 - Math.random());
    Computer= [result].join();
    console.log(Computer)
        let aimg = document.getElementById("userResult");
        aimg.src='img/바위.png';
        RockSissors('바위');
}

const sissorsClick = ()=>{
    [result] = strArray.sort(() => 0.5 - Math.random());
    Computer= [result].join();
    let aimg = document.getElementById("userResult");
    aimg.src='img/가위.png';
    RockSissors('가위');
}

const paperClick = ()=>{
    [result] = strArray.sort(() => 0.5 - Math.random());
    Computer= [result].join();
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
    localStorage.removeItem('computer');
    localStorage.removeItem('person');
    result_num.innerHTML=`<h2 id="result_num">${personValue} : ${computerValue}</h2>`;
}



const RockSissors = (rsp)=>{
    let computerimg = document.getElementById( "computerResult");
    if(Computer==='가위'){
        computerimg.src='img/가위.png';
    }else if(Computer==='바위'){
        computerimg.src='img/바위.png';
    }else computerimg.src='img/보.png';

    if(rsp==='가위'&&Computer==='보'||rsp==='바위'&&Computer==='가위'
    || rsp==='보'&&Computer==='바위'){
        win('승리') 
    }else if(rsp==='가위'&&Computer==='바위'||rsp==='바위'&&Computer==='보'
    ||rsp==='보'&&Computer==='가위'){
        win('패배')
    }else win('비김');


    function win(n){
        let modal =  document.getElementById("modal");
        let result = document.getElementById('result');
        let result_num = document.getElementById('result_num')


        if(n==='패배') {
            computerValue=computerValue+1;
            window.localStorage.setItem('computer', JSON.stringify(computerValue));//로컬스토리에 저장하여 새로고침시 상태값유지하도록 설정
        }else if(n==='승리'){
            personValue=personValue+1;
            localStorage.setItem('person',JSON.stringify(personValue));
        }
        let computerValue2= window.localStorage.getItem('computer');
        let personValue2=JSON.parse(localStorage.getItem('person'));
    
        setTimeout(()=>  {
        modal.style.display='block';
        result.innerHTML = `<div id="result">${n}</div>`;
        result_num.innerHTML=`<h2 id="result_num">${personValue2||0} : ${computerValue2||0}</h2>`;
    },700 )
    }
}
