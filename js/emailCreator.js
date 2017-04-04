// module.exports = {
// 	body: function (name, role) {
// 		const createIntro = function (name) {
// 			if (name) {
// 				return 'Hi ' + name + ','
// 			} else {
// 				return 'Dear Hiring Manager,'
// 			}
// 		}

// 		const body = `${createIntro(name)}

// 		My name is Guy and I submitted my resume for a ${role}. I’m not sure who the hiring manager is for this position but I'm extremely interested in the opportunity, and I just wanted to touch base to see if there’s anything that I could provide to help show my fit for the role and perhaps even get in touch with the hiring manager of the position.

// 		Thank you for your time and kind consideration.

// 		Regards,

// 		Guy`
// 		return body;
// 	},
// 	link: function (address, subject, body) {
// 		const encSubject = encodeURI(subject)
// 		const encBody = encodeURI(body)
// 		const encAdd = encodeURI(address)
// 		const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${encAdd}&su=${encSubject}&body=${encBody}`
// 		return link;
// 	},
// 	subject: function() {
// 		return 'Dummy subject'
// 	}
// }