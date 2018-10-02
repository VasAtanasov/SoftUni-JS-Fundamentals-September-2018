function restaurantBill(array) {
    let bill = {products: [], sum: 0};
    for (let i = 0; i < array.length; i += 2) {
        bill.products.push(array[i]);
        bill.sum += Number(array[i + 1]);
    }

    console.log(`You purchased ${bill.products.join(", ")} for a total sum of ${bill.sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);