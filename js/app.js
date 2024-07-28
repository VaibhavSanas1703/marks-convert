let totalMarks = document.getElementById("marks");
let outOfMarks = document.getElementById("outof");
let totalMrk = document.getElementById("total-marks");
let totalPrc = document.getElementById("total-p");
let btn = document.getElementById("btn");
let resultContainer = document.querySelector(".result");
let loader = document.getElementById("loader");

let checkMarks = (totalmarks, outofmarks) => {
  totalmarks = Number(totalmarks);
  outofmarks = Number(outofmarks);

  if (totalmarks == "") {
    alert("Please Enter Marks");
  } 
  else if (outofmarks == "" || outOfMarks == "") {
    alert("Please enter out of marks");
  } 
  else if (totalmarks > 600) {
   alert("Please enter valid marks");
 } 
 else if(totalmarks == 600 && outofmarks == 500){
   alert("out of marks is greater than your marks")
  }
  else {
   alert("Please Wait...")
    setTimeout(() => {
      resultContainer.classList.add("toggle-res")
      let totalM = `Total Marks : <strong>${totalmarks}</strong>`;
      totalMrk.innerHTML = totalM;

      let totalPer = totalmarks / outofmarks * 100;
      let fixed = totalPer.toFixed(2);
      let totalPercentage = `Total Percentage : <strong>${fixed}%</strong>`;
      totalPrc.innerHTML = totalPercentage;
    }, 1000);
  }
};

btn.addEventListener("click", () => {
  checkMarks(totalMarks.value, outOfMarks.value);
});
