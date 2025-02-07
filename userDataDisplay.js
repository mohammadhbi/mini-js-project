async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
  
      const userCardsContainer = document.getElementById('user-cards');

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
  
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
        `;
  
        userCardsContainer.appendChild(userCard);
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  window.onload = fetchUserData;
  
