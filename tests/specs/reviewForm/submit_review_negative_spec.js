var assert = require('assert');

var FirebirdSubmissionPage = require('../../pages/firebirdHome.page');
var firebirdSubmissionPage = new FirebirdSubmissionPage();
var RatingsAndReviewForm = require('../../pages/reviewSubmit.page');
var ratingsAndReviewForm = new RatingsAndReviewForm();

describe('Firebird Review Submission Form - Negative Tests', function() {
    
	before(function (done) {
            browser.url(firebirdSubmissionPage.defaultSite);
            browser.waitForVisible(firebirdSubmissionPage.writeReviewButton);
            browser.click(firebirdSubmissionPage.writeReviewButton);
  	});

    it('should invalidate the email field if an bad email address is entered', function () {
        browser.waitForVisible(ratingsAndReviewForm.emailField);
        browser.click(ratingsAndReviewForm.emailField);
        browser.setValue(ratingsAndReviewForm.emailField, 'bademail');
        browser.click(ratingsAndReviewForm.nicknameField);
        browser.isVisible(ratingsAndReviewForm.helperTextContainer);
        browser.isVisible(ratingsAndReviewForm.negativeHelperIcon);
    });

});