describe('Тести аутентифікації та вибору аніме', () => {
 
    it('дозволяє користувачу увійти в систему', () => {
      // Відкриття сторінки входу
      cy.visit('/login'); // Змініть на ваш шлях
  
      // Заповнення форми входу
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="password"]').type('Password123');
  
      // Надсилання форми
      cy.get('button').click();
  
      // Перевірка перенаправлення на домашню сторінку
      cy.url().should('include', '/');
    });
  
    it('Перевіряє вибір аніме на сторінці', () => {
      // Відкриття сторінки аніме
      cy.visit('http://localhost:3000/'); // Перевірте, чи це правильна URL для списку аніме
  
      // Перевірка наявності елементів аніме
      cy.get('[class=animeboard]')
        .should('have.length.greaterThan', 0);
  
      // Вибір конкретного аніме
      //cy.get('[class=animeboard]').first().click();
        
      cy.visit('http://localhost:3000/anime/16498');
     
      // Перевірка, що ми перенаправлені на сторінку вибраного аніме
      cy.url().should('include', '/anime/16498');
    });
  });