import { Shield, Tent, Camera, Search, GraduationCap, PackageSearch, Users } from 'lucide-react';

// Central place for all copy + placeholder data.
// Swap placeholder image URLs for real photos whenever you're ready —
// nothing else in the components needs to change.

export const company = {
  name: 'APRON SECURITY SERVICES LIMITED',
  tagline: 'Your Trusted Security Partner',
  hashtag: '#ApronSecurity',
  phones: ['0718 539 540', '0726 671 620', '0731 985 975'],
  email: 'apronlimited@yahoo.com',
  poBox: 'P.O Box 26458-00100, Nairobi',
  headOffice: 'Mustard Seed Plaza (Along Eastern Bypass Road), Utawala, next to Family Bank, Nairobi',
  branchOffice: 'Embu Branch – DoM Plaza, Off Mama Ngina Street, opposite Urban Primary School',
  domain: 'www.apronsecurity.co.ke',
};

export const logoPlaceholder =
  'https://placehold.co/120x120/1B3A5C/D4A017?text=ASSL&font=oswald';

export const coreServices = [
  { icon: Shield, title: 'Security Guarding' },
  { icon: Tent, title: 'Events Security' },
  { icon: Camera, title: 'CCTV Installations' },
  { icon: Search, title: 'Private Investigations' },
  { icon: GraduationCap, title: 'Security & Safety Trainings' },
  { icon: PackageSearch, title: 'Assets Recovery' },
  { icon: Users, title: 'Crowd Control' },
];

export const serviceDetails = [
  {
    id: 'guarding',
    title: 'Guarding Services',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=Guarding+Services',
    alt: 'Uniformed Apron Security guard on duty at a gatehouse',
    paragraphs: [
      "We have a stringent process of vetting and training our guards. We offer an intensive training program that covers: Protection and Preservation of assets, Incident Management, Counter Terrorism and customer Care Skills. Our guards are skilled on handling gatehouse duties, front office duties, Vehicle Inspection, Personal Searches, Perimeter and Car Park Controls and monitoring of CCTV. They are uniformed and fully equipped with Baton, LED Torch, and Whistle during their shifts.",
      "The guards change shifts at 6:00PM and 6:00AM. In case the guard does not report the same guard on duty will inform the office and hold fort until a reliever is sent. Clients' calls are attended 24/7 and in case of any emergency, we work closely with the Police to arrest the situation. Our guards are covered under the Workmen Compensation Act for all injuries sustained.",
    ],
  },
  {
    id: 'cctv',
    title: 'CCTV Cameras',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=CCTV+Cameras',
    alt: 'CCTV camera installation on an exterior wall',
    paragraphs: [
      "We install and maintain Affordable and High-quality CCTV systems whether for your home or business. We offer both analogue and Internet protocol Cameras based on the client's preference. However, we will not hesitate to advice you on the best and latest technology. Our technical engineers recognize the importance of outlook of installation and therefore ensure absolute coverage for your security. We use recognized brands that are effective and user-friendly.",
    ],
  },
  {
    id: 'alarm',
    title: 'Intruder Alarm System',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=Intruder+Alarm+System',
    alt: 'Intruder alarm control panel mounted on a wall',
    paragraphs: [
      "In a world of increasing insecurity at homes and offices, it's now important to install an Intruder Alarm System. The Intruder Alarm System units are available from 8 to 128 zones. State of the art equipment can be installed to meet every need and budget, from basic window and door sensors all the way to motion detectors.",
    ],
  },
  {
    id: 'access-control',
    title: 'Access Control',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=Access+Control',
    alt: 'Biometric access control reader at an office entrance',
    paragraphs: [
      "We acknowledge every organization's need to manage access to their premise, information, equipment as well as the security of their employees and visitors. It is essential to manage and monitor who has access to what office, records, entry and exit. With these systems, you are able to restrict entrance to places and hence able to determine who is where and when. This minimizes dangerous incidents, frauds or theft from occurring. If you are looking for any system from biometric time and attendance systems, computerized time recording solutions for flexi time workers or simply a traditional time recording machine, then we have the answers for you!!",
    ],
  },
  {
    id: 'perimeter',
    title: 'Perimeter Security (Electric & Razor Wire)',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=Perimeter+Security',
    alt: 'Electric perimeter fence along a property boundary',
    paragraphs: [
      'Protecting of the perimeter fence is the first line of defense in asset and lives security. We undertake installation of electric and razor fences while maintaining high quality standard materials. Security barriers can be automatic or manual and equipped with booms which are resistant to FORCEFUL ACCESS.',
    ],
  },
  {
    id: 'consultancy',
    title: 'Security Consultancy',
    image: 'https://placehold.co/640x420/1B3A5C/FFFFFF?text=Security+Consultancy',
    alt: 'Security consultant reviewing a site audit report',
    paragraphs: [
      "Even if you have had security measures in place for many years and believe you've covered all the bases, it pays to have an independent security audit. From commercial buildings to shopping malls, offices and factories to hotels and private homes, we compile comprehensive, clear reports that will leave you free to decide on your next steps. We will:",
    ],
    bullets: [
      'Identify weaknesses in your physical and procedural security systems',
      'Review access controls and CCTV measures',
      'Examine accident prevention measures',
      'Trace flaws in your Information Technology network',
      'Look at the safety of staff, visitors and clients',
      'Assess and act to protect assets both tangible and intangible',
    ],
  },
];

