const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let bd = document.createElement('p');
      let pob = document.createElement('p');
      let picp = document.createElement('img');

      pName.textContent = `${prophet.name} ${prophet.lastname}`;
      pBirthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
      pBirthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
      pPortrait.src = prophet.imageurl;
      pPortrait.alt = `${prophet.name} ${prophet.lastname} - ${prophet.order}`

      card.appendChild(name);
      card.appendChild(bd);
      card.appendChild(pob);
      card.appendChild(picp);

      document.querySelector('div.cards').appendChild(card);
  });
});