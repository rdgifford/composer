const $ = jQuery;
const createEmail = {
	body: function (name, role) {
		const createIntro = function (name) {
			if (name) {
				return 'Hi ' + name + ','
			} else {
				return 'Dear Hiring Manager,'
			}
		}

		const body = `${createIntro(name)}

		My name is Guy and I submitted my resume for a ${role}. I’m not sure who the hiring manager is for this position but I'm extremely interested in the opportunity, and I just wanted to touch base to see if there’s anything that I could provide to help show my fit for the role and perhaps even get in touch with the hiring manager of the position.

		Thank you for your time and kind consideration.

		Regards,

		Guy`
		return body;
	},
	link: function (address, subject, body) {
		const encSubject = encodeURI(subject)
		const encBody = encodeURI(body)
		const encAdd = encodeURI(address)
		const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${encAdd}&su=${encSubject}&body=${encBody}`
		return link;
	},
	subject: function() {
		return 'Dummy subject'
	}
}

function emailWrapper() {
	//Find divs with an email in them
	const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'gi');
	const $emails = $("div").filter(function () {
	    return validEmail.test($(this).text()); 
	});

	//Extract data from sibing divs
	$emails.each((index, item) => {
		let firstLastName;
		let email = $(item).text();
		
		const $emailDiv = $(item);
		$emailDiv.siblings().each((index, sibling) => {
			if ($(sibling).hasClass('contact-name')) {
				firstLastName = $(sibling).text().split(' ');
			}
		})
		
		//Convert to data for the required format in the email link
		const firstName = firstLastName[0];
		const body = createEmail.body(firstName, 'Full Stack Developer');
		const link = createEmail.link('replace-with-email-variable', 'Full Stack Web Devleoper Application', body)
		$(item).wrap( `<a href=${link} target=_blank></a>` );
	})
	$emails.css( "text-decoration", "underline" );
}

chrome.runtime.sendMessage({}, function(response) {
	console.log('sending message')
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		emailWrapper();
		console.log("Sendmessage in document ready complete");
	}
	}, 10);
});