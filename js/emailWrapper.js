// const createEmail = require('./emailCreator');

// module.exports = function emailWrapper() {
// 	//Find divs with an email in them
// 	const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'gi');
// 	const $emails = $("div").filter(function () {
// 	    return validEmail.test($(this).text()); 
// 	});

// 	//Extract data from sibing divs
// 	$emails.each((index, item) => {
// 		let firstLastName;
// 		let email = $(item).text();
		
// 		const $emailDiv = $(item);
// 		$emailDiv.siblings().each((index, sibling) => {
// 			if ($(sibling).hasClass('contact-name')) {
// 				firstLastName = $(sibling).text().split(' ');
// 			}
// 		})
		
// 		//Convert to data for the required format in the email link
// 		const firstName = firstLastName[0];
// 		const body = createEmail.body(firstName, 'Full Stack Developer');
// 		const link = createEmail.link('replace-with-email-variable', 'Full Stack Web Devleoper Application', body)
// 		$(item).wrap( `<a href=${link} target=_blank></a>` );
// 	})
// 	$emails.css( "text-decoration", "underline" );
// }
