describe('go to site', () => {
	it('visits site', () => {
		cy.visit('https://www.target.com')
		cy.get('[href="#categoriesMenu"]').eq(1).click()
		cy.get('[class*="NavigationListItem"]').eq(3).click()
		cy.contains('Explore all').click()
		cy.location().should((loc) => {
			expect(loc.href).to.include('/c/men/-/N-18y1l')
		})
		cy.scrollTo('center')
		cy.contains('Accessories').click()
		cy.contains('Hats').click()
		cy.location().should((loc) => {
			expect(loc.href).to.include('/c/hats-men-s-accessories/-/N-55ktr')
		})
		cy.get('[type=checkbox]').eq(0).check({force: true })
		cy.get('[type=checkbox]').eq(1).check({force: true })
		cy.wait(1200)
		cy.location().should((loc) => {
			expect(loc.href).to.include('c/hats-men-s-accessories/-/N-55ktrZ5zl7wZ5zkty?storeIdList=201&Nao=0')
		})
		cy.get('[label="in stores"]').click()
		cy.get('button').click()
	})
})