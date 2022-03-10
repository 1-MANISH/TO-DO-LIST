
function AddItem(){

    // getting activity name
    var actName = document.input_text.activity;

    // getting timing for activity
    var timing = document.input_text.timing;

    // getting hour for activity
    var hour = document.input_text.hours;


    // getting contain of table
    var table_item = document.getElementById("tableItems");
    
    if(actName.value != "" && timing.value!="" && hour.value !=""){

        // creating tr tag
        tr_tag = document.createElement("tr");

        // creating td tags
        td_tag1 = document.createElement("td");
        td_tag2 = document.createElement("td");
        td_tag3 = document.createElement("td");
        td_tag4 = document.createElement("td");
        td_tag5 = document.createElement("td");
        td_tag6 = document.createElement("td");

        // appeding value's to td tags

        td_tag1.appendChild(document.createTextNode(table_item.childElementCount))

        td_tag2.appendChild(document.createTextNode(actName.value));
        td_tag3.appendChild(document.createTextNode(timing.value));
        td_tag4.appendChild(document.createTextNode(hour.value));

        // for button delete & finished

        // creating buttons

        btn1 = document.createElement("button");
        btn1.className = "btn1 bt1";
        btn2 = document.createElement("button");
        btn2.className = "btn2 bt2";
        btn1.appendChild(document.createTextNode("Delete"));
        btn2.appendChild(document.createTextNode("Finished"));

        td_tag5.appendChild(btn1);
        td_tag6.appendChild(btn2);


        // appedning td tags to tr tag

        tr_tag.appendChild(td_tag1);
        tr_tag.appendChild(td_tag2);
        tr_tag.appendChild(td_tag3);
        tr_tag.appendChild(td_tag4);
        tr_tag.appendChild(td_tag5);
        tr_tag.appendChild(td_tag6);

        // appeding tr tag to table

        table_item.appendChild(tr_tag);


        // clear input box

        actName.value = "";
        timing.value = "";
        hour.value = "";

        btn1.onclick = function(){
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }
        btn2.onclick = function(){
            this.parentNode.parentNode.style.backgroundColor = "lightskyblue";
        }

    }else{
        alert("Enter all required filled !");
    }

}

// fxn to change background
function bgchange(ele){

    document.getElementById("body").style.backgroundColor = "black";

    document.getElementById("bgbtn2").style.display = "block";

    document.getElementById("head").style.color="white";

    ele.style.display = "none";
}
function bgchange2(ele){

    document.getElementById("body").style.backgroundColor = "white";

    document.getElementById("bgbtn").style.display = "block";

    document.getElementById("head").style.color="black";

    ele.style.display = "none";
}