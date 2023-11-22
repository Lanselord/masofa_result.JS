var FootSped = 4;
var BikeSped = 21;
var CarSped = 70;
var PlaneSped = 800;

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elFootresult = document.querySelector(".foot");
var elBikeresult = document.querySelector(".bike");
var elCarresult = document.querySelector(".car");
var elPlaneresult = document.querySelector(".plane");

function Result() {

    elForm.addEventListener("submit", function(evt) {
        evt.preventDefault();
    
        var Input = elInput.value.trim()
    
        if(Input) {
            elFootresult.textContent = Input / FootSped
        }
        
        if(Input) {
            elBikeresult.textContent = Input / BikeSped
        }
        
        if(Input) {
            elCarresult.textContent = Input / CarSped
        }
        
        if(Input) {
            elPlaneresult.textContent = Input / PlaneSped
        }
    
        return
    })
}

Result()