import ContactModal from ".";

describe("<ContactModal />", () => {
  beforeEach(() => {
    cy.viewport(900, 600);
  });

  it("should accept user input", () => {
    const onClose = cy.stub().as("onClose");

    cy.mount(
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <ContactModal onClose={onClose} />
      </>
    );

    cy.findByRole("textbox", { name: /name/i })
      .should("exist")
      .type("Test name");

    cy.findByRole("textbox", { name: /email/i })
      .should("exist")
      .type("testEmail@email.com");

    cy.findByRole("button", { name: /cancel/i })
      .should("exist")
      .click();

    cy.get("@onClose").should("have.been.calledOnce");
  });
});
