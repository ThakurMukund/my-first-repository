//global variable to identify whether operation is insert or update
var selectedRow = null;

//Main method 
function onformSubmit(){
    if(validate()){
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
    else 
        updateRecord(formData);
    resetform();
    }
}

//functions called in main method
function readFormData(){
    var formData = {};
    formData["ProductID"] = document.getElementById("ProductID").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["Category"] = document.getElementById("Category").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("productlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ProductID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ProductName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Category;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Price;
    cell5= newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetform(){
    document.getElementById("ProductID").value="";
    document.getElementById("ProductName").value="";
    document.getElementById("Category").value="";
    document.getElementById("Price").value="";
    selectedRow = null;
}

function onEdit(td){
    // parentElement for selecting same row and data in that row, corresponding row element
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ProductID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Category").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductID;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.Category;
    selectedRow.cells[3].innerHTML = formData.Price;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
    // parentElement for selecting same row and data in that row, corresponding row element
    row = td.parentElement.parentElement;
    document.getElementById("productlist").deleteRow(row.rowIndex);
    resetform();
    }
}

function validate(){
    isValid = true;
    if(document.getElementById("ProductID").value == ""){
        isValid = false;
        document.getElementById("ProductIDError").classList.remove("hide");
    }
    else {
    isValid = true;
    if(!document.getElementById("ProductIDError").classList.contains("hide"))
    document.getElementById("ProductIDError").classList.add("hide");
    }

    if(document.getElementById("ProductName").value == ""){
        isValid = false;
        document.getElementById("ProductNameError").classList.remove("hide");
    }
    else {
    isValid = true;
    if(!document.getElementById("ProductNameError").classList.contains("hide"))
    document.getElementById("ProductNameError").classList.add("hide");
    }

    if(document.getElementById("Category").value == ""){
        isValid = false;
        document.getElementById("CategoryError").classList.remove("hide");
    }
    else {
    isValid = true;
    if(!document.getElementById("CategoryError").classList.contains("hide"))
    document.getElementById("CategoryError").classList.add("hide");
    }

    if(document.getElementById("Price").value == ""){
        isValid = false;
        document.getElementById("PriceError").classList.remove("hide");
    }
    else {
    isValid = true;
    if(!document.getElementById("PriceError").classList.contains("hide"))
    document.getElementById("PriceError").classList.add("hide");
    }
    return isValid;
}