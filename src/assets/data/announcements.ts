export type Announcements = {
	icon: 'new.png' | 'horn.png' | 'old.png' | 'closed.png';
	category: string;
	title: string;
	link: string;
};

const announcements: Announcements[] = [
	// {
	// 	icon: 'new.png',
	// category:'',
	// 	title: '',
	// 	link: 'assets/files/',
	// },
	{
		icon: 'new.png',
		category: 'Booklet दरपत्रके अटी व शर्ती',
		title: 'Booklet दरपत्रके अटी व शर्ती',
		link: 'assets/files/Booklet दरपत्रके अटी व शर्ती.pdf',
	},
	{
		icon: 'new.png',
		category:
			'ADVERTISE booklet तयार करून छपाई करणेकरिता IN PUNE DISTRICTS (INCLUDING PCMC) दरपत्रके मागविण्यात येत आहेत',
		title: 'ADVERTISE booklet तयार करून छपाई करणेकरिता IN PUNE DISTRICTS (INCLUDING PCMC) दरपत्रके मागविण्यात येत आहेत',
		link: 'assets/files/ADVERTISE booklet तयार करून छपाई करणेकरिता IN PUNE DISTRICTS (INCLUDING PCMC) दरपत्रके मागविण्यात येत आहेत.pdf',
	},
	{
		icon: 'new.png',
		category: 'MPSC (STATE SERVICES) 2021-22 COACHING FIRST WAITING LIST',
		title: 'MPSC (STATE SERVICES) 2021-22 COACHING FIRST WAITING LIST',
		link: 'http://old.sarthi-maharashtragov.in/en/node/4',
	},
	{
		icon: 'new.png',
		category:
			'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ तारीख - 20.11.2021',
		title: 'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ तारीख - 20.11.2021',
		link: 'assets/files/UPSC 2022.pdf',
	},
	{
		icon: 'new.png',
		category:
			'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ तारीख - 20.11.2021',
		title: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ तारीख - 20.11.2021',
		link: 'assets/files/CJJD & JMFC.pdf',
	},
	{
		icon: 'new.png',
		category:
			'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ तारीख - 20.11.2021',
		title: 'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ तारीख - 20.11.2021',
		link: 'assets/files/MPSC MES.pdf',
	},
	{
		icon: 'new.png',
		category:
			'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ तारीख - 20.11.2021',
		title: 'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ तारीख - 20.11.2021',
		link: 'assets/files/SSC.pdf',
	},
	{
		icon: 'new.png',
		category:
			'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021 मुदतवाढ तारीख - 20.11.2021',
		title: 'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021 मुदतवाढ तारीख - 20.11.2021',
		link: 'assets/files/MPSC Group B.pdf',
	},
	{
		icon: 'new.png',
		category: 'MPSC (STATE SERVICES) 2021-22 COACHING',
		title: 'ELIGIBLE LIST OF CANDIDATES ',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/MPSC%20STATE%20SERVICE%20-%20Eligible%20Candidates%20List.pdf',
	},
	{
		icon: 'new.png',
		category: 'MPSC (STATE SERVICES) 2021-22 COACHING',
		title: 'NOT ELIGIBLE LIST OF CANDIDATES',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/NOT%20ELIGIBLE%20%282%29.pdf',
	},
	{
		icon: 'new.png',
		category: 'MPSC (STATE SERVICES) 2021-22 COACHING',
		title: 'FINAL CALL FOR DOCUMENT   new VERIFICATION',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/Final%20Call%20For%20Doc%20Vertification.pdf',
	},
	{
		icon: 'new.png',
		category:
			'छत्रपती  शाहू  महाराज राष्ट्रीय  संशोधन अधिछात्रवृत्ती (CSMNRF )',
		title: '2020 Annexure Format',
		link: 'assets/files/csmnrf2020annexure.zip',
	},
	{
		icon: 'new.png',
		category:
			'छत्रपती  शाहू  महाराज राष्ट्रीय  संशोधन अधिछात्रवृत्ती (CSMNRF )',
		title: '2019 Annexure Format',
		link: 'assets/files/CSMNRF  2019 Annexure Format.zip',
	},
	{
		icon: 'new.png',
		category: 'मुख्यमंत्री विशेष संशोधन अधिछात्रवृत्ती (CMSRF)',
		title: '2019 Annexure Format',
		link: 'assets/files/CMSRF -2019 Annexure Format.zip',
	},
	{
		icon: 'new.png',
		category:
			'विविध समारंभ / कार्यक्रम व्यवस्थापन () एजन्सी निवड करणेकरिता दरपत्रके मागविण्यात येत आहेत',
		title: 'Call for Quotation for Selection of Event Management Agency in Pune District (Including PCMC) for various Programs organized by SARTHI, Pune.',
		link: 'assets/files/Events Management Agency Quotation.pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021)  घोषणा new परीपूर्ण अर्जाची यादी, आक्षेप (त्रुटीची पूर्तता करण्याकरीता) यादी व रद्द करण्यात आलेल्या अर्जाची यादी',
		link: 'assets/files/1.CSMNRF - 2021 आक्षेप  यादी  Final ..pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'Advertisement',
		link: 'assets/files/2.CSMNRF-2021 जाहीरात.pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'Guidelines ',
		link: 'assets/files/3.CSMNRF - 2021 Guidelines Final_0.pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'Instructions, Terms & Conditions',
		link: 'assets/files/4.Instructions Fellowship - CSMNRF - 2021...pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'CSMNRF- 2021 Frequently asked question (FAQ)',
		link: 'assets/files/5. FAQ.pdf',
	},
	{
		icon: 'horn.png',
		category:
			'छत्रपती शाहू महाराज राष्ट्रीय संशोधन अधिछात्रवृत्ती (CSMNRF -2021) CHHATRAPATI SHAHU MAHARAJ NATIONAL RESEARCH FELLOWSHIP',
		title: 'Character Certificate',
		link: 'assets/files/6.Character Certificate.pdf',
	},

	{
		icon: 'horn.png',
		category:
			'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
		title: 'UPSC (Civil Services) 2022 Competitive Exam Coaching मुदतवाढ',
		link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-cse',
	},
	{
		icon: 'horn.png',
		category: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
		title: 'MAHARASHTRA ENGINEERING SERVICES (MES) 2021 PROGRAM मुदतवाढ',
		link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-mes',
	},
	{
		icon: 'horn.png',
		category:
			'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ',
		title: 'Civil Judge Junior Division & Judicial Magistrate First Class Coaching  2021  मुदतवाढ',
		link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-cjjd',
	},
	{
		icon: 'horn.png',
		category:
			'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ',
		title: 'MPSC Subordinate Services (Non-gazetted)Group -B Combined (PSI,ASO,STI) Exam Coaching 2021 मुदतवाढ',
		link: 'http://old.sarthi-maharashtragov.in/en/form/online-application-form-for-mpsc',
	},
	{
		icon: 'horn.png',
		category:
			'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021  मुदतवाढ',
		title: 'Staff Selection Commission Non Gazetted  Posts Examination Coaching 2021  मुदतवाढ',
		link: 'http://old.sarthi-maharashtragov.in/en/webform/online_application_form_for_staf',
	},
	{
		icon: 'closed.png',
		category:
			'(Date Extended till 18th Oct 2021) MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: ' (Date Extended till 18th Oct 2021) MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates) - मुदतवाढ  दि.18.10.2021',
		link: 'assets/files/MPSC MAINS 2020.pdf',
	},
	{
		icon: 'closed.png',
		category:
			'(Date Extended till 18th Oct 2021) MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: '(Date Extended till 18th Oct 2021) MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSd5XH-nTUNGJWGcaDtvl_19oTi5ex1n6THwh8klH3oc3y0bdA/viewform?usp=sf_link',
	},
	{
		icon: 'closed.png',
		category:
			'MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: 'Guidelines',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/GUIDELINES%20FOR%20APPLICANTS_2.pdf',
	},
	{
		icon: 'closed.png',
		category:
			'MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: 'महत्त्वाच्या सूचना',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/%E0%A4%AE%E0%A4%B9%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE_2.pdf',
	},
	{
		icon: 'closed.png',
		category:
			'MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: 'Checklist',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/CHECKLIST%20-MPSC%20MAINS%20SPONSORSHIP_2.pdf',
	},
	{
		icon: 'closed.png',
		category:
			'MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: 'Candidate Undertaking',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/CANDIDATE%20UNDERTAKING_1.pdf',
	},
	{
		icon: 'closed.png',
		category:
			'MPSC MAINS 2020 Sponsorship (for MPSC Prelims 2020 Pass Candidates)',
		title: 'Model Code of Conduct',
		link: 'http://old.sarthi-maharashtragov.in/sites/default/files/inline-files/MODEL%20CODE%20OF%20CONDUCT%20-MPSC%20MAINS%20SPONSORSHIP_0.pdf',
	},
];

export default announcements;
