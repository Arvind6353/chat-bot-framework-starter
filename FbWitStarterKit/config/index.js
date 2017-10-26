'use strict';
if(process.env.NODE_ENV === 'production') {
	module.exports = {
		WIT_ACCESS_TOKEN: process.env.WIT_ACCESS_TOKEN,
		// FB: {
		// 	PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
		// 	VERIFY_TOKEN: process.env.VERIFY_TOKEN,
		// 	APP_SECRET: process.env.APP_SECRET
		// }
		FB: {
			PAGE_ACCESS_TOKEN: "EAAFDqCQI3lIBAMlVNLba4hahzEVajhxxpGqZBnt9MEFYpBBkfDZAFzcBPd1EMYLfr19wpiYxkZBOaPZBsqYCYuu5SE8lZB2oBZC1glNpyZCxB97Q82re4za4YoeZCAvDDZC9QbmbK7qvzZCXWz8Nbj2s9ZBkrl1R0vRerjZCbfoAkZBfhyAZDZD",
			VERIFY_TOKEN: "starter_bot_token"
		}


	}
} else {
	module.exports = require('./development.json');
}