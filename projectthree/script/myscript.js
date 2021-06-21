const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');


//search meal and fetch from API
function searchMeal(e) {
    //prevent that we are not to submitting a file
    e.preventDefault();

    //clear single meal
    single_mealEl.innerHTML = '';

    //get serch term
    const term = search.value;
    console.log(term);

    //check for empty
    if (term.trim()) {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`

                if (data.meals === null) {
                    resultHeading.innerHTML = `<h2>Sorry we  do not have any food with that name</h2>`
                } else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                       <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                      <h3>${meal.strMeal}</h3>
                        </div>
                    </div>`).join(''); //usar join para volverlo string porque map() devuelve un array
                }
            });

        //clear search text

        search.value = '';

    } else {
        alert('PLease type a meal');
    }


}

//Fetch meal by ID
function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const meal = data.meals[0];

            addMealtoDom(meal);
        });
}


function getArea(areaID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaID}`)
        .then(res => res.json()).then(data => {
            console.log(data);
            const area = data.meals[0]

            // searchMeal(area);
        });
}







//fetch random meal from API

function randomMeal() {

    //clear meals and heading

    mealsEl.innerHTML = '';
    resultHeading.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const meal = data.meals[0];

            addMealtoDom(meal);
        });

}


//add meal to Dom
function addMealtoDom(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else{
        break;
    }
   }

single_mealEl.innerHTML = `
   <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.srtMeal}" />
   

        <div class="single-meal-info">
             ${meal.strCategory ? `<p>${meal.strCategory}</p>` :''}
             ${meal.strArea ? `<p>${meal.strArea}</p>` :''}
        </div>

        <div class="main">
           <p> ${meal.strInstructions}</p>
             <h2>Ingredients</h2>
            <ul>
                 ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
   </div>
  

   `;
   
}

// event listeners

submit.addEventListener('submit', searchMeal);
random.addEventListener('click', randomMeal);

mealsEl.addEventListener('click', e => {
    // const mealInfo = e.path.find(item => {
    // const mealInfo = e.composedPath().find(item => {
    const mealInfo = e.composedPath().find(item => {

        console.log(item);

        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }


    });

    // console.log(mealInfo);
    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        getMealById(mealID);

    }
});