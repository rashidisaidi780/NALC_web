import michaelImage from './components/assets/michaelkafimbi.jpeg'
import johnImage from './components/assets/johnkafimbi.jpeg'

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'auctioneers',
    title: 'Auctioneers',
    description:
      'Licensed auctioneering services for movable and immovable assets, court-ordered sales, and public auctions conducted with transparency and legal compliance.',
    image:
      'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Public & private auctions',
      'Court ordered asset sales',
      'Valuation & appraisal',
      'Competitive bidding process',
    ],
  },
  {
    id: 'auction-mart',
    title: 'Auction Mart & Court Brokers',
    description:
      'Acting as sworn court brokers and auction mart operators, we facilitate the sale and disposal of assets under judicial instruction with full accountability.',
    image:
      'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
    features: [
      'Sworn court brokerage',
      'Auction mart operations',
      'Judicial asset disposal',
      'Verified transaction records',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'End to end logistics solutions covering transport, warehousing, and distribution, engineered to move your goods efficiently across the region.',
    image:
      'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Freight & transport management',
      'Warehousing & storage',
      'Distribution networks',
      'Real-time cargo tracking',
    ],
  },
  {
    id: 'cleaning-forwarding',
    title: 'Cleaning & Forwarding Agents',
    description:
      'Customs clearing and freight forwarding services that streamline the movement of goods across borders with accurate documentation and timely clearance.',
    image:
      'https://images.pexels.com/photos/35501714/pexels-photo-35501714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Customs clearance',
      'Freight forwarding',
      'Import & export documentation',
      'Port & border coordination',
    ],
  },
  {
    id: 'office-cleaners',
    title: 'Office Cleaners & Stationers Supply',
    description:
      'Professional commercial cleaning services paired with a reliable supply of office stationery, keeping your workplace spotless and fully equipped.',
    image:
      'https://images.pexels.com/photos/20381389/pexels-photo-20381389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Daily & scheduled office cleaning',
      'Sanitisation & deep cleaning',
      'Stationery procurement',
      'Facility maintenance supplies',
    ],
  },
  {
    id: 'commission-agents',
    title: 'Commission Agents & Debt Collectors',
    description:
      'Acting as trusted commission agents and debt recovery specialists, we represent your commercial interests and recover outstanding accounts professionally.',
    image:
      'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Commission-based sales agency',
      'Debt recovery & collection',
      'Account reconciliation',
      'Credit control advisory',
    ],
  },
];

export type Pillar = {
  id: string;
  title: string;
  body: string;
};

export const mission = 'To provide quality services to our clients by making enterprises resources more productive. To workhard with trustfulness and integrity as a team work to insure best services delivery.';

export const vision = 'We envisioned to become the best and preferred enterprise in our service we provide.';

export const objectives: Pillar[] = [
  {
    id: 'obj-1',
    title: 'OUR GENERAL OBJECTIVE',
    body: 'To provide the affordable and accessible quality services which respond to our clients needs and expectations.',
  },
  {
    id: 'obj-2',
    title: 'Client Trust',
    body: 'Build enduring relationships through transparency, confidentiality, and honest communication on every transaction.',
  },
  {
    id: 'obj-3',
    title: 'Operational Efficiency',
    body: 'Apply disciplined processes and modern tools to complete assignments accurately and on time.',
  },
  {
    id: 'obj-4',
    title: 'Sustainable Growth',
    body: 'Expand our service portfolio and geographic reach while maintaining the quality our clients expect.',
  },
];

export const coreValues: Pillar[] = [
  { id: 'cv-1', title: 'Teamwork', body: 'We collaborate across functions to deliver coordinated, reliable results for our clients.' },
  { id: 'cv-2', title: 'Responsibility', body: 'We take ownership of our actions and their consequences.' },
  { id: 'cv-3', title: 'Communication', body: 'We communicate openly and effectively with all stakeholders.' },
  { id: 'cv-4', title: 'Integrity', body: 'We act honestly and ethically in every transaction, earning the confidence of courts, clients, and partners.' },
  { id: 'cv-5', title: 'Quality Service', body: 'We are committed to delivering exceptional service that exceeds our clients\' expectations.' },
];

export type FieldExperienceRow = {
  id: string;
  customer: string;
  service: string;
  contractValue: string;
  status: string;
};

export const fieldExperience: FieldExperienceRow[] = [
  {
    id: 'fe-1',
    customer: 'CRDB BANK',
    service: 'Auctioneering',
    contractValue: 'unlimited',
    status: 'Ongoing',
  },
  {
    id: 'fe-2',
    customer: 'NMB BANK',
    service: 'Debt collection, auctioneering, and recovery consultancy',
    contractValue: 'unlimited',
    status: 'Ongoing',
  },
  {
    id: 'fe-3',
    customer: 'SELCOM MICROFINANCE BANK',
    service: 'debt collection, auctioneering, and repossession',
    contractValue: 'unlimited',
    status: 'Ongoing',
  
  },
  {
    id: 'fe-4',
    customer: 'FIN TANZANIA',
    service: 'Debt collection, auctioneering, and recovery consultancy',
    contractValue: 'unlimited',
    status: 'Ongoing',
  
  },
];

