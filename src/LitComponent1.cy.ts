import { html } from 'lit';
import { LitComponent1 } from './LitComponent1';

it('renders the default component', () => {
  cy.mount(new LitComponent1(), html`<lit-component1></lit-component1>`);
  cy.contains('h2', 'Hey there');
});

it('renders the given title and counter', () => {
  cy.mount(
    new LitComponent1(),
    html`<lit-component1 title="World" counter="10"></lit-component1>`
  );
  cy.contains('h2', 'World');
  cy.contains('10!');
  cy.contains('button', 'increment').click().click();
  cy.contains('12!');
});
