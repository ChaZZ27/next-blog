import Loader from './Loader'

describe('Loader component  tests', () => {
    it('should render Loader', () => {

        cy.mount(<Loader />)
        cy.contains('Loading...')
        
    })
})