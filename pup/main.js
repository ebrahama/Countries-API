// geting coun api


  getC();

  async function getC() {
  
    const res = await fetch('https://restcountries.com/v2/all');
  
    const countries = await res.json();
  
    displayCountries(countries);

  }


//dark mode tog


const tog = document.getElementById('togo');

tog.addEventListener('click' , () => {

    document.body.classList.toggle('dark');

    });

const countriesEl = document.getElementById('countries');



                // search coun api



const searchEl = document.getElementById('search');

searchEl.addEventListener('input', e => {

	const { value } = e.target;

	const countryName = document.querySelectorAll('.cn');

	countryName.forEach(name => {

		if (name.innerText.toLowerCase().includes(value.toLowerCase())) {

			name.parentElement.parentElement.style.display = 'block';

		} 
    else {

			name.parentElement.parentElement.style.display = 'none';

		}

	});

});



                // func for coun api



function displayCountries(countries) {

countriesEl.innerHTML = '';

countries.forEach(country => {

		const countryEl = document.createElement('div');

		countryEl.classList.add('countries');

        countryEl.innerHTML = `
      <div class="card" >

         <img src="${country.flag}" alt="country">

           <section class="texto">

           <h1 class="cn">${country.name}</h1>

           <p><strong>poplation :</strong> ${country.population}</p>

           <p class="crl"><strong>region:</strong> ${country.region}</p>

           <p><strong>capital :</strong> ${country.capital}</p>

           <p><strong>Languages :</strong> ${country.languages.map(language => language.name)}</p>

           </section> 

       </div>
        `;

		countriesEl.appendChild(countryEl);

	});

}


  // filter tog


  function op() {

  var x = document.getElementById("kaf");

  if (x.style.display === "none") {

    x.style.display = "block";

  } 
  else {

    x.style.display = "none";

  }

}


//fun for filter


const  filto = document.getElementById('kaf');

const regionFilters = filto.querySelectorAll('li');

regionFilters.forEach(filter => {

	filter.addEventListener('click', () => {

		const value = filter.innerText;

		const countryRegion = document.querySelectorAll('.crl');

		countryRegion.forEach(region => {

			if (region.innerText.includes(value) || value === 'all region') {

        region.parentElement.parentElement.style.display = 'block';
			}
       else {
				region.parentElement.parentElement.style.display = 'none';
			}

		});
	});
});