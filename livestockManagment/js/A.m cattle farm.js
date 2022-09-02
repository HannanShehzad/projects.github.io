document.getElementById("contForm").addEventListener('submit', function(e){
    e.preventDefault();

    var sr_no = document.getElementById("srNo").value;
    var cattleType = document.getElementById("cattleType").value;
    var cattleBreed = document.getElementById("cattleBreed").value;
    var cattleColor = document.getElementById("cattleColor").value;
    var gender = document.getElementById("gender").value;
    var dateOfBirth = document.getElementById("dateOfBirth").value;
    var milkProductionPerDay = document.getElementById("milkProductionPerDay").value;
    var weight = document.getElementById("weight").value;


    if(sr_no == "" || cattleType == "" || cattleBreed == "" || cattleColor == "" || gender == "" || dateOfBirth == "" || milkProductionPerDay == "" || weight == "")
    {
        alert("All Fields required !!");
    }
    else
    {
        let record = localStorage.getItem("amRecords");

        if(record == null)
        {
            let records = [];
            let rcd = { sr_no:sr_no, cattleType:cattleType,  cattleBreed:cattleBreed, cattleColor:cattleColor, gender:gender, dateOfBirth:dateOfBirth, milkProductionPerDay:milkProductionPerDay, weight:weight};
            records.push(rcd);
            localStorage.setItem("amRecords", JSON.stringify(records));
            alert("Information Added Successfully !!");
            document.getElementById("contForm").reset();
            getData();
        }
        else
        {
            let pRecord = JSON.parse(record);
            let oldRecord = pRecord.find((item) => item.sr_no == sr_no);

            if(oldRecord)
            {
                pRecord.map((item) => {
                        
                    if(item.sr_no == oldRecord.sr_no)
                    {
                        item.cattleType = cattleType;
                        item.cattleBreed = cattleBreed;
                        item.cattleColor = cattleColor;
                        item.gender = gender;
                        item.dateOfBirth = dateOfBirth;
                        item.milkProductionPerDay = milkProductionPerDay;
                        item.weight = weight;
                    }

                });
                localStorage.setItem("amRecords", JSON.stringify(pRecord));
                alert("Information Updated Successfully !!");
                document.getElementById("contForm").reset();
                getData();
            }
            else
            {
                let rcd = { sr_no:sr_no, cattleType:cattleType,  cattleBreed:cattleBreed, cattleColor:cattleColor, gender:gender, dateOfBirth:dateOfBirth, milkProductionPerDay:milkProductionPerDay, weight:weight};
                pRecord.push(rcd);
                localStorage.setItem("amRecords", JSON.stringify(pRecord));
                alert("Information Added Successfully !!");
                document.getElementById("contForm").reset();
                getData();
            }
        }
    }


});


function getData()
{
    let cont = JSON.parse(localStorage.getItem("amRecords"));
    var html = '';
    for(var a = 0; a < cont.length; a++)
    {
        html +="<tr>";
        html +="<td>"+ cont[a].sr_no +"</td>";
        html +="<td>"+ cont[a].cattleType +"</td>";
        html +="<td>"+cont[a].cattleBreed+"</td>";
        html +="<td>"+cont[a].cattleColor+"</td>";
        html +="<td>"+cont[a].gender+"</td>";
        html +="<td>"+cont[a].dateOfBirth+"</td>";
        html +="<td>"+cont[a].milkProductionPerDay+"</td>";
        html +="<td>"+cont[a].weight+"</td>";
        html +="<td><button onclick='editRecord("+cont[a].sr_no+")'style='border: none;background-color: #1aace7;color: white;height: 34px;width: 73px;'>Edit</button></td>";
        html +="<td><button onclick='deleteRecord("+cont[a].sr_no+")'style='border: none;background-color: #e24348;color: white;height: 34px;width: 73px;'>Delete</button></td>";
        html +="</tr>";
    }
    document.getElementById("tbody").innerHTML = html;
}

getData();


function editRecord(id)
{
    let record = JSON.parse(localStorage.getItem("amRecords"));
         
    record.find((item) => {
                        
        if(item.sr_no == id)
        {
            document.getElementById("srNo").value = id;
            document.getElementById("cattleType").value = item.cattleType;
            document.getElementById("cattleBreed").value = item.cattleBreed;
            document.getElementById("cattleColor").value = item.cattleColor;
            document.getElementById("gender").value = item.gender;
            document.getElementById("dateOfBirth").value = item.dateOfBirth;
            document.getElementById("milkProductionPerDay").value = item.milkProductionPerDay;
            document.getElementById("weight").value = item.weight;
        }

    });
}


function deleteRecord(id)
{
    let record = JSON.parse(localStorage.getItem("amRecords"));
    let newRecord = record.filter((item) => item.sr_no != id);
    localStorage.setItem("amRecords", JSON.stringify(newRecord));
    getData();
}