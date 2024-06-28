function sfNewEmpFormInitialload(ObjDynaicShow)
{
    let ObjNewEmpData = {
        ObjEmpInput : {
            ObjInputEmpNo : document.getElementById("idEmpNo"),
            ObjInputEmpName : document.getElementById("idEmpName"),
            ObjInputEmpHireDate : document.getElementById("idEmpHireDate"),
            ObjInputEmpSalary : document.getElementById("idEmpSalary"),
            ObjInputEmpDepCode : document.getElementById("idEmpDepCode"),
            ObjInputEmpTitle : document.getElementById("idEmpTitle"),
        },
        ObjSumitbtn : document.getElementById("idInputbtn"),
        ObjNewEmpDynaicOut : document.getElementById("idNewEmp"),
    }
    
    for(let item in ObjNewEmpData.ObjEmpInput)
    {
        ObjNewEmpData.ObjEmpInput[item].addEventListener("change", function(){
            sfGetInputValueCheck(ObjNewEmpData);
        });
    }

    ObjNewEmpData.ObjSumitbtn.addEventListener("click", function(){
        sfSubmitDataToServer(ObjNewEmpData, ObjDynaicShow);
    });
}


function sfGetInputValueCheck(ObjInputTemp)
{
    let ObjInputData = ObjInputTemp.ObjEmpInput;
    let boolInputChkFlag = false;

    for(let item in ObjInputData)
    {
        if(ObjInputData[item].value != undefined)
        {
            if((ObjInputData[item].value == null) || (ObjInputData[item].value == '0'))
            {
                boolInputChkFlag = true;
            }
        }
        else
        {
            boolInputChkFlag = true;
        }
    }

    ObjInputTemp.ObjSumitbtn.disabled = boolInputChkFlag;
}


function sfSubmitDataToServer(ObjInputTemp, ObjDynaicShow)
{
    let GoalUrl = "./newempform/AppendEmp"
    const data = new URLSearchParams();
    for(let item in ObjInputTemp.ObjEmpInput)
    {
        data.append(ObjInputTemp.ObjEmpInput[item].name, ObjInputTemp.ObjEmpInput[item].value);
    }

    fetch(GoalUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data
    })
        .then((response) => {
            return(response.text());
        })
        .then((data) => {
            console.log(data);
            for(let item in ObjInputTemp.ObjEmpInput)
            {
                ObjInputTemp.ObjEmpInput[item].value = '';
            }
            ObjDynaicShow.innerHTML = data;
            sfNewEmpResultInitialload(ObjDynaicShow);
        })
        .catch((error) => {
            console.log(error);
        });
}

// const data = new URLSearchParams();
// data.append('name', 'John Doe');
// data.append('age', '30');

// fetch('/submit', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   body: data
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));
