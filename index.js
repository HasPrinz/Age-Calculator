const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === ""){
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const resultEl = document.getElementById("result")
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    console.log(age);
    resultEl.innerText = `Your age is ${age} ${age > 1? "years" : "year"} old`;


}

btnEl.addEventListener("click", calculateAge)