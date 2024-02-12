function getData()
{
    fetch("http://localhost:4000/faculty",{
        headers:{
            "content-type":"application/json"
        }
        
    }).then(response=>{return response.json()}).then(data=>{
        var table
        table='<table border="5" width="100%"><tr><th>Faculty Name</th><th>Designation</th></tr>'
        for(var i=0;i<data.length;i++)
        {
            table+=`<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].details}</td>
                            
                            
                    </tr>`
             
            window.location.reload
        }      
        document.getElementById("result").innerHTML=table
    })
}