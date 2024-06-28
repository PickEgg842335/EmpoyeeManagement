function sfSearchEmpInitialload(ObjDynaicShow)
{
    let ObjSearchEmpData = {
        ObjSumitAllbtn : document.getElementById("idSearchAll"),
        ObjInputEmpNo : document.getElementById("idSearchEmpNo"),
        ObjSumitOnebtn : document.getElementById("idSearchOne"),
        ObjOutputDisplay : {
            ElementId : document.getElementById("idOutputSearchMsg"),
            LastHTMLPage : "",
        }
    }
    
    ObjSearchEmpData.ObjSumitAllbtn.addEventListener("click", function(){
        sfGetSearchEmpAllData(ObjSearchEmpData);
    });

    ObjSearchEmpData.ObjInputEmpNo.addEventListener("change", function(){
        sfGetInputSearchEmpNo(ObjSearchEmpData);
    });

    ObjSearchEmpData.ObjInputEmpNo.addEventListener("keyup", function(e){
        sfChkInputKeyupEmpNo(ObjSearchEmpData, e);
    });

    ObjSearchEmpData.ObjSumitOnebtn.addEventListener("click", function(){
        sfGetSearchEmpOneData(ObjSearchEmpData);
    });
}


function sfGetSearchEmpAllData(ObjTemp)
{
    let GoalUrl = "./empInfform/getall";

    fetch(GoalUrl)
        .then((response) => {
            return response.text();
    })
        .then((result) => {
            ObjTemp.ObjOutputDisplay.ElementId.innerHTML = result;
            sfSearchAllEmpInitialload(ObjTemp.ObjOutputDisplay);
    })    
        .catch((error) => {

    });
}


function sfGetInputSearchEmpNo(ObjInputTemp)
{
    let InputEmpNo = Number(ObjInputTemp.ObjInputEmpNo.value);
    let InputEmpNoMin = Number(ObjInputTemp.ObjInputEmpNo.min);
    let InputEmpNoMax = Number(ObjInputTemp.ObjInputEmpNo.max);

    if(InputEmpNo < InputEmpNoMin)
    {
        ObjInputTemp.ObjSumitOnebtn.disabled = true;
    }
    else if(InputEmpNo > InputEmpNoMax)
    {
        ObjInputTemp.ObjSumitOnebtn.disabled = true;
    }
    else
    {
        ObjInputTemp.ObjSumitOnebtn.disabled = false;
    }
    ObjInputTemp.ObjInputEmpNo.value = String(Math.floor(InputEmpNo));
}


function sfChkInputKeyupEmpNo(ObjInputTemp, e)
{
    let InputEmpNo = Number(ObjInputTemp.ObjInputEmpNo.value);
    let InputEmpNoMin = Number(ObjInputTemp.ObjInputEmpNo.min);
    let InputEmpNoMax = Number(ObjInputTemp.ObjInputEmpNo.max);

    if((InputEmpNo >=  InputEmpNoMin) && (InputEmpNo <=  InputEmpNoMax))
    {
        ObjInputTemp.ObjSumitOnebtn.disabled = false;
        if(e.key == "Enter")
        {
            ObjInputTemp.ObjInputEmpNo.value = String(Math.floor(InputEmpNo));
            ObjInputTemp.ObjSumitOnebtn.click();
        }
    }
    else
    {
        ObjInputTemp.ObjSumitOnebtn.disabled = true;
    }
}


function sfGetSearchEmpOneData(ObjTemp)
{
    ObjTemp.ObjInputEmpNo.value = String(Math.floor(ObjTemp.ObjInputEmpNo.valueAsNumber));

    let GoalUrl = "./empInfform/getone/" + ObjTemp.ObjInputEmpNo.value;

    fetch(GoalUrl)
        .then((response) => {
            return response.text();
    })
        .then((result) => {
            ObjTemp.ObjOutputDisplay.LastHTMLPage = ObjTemp.ObjOutputDisplay.ElementId.innerHTML;
            ObjTemp.ObjOutputDisplay.ElementId.innerHTML = result;
            sfSearchOneEmpInitialload(ObjTemp.ObjOutputDisplay);
    })    
        .catch((error) => {

    });
}