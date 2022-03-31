///////////////////////////callback////////////////////
// function getPizza(callback) {
//     let myHttp = new XMLHttpRequest();

//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pizza');
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4 && myHttp.status == 200) {
//             let allRecipes = JSON.parse(myHttp.response).recipes;
//             console.log('pizza');
//             console.log(allRecipes);
//             callback();
//         }
//     })
// }

// function getPasta(callback) {
//     let myHttp = new XMLHttpRequest();

//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pasta');
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4 && myHttp.status == 200) {
//             let allRecipes = JSON.parse(myHttp.response).recipes;
//             console.log('pasta');
//             console.log(allRecipes);
//             callback();
//         }
//     })
// }

// function getSalad(callback) {
//     let myHttp = new XMLHttpRequest();

//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=salad');
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4 && myHttp.status == 200) {
//             let allRecipes = JSON.parse(myHttp.response).recipes;
//             console.log('salad');
//             console.log(allRecipes);
//             callback();
//         }
//     })
// }

// function getBeef(callback) {
//     let myHttp = new XMLHttpRequest();

//     myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=beef');
//     myHttp.send()

//     myHttp.addEventListener('readystatechange', function () {
//         if (myHttp.readyState == 4 && myHttp.status == 200) {
//             let allRecipes = JSON.parse(myHttp.response).recipes;
//             console.log('beef');
//             console.log(allRecipes);
//             callback();
//         }
//     })
// }

// getSalad(function () {
//     getPizza(function () {
//         getPasta(function () {
//             getBeef();
//         });
//     });

// });


///////////promise/////////////////
// function getPizza() {
//     return new Promise(function (callback) {
//         let myHttp = new XMLHttpRequest();

//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pizza');
//         myHttp.send()

//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4 && myHttp.status == 200) {
//                 let allRecipes = JSON.parse(myHttp.response).recipes;
//                 console.log('pizza');
//                 console.log(allRecipes);
//                 callback();
//             }
//         })
//     })
// }

// function getPasta() {
//     return new Promise(function (callback) {
//         let myHttp = new XMLHttpRequest();

//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pasta');
//         myHttp.send()

//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4 && myHttp.status == 200) {
//                 let allRecipes = JSON.parse(myHttp.response).recipes;
//                 console.log('pasta');
//                 console.log(allRecipes);
//                 callback();
//             }
//         })
//     })
// }

// function getSalad() {
//     return new Promise(function (callback) {
//         let myHttp = new XMLHttpRequest();

//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=salad');
//         myHttp.send()

//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4 && myHttp.status == 200) {
//                 let allRecipes = JSON.parse(myHttp.response).recipes;
//                 console.log('salad');
//                 console.log(allRecipes);
//                 callback();
//             }
//         })
//     })
// }

// function getBeef() {
//     return new Promise(function (callback) {
//         let myHttp = new XMLHttpRequest();

//         myHttp.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=beef');
//         myHttp.send()

//         myHttp.addEventListener('readystatechange', function () {
//             if (myHttp.readyState == 4 && myHttp.status == 200) {
//                 let allRecipes = JSON.parse(myHttp.response).recipes;
//                 console.log('beef');
//                 console.log(allRecipes);
//                 callback();
//             }
//         })
//     })

// }

// getSalad()
//     .then(function () { return getPizza(); })
//     .then(function () { return getPasta(); })
//     .then(function () { getBeef(); })

///////////////////////fetch/////////////////////////////
// async function getSalad(){
//     let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=salad');
//     let allRecipes=await apiResponse.json();
//     console.log('salad');
//     console.log(allRecipes.recipes);
// }

// async function getPizza(){
//     let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=pizza');
//     let allRecipes=await apiResponse.json();
//     console.log('pizza');
//     console.log(allRecipes.recipes);
// }

// async function getPasta(){
//     let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=pasta');
//     let allRecipes=await apiResponse.json();
//     console.log('pasta');
//     console.log(allRecipes.recipes);
// }

// async function getBeef(){
//     let apiResponse=await fetch('https://forkify-api.herokuapp.com/api/search?&q=beef');
//     let allRecipes=await apiResponse.json();
//     console.log('beef');
//     console.log(allRecipes.recipes); 
// }

// (async function(){
//     await getSalad();
//     await getPizza();
//     await getPasta();
//     await getBeef();
// })();

// async function getData(){
//     await getSalad();
//     await getPizza();
//     await getPasta();
//     await getBeef();
// }
// getData();


//////////////////////project/////////////////
let allRecipes = [];
let recipeDetails = {};
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// code call APIS f search input
async function getRecipes(term) {
    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);//term>>parameter L function(getRecipes)//y3ne ely hed5lh el user hetl3 hna
    allRecipes = await apiResponse.json();
    allRecipes = allRecipes.recipes;//3aeza recipes bs mn8er count  
    displayRecipes();
}

//code 3rd el Recipes
function displayRecipes() {
    let cartoona = ``;

    for (let i = 0; i < allRecipes.length; i++) {

        let myId = "'"+allRecipes[i].recipe_id+"'";//5le Ae Id >>string
        cartoona += `   
        <div class="col-md-4 recipeScal ">
        <div class="recipy" onclick="getRecipeDetails(${myId})">
        <div class="recipy-img overflow-hidden">
          <img class="w-100" src="${allRecipes[i].image_url}" alt=""></div>
            <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
            <p>${allRecipes[i].publisher}</p>
        </div>

      </div>
        ` ;
    }

    document.getElementById('recipesRow').innerHTML = cartoona;
}

//code call l id bta3 el wsfa elw7da wtgwbhole f el object (recipeDetails)
async function getRecipeDetails(id) {

    let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    recipeDetails = await apiResponse.json();
    recipeDetails = recipeDetails.recipe;
    displayRecipeDetails();
}



//code 3rd el wasfa el w7da
function displayRecipeDetails() {

    let cartoona2 =``;

    for (let x of recipeDetails.ingredients) {//(ingredients)array f Api 4ael list el wsafat
        cartoona2 +=` <li class="d-flex py-1 align-items-center font-weight-bolder"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${x}</li>
        `;
    }
    let cartoona = ` <div class="recipeDetials ">
    <h2 class="color-mine py-1">${recipeDetails.title}</h2>
    <img src="${recipeDetails.image_url}" class="w-100" alt="">
    <ul class="fa-ul py-3">
    ${cartoona2}
    </ul>
  </div>`;

  document.getElementById('recipeDetails').innerHTML = cartoona;

}


searchBtn.addEventListener("click", function () {//zorar el search
    getRecipes(searchInput.value);//el klma ely etktbt f searchInput>>he5odha we7otha f parameter bta3 (getRecipes)function wbeltaly tzhr swa2 pasta or salad or any sige
})

// searchBtn.addEventListener("keydown",function(eventInfo){
//     if(eventInfo.code=="Enter")
//     {
//         getRecipes(searchInput.value);
//     }
// })

