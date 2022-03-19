async function main(){

    const fs = require('fs')
    const path = require('path')
    const csv = require('fast-csv')

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

    const file = fs.createWriteStream(path.resolve(__dirname, 'assets', 'fast.csv'))

    const csvStream = csv.format({ headers: true })

    csvStream.pipe(file).on('end', () => process.exit())

    products.forEach(p => {
        csvStream.write({nome: p.name, preco: p.price})
    })

    csvStream.end()

}

main()