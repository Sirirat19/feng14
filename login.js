function validateForm(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == null || username ==""){
        alert("กรุณากรอก Username");
        return false;
    }
    if (password == null || password ==""){
        alert("กรุณากรอก Password");
        return false;
    }
    alert("ยินดีต้อนรับเข้าสู่ระบบ");
    
}

let userSelectd = null;

function Read() {
    let data = {};
    data["txtName"] = document.getElementById("txtName").value;
    data["txtAddress"] = document.getElementById("txtAddress").value;
    data["txtTel"] = document.getElementById("txtTel").value;
    return data;
}

function FormSubmit()   {
    let formData = Read();
    if (userSelectd == null)    {
        createImageBitmap(formData);
    }
    else    {
        Update(formData);
    }
    ClearForm();
}

function Create(data)   {
    let table = document.getElementById("tblContact") .getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length)

    cell1 = newRow.insertCell(0);
    call1.innerHTML = data.txtName;
    cell2 = newRow.insertCell(1);
    call2.innerHTML = data.txtAddress;
    cell3 = newRow.insertCell(2);
    call3.innerHTML = data.txtTel;
    cell4 = newRow.insertCell(3);
    call4.innerHTML = <a onClick="Edit(this)">Edit</a>;
    cell5 = newRow.insertCell(4);
    call5.innerHTML = <a onClick="Delete(this)">Delete</a>;
}

function Edit(td)   {
    userSelectd = td.parentElement.parentElement;
    document.getElementById("txtName").value = userSelectd.cell[0].innerHTML;
    document.getElementById("txtAddress").value = userSelectd.cell[1].innerHTML;
    document.getElementById("txtTel").value = userSelectd.cell[2].innerHTML;
}

function Update(formData)   {
    userSelectd.cell[0].innerHTML = formData.txtName;
    userSelectd.cell[1].innerHTML = formData.txtAddress;
    userSelectd.cell[2].innerHTML = formData.txtTel;
}

function Delete(td) {
    if (confirm('คุณต้องการลบข้อมูล ?'))    {
        row = td.parentElement.parentElement;
        document.getElementById("tblContact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function ClearForm()    {
    document.getElementById("txtName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtTel").value = "";
    userSelectd = null;
}