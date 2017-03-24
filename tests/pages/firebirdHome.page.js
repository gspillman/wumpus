class FirebirdSubmissionPage {
	constructor () {

		this.defaultSite = 'http://display-qa.ugc.bazaarvoice.com/common/util/clientTestPage.html?client=testcustomer-firebird-smoke&site=Smoke%20Tests&locale=en_US';
		this.pageTitle = 'Test Client Integration Page';
		this.writeReviewButton = '.bv-write-review';
		this.askQuestionButton = '.bv-ask-question';

		this.bvRatingStars = '.bv-rating-stars';
		this.bvRatingStarsShown = '.bv-rating-stars-on';
		this.bvRatingStarsNotShown = '.bv-rating-stars-off';
		this.bvRatingNumber = '.bv-rating';
		this.bvRatingRatio = '.bv-rating-ratio-count';
		this.percentRecommends = '.bv-percent-recommend-container';
		this.trustMarkIcon = '.bv-trustmarkIcon-image';

		//is this a legal selector
		this.bvDataContentReviews = '//div[@id=BVRRSearchContainer]/div/div/div/div/div/ul/li/a/span'; 	

		this.contentSearchField = '#bv-texfild-search-contentSearch1';
		this.contentDataContainer = '.bv-content-data-count';

	}

}

module.exports = FirebirdSubmissionPage;

	
