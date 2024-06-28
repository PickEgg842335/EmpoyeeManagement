window.onload = function()
{
    let ObjInputEmpData = {
        ObjInput : {
            ObjPagelable : {
                ObjFirstPage : document.getElementById("idFirstPage"),
                ObjNewEmpPage : document.getElementById("idNewEmpPage"),
                ObjEmpInfPage : document.getElementById("idEmpInfPage"),
            },
            ObjDynaicShow : document.getElementById("idResDisplay"),
        },
    };

    for(let item in ObjInputEmpData.ObjInput.ObjPagelable)
    {
        ObjInputEmpData.ObjInput.ObjPagelable[item].addEventListener("mouseover", function(){
            ObjInputEmpData.ObjInput.ObjPagelable[item].style.backgroundColor = "rgb(255, 128, 0)";
            ObjInputEmpData.ObjInput.ObjPagelable[item].style.color = "black";
        });
        ObjInputEmpData.ObjInput.ObjPagelable[item].addEventListener("mouseout", function(){
            ObjInputEmpData.ObjInput.ObjPagelable[item].style.backgroundColor = null;
            ObjInputEmpData.ObjInput.ObjPagelable[item].style.color = null;
        });
        ObjInputEmpData.ObjInput.ObjPagelable[item].addEventListener("click", function(){
            sfGetPageFromServer(ObjInputEmpData, item);
        });
    }
}


function sfGetPageFromServer(ObjInf, item)
{
    let GoalUrl = '';

    switch(item)
    {
        case 'ObjFirstPage':
            GoalUrl = "./first";
            break;
        case 'ObjNewEmpPage':
            GoalUrl = "./newempform";
            break;
        case 'ObjEmpInfPage':
            GoalUrl = "./empInfform";
            break;
        default:
            GoalUrl = "./error";
            break;
    }

    fetch(GoalUrl)
        .then((response) => {
            return response.text();
    })
        .then((result) => {
            ObjInf.ObjInput.ObjDynaicShow.innerHTML = result;
            switch(item)
            {
                case 'ObjFirstPage':

                    break;
                case 'ObjNewEmpPage':
                    sfNewEmpFormInitialload(ObjInf.ObjInput.ObjDynaicShow);
                    break;
                case 'ObjEmpInfPage':
                    sfSearchEmpInitialload(ObjInf.ObjInput.ObjDynaicShow);
                    break;
                default:

                    break;
            }
    })    
        .catch((error) => {
    });
}

