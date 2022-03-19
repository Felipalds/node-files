async function main(){
    const products = [
        {
            name: "palmas",
            price: 12.5
        },
        {
            name: "betyas",
            price: 11.5
        },
        {
            name: "123123",
            price: 21.5
        },
        {
            name: "asdf asf",
            price: 10
        }
    ]
    
    const ObjectsToCsv = require('objects-to-csv')
    
    const csv = new ObjectsToCsv(products)
    
    await csv.toDisk('./csv.csv', { append: true})
}

main()