const marketplace_posts = document.querySelector("#marketplace_posts");


db.collection("marketplace_posts").onSnapshot(function(querySnapshot) {
  
    querySnapshot.forEach(function(doc) {     

        const storageRef = firebase.storage().refFromURL(doc.data().imageOne);
        storageRef.getDownloadURL().then(function(url) {       
            document.getElementById("marketplace-post-image").src = url;  
            marketplace_posts.innerHTML = " <div class=marketplace-posts><h1>Title: " + doc.data().adTitle +
            "</h1><h2>Category: " + doc.data().adCategory + 
            "</h2><h2>Description: " + doc.data().adDescription + 
            "</h2><h2>Status: " + doc.data().adStatus + 
            "</h2><h2>Price: " + doc.data().adPrice + 
            "</h2><h2>Price: " + doc.data().imageOne +
            "</h2><h2>Posted on: " + doc.data().adDate+ "</h2></div>"  
          })
    })
})

//------------------------------------------------------------------------//


const marketplace_form  = document.querySelector('#add_marketplace');
var selectedFile;

// saving data for marketplace
marketplace_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ref = firebase.storage().ref();
    //Select the file
    const file = document.querySelector('#picture').files[0];
    //Set file name
    const name = file.name;
    //Create the task
    const task = ref.child("/Marketplace/" + name).put(file);
    //Put the pic to firebase 
    task
        .then(snapshort => snapshort.ref.getDownloadURL())
        .then((url) => {
            console.log(url);

    db.collection('marketplace_posts').add({
        adCategory: marketplace_form.adCategory.value,
        adDate: firebase.firestore.FieldValue.serverTimestamp(),
        adDescription: marketplace_form.adDescription.value,
        adPrice: marketplace_form.adPrice.value,
        adStatus: marketplace_form.adStatus.value,
        adTitle: marketplace_form.adTitle.value,
        editDate: firebase.firestore.FieldValue.serverTimestamp(),
        idAd: marketplace_form.idAd.value,
        idUser: marketplace_form.idUser.value,
        imageOne: url,
      
        

    });
})
.catch(console.error);
})

