
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
            "</h2><h2>Posted on: " + doc.data().adDate+ "</h2></div>"  
          })
    })
})

db.collection("marketplace_posts")
    .orderBy("editDate", "desc")
    .limit(1).get().then(function(prevSnapshot){
    
    prevSnapshot.forEach(function(doc1) {     

        const storageRef = firebase.storage().refFromURL(doc1.data().imageOne);
        storageRef.getDownloadURL().then(function(url) {       
            document.getElementById("marketplace-post-image1").src = url;  
            marketplace_posts1.innerHTML = " <div class=marketplace-posts1><h1>Title: " + doc1.data().adTitle +
            "</h1><h2>Category: " + doc1.data().adCategory + 
            "</h2><h2>Description: " + doc1.data().adDescription + 
            "</h2><h2>Status: " + doc1.data().adStatus + 
            "</h2><h2>Price: " + doc1.data().adPrice + 
            "</h2><h2>Posted on: " + doc1.data().adDate+ "</h2></div>"  
          })
    })
})


//------------------------------------------------------------------------//
const housing_form  = document.querySelector('#add_housing');
const market_form = document.querySelector('#add_marketplace');
const social_form = document.querySelector('#add_social')
var time = new Date();
var date = time.getTime();

//saving data for marketplace
market_form.addEventListener('submit', (e) => {
    //Prevent the default action
    e.preventDefault();
    
    //Create root reference
    const ref = firebase.storage().ref();
    
    //Select the file
    const file = document.querySelector('#marketplace_picture').files[0];
    
    //Set file name
    const name = file.name;
    
    //Create the task
    const task = ref.child("/marketplace_posts/" + name).put(file);
    
    //Put the pic to firebase 
    task
        .then(snapshort => snapshort.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            //Create record on firestore
            db.collection('marketplace_posts').add({
                adTitle: market_form.title.value,
                adDescription: market_form.description.value,
                adPrice: market_form.price.value,
                imageOne: url,
                adCategory: market_form.category.value,
                adStatus: "active",
                adDate: date,
                idUser: "fkFTTR55iyakzpy8FlD8BXUGkuF3",
        
            });
        })
        .catch(console.error);
    

})


// saving data for housing
housing_form.addEventListener('submit', (e) => {
    //Prevent the default action
    e.preventDefault();
    
    //Create root reference
    const ref = firebase.storage().ref();
    
    //Select the file
    const file = document.querySelector('#housing_picture').files[0];
    
    //Set file name
    const name = file.name;
    
    //Create the task
    const task = ref.child("/housing_posts/" + name).put(file);
    
    //Put the pic to firebase 
    task
        .then(snapshort => snapshort.ref.getDownloadURL())
        .then((url) => {
            console.log(url);
            //Create record on firestore
            db.collection('housing_posts').add({
                adTitle: housing_form.title.value,
                adDescription: housing_form.description.value,
                adRent: housing_form.rent.value,
                imageOne: url,
                adCategory: housing_form.category.value,
                adStatus: "active",
                adDate: date,
        
            });
        })
        .catch(console.error);
    

})



// saving data for social
social_form.addEventListener('submit', (e) => {
    //Prevent the default action
    e.preventDefault();
    
    //Create root reference
    const ref = firebase.storage().ref();
    
    //Select the file
    const file = document.querySelector('#social_picture').files[0];
    
    //Set file name
    const name = file.name;
    
    //Create the task
    const task = ref.child("/social_posts/" + name).put(file);
    
    //Put the pic to firebase 
    task
        .then(snapshort => snapshort.ref.getDownloadURL())
        .then((url) => {
            console.log(url);


            //Create record on firestore
            db.collection('social_posts').add({
                adTitle: social_form.title.value,
                adDescription: social_form.description.value,
                imageOne: url,
                adCategory: social_form.category.value,
                adStatus: "active",
                adDate: date,
                eventDate: social_form.datetime.valueAsNumber,
        
            });
        })
        .catch(console.error);
    

})

