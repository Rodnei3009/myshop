
var app = angular.module('myApp', ["firebase"]); 

app.controller('categCtrl', function($scope, $firebaseObject, $firebaseArray) {  

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAqZIC-iWcy5CSeBugOUkqUfbB9nNk-CI8",
        authDomain: "myshopping-cart.firebaseapp.com",
        databaseURL: "https://myshopping-cart.firebaseio.com",
        projectId: "myshopping-cart",
        storageBucket: "myshopping-cart.appspot.com",
        messagingSenderId: "667484481617"
    };

    firebase.initializeApp(config);


    var ref = firebase.database().ref('rodnei_brassoroto/categoria');

    var obj_categ = $firebaseArray(ref);

    $scope.categ = obj_categ;

    $scope.categ.$loaded()
        .then(function() {
            alert("XXX");
        })
        .catch(function(error) {
            console.log("Error:", error);
    });   
    
    
    //DELETAR CATEGORIA    
    $scope.delet = function(categ){
        //alert(categ.$id);
        //alert(categ.$value);
        $scope.categ.$remove(categ).then(function(ref) {
    
        });    
    };

    //SALVAR CATEGORIA    
    $scope.salvar = function(new_categ){
        //alert(new_categ);
        //alert(categ.$value);
        
        $scope.categ.$add({ $value: new_categ }).then(function(ref) {
            
        });    

    };

    /*
    $scope.categ = [
        {item:'Alimentos', classe_esq: 'Alimentos_esq', classe_dir: 'Alimentos_dir'},
        {item: 'Bebidas', classe_esq: 'Bebidas_esq', classe_dir: 'Bebidas_dir'},
        {item:'Horta', classe_esq: 'Horta_esq', classe_dir: 'Horta_dir'},
        {item: 'Limpeza', classe_esq: 'Limpeza_esq', classe_dir: 'Limpeza_dir'},
        {item:'Eletrica', classe_esq: 'Eletrica_esq', classe_dir: 'Eletrica_dir'}
    ]
    */

});