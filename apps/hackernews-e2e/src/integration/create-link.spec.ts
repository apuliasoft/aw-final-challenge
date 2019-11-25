import {
  getDescriptionInp,
  getUrlInp,
  getSubmitBtn
} from '../support/create-link.po';

describe('Create Link', () => {
  beforeEach(function() {
    cy.visit('/create');
  });

  beforeEach(function() {
    cy.fixture('create-link/new-link.json').as('newLink');
  });

  it('should prevent to save an invalid link', function() {
    getSubmitBtn().should('be.disabled', true);
  });

  it('should permit to save a valid link', function() {
    cy.server({ force404: true });

    cy.route('POST', '**/link', '@newLink').as('save');

    getDescriptionInp().type(this.newLink.description);
    getUrlInp().type(this.newLink.url);
    getSubmitBtn().click();

    cy.wait('@save').then(xhr => {
      cy.wrap(xhr.request.body).should('be.deep.equal', this.newLink);
    });

    cy.url().should('contain', '/new');
  });
});
