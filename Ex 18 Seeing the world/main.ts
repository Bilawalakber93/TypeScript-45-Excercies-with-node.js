// Making a Array of Countries & Print its original order
let countriesToVisit: string[] = ["China", "Danmark", "Argentina", "Brazil"];
console.log("original Order:", countriesToVisit);

// Print the Array in Alphabetical Order without Modifying the Actual List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still its Orginal order
console.log("Still in original Order:", countriesToVisit);

// Print the Array in Reverse Order without modifiying the Actual Array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still its Orginal order
console.log("Still in original Order:", countriesToVisit);

// We have changed the original Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that its back to its original order
console.log("back to original Order:", countriesToVisit.reverse());

// Print the array show that its order has been changed in alphabetical order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the original Array order now in reverse order again
console.log("Original Array Reversed again:", countriesToVisit.reverse());
