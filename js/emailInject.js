// const $ = jQuery;
const createEmail = {
	body: function (name, role, company) {
		const createIntro = function (name) {
			if (name) {
				return 'Hi ' + name + ','
			} else {
				return 'Dear Hiring Manager,'
			}
		}

		const body = `${createIntro(name)}

		My name is Guy, I'm a big fan of ${company} and also a Full Stack Dev. I hope you don't mind me reaching out like this, but do you know of any current openings at ${company} for a Full Stack Dev? I did look at the careers page but I thought I'd reach out directly.		
		
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
	subject: function(company) {
		return `Full Stack Developer Positions at ${company}`
	}
}

function exhaustInfiniteScroll(callback) {
    var i = 0;
    var intervalsSinceLoading = 0;
    var infiniteScrollLoading;
    var scrollingDown = setInterval(() => {
        console.log(i++);
        infiniteScrollLoading = $('div div.company-info-div div div div.infinite-list-item.infinite-scroll-loading-container').length > 0;
        if(!infiniteScrollLoading) {
            intervalsSinceLoading++
			console.log(intervalsSinceLoading);
                document.body.scrollTop = 695;
            if(intervalsSinceLoading > 5 || i > 100) {
				clearInterval(scrollingDown);
				console.log('Finished loading entries');
                setTimeout(function() {
                    callback();
                }, 5000);
            }
        } else {
            intervalsSinceLoading = 0;
        }
        document.body.scrollTop = document.body.scrollHeight;
    }, 100)
}

function filterLeads(str, callback) {
    console.log('filtering leads');
    $('div div.company-info-div div div div.contact').each((i, lead) => {
        let title = $(lead).find('.contact-title').text()

        if(!title.includes(str)) {
            lead.remove()
        }
    })
    callback.call(this);
}

function emailWrapper() {
	console.log('Email wrapper run')
	//Find divs with an email in them
	const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'gi');
	const $emails = $("div").filter(function () {
	    return validEmail.test($(this).text()); 
	});
	const company = $('.company-info-name').text();

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
		const body = createEmail.body(firstName, 'Full Stack Developer', company);
		const link = createEmail.link(email, createEmail.subject(company), body)
		$(item).wrap( `<a href=${link} target=_blank></a>` );
	})
	$emails.css( "text-decoration", "underline" );
}

function emailInject() {
    let filter = filterLeads.bind(this, 'Recruit', emailWrapper)
    exhaustInfiniteScroll(filter);
}

chrome.runtime.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		emailWrapper();
	}
	}, 10);
});
