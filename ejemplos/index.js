const getDataForm =() =>{
    const txtName =document.getElementById("txtName").value
    const txtemail =document.getElementById("txtEmail").value
    const txtDescription =document.getElementById("txtTask").value
    const acceptConditions =document.getElementById("acceptConditions").checked
    const typeA = document.getElementsById("typeA").checked
    const typeB = document.getElementsById("typeAB").checked
    const period = document.getElementById("dropsemestre").value
    //JSON{clave : valor}
    const data = {
        name: txtName,
        email: txtemail,
        descrition: txtDescription,
        acceptConditions: acceptConditions,
        typeA,
        typeB
    } 
    console.log(data);
}