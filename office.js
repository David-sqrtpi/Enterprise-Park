const Office = {};

function office(size, state, officeNumber){
    this.size = size;
    this.state = state;
    this.officeNumber = officeNumber;
}

function con(a, b){
    console.log(a+b);
}

var office = new office(1, 2, 3);

console.log(office);

Office.office = office;
Office.con = con;
module.exports = Office;