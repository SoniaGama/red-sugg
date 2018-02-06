// Firebase
var config = {
   apiKey: "AIzaSyCsPtmB9oyd1nKnA5cuN5dx9uGXgNgD6Hs",
   authDomain: "airbnb-da07c.firebaseapp.com",
   databaseURL: "https://airbnb-da07c.firebaseio.com",
   projectId: "airbnb-da07c",
   storageBucket: "airbnb-da07c.appspot.com",
   messagingSenderId: "289392080208"
};
firebase.initializeApp(config);
var storage = firebase.storage();


//elementos traidos del html
var $submit = $("#publish");
var $btnLogin = $(".boton-login"); //botón iniciar sesión
var $btnRegistry = $("#registry"); //boton registro
var $imagePublish = $(".image-publish");
var $container = $("#container-publish");
var $textUser = $("#text-user");
var $textUserVal = $textUser.val();

function loadPage () {
  $("#menu-bars").click(menu);
  // $(".logo-mini").click(changeIcon);
  $("#publish").click(showSugg);
  $(".input-friend").keyup(filterFriends);
//   $("#unload-fire-base").change(readerImage);
  $("#upload-fire-base").change(uploadImage);
  $textUser.keyup(disable);
  // $btnLogin.click(login);
  // $btnRegistry.click(registry);
  //authGoogle(); //llamando a la funcion de autentificación, ejemplo lms
    firebase.auth();
}

//función para mostrar menu desplegable del header
function menu(event) {

    if ($(".options").hasClass("hidden")) {
        $(".options").removeClass("hidden");
        $(".options").addClass("show");
    } else {
        $(".options").removeClass("show");
        $(".options").addClass("hidden");
    }
}

//función para guardar imagenes en firebase
function uploadImage (e) {    
    var downloadURL;
   
    var fileImage = e.target.files[0]; //seleccionamos el archivo
    var storageRef = firebase.storage().ref(); // creamos una referencia de almacenamiento en firebase
    
    //almacenamos el archivo en nuestra carpeta en firebase
    var imagesRef = storageRef.child("images/" + fileImage.name).put(fileImage);//put() sube el archivo 
 
    // Visualizamos la cargar del archivo
    imagesRef.on('state_changed',//visualizamos el cambio de estado
    
      function(snapshot) {
          $('#bar-prog').val('');
          // Porcentaje de bytes subidos
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress + '% cargado');
          $('#bar-prog').val(progress); //mostramos el proceso al usuario
          if(progress === 100){
              console.log('Carga finalizada');             
          }
          downloadURL = imagesRef.snapshot.downloadURL;
          console.log(downloadURL);  
          $("#publish").click(function(){
            //   var $divImage = $("<div />")
              var $imgPlace = $("<img>").addClass("image-publish col-xs-offset-1 col-xs-10 post-usser container-img");

              $imgPlace.attr('src', downloadURL);
            //   console.log($imgPlace);
            //   $divImage.append($imgPlace);
              $container.append($imgPlace);
          });                
        },       
        // console.log(downloadURL)        
    );       
 }

// // Mostrar imagenes
// function readerImage(event) {
//    var $textUser = $("#text-user");
//    var $textUserVal = $textUser.val();

//    var $fileImage = event.target.files[0];
//    console.log($fileImage);
//    var reader = new FileReader();
//    console.log(reader);
//    reader.onload = function (event){

//      // crear elemento imagen, darle clase y attr
//      var $sectionImage = $("<section />", {"class":"image-publish post-usser container-img margin"});
//      var $imagePublish = $("<img />", {"class":" thumbnail container-image  col-xs-offset-1 col-xs-10 margin", "alt":"image"});
//      $imagePublish.attr("src", event.target.result);

//      $sectionImage.prepend($imagePublish);
//      $container.prepend($sectionImage);
//    }
//    reader.readAsDataURL(this.files[0]);
// }


