/*
 calling elements to the dom
 */
//Header Elements
let $headerDiv= document.querySelector(".headerDiv");
let $header= document.querySelector("h1");
let $headerIntro= document.querySelector(".headerIntro");
//Input Elements
let $inputMainParent= document.querySelector(".inputMainParent");
let $inputLabel= document.querySelector(".inputLabel");
let $inputDirectParent= document.querySelector(".inputDirectParent");
let $input= document.querySelector(".input");
let $inputBtn= document.querySelector(".inputBtn");
let $inputBtn2= document.querySelector(".inputBtn2");
let $inputSection = document.querySelector("#inputSection");
//Warning Elements
let $warningMsg= document.querySelector(".warningMsg");
let $warningIcon= document.querySelector("#icon")
//Output Elements
let $outputUl= document.querySelector(".output");
let $fulfilledUl= document.querySelector("#fulfilledSection .fulfilled");
/*
End of calling elements
*/

/*
Coding Input Section
*/
$inputBtn.addEventListener("click", clicked);
function clicked(){
    $inputBtn.style.color="rgb(37, 187, 37)";
    $inputBtn.style.backgroundColor="white";
    if($input.value === ""){
        warningFunc();
    }else{
        outputFunc();
    }
}
function warningFunc(){
    $warningMsg.style.display="none"; //This Warning Msg Was originally created to replace the icon but i decided to use the icon instead
    $warningIcon.style.display="inline-flex";
    $input.style.border="2px solid red"
    $inputLabel.style.color="red";
    $inputLabel.style.fontStyle="italic";
    $inputLabel.innerHTML=("You Must Enter a Task First");
    $inputSection.style.border ="2px solid red";
    
}
function outputFunc(){
    let checkBox= document.createElement("input");
    checkBox.type ="checkbox";
    let outputLabel = document.createElement("label");
    let newLi = document.createElement("li");
    $outputUl.appendChild(newLi);
    newLi.appendChild(outputLabel);
    newLi.insertBefore(checkBox,outputLabel);
    outputLabel.innerHTML=$input.value;
    newLi.classList.add("outputLi");
    outputLabel.classList.add("outputLabel");
    checkBox.style.cursor="pointer"
    $warningIcon.style.display="none";
    $input.value="";
    checkBox.addEventListener("click",fulfilledFunc);
    function fulfilledFunc(){
        if (checkBox.checked){
            let liX = document.createElement("li");
            let labelX = document.createElement("label");
            let checkX= document.createElement("input");
            checkX.type="checkbox";
            $fulfilledUl.appendChild(liX);
            liX.appendChild(labelX);
            liX.insertBefore(checkX, labelX);
            liX.classList.add("liX");
            labelX.classList.add("labelX");  
            labelX.innerHTML=outputLabel.innerHTML;
            checkBox.removeEventListener("click", fulfilledFunc);
            checkX.addEventListener("click", permRemoval);
            function permRemoval(){
                if(checkX.checked){
                    newLi.style.display="none";
                    liX.style.display="none";
                }
            }
        }   
    }
}

$input.addEventListener("keypress", pressed);
function pressed(){
    $inputBtn.style.backgroundColor="rgb(37, 187, 37)";
    $inputBtn.style.color="white";
    $warningMsg.style.display="none";
    $input.style.border="1px solid black";
    $inputLabel.innerHTML=("Type your Task then press Enter");
    $inputLabel.style.color="black";
    $warningIcon.style.display="none";
    $inputLabel.style.fontStyle="normal";
    $inputSection.style.border="3px solid rgb(54, 54, 184";
}
$inputBtn.addEventListener("mouseover",hovered);
function hovered(){
$inputBtn.style.fontSize="40px";
}
$inputBtn.addEventListener("mouseout",unhovered);
function unhovered(){
$inputBtn.style.fontSize="30px";
}
$inputBtn.addEventListener("focus",outlineNone);
function outlineNone(){
    $inputBtn.style.outline="none";
}
//some style
$inputLabel.style.fontWeight="bold";
$headerIntro.style.fontWeight="bold";
$headerIntro.style.lineHeight="2";

$inputBtn2.addEventListener("click",clicked2);
function clicked2(){
    $input.value="";
}
$inputBtn2.addEventListener("mouseover",hovered2);
function hovered2(){
$inputBtn2.style.fontSize="40px";
}
$inputBtn2.addEventListener("mouseout",unhovered2);
function unhovered2(){
$inputBtn2.style.fontSize="30px";
}
$inputBtn2.addEventListener("focus",outlineNone2);
function outlineNone2(){
    $inputBtn2.style.outline="none";
}
