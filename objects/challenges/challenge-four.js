// Add seatParty and removeParty methods to the restaurant objecct
const restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return this.guestCapacity - this.guestCount > partySize;
    },
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: function (partySize) {
        guestCount -= partySize;
    }
}

console.log(restaurant.checkAvailability(5));