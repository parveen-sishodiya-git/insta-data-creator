//https://parveen-sishodiya-git.github.io/insta-data-creator/
console.log("I am shopper data");

const app = angular.module("mainApp", []);

app.controller("productAddController", function ($scope) {
    let productDetails = [];
    $scope.productDetailsToShow = [];

    function getProductDetails(params) {
        if(localStorage.getItem("productDetails")){
            $scope.productDetailsToShow = JSON.parse(localStorage.getItem("productDetails"));
        }
    }

    getProductDetails();

    if(localStorage.getItem("productDetails")){
        productDetails =  JSON.parse(localStorage.getItem("productDetails"));
        console.log("Already has the items "+productDetails.length);
    }

    $scope.saveProduct = ()=>{
        if(localStorage.getItem("productDetails")){
            productDetails = JSON.parse(localStorage.getItem("productDetails"));
            console.log(typeof(productDetails));
            productDetails.push($scope.product);
            localStorage.setItem("productDetails",JSON.stringify(productDetails));
        }else{
            productDetails.push($scope.product);
            localStorage.setItem("productDetails",JSON.stringify(productDetails));
        }
        getProductDetails();
    }

    $scope.extractProductJSON = ()=>{
        if(localStorage.getItem("productDetails")){
            document.getElementById("productJson").innerText = localStorage.getItem("productDetails");
        }else{
            document.getElementById("productJson").innerText = "No Product saved yet";
        }   
    }

    $scope.giveProductJSON = ()=>{
        if(localStorage.getItem("productDetails")){
            let newProducts = JSON.parse($scope.externalJSON);
            //let newProducts = JSON.parse(localStorage.getItem("productDetails"));
            let oldProducts = JSON.parse(localStorage.getItem("productDetails"));
            console.log("new")
            console.log(newProducts);
            console.log(typeof(newProducts));
            console.log(newProducts[0]);
            console.log("old")
            console.log(oldProducts);
            console.log(typeof(oldProducts));
            console.log(oldProducts[0]);
            let allProducts = newProducts.concat(oldProducts);
            localStorage.setItem("productDetails",JSON.stringify(allProducts));

        }else{
            localStorage.setItem("productDetails",$scope.externalJSON);
        }   
        getProductDetails();
        $scope.externalJSON = "";
    }

});

app.controller("productAddControllerr", function ($scope) {
    $scope.productDetails = [];
    if(localStorage.getItem("productDetails"))
    $scope.productDetails = localStorage.getItem("productDetails");

    $scope.productDetailsToShow = [];
    
    $scope.saveProduct = () => {
       
        if (localStorage.getItem("productDetails")) {
            console.log("item is present");
            $scope.productDetails.push($scope.product);
            localStorage.setItem("productDetails", JSON.stringify($scope.productDetails));
        } else {
            console.log("item is not present");
            $scope.productDetails.push($scope.product);
            localStorage.setItem("productDetails", JSON.stringify($scope.productDetails));
        }

    }

    $scope.getProductDetails = ()=>{
        if (localStorage.getItem("productDetails")) {
            $scope.productDetailsToShow = JSON.parse(localStorage.getItem("productDetails"));
            console.log($scope.productDetailsToShow);
        } else {    
            console.log(localStorage.getItem("productDetails is not available"));
        }
    }


})