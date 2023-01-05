
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addBtn = document.getElementById('addBtn');
var inputs = document.getElementsByClassName('form-control');
var currentIndex = 0;

var products = [];
if (JSON.parse(localStorage.getItem('productsList')) != null) {
  products = JSON.parse(localStorage.getItem('productsList'));
  displayData()
}

addBtn.onclick = function () {
  if (addBtn.innerHTML == 'Add product') //add mode
  {
    addProduct();
  }
  else {  //update mode
    updateProduct()
  }

  displayData();
  resetForm();
}

function addProduct() {
  var product =
  {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products.push(product);
  localStorage.setItem('productsList', JSON.stringify(products));
}

function displayData() {
  var cartona = '';
  for (var i = 0; i < products.length; i++) {
    cartona +=
      `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button onclick='getProductInfo(${i})' class='btn btn-outline-warning'>update</button></td>
      <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger'>delete</button></td>
    </tr>
    `
  }
  document.getElementById('tableBody').innerHTML = cartona
}
function getProductInfo(index) {
  currentIndex = index;
  var currentProduct = products[index];
  productNameInput.value = currentProduct.name;
  productPriceInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.category;
  productDescInput.value = currentProduct.desc;
  addBtn.innerHTML = "update product"
}
function updateProduct() {
  var product =
  {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  products[currentIndex] = product;
  localStorage.setItem('productsList', JSON.stringify(products));
  addBtn.innerHTML = 'Add product';

}
function deleteProduct(index) {
  products.splice(index, 1);
  displayData();
  localStorage.setItem('productsList', JSON.stringify(products));
}

function resetForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
}

function search(searchTxt) {
  var cartona = '';
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchTxt.toLowerCase())) {
      cartona +=
        `
    <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button class='btn btn-outline-warning'>update</button></td>
      <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger'>delete</button></td>
    </tr>
    `
    }

  }
  document.getElementById('tableBody').innerHTML = cartona
}



//validation(data is valid)
//logically
//secure wise
//regular expressions(rejex)--pattern of symbols and chars
//entry,intermediate,advanced
var nameAlert = document.getElementById('nameAlert');

productNameInput.onkeyup = function () {
  var nameRejex = /^[A-Z][a-z]{2,8}$/;
  if (nameRejex.test(productNameInput.value))    //lw tmm(valid)
  {
    addBtn.removeAttribute('disabled');
    productNameInput.classList.add('is-valid');
    productNameInput.classList.remove('is-invalid');
    nameAlert.classList.add('d-none');
  }
  else    //lw m4 tmm(not valid)
  {
    addBtn.disabled = true;
    productNameInput.classList.add('is-invalid');
    productNameInput.classList.remove('is-valid');
    nameAlert.classList.remove('d-none');
  }
}




//DOM(document object model)
/*
1-select element in html
  var demo = document.getElementById('demo');  //dom statement
var test1 = Array.from(document.getElementsByClassName('form-control'));//coll
var test2 = document.getElementsByTagName('input');//coll
var test3 = document.getElementsByName('gender');//nodelist
var test4 = document.querySelector('.form-control')
var test5 = document.querySelectorAll('input');  //nodelist
*/

var demo = document.getElementById('demo');  //dom statement
var test1 = Array.from(document.getElementsByClassName('form-control'));//coll
var test2 = document.getElementsByTagName('input');//coll
var test3 = document.getElementsByName('gender');//nodelist
var test4 = document.querySelector('.form-control')
var test5 = document.querySelectorAll('input');  //nodelist

