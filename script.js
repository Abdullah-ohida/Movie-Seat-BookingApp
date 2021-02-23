const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Check if className exist in class
const checkElementClassName = (className, event)=> event.target.classList.contains(className);

// Update total and count
const updateSelectedCount = ()=>{
    const selectedSeats = document.querySelectorAll(".row .selected");
    const selectedSeatCount = selectedSeats.length;

    count.textContent = selectedSeatCount;
    total.textContent = +selectedSeatCount * ticketPrice;
}

// Movie Select event
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


// Seat click event
container.addEventListener('click', e =>{
    if(checkElementClassName("seat", e) && !checkElementClassName("occupied", e)){
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
})

