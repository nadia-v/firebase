const marketplace_posts = document.querySelector("#marketplace-posts");



db.collection("Marketplace").onSnapshot(function(querySnapshot) {
  
    querySnapshot.forEach(function(doc) {
        marketplace_posts.innerHTML = " <div class=marketplace-posts><h1>Title: " + doc.data().title +
        "</h1><h2>Description: " + doc.data().description + "</h2><h2>Price: " + doc.data().price + 
        "</h2><h2>Posted on: " + doc.data().created.toDate()+ "</h2></div>"
    })
})




const marketplace_form  = document.querySelector('#add_marketplace');
var selectedFile;

// saving data for marketplace
marketplace_form.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Marketplace').add({
        title: marketplace_form.title.value,
        description: marketplace_form.description.value,
        price: marketplace_form.price.value,
        picture: marketplace_form.picture.value,
        created: firebase.firestore.FieldValue.serverTimestamp()

    });
})