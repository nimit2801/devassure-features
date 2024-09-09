describe("ChatGPT Interaction", () => {
  it("should send a prompt and log the response", () => {
    // Visit the ChatGPT website
    cy.visit("https://chat.openai.com/");

    // wait for 2 secs
    cy.wait(2000);
    // Wait for the page to load and the input field to be visible
    cy.get("#prompt-textarea").should("be.visible");

    cy.wait(2000);
    // Type a prompt into the input field
    cy.get("#prompt-textarea").type("Hello, ChatGPT!{enter}"); // Adjust the selector if necessary

    // Wait for the response to appear
    // cy.get('[data-id="message-list"]')
    //   .should("contain.text", "Hello, ChatGPT!")
    //   .then(() => {
    //     // Assuming the response appears in the message list
    //     cy.get('[data-id="message-list"]')
    //       .last() // Get the latest message in the list
    //       .invoke("text") // Get the text content of the message
    //       .then((responseText) => {
    //         // Log the response to the Cypress console
    //         cy.log("ChatGPT response:", responseText);
    //         console.log("ChatGPT response:", responseText); // Also logs to the browser's console
    //       });
    //   });
  });
});
