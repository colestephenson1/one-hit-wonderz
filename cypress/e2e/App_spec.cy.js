// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/oneHitWonderz', { fixture: 'songData' } )
    .visit("http://localhost:3000/")
  })
  it('should visit the website', () => {
    cy.visit("http://localhost:3000/")
  })
  it('should show a logo', () => {
    cy.get('.logo').should('be.visible')
      .should('have.attr', 'src').should('include', "/static/media/logo-ohw.480bd4ee0ae879f831fa.png")
  })
  it("should have decade cards", () => {
    cy.get('[class*=Sixties]').contains('SIXTIES').should('have.css', 'background-image')
    .get('.Seventies').contains('SEVENTIES').should('have.css', 'background-image')
    .get(".Eighties").contains('EIGHTIES').should('have.css', 'background-image')
    .url().should('eq', 'http://localhost:3000/')
  })
  it('should see a list of songs when user clicks on a decade', () => {
    cy.get('.Sixties').click()
    .get('.spotify').should('have.length', 2)
    .get('iframe').first().should('have.attr', 'src').should('include', '0xxZY5C9xxij3D1HkzbnfC')
    .get('iframe').last().should('have.attr', 'src').should('include', '4anUinKv803lyDD1vaSXhU')
    .get('button').should('be.visible')
    .url().should('eq', 'http://localhost:3000/oneHitWonders/Sixties')
  })
  it('should be able to see another list of songs when user clicks on a different decade', () => {
    cy.get('.Seventies').click()
    .get('.spotify').should('have.length', 2)
    .get('iframe').first().should('have.attr', 'src').should('include', '1HOMkjp0nHMaTnfAkslCQj')
    .get('iframe').last().should('have.attr', 'src').should('include', '40NRm1ZLvZpUSCUXAGGZ8J')
    .get('button').should('be.visible')
    .url().should('eq', 'http://localhost:3000/oneHitWonders/Seventies')
  })
  it('should be able to filter by mood', () => {
    cy.get('.Sixties').click()
    .get('select[name="mood"]').select('FUNKY').should('have.value', 'funky')
    .get('button').first().click()
    .get('iframe').should('have.attr', 'src').should('include', '0xxZY5C9xxij3D1HkzbnfC')
    .get('.spotify').should('have.length', 1)
  })
  it('should be able to see the details of a clicked song', () => {
    cy.get('.Sixties').click()
    .get('.song-details-button').first().click()
    .get(".song-title-details").contains('MONSTER MASH')
    .get('h3').contains("Bobby Pickett")
    .get('p').contains("Born in Somerville, Massachusetts, Pickett watched many horror films as a result of his father's position as a local movie theater manager. He started improvising impressions of Hollywood film stars at a young age. At a turning point in his career, Pickett was a vocalist for local swing band Darren Bailes and the Wolf Eaters. He would later serve from 1956–1959 in the United States Army, stationed in Korea for a period of time.He co-wrote his signature song, 'Monster Mash', with Leonard Capizzi in May 1962 as a spoof of popular contemporary dance crazes.")
    .url().should('eq', 'http://localhost:3000/oneHitWonders/Sixties/Monster%20Mash')
  })
  it('should be able to go back to the home page when viewing song details', () => {
    cy.get('.Sixties').click()
    .get('.song-details-button').first().click()
    .get('.logo').click()
    .url().should('eq', 'http://localhost:3000/')
  })
  it('should be able to see an error message with an invalid url. That message should be a link to home', () => {
    cy.visit('http://localhost:3000/foo')
    .get('.error')
    .should('be.visible')
    .click()
    .url()
    .should('eq', 'http://localhost:3000/')
    .get('.Seventies').should('be.visible')
    .get('.Eighties').should('be.visible')
  })

})
