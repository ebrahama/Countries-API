// dark mode tog (line-start: 12 )
// Filter by Region (line-start: 22 )

// geting country data api (line-start: 36 )
// user data search (line-start: 50 )


// more country detail (line-start: 12 )



                 //dark mode tog

const tog = document.getElementById('togo');

tog.addEventListener('click' , () => {

    document.body.classList.toggle('dark');

    });

                 // filter tog

        function op() {
            var x = document.getElementById("kaf");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }

const countriesEl = document.getElementById('countries');


                // geting coun api

 getC();

async function getC() {

	const res = await fetch('https://restcountries.com/v2/all');

	const countries = await res.json();

	displayCountries(countries);
}


                // search coun api

const searchEl = document.getElementById('search');

searchEl.addEventListener('input', e => {
	const { value } = e.target;
	const countryName = document.querySelectorAll('.cn');

	countryName.forEach(name => {
		if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
			name.parentElement.parentElement.style.display = 'block';
		} else {
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

           <p><strong>region :</strong> ${country.region}</p>

           <p><strong>capital :</strong> ${country.capital}</p>

           </section> 

       </div>
        `;

		countriesEl.appendChild(countryEl);
	});
}




////fix tom



// <!--
//                               html

//     <div class="conta">

//      <a class="bbtn" href="./index.html"> c- back</a>

//             <section class="info">
                
//                     <img class="imo" id="ims" src="design/desktop-design-home-dark.jpg" alt="country">

//                     <section class="textm">

//         <section class="texti">

//          <h2 id="nam">belgum</h2>

//          <section class="flp">

//                 <section class="int">

//                     <p>native name: belume</p>
//                     <p>poplution: 101010434</p>
//                     <p>relgion: europe</p>
//                     <p>sub relgion: west europe</p>
//                     <p>capital: berlin</p>
            
//                 </section>

//                 <section class="inb">

//                  <p>top level domain: be</p>
//                  <p>currensc: euro</p>
//                  <p>languages:dutus,french,german</p>

//                 </section>

//          </section>

//         </section>

//         <section class="textb">

//             <h4>Border countries</h4>
//             <ul>
//                 <li>dd</li>
//                 <li>dd</li>
//                 <li>dd</li>
//                 <li>dd</li>
//             </ul>
       
//         </section>
        

//                 </section>

//             </section>

//     </div>
// -->

// <!--
//        css

//        :root{
//     --Dark-Blue : hsl(209, 23%, 22%);
//     --Very-Dark-Blue-b : hsl(207, 26%, 17%);
//     --Very-Dark-Blue-t : hsl(200, 15%, 8%);
//     --Dark-Gray: hsl(0, 0%, 52%);
//     --Very-Light-Gray : hsl(0, 0%, 98%);
//     --White : hsl(0, 0%, 100%);
// }

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// body{
//     background:var(--Very-Light-Gray);

// }
//          /*  header sec  */

// header{
//     padding: 20px 15px;
//     background: var(--White);
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     margin-bottom: 20px;
//     box-shadow: 0 0 15px 2px  rgba(0, 0, 0, 0.049);
// }
// header input{
//     background: none;
//     border: none;
// }
//          /*  conta  sec  */

// .conta{
//     padding: 10px 20px;
// }

//          /*  back %tog  btn sec  */

// .bbtn{
//     color: black;
//     text-decoration: none;
//     border-radius: 5px;
//     padding: 10px 20px;
//     background: var(--White);
//     box-shadow: 0 0 15px 2px  rgba(0, 0, 0, 0.049);
// }
// #tog{
//     cursor: pointer;
//     border: 1px solid;
//     padding: 5px 10px;
// }
//         /*  info sec  */

// .imo{
//     margin: 50px auto;
//     width: 350px;
//     border-radius: 10px;
// }
// p{
//     padding-left: 10px;
//     padding-bottom: 10px;
//     color: var(--Very-Dark-Blue-t);
// }
// h4{
//     margin-left: 10px;
//     margin-bottom: 20px;
//     color: var(--Very-Dark-Blue-t);
// }
// .int{
//     margin-top: 20px;
//     margin-bottom: 30px;
// }
// .textb{
//     margin-top: 15px;
//     text-align: left;
// }
// .textb ul{
//     display: flex;
//     list-style: none;
// }
// .textb li{
//      padding: 10px 20px;
//      margin-left: 20px;
//      border-radius: 3px;
//      box-shadow: 0 0 15px 2px  rgba(0, 0, 0, 0.049);

// }

//          /*  screen sec  */
// @media(min-width:700px) {
//     .textm,.info{
//         text-align: center;
//     }
// }
//          @media(min-width:900px){
//             .textm,.info{
//                 text-align: left;
//             }
//          .info{
//              margin-top: 30px;
//              display: flex;
//             align-items: center;
//          }
//          .imo{
//             margin: 20px 50px 20px 20px;
//             width: 400px;
//          }
//          .texti{
//              width: 410px;
//          }
//          .flp{
//              align-items: baseline;
//              display: flex;
//              justify-content: space-between;
//          }
//          }
// @media(min-width:1200px){
//     .imo{
//         margin: 20px 130px 20px 120px;
//         width: 500px;
//     }
// }
    

// -->

// <!--
//                               js


//     const siri = document.getElementById("siri");
// const bhs = document.getElementById("bhs");

// const im = document.getElementById("ims");
// const nam = document.getElementById("nam");

// console.log(im,nam)


// bhs.addEventListener('click' , () =>{

//   conapi()

// })

// async function conapi(){

//   const res = await fetch("https://restcountries.com/v3.1/name/"+ siri.value);
//   const data = await res.json();
 
//   console.log(data[0])

//     im.style.img = data[0].flags
//     nam.textContent = data[0].capital
// }
// -->