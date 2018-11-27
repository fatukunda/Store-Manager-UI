import {getSingleItem, fetchAllItems, createItem} from '../js/helpers.js'
const salesUrl = 'https://store-manager-api-heroku.herokuapp.com/api/v1/sales'
const productsUrl = 'https://store-manager-api-heroku.herokuapp.com/api/v1/products';

const categorizeProduct = document.getElementById('categorize-product');
const addToCartButton = document.getElementById('add-to-cart-btn');
const sellProductDiv = document.getElementById('sell-product');
const shoppingCart = document.getElementById('shopping-cart');
const checkoutBtn = document.getElementById('checkout');

const productList = (id, product, quantity, price) => {
    const userSalesTable = document.getElementById('user-sales-table')
    const tr = document.createElement('tr')
    tr.id = 'product-row'

    const numberTd = document.createElement('td')
    numberTd.innerHTML = id

    const productNameTd = document.createElement('td')
    productNameTd.classList.add('product-name')
    productNameTd.innerHTML = product

    const quantityTd = document.createElement('td')
    quantityTd.innerHTML = quantity

    const priceTd = document.createElement('td')
    priceTd.innerHTML = price

    const sellBtnTd = document.createElement('td')
    const sellBtn = document.createElement('button')
    sellBtn.classList.add('sell')
    sellBtn.innerHTML = 'Sell'
    sellBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let productId = document.getElementById('product-id')
        let unitPrice = document.getElementById('unit-price');
        let productName = document.getElementById('product');
        productId.value = id
        unitPrice.value = parseFloat(price);
        productName.value = product; 
        show(sellProductDiv);
        show(shoppingCart);
        hide(categorizeProduct);

    })
    sellBtnTd.appendChild(sellBtn)

    const categorizeBtnTd = document.createElement('td')
    const categorizeBtn = document.createElement('button')
    categorizeBtn.classList.add('categorize')
    categorizeBtn.innerHTML = 'Categorize'
    categorizeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        show(categorizeProduct);
        hide(sellProductDiv);
        hide(shoppingCart);
    })
    categorizeBtnTd.appendChild(categorizeBtn)

    tr.appendChild(numberTd)
    tr.appendChild(productNameTd)
    tr.appendChild(quantityTd)
    tr.appendChild(priceTd)
    tr.appendChild(sellBtnTd)
    tr.appendChild(categorizeBtnTd)

    userSalesTable.appendChild(tr)
}

const getAllProducts = () => {
    fetchAllItems(productsUrl)
        .then((data) => {
            const products = data
            products.map((product, index) => {
                productList(product.product_id, product.name, product.quantity, product.unit_price)
            })
        })
        .catch(error => console.log(error))
}

const salesReport = (totalSales, totalProducts, goodsWorth) => {
    const totalSalesElement = document.getElementById('total-sales')
    totalSalesElement.innerHTML = `Total Sales: ${totalSales}`
    const totalProductsElement = document.getElementById('total-products')
    totalProductsElement.innerHTML = `Total Products Sold: ${totalProducts}`
    const salesWorthElement = document.getElementById('sales-worth')
    salesWorthElement.innerHTML = `Sold goods worth: ${goodsWorth}`
}
const userSalesTable = (date, product, quantity, price) => {
    const userSales = document.getElementById('user-sales')
    const tr = document.createElement('tr')
    const saleDate = document.createElement('td')
    saleDate.innerHTML = date
    const saleProduct = document.createElement('td')
    saleProduct.innerHTML = product
    const saleQuantity = document.createElement('td')
    saleQuantity.innerHTML = quantity
    const saleAmount = document.createElement('td')
    saleAmount.innerHTML = price
    if(tr!== null){
        tr.appendChild(saleDate)
        tr.appendChild(saleProduct)
        tr.appendChild(saleQuantity)
        tr.appendChild(saleAmount)
    }
    if(userSales !== null){
        userSales.appendChild(tr)
    }

}
const getUserSales = () => {
    fetchAllItems(salesUrl)
        .then((data) => {
            const userSales = data
            const totalSales = userSales.length
            let goodsWorth = 0
            const totalProductsSold = []
            userSales.map((sale) => {
                userSalesTable(sale.sale_date, sale.product_sold, sale.quantity_sold, sale.total_price)
                goodsWorth += sale.total_price
                const product = sale.product_sold
                totalProductsSold.push(product)
            })
            const totalProducts = totalProductsSold.length
            salesReport(totalSales, totalProducts, goodsWorth)
            console.log(userSales)
        })
        .catch(error => console.log(error))
}

const userId = () => {
    const id = parseInt(window.location.search.split('searchId')[1].split('=')[1])
    return id
}
const loggedInUser = (username) => {
    const loggedInSpan = document.getElementById('logged-in-user');
    if(loggedInSpan !== null){
        loggedInSpan.innerHTML = username
    }
}
const searchUser = () => {
    const id = userId()
    const url = `https://store-manager-api-heroku.herokuapp.com/api/v1/attendants/${id}`
    getSingleItem(url)
        .then((data) => {
            const user = data
            console.log(user)
            loggedInUser(user.last_name)
            
        })
        .catch(error => console.log(error))
}

//Show element
const show = (elem) => {
    elem.style.display = 'block';
}

//Hide element
const hide = (elem) => {
    elem.style.display = 'none';
}
checkoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    makeSale();
})

const makeSale = () => {
    const salesMade = sales
    salesMade.map((sale) => {
        createItem(salesUrl, sale)
            .then(data => alert(data))
            .catch(error => console.log(error))
    })
}
const sales = []
const addToCart = (product, quantity) => {
    const sale = {
        "sold_item": parseInt(product),
        "quantity_sold": parseInt(quantity)
    }
    sales.push(sale)
}

addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
    const productTable = document.getElementById('product-table')
    const itemId = document.getElementById('product-id').value;
    const item = document.getElementById('product').value;
    const productQuantity = document.getElementById('product-quantity');
    const unitPrice = document.getElementById('unit-price').value;
    addToCart(itemId, productQuantity.value)
    const tableRow = document.createElement('tr');
    const tableDataItem = document.createElement('td');
    const tableDataPrice = document.createElement('td');
    const tableDataQuantity = document.createElement('td');
    

    //Item table data
    tableDataItem.innerText = item
    tableRow.appendChild(tableDataItem);
    //Quantity table data
    tableDataQuantity.innerText = parseInt(productQuantity.value);
    tableRow.appendChild(tableDataQuantity);
    //Unit price table data
    tableDataPrice.innerText = parseFloat(unitPrice) * tableDataQuantity.innerText;
    tableDataPrice.className += 'priceTd';
    tableRow.appendChild(tableDataPrice);
    // Append the product row to the table

    productTable.appendChild(tableRow);
    calculateTotal()
});

const calculateTotal = () => {
    const numberOfItems = document.getElementsByClassName('priceTd');
    const totalTableData = document.getElementById('total');
    let total = 0;
    for(let i =0; i <numberOfItems.length; i++){
        total += parseFloat(numberOfItems[i].innerText);
    }
    totalTableData.innerText = 'UGX. '+ total;
}

window.addEventListener('load', (event) => {
    event.preventDefault();
    searchUser()
    getUserSales()
    getAllProducts()
    hide(categorizeProduct);
    hide(shoppingCart);
})