export const trainingStandards = [
  { label: 'Access Control Procedures', desc: 'Proper screening of visitors, vehicles, and deliveries.' },
  { label: 'Emergency Response', desc: 'Handling fire outbreaks, medical emergencies, alarms, and security incidents.' },
  { label: 'Customer Care and Communication Skills', desc: 'Professional interaction with residents, staff, and visitors.' },
  { label: 'Patrolling and Surveillance Techniques', desc: 'Effective monitoring and reporting of suspicious activities.' },
  { label: 'Incident Reporting and Documentation', desc: 'Accurate recording of daily occurrences and security incidents.' },
  { label: 'First Aid and Basic Safety Procedures', desc: 'Basic lifesaving skills and safety awareness.' },
  { label: 'Discipline and Professional Conduct', desc: 'Upholding integrity, confidentiality, and professionalism at all times.' },
];

export const coreValues = ['Integrity', 'Professionalism', 'Discipline', 'Reliability', 'Client Satisfaction'];

export const whyChooseUs = [
  'Highly trained and vetted security personnel',
  'Professional and disciplined guards',
  'Reliable and responsive service',
  'Customized security solutions',
  'Use of modern security technology',
  'Commitment to quality service delivery',
];

export const galleryCategories = ['All', 'Guarding', 'CCTV & Alarms', 'Events', 'Training'];

export const galleryImages = [
  { id: 1, category: 'Guarding', src: 'https://picsum.photos/seed/apron-guard1/600/450', alt: 'Security guard patrolling a client compound' },
  { id: 2, category: 'Guarding', src: 'https://picsum.photos/seed/apron-guard2/600/450', alt: 'Guard stationed at a gatehouse entrance' },
  { id: 3, category: 'Guarding', src: 'https://picsum.photos/seed/apron-guard3/600/450', alt: 'Security officer inspecting a visitor vehicle' },
  { id: 4, category: 'CCTV & Alarms', src: 'https://picsum.photos/seed/apron-cctv1/600/450', alt: 'CCTV camera mounted on an exterior wall' },
  { id: 5, category: 'CCTV & Alarms', src: 'https://picsum.photos/seed/apron-cctv2/600/450', alt: 'Technician installing a CCTV camera' },
  { id: 6, category: 'CCTV & Alarms', src: 'https://picsum.photos/seed/apron-alarm1/600/450', alt: 'Intruder alarm control panel' },
  { id: 7, category: 'Events', src: 'https://picsum.photos/seed/apron-event1/600/450', alt: 'Guards providing crowd control at an event' },
  { id: 8, category: 'Events', src: 'https://picsum.photos/seed/apron-event2/600/450', alt: 'Security team managing entrance at a public event' },
  { id: 9, category: 'Training', src: 'https://picsum.photos/seed/apron-train1/600/450', alt: 'Security guards in a training session' },
  { id: 10, category: 'Training', src: 'https://picsum.photos/seed/apron-train2/600/450', alt: 'Instructor demonstrating first aid procedures' },
  { id: 11, category: 'Guarding', src: 'https://picsum.photos/seed/apron-guard4/600/450', alt: 'Guard performing a perimeter patrol at night' },
  { id: 12, category: 'CCTV & Alarms', src: 'https://picsum.photos/seed/apron-cctv3/600/450', alt: 'Control room monitor displaying CCTV feeds' },
];

