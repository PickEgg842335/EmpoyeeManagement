function sfSearchOneEmpInitialload(ObjDynaicShowL2)
{
    let ObjSearchOneEmpData = {
        ObjBackLastPagebtn : document.getElementById("idBackLastPageBtn"),
    }
    ObjSearchOneEmpData.ObjBackLastPagebtn.addEventListener("click", function(){
        sfBackLastPage(ObjDynaicShowL2);
    });
}


function sfBackLastPage(ObjDynaicShowL2)
{
    ObjDynaicShowL2.ElementId.innerHTML = ObjDynaicShowL2.LastHTMLPage;
    sfSearchAllEmpInitialload(ObjDynaicShowL2);
}