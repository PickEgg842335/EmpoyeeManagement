function sfNewEmpResultInitialload(ObjDynaicShow)
{
    let ObjNewEmpSendResult = {
        ObjBackbtn : document.getElementById("idNewEmpResultBackBtn"),
    }

    ObjNewEmpSendResult.ObjBackbtn.addEventListener("click", function(){
        sfBacktoNewEmpFrom(ObjDynaicShow);
    });
}


function sfBacktoNewEmpFrom(ObjDynaicShow)
{
    let GoalUrl = "./newempform"

    fetch(GoalUrl, {
        method: 'GET'
    })
        .then((response) => {
            return(response.text());
        })
        .then((data) => {
            ObjDynaicShow.innerHTML = data;
            sfNewEmpFormInitialload(ObjDynaicShow);
        })
        .catch((error) => {
            console.log(error);
        });
}