export const testimonials = [
  {
    name: 'Grace Wanjiru',
    role: 'Property Manager, Greenview Apartments',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=GW',
    quote: 'Apron Security has been guarding our estate for over a year. Their guards are punctual, disciplined, and always alert. We rarely worry about security anymore. (Placeholder testimonial)',
  },
  {
    name: 'Daniel Kimani',
    role: 'Operations Manager, Kimani & Sons Hardware',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=DK',
    quote: 'What stands out is how quickly they respond when something comes up. One call and a supervisor is on site within minutes. Very professional team. (Placeholder testimonial)',
  },
  {
    name: 'Fatuma Ali',
    role: 'Administrator, Riverside Primary School',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=FA',
    quote: 'The guards assigned to our school are courteous with parents and firm at the gate. It gives every parent real peace of mind dropping off their children. (Placeholder testimonial)',
  },
  {
    name: 'Peter Mwangi',
    role: 'Facilities Lead, Mwangi Logistics Ltd',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=PM',
    quote: 'We switched to Apron after a poor experience with another firm. The difference in discipline and reporting has been night and day. Highly reliable. (Placeholder testimonial)',
  },
  {
    name: 'Esther Njoki',
    role: 'Events Coordinator, Njoki Events Co.',
    avatar: 'https://placehold.co/100x100/1B3A5C/FFFFFF?text=EN',
    quote: 'They handled crowd control for a 500-guest event flawlessly, calm, organized, and professional from setup to close. We will be booking them again. (Placeholder testimonial)',
  },
];

export const clientLogos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/160x80/F5F6F8/9AA3AF?text=Client+${i + 1}`,
  alt: `Placeholder logo of client or partner ${i + 1}`,
}));

export const faqs = [
  {
    q: 'Do you offer 24/7 security services?',
    a: 'Yes. Our guards work in 12-hour shifts changing at 6:00AM and 6:00PM, and our office attends to client calls around the clock, every day of the year.',
  },
  {
    q: 'Are your guards licensed and insured?',
    a: 'Yes. All our officers are vetted, trained, and covered under the Workmen Compensation Act for any injuries sustained while on duty.',
  },
  {
    q: 'Can you provide security for a one-day event?',
    a: 'Yes. We provide short-term deployments for events of any size, including crowd control, access screening, and VIP protection.',
  },
  {
    q: 'How quickly can you deploy guards to a new site?',
    a: 'In most cases we can deploy vetted, uniformed guards within 24-48 hours of confirming your requirements, faster for urgent cases.',
  },
  {
    q: 'Do you offer both CCTV and manned guarding together?',
    a: 'Yes. We design combined solutions that pair trained guards with CCTV, alarm, and access control systems for layered protection.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We operate from our Head Office in Utawala, Nairobi and our Embu Branch, serving clients across Nairobi, Embu, and surrounding regions.',
  },
];

export const director = {
  name: 'Zachary Mbogo',
  title: 'Founder & Managing Director, Apron Security Services Limited',
  photo: 'https://placehold.co/360x420/1B3A5C/FFFFFF?text=Zachary+Mbogo',
  message: [
    'At Apron Security Services Limited, we believe that effective security is built on professionalism, integrity, preparedness and trust.',
    'With over 10 years of experience in the private security sector, I have risen through the ranks, gaining extensive hands-on experience in security operations, risk management, personnel management and the delivery of professional security solutions.',
    "I hold a Bachelor's Degree and a Master's Degree in Criminology and Security Studies, which, together with my practical industry experience, has shaped my approach to modern security management.",
    'At Apron Security, our commitment is to provide reliable, professional and client-focused security solutions that protect people, property and businesses. We continuously invest in our personnel, training, technology and operational systems to ensure that we remain responsive to the evolving security needs of our clients.',
    'Our vision is not simply to provide security guards, but to build a professional security company founded on excellence, accountability and lasting partnerships.',
    'I thank our clients, employees and partners for their continued trust and support as we work together to create safer homes, workplaces and communities.',
  ],
};
