describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля


         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авт вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })

     it('Верный пароль и Не верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля


        cy.get('#mail').type('german@dolnikov1.ru'); // ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

     it('не Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля


        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio111'); // ввели не верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля


        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    it('проверка на восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля

        cy.get('#forgotEmailButton').click(); // нажал на забыл пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('Верный пароль и верный логин разным регистром', function () {
        cy.visit('https://login.qa.studio/'); // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароля


        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авт вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверить, что элемент виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })
    
})
 
