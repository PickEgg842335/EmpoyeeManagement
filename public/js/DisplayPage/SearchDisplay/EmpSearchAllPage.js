function sfSearchAllEmpInitialload(ObjDynaicShowL2)
{
    let ObjSearchAllEmpData = {
        ObjAllEmpTabletbodyRows : document.getElementById("idSearchEmpallTabletbody").rows,
    }
    let index = 0;


    for(let i = 0; i < ObjSearchAllEmpData.ObjAllEmpTabletbodyRows.length; i++)
    {
        ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].addEventListener("mouseover", function(){
            ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].style.backgroundColor = "rgb(255, 128, 0)";
            ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].style.fontWeight = "900";
        });
        ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].addEventListener("mouseout", function(){
            ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].style.backgroundColor = null;
            ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].style.fontWeight = null;
        });
        ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i].addEventListener("dblclick", function(){
            sfClickSearchEmpOneData(ObjSearchAllEmpData.ObjAllEmpTabletbodyRows[i], ObjDynaicShowL2);
        });
    }
}


function sfClickSearchEmpOneData(ObjTemp, ObjDynaicShowL2)
{
    let GoalUrl = "./empInfform/getone/" + ObjTemp.cells[0].innerHTML;
    fetch(GoalUrl)
        .then((response) => {
            return response.text();
    })
        .then((result) => {
            ObjTemp.style.backgroundColor = null;
            ObjTemp.style.fontWeight = null;
            ObjDynaicShowL2.LastHTMLPage = ObjDynaicShowL2.ElementId.innerHTML;
            ObjDynaicShowL2.ElementId.innerHTML = result;
            sfSearchOneEmpInitialload(ObjDynaicShowL2);
    })    
        .catch((error) => {

    });
}