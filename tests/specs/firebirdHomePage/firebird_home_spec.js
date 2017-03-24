var assert = require('assert');

var FirebirdSubmissionPage = require('../../pages/firebirdHome.page');
var firebirdSubmissionPage = new FirebirdSubmissionPage();

describe('Firebird Home Page', function() {
    
	before(function (done) {
            browser.url(firebirdSubmissionPage.defaultSite);
  	});

    it('should have the right title', function () {
         var title = browser.getTitle();
        assert.equal(title, firebirdSubmissionPage.pageTitle);
    });

    it('should let the user click on the Write a Review button', function () {
    	browser.waitForVisible(firebirdSubmissionPage.writeReviewButton);
    	browser.click(firebirdSubmissionPage.writeReviewButton);
    });

    it('should make sure the trustmark icon is viewable', function () {
    	assert.equal(true, browser.isVisible(firebirdSubmissionPage.trustMarkIcon), 'The trustmark icon is visible');
    });

    it('should see the ratings label and data count containers texts are the same', function () {
    	browser.isVisible(firebirdSubmissionPage.bvRatingRatio);
    	assert.equal(true, browser.getText(firebirdSubmissionPage.bvRatingRatio).toString().includes('This action will navigate to reviews'), 'The rating ratio text includes text that describes what it does');

    });

});