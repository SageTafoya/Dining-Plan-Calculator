
function getDays(inDate) {

    const today = new Date();
    console.log(today);
    console.log(inDate);

    const calcDifference = inDate - today;

    const diffOfDays = Math.floor(calcDifference /  (1000 * 60 * 60 * 24))+2;

    console.log(diffOfDays);
    return diffOfDays;
}

function removeCommas(inNum){

    const numlen = inNum.length;

    let fixNum = "";

    for(i = 0; i < numlen; i++)
    {
        if(inNum[i] == ',' || inNum[i] == '$')
        {
            console.log("zoinks")
        }
        else
        {
            fixNum = fixNum + inNum[i];
        }
        
    }
    console.log(fixNum);
    return fixNum;
}

document.addEventListener('DOMContentLoaded', () =>{
                
    console.log("docloaded");
    //result data
    const resultArea = document.getElementById("Result");

    
    // const endDate = document.getElementById("endDate");


    //form entirety
    const form = document.getElementById("Mathbox");

    console.log("test");

    form.addEventListener("submit", (event) => {


        console.log("hello");

        event.preventDefault();

        // get entered form data
        const formData = new FormData(form);

        const endDate = formData.get("endDate");

        const foodBalance2 = formData.get("foodbal");


        console.log(foodBalance2);

        const foodBalance = removeCommas(foodBalance2);

        console.log("endDate: " + endDate);

        const selectedDate  = new Date(endDate);
        
        const dateDifference = getDays(selectedDate);



        const dailyAmount = foodBalance / dateDifference;

        console.log(dailyAmount);


        resultArea.innerHTML = "<h1>"+dailyAmount.toFixed(2)+" $ Per Day</h1>";

    });

});


