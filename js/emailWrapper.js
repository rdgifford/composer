// const $ = jQuery;
const createEmail = {
	link: function (address, subject, body) {
		const encSubject = encodeURI(subject)
		const encBody = encodeURI(body)
		const encAdd = encodeURI(address)
		const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${encAdd}&su=Subject&body=body`
		return link;
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
		let email = $(item).text();
		
		const link = createEmail.link(email)
		$(item).wrap( `<a href=${link} target=_blank></a>` );
	})
	$emails.css( "text-decoration", "underline" );
}

chrome.runtime.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		emailWrapper();
	}
	}, 10);
});