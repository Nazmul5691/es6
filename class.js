class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log('garee cole na cole ne');
    }
}

const busGaree = new Vehicle('Pagla Hanif', 10000000)
console.log(busGaree);

// output
// Vehicle { name: 'Pagla Hanif', price: 10000000 }


class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}