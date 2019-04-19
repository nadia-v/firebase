// const marketplace_form  = document.querySelector('#add_marketplace');
// var selectedFile;

// // saving data for marketplace
// marketplace_form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     db.collection('Marketplace').add({
//         title: marketplace_form.title.value,
//         description: marketplace_form.description.value,
//         price: marketplace_form.price.value,
//         picture: marketplace_form.picture.value,
//         created: firebase.firestore.FieldValue.serverTimestamp()

//     });
// })


const housing_form  = document.querySelector('#add_housing');
var selectedFile;

// saving data for housing
housing_form.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Housing').add({
        title: housing_form.title.value,
        description: housing_form.description.value,
        price: housing_form.price.value,
        picture: housing_form.picture.value,
        created: firebase.firestore.Timestamp.fromDate(new Date()) 

    });
})

const social_form  = document.querySelector('#add_social');
var selectedFile;

// saving data for social
social_form.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Social').add({
        title: social_form.title.value,
        description: social_form.description.value,
        picture: social_form.picture.value,
        created: firebase.firestore.Timestamp.fromDate(new Date()) 

    });
})