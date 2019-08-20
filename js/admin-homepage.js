let allowedCourse = [
    {
        name: 'J2EE & its Frameworks',
        te: 'Rs.200000',
        commision: '20%',
        id: 1
    },
    {
        name: 'Database Administrator',
        te: 'Rs.100000',
        commision: '4%',
        id: 2
    }
    , {
        name: 'Cloud Computing',
        te: 'Rs.300000',
        commision: '5%',
        id: 3
    }

    , {
        name: 'Microsoft Technologies',
        te: 'Rs.240000',
        commision: '6%',
        id: 4
    }
    , {
        name: 'Animation & Graphics', te: 'Rs.2000',
        commision: '9%',
        id: 5
    }

    , {
        name: 'Software Quality Testing', te: 'Rs.567000',
        commision: '7%',
        id: 6
    }
    , {
        name: 'SAS', te: 'Rs.700000',
        commision: '5%',
        id: 7
    }
    , {
        name: 'Python', te: 'Rs.56566',
        commision: '6%',
        id: 8
    }
    , {
        name: 'JavaScript', te: 'Rs.98600',
        commision: '12%',
        id: 9
    }
    , {
        name: 'jQuery', te: 'Rs.64400',
        commision: '6%',
        id: 10
    }
    , {
        name: 'React.js', te: 'Rs.80000',
        commision: '5%',
        id: 11
    }
    , {
        name: 'AngularJS', te: 'Rs.78000',
        commision: '11%',
        id: 12
    }
    , {
        name: 'HTML, CSS, Bootstrap', te: 'Rs.870000',
        commision: '8%',
        id: 13
    }];

// let moviesFromLocalStorage = localStorage.getItem('movies');
// if (moviesFromLocalStorage === null) {
//     document.location.reload(true);
//     localStorage.setItem("movies", JSON.stringify(movies));
// }
// moviesFromLocalStorage = localStorage.getItem('movies');
// moviesFromLocalStorage = JSON.parse(moviesFromLocalStorage);


const showallowcourse = function (allowedCourse) {
    let tbl = document.querySelector("#admin-manageCourses");

    allowedCourse.forEach(function (course) {

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent=course.name;
        td1.style.textAlign="center";
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent=course.te;
        td2.style.textAlign="center";
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent=course.commision;
        td3.style.textAlign="center";
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        let edit=document.createElement('a');
        edit.textContent="Edit";
        edit.setAttribute('class','btn btn-lg btn-primary text-white text-center');
        edit.setAttribute('id','admin-dynamic-edit-commision');
        edit.setAttribute('onclick','editCommision(this)');
        // edit.href="#admin-pills-payment"
        td4.appendChild(edit);
        td4.style.textAlign="center";
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        let remov=document.createElement('input');
        remov.setAttribute('type','button');
        remov.setAttribute('value','Remove');
        remov.setAttribute('class','btn btn-lg btn-danger text-white text-center');
        remov.setAttribute('id','admin-dynamic-course-remove');
        remov.setAttribute('onclick','removethsRow(this)');
        td5.appendChild(remov);
        td5.style.textAlign="center";
        tr.appendChild(td5);

        tbl.appendChild(tr);

    });
}
showallowcourse(allowedCourse);


function editCommision(){

}

function removethsRow(thsbutton){
    if(confirm("You are attempting to permanently delete a course. Are you sure?")){
        let tbdy=document.getElementById("admin-manageCourses");
        // console.log(thsbutton.parentNode.parentNode.rowIndex-1);
        tbdy.deleteRow(thsbutton.parentNode.parentNode.rowIndex-1);  
    }
    else{
        return false;
    }
}

document.getElementById("add-new-course-by-admin").addEventListener("click",function(){

    let tbody=document.getElementById("admin-manageCourses");    

    let NewRow = tbody.insertRow(1); 
    
    for(let i=0;i<5;i++){
        let td=document.createElement('td');
        td=NewRow.insertCell(i);

        if(i===3){
            let edt=document.createElement('a');
            edt.textContent="Edit";
            edt.setAttribute('class','btn btn-lg btn-primary text-white text-center');
            edt.setAttribute('id','admin-dynamic-commision-edit');
            // edt.setAttribute('onclick','editthsRow(this)');
            // edit.href="../"
            td.appendChild(edt);

        }
        else if(i===4){
            let remo=document.createElement('input');
            remo.setAttribute('type','button');
            remo.setAttribute('value','Remove');
            remo.setAttribute('class','btn btn-lg btn-danger text-white text-center');
            remo.setAttribute('id','admin-dynamic-remove-course');
            remo.setAttribute('onclick','removethsRow(this)');
            td.appendChild(remo);
        }
        else{
            let ele=document.createElement('input');
            ele.setAttribute('type','text');
            ele.setAttribute('class','text-center');
            ele.setAttribute('value','');
            td.appendChild(ele);
        }
    }
   
});