function showSugg (e) {
   var $textUser = $("#text-user");
   var $textUserVal = $textUser.val();
   // var $ratingScale = ("#rating-scale");
   var $scale = parseInt($("#rating-scale").val());
    //traer Elementos
    $textUser.val("");

    $textUser.attr("placeholder", "Escribe tu recomendación de hoy, y no olvides subir tu foto favorita del lugar!");
    // crar elementos


    var $sectionRow = $("<section />", {"class":"row thumbnail col-xs-offset-1 col-xs-10"});
    var $divImagePublish = $("<div />",{"class":"image-publish col-xs-offset-1 col-xs-10 post-usser container-img"});
    var $containerComment = $("<section />", {"class":"container-comment col-xs-offset-1 col-xs-10"});
    var $sectionRowComment = $("<section />",{"class":"row"});
    var $divContainerSugg = $("<div />",{"class":"container-sugg col-xs-10"});
    var $pTime = $("<p />",{"class":"time"});
    var $pComment = $("<p />",{"class":"comment"});
    var $divContainerIcons = $("<div />",{"class":"col-xs-2 container-icons"});
    var $divRow = $("<div />",{"class":"row"});
    var $iconEdit = $("<a />", {"class":"edit"});
    var $iconE = $("<i />", {"class":"fa fa-pencil col-sm-3 col-xs-1"});    
    var $iconStar = $("<a />", {"class":"star"});
    var $iconS = $("<i />", {"class":"fa fa-star col-sm-offset-4 col-sm-2 col-xs-1"});    
    var $spanCount = $("<span />", {"class":"col-sm-1 col-xs-1"});

    $iconE.attr("aria-hidden","true");
    $iconE.attr("aria-hidden","true");
    
    var $time = new Date().toDateString(); //variable que guarda la fecha

       // agregar contenido

    $pTime.text($time);
    $pComment.text($textUserVal);
    $spanCount.text($scale);

    // agregarlos al documento

    $sectionRow.append($divImagePublish);
    $sectionRow.append($containerComment);
    $containerComment.append($sectionRowComment);
    $sectionRowComment.append($divContainerSugg);
    $sectionRowComment.append($divContainerIcons);
    $divContainerSugg.append($pTime);
    $divContainerSugg.append($pComment);
    $divContainerIcons.append($divRow);
    $divRow.append($iconEdit);
    $divRow.append($iconStar);
    $divRow.append($spanCount);
    $iconEdit.append($iconE);
    $iconStar.append($iconS);

    $container.append($sectionRow);
    disable();   
}

function disable(event){
  // var $counter = $textUserVal.length;
  // console.log($counter);
 var val = $("#text-user").val().trim().length;
 // console.log(val);
  if ( val >= 4 ){
   $submit.removeAttr( "disabled" );
   }
    else if (val === 0) {
     $submit.attr( "disabled","true" );
     }
}


//función para pintar el contenedor de neewfeed
function paintPostUser(textUserVal) {
    //llamando elementos a pintar
    var $divImg = $("<div />", { "id": "image-publish", "class": "col-xs-offset-1 col-xs-10 post-usser container-img" });
    var $imgPost = $("<img>", { "alt": "lugar-recomendado" });
    var $sectionComment = $("<section />", { "class": "col-xs-offset-1 col-xs-10 container-comment" });
    var $sectionRow = $("<section />", { "class": "row" });
    var $divCol10 = $("<div />", { "id": "container-sugg", "class": "col-xs-10" });
    var $pTime = $("<p />", { "id": "time" });
    var $pComment = $("<p />", { "id": "comment" });
    var $divCol2 = $("<div />", { "class": "col-xs-2 container-icons" });
    var $divRow = $("<div />", { "class": "row" });
    var $spanCalif = $("<span />", { "class": "col-sm-1 col-xs-1" });

    //append de elementos
    $divRow.append($spanCalif);
    $divCol2.append($divCol2);
    $sectionRow.append($divCol2);
    $pComment.append($divCol10);
    $pTime.append($divCol10);
    $sectionRow.append($divCol10);
    $sectionRow.append($divCol2);
    $sectionComment.append($sectionRow);
    $imgPost.append($divImg);

    //agregando elementos en un contenedor existente en html
    $("#container-comment").prepend($divImg);
    $("#container-comment").prepend($sectionComment);
}


