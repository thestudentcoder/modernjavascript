// A method is an object property whose value is a function
// Inside of our methods we have access to this.  This references the object the method is defined on.
// We can also console.log this to see all the object properties.
const restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return this.guestCapacity - this.guestCount > partySize;
    }
}

console.log(restaurant.checkAvailability(5));