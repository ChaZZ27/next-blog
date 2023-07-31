import Footer from './Footer'

describe('Footer component tests', () => {
    it('should render Footer and its content', () => {
        cy.mount(<Footer />)

        cy.get('p').contains('© 2023 NextBlog')
    })
})