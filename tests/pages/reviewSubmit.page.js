class WriteReviewPage {
	constructor () {

		//The page this object class referrs to 
		this.defaultSite = 'http://display-qa.ugc.bazaarvoice.com/common/util/clientTestPage.html?client=testcustomer-firebird-smoke&site=Smoke%20Tests&locale=en_US';
		
		//Selectors for the primary star rating widget at the the top of the form
		this.oneStar = '#bv-radio-rating-1';
		this.twoStars = '#bv-radio-rating-2';
		this.threeStars = '#bv-radio-rating-3';
		this.fourStars = '#bv-radio-rating-4';
		this.fiveStars = '#bv-radio-rating-5';

		//Review title and body text field selectors
		this.reviewTitleField = '#bv-text-field-title';
		this.reviewTextField = '#bv-textarea-field-reviewtext'

		//Add media button selectors
		this.addPhotoButton = '.bv-btn-add-photo';
		this.addPhotoVideo = '.bv-btn-add-video';
		this.addMediaLabel = '.bv-review-photo-actions-label';
		
		//Do you recommend this product yes/no buttons
		this.yesRecommendButton = '#bv-radio-isrecommended-true-label';
		this.noRecommendButton = '#bv-radio-isrecommended-false-label';

		//Reviewer nickname and email text fields
		this.nicknameField = '#bv-text-field-usernickname';
		this.emailField = '#bv-email-field-hostedauthentication_authenticationemail';

		//Age and gender selectors
		this.ageSelectMenu = '#bv-select-field-contextdatavalue_Age';
		this.genderSelectMenu = '#bv-select-field-contextdatavalue_Gender';

		//Product quality star widget selectors
		this.oneQualityStar = '#bv-radio-rating_Quality1';
		this.twoQualityStars = '#bv-radio-rating_Quality2';
		this.threeQualityStars = '#bv-radio-rating_Quality3';
		this.fourQualityStars = '#bv-radio-rating_Quality4';
		this.fiveQualityStars = '#bv-radio-rating_Quality5';

		//Value for your dollar rating widget
		this.oneValueStar = '#bv-radio-rating_Value1';
		this.twoValueStars = '#bv-radio-rating_Value2';
		this.threeValueStars = '#bv-radio-rating_Value3';
		this.fourValueStars = '#bv-radio-rating_Value4';
		this.fiveValueStars = '#bv-radio-rating_Value5';

		//Fit and finish rating widget
		this.fitRatingOne = '#bv-radio-rating_Fit-1-label';
		this.fitRatingTwo = '#bv-radio-rating_Fit-2-label';
		this.fitRatingThree = '#bv-radio-rating_Fit-3-label';
		this.fitRatingFour = '#bv-radio-rating_Fit-4-label';
		this.fitRatingFive = '#bv-radio-rating_Fit-5-label';

		//From a scale of 1-10, how would your recommend this to a friend widget selectors
		this.recommendFriendButtonZero = '#bv-radio-netpromoterscore-0-label';
		this.recommendFriendButtonOne = '#bv-radio-netpromoterscore-1-label';
		this.recommendFriendButtonTwo = '#bv-radio-netpromoterscore-2-label';
		this.recommendFriendButtonThree = '#bv-radio-netpromoterscore-3-label';
		this.recommendFriendButtonFour = '#bv-radio-netpromoterscore-4-label';
		this.recommendFriendButtonFive = '#bv-radio-netpromoterscore-5-label';
		this.recommendFriendButtonSix = '#bv-radio-netpromoterscore-6-label';
		this.recommendFriendButtonSeven = '#bv-radio-netpromoterscore-7-label';
		this.recommendFriendButtonEight = '#bv-radio-netpromoterscore-8-label';
		this.recommendFriendButtonNine = '#bv-radio-netpromoterscore-9-label';
		this.recommendFriendButtonTen = '#bv-radio-netpromoterscore-10-label';

		//Agree to terms and submit controls
		this.aggreeToTermsCheckbox = '#bv-checkbox-agreetotermsandconditions';
		this.reviewSubmitButton = '.bv-form-actions-submit';

		//Inline help text container
		this.helperTextContainer = '.bv-helper-label';
		this.negativeHelperIcon = '.bv-helper-icon-negative';
	}

}

module.exports = WriteReviewPage;