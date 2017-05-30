/**
 * Created by devya on 5/29/2017.
 */
var rIndex,table = document.getElementById("tab");


function add() {
    //table = document.getElementById("tab");
var flag = validate(first, last, dob);
alert(flag);

    if (flag === true) {

        var newRow = table.insertRow(table.length),

            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            first = document.getElementById("firstName").value,
            last = document.getElementById("lastName").value,
            dob = document.getElementById("dob").value;


        cell1.innerHTML = first;
        cell2.innerHTML = last;
        cell3.innerHTML = dob;
        selectRow();
        //validate(first,last,dob);
        //clear();


        document.getElementById("feedback").innerHTML = "Your for m has been submitted successfully!";
    }

    else {

        document.getElementById("feedback").innerHTML = "Please enter all the required details!";
    }
}
function showtable(){

    var info = document.getElementById("information");
    info.style.display = 'block';

}


function validate(first,last,dob){
// var fir = document.getElementById("firstName").value;
    if(first === "" ){
        //alert("add properly");
        return false;

    }
    return true;


}


function selectRow(){
for(var i=1; i<table.rows.length; i++){
    table.rows[i].onclick = function(){

        rIndex = this.rowIndex;
        console.log(rIndex);
        document.getElementById("firstName").value = this.cells[0].innerHTML;
        document.getElementById("lastName").value = this.cells[1].innerHTML;
        document.getElementById("dob").value = this.cells[2].innerHTML;
    };

}

}


selectRow();

function edit(){
   // alert("hi")
    var f = document.getElementById("firstName").value,
        l = document.getElementById("lastName").value,
        d = document.getElementById("dob").value;

    table.rows[rIndex].cells[0].innerHTML = f;
    table.rows[rIndex].cells[1].innerHTML = l;
     table.rows[rIndex].cells[2].innerHTML = d;


}

// function clear() {
//      // alert("hii");
//               document.getElementById("firstName").value = " ";
//          document.getElementById("lastName").value = " ";
//             document.getElementById("dob").value = " ";
//
//
//                 }
//
