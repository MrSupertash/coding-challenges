// Description
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// Solution

function mango(quantity, price){
    // initializing our total units to be paid variable
    let totalPaidUnits = 0;
    
    // calculating any remainder of fully priced mangoes
    totalPaidUnits += quantity % 3;
    
    // diving the non-remainder amount by 3, then times to for the discount
    totalPaidUnits += ((quantity - totalPaidUnits) / 3) * 2;
    
    // calculate and return priceToBePaid
    let priceToBePaid = totalPaidUnits * price;
    return priceToBePaid;
  }