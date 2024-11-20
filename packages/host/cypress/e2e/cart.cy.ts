describe('Tests', () => {
  beforeEach(() => {
    cy.mockCartModule();
  });
  it('should handle something', () => {
    cy.visit('/');

    // do something, choose products

    cy.visit('/cart');

    // check mocked cart module

    // other logic
  });
});
