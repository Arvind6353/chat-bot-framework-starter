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
			PAGE_ACCESS_TOKEN: "EAAFDqCQI3lIBAJJrPm3wDyoPf1EKIB9BzZCZAZBy5HRalPAXdrigiZAwtJXegydYEVO2NNFJgwJ2qYdxHZACeVPZBW4l6itik2c298WswvXJe3pUZBDez6yFrDbbZCcEwYqeUcCBKEsoDnDRCvRmsFsnyy4jEtWIl2MSaLF3dhCsBwZDZD",
			VERIFY_TOKEN: "starter_bot_token"
		}


	}
} else {
	module.exports = require('./development.json');
}