export const futureDirection =
  'NALC Enterprises We expect to see NALC growing fast like tiger move, with the higher competitive ability, to serve clients needs within the country\'s border and beyond by closely working with different clients such as individuals, financial institutions, private and government organizations. We are planning to use modern techniques that will multiply company\'s resources to fulfil customer demands. The development of enterprise should build the bond with the community by creating job opportunities that will nourish community economic development.';

export type OrgNode = {
  id: string;
  title: string;
  name: string;
  level: number;
  reportsTo?: string;
};

export const orgStructure: OrgNode[] = [
  { id: 'dg', title: 'DIRECTOR GENERAL', name: 'Michael Kafimbi Wibori', level: 0 },
  { id: 'ps', title: 'PERSONAL SECRETARY', name: 'Executive Support', level: 1, reportsTo: 'dg' },
  { id: 'gm', title: 'GENERAL MANAGER', name: 'John Kafimbi Kalungwana', level: 1, reportsTo: 'dg' },
  { id: 'om', title: 'OPERATIONAL MANAGER', name: 'Operations', level: 2, reportsTo: 'gm' },
  { id: 'bursar', title: 'BURSAR', name: 'Finance', level: 2, reportsTo: 'gm' },
  { id: 'mm', title: 'MARKETING MANAGER', name: 'Marketing', level: 2, reportsTo: 'gm' },
  { id: 'ao-op', title: 'ASSISTANT OFFICER', name: 'Operations Support', level: 3, reportsTo: 'om' },
  { id: 'ao-mark', title: 'ASSISTANT OFFICER', name: 'Marketing Support', level: 3, reportsTo: 'mm' },
  { id: 'cleaners', title: 'CLEANERS', name: 'Facility Management', level: 4, reportsTo: 'ao-op' },
  { id: 'security', title: 'SECURITY', name: 'Security Services', level: 4, reportsTo: 'ao-mark' },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Michael Kafimbi Wibori',
    role: 'DIRECTOR GENERAL',
    bio: 'He is a Tanzania by birth founder and the managing director of the company (MD) He has been director since the incorporation of company. Mr.Michael is the one who carrying the vision of the company. In his current role, general supervising and managing company assets and resources. He has gained a reputation for improving operational efficiency and maximizing growth by ensuring that everyone within NALC\'s team knows how important their role is to the company\'s overall success. He working hard to ensure the dram of NALC became into really practical life. He desires to transform the Tanzanian society, especially the youth in the country, through creating job opportunity. He holds experience of debt collector and auctioneer more than five years working with different companies; In 2017 up to 2020 Mr.Michael Kafimbi served as Debt collector & Auctioneer at Dolphin General Business Enterprises Co Ltd, where he did best with full knowledge. In 2020 up 2021 he served as Zone Operational Manager at Masahaju Auction Mart.',
    image:
      michaelImage,
  },
  {
    id: 'tm-2',
    name: 'John Kafimbi Kalungwana',
    role: 'GENERAL MANAGER',
    bio: 'He studied at the University of Dodoma and graduated with a Bachelor Degree of Tourism and cultural heritage in 2020. He is a Co-Founder ofthe Company and Legal Protection and Life Improvement of Organization. Mr.Kalungwana currently the Company\'s General Manager, responsible ensure all daily company operational are meet. He also holds certificate of competence of court blocker from Institute of Judicial Admiration Lushoto Heisself-motivated learned professional, eager to learn and develop, is a hard worker, cooperative and can work under minimum supervision to pursue a common goal. He is running with the vision of NALC to ensure the dream come into practical life.',
    image:
      johnImage,
  },
  {
    id: 'tm-3',
    name: 'CPA Pamba M.Kalog',
    role: 'Chief Finance Officer',
    bio: 'He is a qualified chartered accountant with extensive experience in finance and accounting. He has been instrumental in establishing robust financial systems and processes within the company. His expertise in debt recovery and commission agency operations has significantly contributed to the company\'s financial performance.',
    image:
        '',
  },
];

export type ChargeRow = {
  service: string;
  commission: string; 
  notes: string;
};

export const charges: ChargeRow[] = [
  { service: 'Normal debt collection (tsh. 1,000,000 below )', commission: '12%', notes: 'Professional fees and adverting' },
  { service: 'Normal debt collection (tsh. 10,000,000 million - 100,000,000 million)', commission: '10%', notes:'Professional fees and adverting' },
  { service: 'Normal debt collection (tsh 10,000,000 million100,000,000 million) ', commission: '10%', notes: 'professional fees and adverting' },
  { service: 'Normal debt collection (tsh. 100,000,000 million and above)', commission: '7%', notes: 'Professional fees and adverting' },
  { service: 'Auctioneering of mortgaged properties (tsh, 10,000,000 million-100,000,000 million)', commission: '10%', notes: 'Professional fees and adverting' },
  { service: 'Auctioneering of mortgages properties(tsh 10,000,000  million and above)', commission: '7%', notes: 'Professional fees and adverting' },
  { service: 'Repossession of vehicles and machinery (below 10 tones)', commission: 'Nil', notes: 'Search fees and towing charges per km(subject to negotiation)' },
  { service: 'Repossession of vehicle and machinery (above 10 tones)', commission: 'Nil', notes: 'Search fees and towing charges per km (subject to negotiation)' },
  { service: 'Auctioneering of repossessed vehicle and other item ', commission: '10%', notes: 'Storage charge per day (to be deducted from auctionproceed)' },
];