//función para iniciar sesión
// function login(event) {
//   var user = $("#user").val();
//   var password = $("#password").val();
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorCode);
//   console.log(errorMessage);
//
// });
//
//   // $("#registry").attr("href","newsfeed.html");
//   // location.href = "newsfeed.html";
// }

//funcion para crear usuarios
// function registry(event){
//
// }

//funciones para filtrar amigos y pintarlos
function paintFriend(friendsIndice, photoFriend, nameFriend) {
    /* Crear elementos con DOM html*/
    var $divColContain = $("<div />", { "id": "div-friend", "class": "col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" })
    var $divContFriend = $("<div />", { "class": "thumbnail" });
    var $img = $("<img>", { "src": friendsIndice.photo, "alt": "image-friend" });
    var $divCaption = $("<div />", { "class": "caption" });
    var $nameFriend = $("<h3 />");
    var $pButton = $("<p />");
    var $aButton = $("<a />", { "class": "btn btn-primary", "role": "button" });

    /* Asignando valores a los elementos*/
    $nameFriend.text(friendsIndice.name);
    $img.append(photoFriend);
    $aButton.text("Agregar");
    // console.log(nameFriend);

    //Agregamos lo que creamos con el DOM a un elemento existente del HTML
    $divColContain.append($divContFriend);
    $divContFriend.append($img);
    $divContFriend.append($divCaption);
    $divCaption.append($nameFriend);
    $divCaption.append($pButton);
    $pButton.append($aButton);

    $aButton.click(function() {
        var $friends = ("#friends");
        console.log($friends);
        $friends.prepend($divColContain);
    });

    $(".content-friend").prepend($divColContain);


}

// function addFriends ($divColContain) {
//   console.log($divColContain);
//   var $friends = (".content-friend");
//   $(".content-friend").prepend($divColContain);
// }


// funcion para filtrar amigos
var filterFriends = function(friendsIndice) {
    //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
    var inputFilter = $(".input-friend").val().toLowerCase();
    if ($(".input-friend").val().trim().length > 0) {
        for (var i = 0; i > friends.length; i++) {
            friendsIndice = friends[i];
            //nameFriend = friends[i].name;
            //photoFriend = friends[i].photo;
            //contacts.push(friendsIndice);
            //console.log(friendsIndice);
        }

        var filtederedFriends = friends.filter(function(friendsIndice) {
            return friendsIndice.name.toLowerCase().indexOf(inputFilter) >= 0;
        })
        $(".content-friend").empty();
        filtederedFriends.forEach(function(friendsIndice) {
            paintFriend(friendsIndice);
        });
    } else {
        $(".content-friend").empty();
        friends.forEach(function(friendsIndice) {
            paintFriend(friendsIndice);
        });
    }
    //paintFriend(friendsIndice, photoFriend, nameFriend);
    console.log("filter", filtederedFriends)
}

//Funciones para la autentificación de google, ejemplo lms
/*$("#login").click(function(e) {
    e.preventDefault();
    authGoogle();
});

var authGoogle = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
};

var authentication = function(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
}*/

//Funciones firebase, ejemplo del video
var mailUser = document.getElementById("email-user");
var password = document.getElementById("password");
var btnLogin = document.getElementById("login");
var btnSignUp = document.getElementById("sign-up");

btnLogin.addEventListener("click", e => {
    e.preventDefault();
    var email = mailUser.value;
    var pass = password.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener("click", e => {
    e.preventDefault();
    var email = mailUser.value;
    var pass = password.value;
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

/*firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        location.href = "views/newsfeed.html";
    }
});*/



//funciones para cambiar del perfil de usuario al newsfeed
// function changeProfile() {
//     if ($(".imagotipo").hasClass("hidden")) {
//         $(".imagotipo").removeClass("hidden");
//         $(".imagotipo").addClass("show");
//         $(".avatar").removeClass("show");
//         $(".avatar").addClass("hidden");
//     }
// }
//
// function changeIcon() {
//     if ($(".avatar-mini").hasClass("hidden")) {
//         $(".avatar-mini").removeClass("hidden");
//         $(".avatar-mini").addClass("show");
//         $(".logo-mini").removeClass("show");
//         $(".logo-mini").addClass("hidden");
//     }
// }
$(document).ready(loadPage);