describe('Payroll App', () => {
  it('renders correctly', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('contain', 'Payroll App');
  });
  
  it('allows user to create a new employee', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]').type('Jane Doe');
    cy.get('input[name="email"]').type('jane.doe@example.com');
    cy.get('button[type="submit"]').click();
    cy.get('div.alert').should('contain', 'Employee created successfully');
  });
});