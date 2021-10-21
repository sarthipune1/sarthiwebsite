export type Tender = {
	icon: 'new.png' | 'horn.png' | 'old.png' | 'closed.png';
	title: string;
	link: string;
};

const announcements: Tender[] = [
	{
		icon: 'new.png',
		title: 'All E-tenders of Competitive Department Technical & commercial Bid Submission date extended to 01/11/2021 (17.00 hrs)',
		link: 'assets/files/E_tender_extended_date_letter.pdf',
	},
];

export default announcements;
