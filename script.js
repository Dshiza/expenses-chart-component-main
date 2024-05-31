let mon = document.querySelector("#q1 td");
let tue = document.querySelector("#q2 td");
let wed = document.querySelector("#q3 td");
let thu = document.querySelector("#q4 td");
let fri = document.querySelector("#q5 td");
let sat = document.querySelector("#q6 td");
let sun = document.querySelector("#q7 td");
mon.style.height = "50px";
tue.style.height = "60px";
wed.style.height = "80px";
thu.style.height = "150px";
sat.style.height = "100px";
console.log(mon);

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    let max = 0;
    let day = [mon, tue, wed, thu, fri, sat, sun];
    let num = 0;
    for (let i = 0; i < json.length; i++) {
      console.log(json[i]);
      day[i].style.setProperty("--td-background-color", "#ff9985");
      if (max < json[i].amount) {
        max = json[i].amount;
        //day[i] = json[i].day;
        // day[i].style.setProperty("--td-background-color", "#ff1122");
        num = i;
      }
    }
    day[num].style.setProperty("--td-background-color", "#b3e0e5");

    for (let i = 0; i < json.length; i++) {
      if (json[i].day == "mon") {
        document.querySelector("#q1 p").innerHTML = "$" + json[i].amount;
        mon.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "tue") {
        document.querySelector("#q2 p").innerHTML = "$" + json[i].amount;
        tue.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "wed") {
        document.querySelector("#q3 p").innerHTML = "$" + json[i].amount;
        wed.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "thu") {
        document.querySelector("#q4 p").innerHTML = "$" + json[i].amount;
        thu.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "fri") {
        document.querySelector("#q5 p").innerHTML = "$" + json[i].amount;
        fri.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "sat") {
        document.querySelector("#q6 p").innerHTML = "$" + json[i].amount;
        sat.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
      if (json[i].day == "sun") {
        document.querySelector("#q7 p").innerHTML = "$" + json[i].amount;
        sun.style.height = 1.5 * ((json[i].amount * 100) / max) + "px";
      }
    }
  });
