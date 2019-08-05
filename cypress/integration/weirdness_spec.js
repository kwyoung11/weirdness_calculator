// https://github.com/cypress-io/cypress/issues/1570#issuecomment-450966053
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

describe('Adding five gifs should allow user to calculate weirdness score', function() {
	before("navigate to page", function() {
    	cy.visit("http://localhost:3000");
  	});

	it('should be able to add multiple gifs', function() {
		cy.get('input[type=range]').then(($range) => {
	      const range = $range[0];
	      nativeInputValueSetter.call(range, 7);
	      range.dispatchEvent(new Event('change', { value: 7, bubbles: true }));
	    });
		cy.get('input[name="searchTerm"]').type("a");
		cy.get(".Search button").click();
		cy.wait(1000);
		cy.get(".SearchResult button").click();
		
		cy.get('input[type=range]').then(($range) => {
	      const range = $range[0];
	      nativeInputValueSetter.call(range, 3);
	      range.dispatchEvent(new Event('change', { value: 3, bubbles: true }));
	    });
		cy.get('input[name="searchTerm"]').type("b");
		cy.get(".Search button").click();
		cy.wait(1000);
		cy.get(".SearchResult button").click();
		
		cy.get('input[type=range]').then(($range) => {
	      const range = $range[0];
	      nativeInputValueSetter.call(range, 1);
	      range.dispatchEvent(new Event('change', { value: 1, bubbles: true }));
	    });
		cy.get('input[name="searchTerm"]').type("c");
		cy.get(".Search button").click();
		cy.wait(1000);
		cy.get(".SearchResult button").click();
		
		cy.get('input[type=range]').then(($range) => {
	      const range = $range[0];
	      nativeInputValueSetter.call(range, 6);
	      range.dispatchEvent(new Event('change', { value: 6, bubbles: true }));
	    });
		cy.get('input[name="searchTerm"]').type("d");
		cy.get(".Search button").click();
		cy.wait(1000);
		cy.get(".SearchResult button").click();
		
		cy.get('input[type=range]').then(($range) => {
	      const range = $range[0];
	      nativeInputValueSetter.call(range, 5);
	      range.dispatchEvent(new Event('change', { value: 5, bubbles: true }));
	    });
		cy.get('input[name="searchTerm"]').type("e");
		cy.get(".Search button").click();
		cy.wait(1000);
		cy.get(".SearchResult button").click();
		
		cy.get(".LikedGifs button").click();
		// 7 + 3 + 1 + 6 + 5 / 5 = 4.4 => 4 
		cy.get('.ResultPage .ResultPage__avg-weirdness').should("contain", "4");
	});
});