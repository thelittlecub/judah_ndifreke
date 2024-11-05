const barOne = document.querySelector(".one");
const barTwo = document.querySelector(".two");
const barThree = document.querySelector(".three");

function load(){
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++;
        barOne.style.width = width + "%";
        barOne.innerHTML = width + "%";
      }
    }
    var secondWidth = 1;
    var secondId = setInterval(secondFrame, 25);
    function secondFrame() {
      if (secondWidth >= 65) {
        clearInterval(secondId);
      } else {
        secondWidth++;
        barTwo.style.width = secondWidth + "%";
        barTwo.innerHTML = secondWidth + "%";
      }
    }
    var thirdWidth = 1;
    var thirdId = setInterval(thirdFrame, 25);
    function thirdFrame() {
      if (thirdWidth >= 78) {
        clearInterval(thirdId);
      } else {
        thirdWidth++;
        barThree.style.width = thirdWidth + "%";
        barThree.innerHTML = thirdWidth + "%";
      }
    }
}

loadOptions = {
    threshold: 1,
    rootMargin: " 0px 0px -100px 0px",
}

const skillLoad = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else{
            load();
            skillLoad.unobserve(entry.target)
        }
    })
}, loadOptions)

skillLoad.observe(barOne)