var assert = require('assert');

var FirebirdSubmissionPage = require('../../pages/firebirdHome.page');
var firebirdSubmissionPage = new FirebirdSubmissionPage();
var RatingsAndReviewForm = require('../../pages/reviewSubmit.page');
var ratingsAndReviewForm = new RatingsAndReviewForm();

describe('Firebird Review Submission Form', function() {
    
	before(function (done) {
            browser.url(firebirdSubmissionPage.defaultSite);
            browser.waitForVisible(firebirdSubmissionPage.writeReviewButton);
            browser.click(firebirdSubmissionPage.writeReviewButton);
  	});

    it('should let the user click on any of the review stars icon', function () {
        browser.waitForVisible(ratingsAndReviewForm.oneStar);
        browser.click(ratingsAndReviewForm.oneStar);
        browser.click(ratingsAndReviewForm.twoStars);
        browser.click(ratingsAndReviewForm.threeStars);
        browser.click(ratingsAndReviewForm.fourStars);
        browser.click(ratingsAndReviewForm.fiveStars);
    });

    it('should let the user enter text into the review title and body fields', function () {
        browser.waitForVisible(ratingsAndReviewForm.reviewTitleField);
        browser.setValue(ratingsAndReviewForm.reviewTitleField, 'This is my review title');
        browser.setValue(ratingsAndReviewForm.reviewTextField, 'This is a reivew of a product I bought.');
    });

    it('should allow the user to toggle if they recommend or do not recommend a product they review', function () {
        browser.waitForVisible(ratingsAndReviewForm.yesRecommendButton);
        browser.click(ratingsAndReviewForm.yesRecommendButton);
        browser.click(ratingsAndReviewForm.noRecommendButton);
    });

    it('should let the user enter a nickname and a valid email to the the relative review form fields', function () {
        browser.click(ratingsAndReviewForm.nicknameField);
        browser.setValue(ratingsAndReviewForm.nicknameField, 'BobbyDigital9000');
        browser.click(ratingsAndReviewForm.emailField);
        browser.setValue(ratingsAndReviewForm.emailField, 'bobby.digital9000@bazaarvoice.com');
    });

});