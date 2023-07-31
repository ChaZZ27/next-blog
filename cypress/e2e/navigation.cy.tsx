import Header from '@components/header/Header';

describe('Navigation elements', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('should render Header element', () => {
        cy.get('header')
    })
    
    it('should render two Nav items "Home" and "Blog" and Title', () => {
        cy.get('header')
        cy.get('a[class*="title"]').contains('React Blog')
        cy.get('a[title*="Home"]').contains('Home')
        cy.get('a[title*="Blog"]').contains('Blog')
    })
})

describe('Navigation links', () => {
    it('should redirect to /blog page', () => {
        cy.visit('http://localhost:3000')

        cy.get('a[title*="Blog"]').contains('Blog').click()
        cy.url().should('include', '/blog')
    })

    it('should redirect to home "/" page from /blog', () => {
        cy.visit('http://localhost:3000/blog')

        cy.get('a[title*="Home"]').contains('Home').click()
        
        cy.url().should('include', '/')
    })
})