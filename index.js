function setColorTime(id){
    var all = document.getElementsByClassName("location-btn");
    for(let i = 0; i < all.length; i++){
    all[i].style.backgroundColor = "#2B4A32"
    all[i].style.color = "#FFF"
    }
    var property = document.getElementById(id);
    localStorage.setItem("appointment_time", id);
    property.style.backgroundColor = "#35B151"
    property.style.color = "#000"
}

function setColorDates(id){
    var all = document.getElementsByClassName("days")[0].getElementsByClassName("active");
    for(let i = 0; i < all.length; i++){
      all[i].style.backgroundColor = "#2B4A32"
      all[i].style.color = "#FFF"
    }
    var property = document.getElementById(id);
    //My_appointment.date = id;
    //localStorage.getItem("appointment_date") == null ? []: JSON.parse(localStorage.getItem('appointment_date'));;
    localStorage.setItem("appointment_date", id);
    property.style.backgroundColor = "#35B151"
    property.style.color = "#000"
}


function MyAppointment(date, time) {
  this.date = date;
  this.time = time;
}



function updateAppInfo(){
  var appointment_date = localStorage.getItem("appointment_date");
  var appointment_time = localStorage.getItem("appointment_time");
  var my_appointment = new MyAppointment(appointment_date,appointment_time);
  var updated = localStorage.getItem('appointments') == null ? [] : JSON.parse(localStorage.getItem('appointments'));

  updated.push(my_appointment);
    var appointments = updated;
    localStorage.setItem('appointments', JSON.stringify(appointments));
    window.location.href = './last.html';
}

