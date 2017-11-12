
var app = angular.module('myApp', ["firebase"]); 

app.controller('categCtrl', function($scope, $firebaseObject, $firebaseArray) {  

    $scope.msg = "";
    $scope.show_message = false;
    $scope.show_spinner = true;

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
            $scope.show_spinner = false;
        })
        .catch(function(error) {
            console.log("Error:", error);
    });   
    
    
    //DELETAR CATEGORIA    
    $scope.delet = function(categ){
        //alert(categ.$id);
        //alert(categ.$value);
        $scope.categ.$remove(categ).then(function(ref) {
            //acrescentar codigo pra confirmar deleção
        });    
    };

    //SALVAR CATEGORIA    
    $scope.salvar = function(new_categ){

        if (new_categ === "" || angular.isUndefined(new_categ)) {
            $scope.show_message = true;
            $scope.msg = "Descrição não pode estar em branco...";
            return;
        }
        
        var found = 0;

        //verifica se ja existe
        angular.forEach($scope.categ, function(categ) {
            if (categ.$value.toUpperCase() == new_categ.toUpperCase()) {
                found = 1;
                $scope.show_message = true;
                $scope.msg = "Categoria já existe...";
                return;
            }
        }) 

        if (found === 0) {
            $scope.categ.$add({ $value: new_categ }).then(function(ref) {
                //acrescentar codigo pra confirmar salvar
                $scope.show_message = false;
            });
        }
            

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