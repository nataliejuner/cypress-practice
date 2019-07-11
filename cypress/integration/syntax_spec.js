describe('Will go to Syntax Solutions', () => {
	it('visits syntax solutions', () => {
		cy.visit('https://glacial-chamber-74968.herokuapp.com/')
	})
	it('logins in and scrolls to bottom and back up', () => {
		cy.get('[id="user_user_name"]')
			.type('nathalee')
		cy.get('[id="user_email"]')
		.eq(1)
		.type('herro1@gmail.com')
		cy.get('[id="user_password"]')
		.eq(1)
			.type('helloworld')
		cy.get('[id="user_password_confirmation"]')
			.type('helloworld')
		cy.get('input').contains('Signup')
			.click()
			
	// rest of test but the above portion does not let me get past login/signup because it says my changes were rejected
	// 	cy.scrollTo('bottom')
	// 	cy.wait(1000)
	// 	cy.scrollTo('top')
	// })
	// it('clicks on all filters', () => {
	// 	cy.contains('Oldest')
	// 		.click()
	// 	cy.wait(1500)
	// 	cy.contains('Most Popular')
	// 		.click()
	// 	cy.wait(1500)
	// 	cy.contains('My Cards')
	// 		.click()
	})
})