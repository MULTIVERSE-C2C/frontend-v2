describe("referrals", () => {
  beforeEach(() => {
    cy.visit("/rewards/referrals");
  });

  it("render in initial state", () => {
    cy.dataCy("connect-wallet").should("be.visible");
  });

  it("display referral links and rewards on connected wallet", () => {
    cy.connectInjectedWallet("connect-wallet");

    cy.dataCy("referral-links").should("be.visible");
    cy.dataCy("rewards-table").should("be.visible");
  });
});
