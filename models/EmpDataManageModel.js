const { error } = require('console');
const csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const readline = require('readline');

class EmpDataModel {
    constructor() {
        this.EmpData = {
            "empno" : "No Data",
            "ename" : "No Data",
            "hiredate" : "No Data",
            "salary" : "No Data",
            "deptno" : "No Data",
            "title" : "No Data"
        }
    }

    clearEmpData() {
        for(let item in constructor.EmpData)
        {
            constructor.EmpData[item] = "No Data";
        }
    }

    getAll() {
        let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("models/DataBase/Emplist.csv");
        return(json);
    }

    getOne(empno) {
        let EmpData = new this.constructor().EmpData;
        let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("models/DataBase/Emplist.csv");
        for(let i = 0; i < json.length; i++)
        {
            if(json[i].empno == empno)
            {
                EmpData = json[i];
                break;
            }
        }

        return(EmpData);
    }

    appendOne(newempdata) {
        let EmpData  = new this.constructor().EmpData;
        this.WriteEmpFile(newempdata, EmpData);
        return(EmpData);
    }

    WriteEmpFile(newempdata, EmpData){
        let InputDataTemp = [newempdata.idEmpNo, newempdata.idEmpName, newempdata.idEmpHireDate, newempdata.idEmpSalary, newempdata.idEmpDepCode, newempdata.idEmpTitle];
        let SaveData = '';

        for(let i = 0; i < InputDataTemp.length; i++)
        {
            SaveData += InputDataTemp[i];
            if(i != (InputDataTemp.length - 1))
            {
                SaveData += ',';
            }
            else
            {
                SaveData += '\n';
            }
        }
        
        let index = 0;
        for(let item in EmpData)
        {
            EmpData[item] = InputDataTemp[index];
            index++;
        }

        console.log('start');
        fs.readFile('models/DataBase/Emplist.csv', function (err, data){
            if(err)
            {
                console.log('Read fail');
                fs.writeFile('models/DataBase/Emplist.csv','empno,ename,hiredate,salary,deptno,title\n',(err) => {
                    if(err)
                    {
                        throw err;
                    }
                    fs.appendFile('models/DataBase/Emplist.csv', SaveData, (err) => {
                        if(err)
                        {
                            throw err;
                        }
                    });
                });
            }
            else
            {
                console.log('Read Suff');
                fs.appendFile('models/DataBase/Emplist.csv', SaveData, (err) => {
                    if(err)
                    {
                        throw err;
                    }
                    console.log('Append Suff');
                });
            }
        });
    }
}

module.exports = new EmpDataModel;