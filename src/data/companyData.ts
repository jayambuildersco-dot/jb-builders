import { CompanyInfo, TamilNaduCity, ServiceCategoryGroup, ProcessStep, FAQItem, PortfolioItem } from '../types';

export const COMPANY_DATA: CompanyInfo = {
  name: 'JAYAM BUILDERS',
  category: 'Civil Engineers & Builders / Construction Company / Architectural Building Design',
  establishedYear: 1998,
  experienceText: '25+ Years of Construction Experience',
  address: {
    street: 'Iyer Bungalow',
    locality: 'New Natham Road',
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India',
    fullFormatted: 'Iyer Bungalow, New Natham Road, Madurai, Tamil Nadu, India'
  },
  phone: '+91 80565 64798',
  phoneRaw: '+918056564798',
  whatsappRaw: '918056564798',
  email: 'vjmagesh17@gmail.com',
  logoUrl: 'https://i.postimg.cc/R0fKVbzd/JB-Logo-V2.png',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jayam+Builders+Iyer+Bungalow+New+Natham+Road+Madurai+Tamil+Nadu',
  paymentContacts: {
    paytm: '+91 80565 64798',
    phonepe: '+91 80565 64798',
    gpay: '+91 80565 64798'
  }
};

export const TAMIL_NADU_CITIES: TamilNaduCity[] = [
  { name: 'Madurai', slug: 'madurai', lat: 9.9252, lng: 78.1198, region: 'South', isHQ: true },
  { name: 'Chennai', slug: 'chennai', lat: 13.0827, lng: 80.2707, region: 'North' },
  { name: 'Coimbatore', slug: 'coimbatore', lat: 11.0168, lng: 76.9558, region: 'West' },
  { name: 'Tiruchirappalli / Trichy', slug: 'trichy', lat: 10.7905, lng: 78.7047, region: 'Central' },
  { name: 'Salem', slug: 'salem', lat: 11.6643, lng: 78.1460, region: 'West' },
  { name: 'Erode', slug: 'erode', lat: 11.3410, lng: 77.7172, region: 'West' },
  { name: 'Kanchipuram', slug: 'kanchipuram', lat: 12.8342, lng: 79.7036, region: 'North' },
  { name: 'Kanniyakumari', slug: 'kanyakumari', lat: 8.0883, lng: 77.5385, region: 'South' },
  { name: 'Tirunelveli', slug: 'tirunelveli', lat: 8.7139, lng: 77.7567, region: 'South' },
  { name: 'Tiruppur', slug: 'tiruppur', lat: 11.1085, lng: 77.3411, region: 'West' },
  { name: 'Vellore', slug: 'vellore', lat: 12.9165, lng: 79.1325, region: 'North' },
  { name: 'Thanjavur', slug: 'thanjavur', lat: 10.7870, lng: 79.1378, region: 'Central' },
  { name: 'Dindigul', slug: 'dindigul', lat: 10.3673, lng: 77.9803, region: 'South' },
  { name: 'Hosur', slug: 'hosur', lat: 12.7409, lng: 77.8253, region: 'North' },
  { name: 'Karur', slug: 'karur', lat: 10.9601, lng: 78.0766, region: 'Central' },
  { name: 'Namakkal', slug: 'namakkal', lat: 11.2189, lng: 78.1674, region: 'West' },
  { name: 'Thoothukudi', slug: 'thoothukudi', lat: 8.7642, lng: 78.1348, region: 'South' },
  { name: 'Sivakasi', slug: 'sivakasi', lat: 9.4533, lng: 77.7972, region: 'South' },
  { name: 'Virudhunagar', slug: 'virudhunagar', lat: 9.5872, lng: 77.9514, region: 'South' },
  { name: 'Ramanathapuram', slug: 'ramanathapuram', lat: 9.3639, lng: 78.8395, region: 'South' },
  { name: 'Theni', slug: 'theni', lat: 10.0104, lng: 77.4768, region: 'South' }
];

export const SERVICE_GROUPS: ServiceCategoryGroup[] = [
  {
    id: 'design',
    title: 'Design & Planning',
    subtitle: 'Architectural Vision & Spatial Visualization',
    description: 'Transforming ideas into clear architectural blueprints and photorealistic 3D visual models before laying a single brick.',
    items: [
      {
        id: '2d-plans',
        title: '2D Concept Plans & House Plans',
        category: 'design',
        categoryLabel: 'Design & Planning',
        shortDesc: 'Custom spatial floor layouts optimized for natural light, ventilation, circulation, and Vaastu harmony.',
        fullDesc: 'Carefully measured 2D concept floor plans detailing room dimensions, wall thicknesses, door/window schedules, and functional zoning tailored to your family or commercial needs.',
        deliverables: ['Detailed dimensioned floor plans', 'Furniture placement layout', 'Vaastu compliant spatial orientation', 'Setback and circulation schemes'],
        iconName: 'Compass'
      },
      {
        id: 'architectural-design',
        title: 'Architectural Building Design',
        category: 'design',
        categoryLabel: 'Design & Planning',
        shortDesc: 'Comprehensive architectural concepts combining aesthetic elegance, climatic suitability, and structural balance.',
        fullDesc: 'End-to-end architectural design for contemporary villas, multi-storey residences, and commercial complexes suited for Tamil Nadu climate and municipal norms.',
        deliverables: ['Full architectural blueprint sets', 'Sectional elevations', 'Building envelope styling', 'Material specification schedule'],
        iconName: 'Building'
      },
      {
        id: 'house-elevation',
        title: 'House Elevation Design',
        category: 'design',
        categoryLabel: 'Design & Planning',
        shortDesc: 'Modern, traditional, and contemporary exterior facade styling reflecting individual aesthetic identity.',
        fullDesc: 'Custom front and side elevations incorporating tasteful texture combinations, louvers, pergolas, stone claddings, and balanced architectural fenestrations.',
        deliverables: ['Front and corner elevations', 'Color scheme combinations', 'Exterior lighting layout concepts', 'Texture & finish guides'],
        iconName: 'Layout'
      },
      {
        id: '3d-views',
        title: '3D Exterior & Interior Views',
        category: 'design',
        categoryLabel: 'Design & Planning',
        shortDesc: 'Photorealistic digital rendering of external facades and interior living spaces before construction.',
        fullDesc: 'High-definition 3D visualizations giving you full confidence in color palettes, daylight patterns, material finishes, and spatial aesthetics before committing funds.',
        deliverables: ['High-res exterior 3D renders', 'Interior room-by-room perspectives', 'Material & lighting mockups', 'Day and night elevation views'],
        iconName: 'Eye'
      },
      {
        id: 'walkthroughs',
        title: 'Walkthrough Designs',
        category: 'design',
        categoryLabel: 'Design & Planning',
        shortDesc: 'Immersive virtual video walkthroughs exploring the entire building flow and volumes.',
        fullDesc: 'Dynamic architectural video tours illustrating transition spaces, ceiling heights, scale, and ambiance across floors.',
        deliverables: ['Full HD virtual animation tour', 'Interior & exterior camera paths', 'Spatial transition showcases', 'Presentation ready format'],
        iconName: 'Video'
      }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering Drawings',
    subtitle: 'Structural Rigor & MEP Integration',
    description: 'Precision civil engineering, structural calculations, and building services drawings ensuring safety and longevity.',
    items: [
      {
        id: 'structural-drawings',
        title: 'Structural Drawings & Analysis',
        category: 'engineering',
        categoryLabel: 'Engineering Drawings',
        shortDesc: 'Engineered foundation, column, beam, and slab structural framing detailing reinforcement schedules.',
        fullDesc: 'Detailed structural calculations adhering to Indian Standard (IS) codes, calibrated to local soil bearing capacity and seismic guidelines for utmost safety.',
        deliverables: ['Footing & foundation drawings', 'Column placement & tie-beam details', 'Slab & beam reinforcement bar bending schedules', 'Structural stability analysis'],
        iconName: 'ShieldCheck'
      },
      {
        id: 'electrical-drawings',
        title: 'Electrical Drawings',
        category: 'engineering',
        categoryLabel: 'Engineering Drawings',
        shortDesc: 'Comprehensive power distribution layouts, switchboard placements, and load balancing schemes.',
        fullDesc: 'Systematic electrical single-line diagrams, lighting conduits, heavy appliance points, inverter/generator circuits, and earthing specifications.',
        deliverables: ['Point-to-point conduit pathways', 'Switchboard and distribution board schedules', 'Connected load calculations', 'UPS / Solar ready conduit layouts'],
        iconName: 'Zap'
      },
      {
        id: 'plumbing-drawings',
        title: 'Plumbing Drawings',
        category: 'engineering',
        categoryLabel: 'Engineering Drawings',
        shortDesc: 'Water supply, drainage networks, stormwater harvesting, and sanitation layout designs.',
        fullDesc: 'Engineered pipe slope calculations, sump-to-overhead tank distribution, wastewater segregation, and inspection chamber placement for zero-leakage durability.',
        deliverables: ['Water supply pipe sizing & routing', 'Soil, waste, and vent stack designs', 'Rainwater harvesting and recharge schematics', 'Chamber and septic tank connection details'],
        iconName: 'Droplets'
      }
    ]
  },
  {
    id: 'construction',
    title: 'Construction',
    subtitle: 'Civil Execution & Turnkey Building',
    description: 'Disciplined site supervision, graded material procurement, and seasoned craftsmanship delivered on time.',
    items: [
      {
        id: 'residential-construction',
        title: 'Residential Building Construction',
        category: 'construction',
        categoryLabel: 'Construction',
        shortDesc: 'Turnkey and customized residential house, villa, and duplex construction from ₹1,650/sq.ft* of built-up area.',
        fullDesc: 'Complete end-to-end home construction from earthwork excavation and RCC superstructure to brickwork, plastering, flooring, painting, and utility connections.',
        deliverables: ['Dedicated site engineer supervision', 'Branded cement and high-grade TMT steel', 'Stage-wise quality inspections', 'Clear milestone billing transparency'],
        iconName: 'Home',
        highlight: 'From ₹1,650/sq.ft*'
      },
      {
        id: 'commercial-construction',
        title: 'Commercial Building Construction',
        category: 'construction',
        categoryLabel: 'Construction',
        shortDesc: 'Robust commercial complexes, retail spaces, showrooms, and office buildings built for commercial durability.',
        fullDesc: 'Commercial construction planned for optimal floor-to-ceiling heights, load-bearing capacities, fire safety compliance, and maximum rentable/usable carpet areas.',
        deliverables: ['Heavy-load structural engineering', 'Commercial elevation finishes', 'Rapid project timeline management', 'Safety code adherence'],
        iconName: 'Briefcase'
      },
      {
        id: 'boq-construction',
        title: 'Building Construction on BOQ Basis',
        category: 'construction',
        categoryLabel: 'Construction',
        shortDesc: 'Item-rate contract execution based on Bill of Quantities (BOQ) for commercial and large projects.',
        fullDesc: 'Transparent itemized rate contracts based on certified architectural drawings and defined quantities, offering clients complete financial control.',
        deliverables: ['Detailed item-wise rate breakdowns', 'Measurement book (MB) record keeping', 'Variation tracking and transparent invoicing', 'Contractual milestone governance'],
        iconName: 'FileSpreadsheet'
      }
    ]
  },
  {
    id: 'approvals',
    title: 'Approval & Pre-Construction Support',
    subtitle: 'Land Survey, Plot Guidance & Liaison',
    description: 'Clearing technical and regulatory hurdles so your construction begins on a solid, legally sound foundation.',
    items: [
      {
        id: 'plan-approval',
        title: 'Building Plan Approval Assistance',
        category: 'approvals',
        categoryLabel: 'Approvals & Liaison',
        shortDesc: 'End-to-end documentation, compliance drawings, and submission assistance for local municipal bodies.',
        fullDesc: 'Preparation of approval drawings strictly conforming to Tamil Nadu Combined Development and Building Rules (TNCDBR) and local planning authority guidelines.',
        deliverables: ['Approval format CAD drawings', 'Documentation preparation and checklists', 'Liaison with local municipal/panchayat bodies', 'Compliance verification'],
        iconName: 'FileCheck'
      },
      {
        id: 'liaison-services',
        title: 'Liaison Services',
        category: 'approvals',
        categoryLabel: 'Approvals & Liaison',
        shortDesc: 'Facilitating necessary departmental permissions, NOCs, and technical paperwork.',
        fullDesc: 'Professional assistance in coordinating with civic bodies, electrical boards, and water authorities for seamless project startup.',
        deliverables: ['Civic documentation coordination', 'Utility connection application guidance', 'NOC preparation support', 'Regulatory requirement tracking'],
        iconName: 'Users'
      },
      {
        id: 'topographical-survey',
        title: 'Topographical Survey',
        category: 'approvals',
        categoryLabel: 'Approvals & Liaison',
        shortDesc: 'Accurate digital land contour mapping, boundary verification, and level surveys.',
        fullDesc: 'Total Station and digital leveling surveys to identify natural ground levels, existing trees, boundary discrepancies, and drainage slopes before design commences.',
        deliverables: ['Accurate plot boundary drawings', 'Contour level mapping', 'Natural drainage orientation reports', 'Total Station CAD outputs'],
        iconName: 'MapPin'
      },
      {
        id: 'plot-purchase-assistance',
        title: 'Assistance for Plot and Land Purchase',
        category: 'approvals',
        categoryLabel: 'Approvals & Liaison',
        shortDesc: 'Technical site feasibility assessment and layout evaluations for prospective land buyers.',
        fullDesc: 'Evaluating soil suitability, approach road widths, groundwater prospects, flood risk, and building setback feasibility before you invest in a plot.',
        deliverables: ['Construction feasibility evaluation', 'Ground & approach accessibility check', 'Orientation and dimensional analysis', 'Potential development layout review'],
        iconName: 'CheckCircle'
      }
    ]
  },
  {
    id: 'interiors',
    title: 'Interiors & Improvements',
    subtitle: 'Fine Finishing, Renovation & Remodeling',
    description: 'Elevating existing structures and finishing new homes with high craftsmanship woodwork, false ceilings, and finishes.',
    items: [
      {
        id: 'interior-design',
        title: 'Interior Design',
        category: 'interiors',
        categoryLabel: 'Interiors & Improvements',
        shortDesc: 'Bespoke modular kitchens, custom wardrobes, TV units, false ceilings, and ambient lighting concepts.',
        fullDesc: 'Coordinated interior designs combining ergonomic spatial planning, premium laminates, veneers, hardware, and warm lighting setups.',
        deliverables: ['3D interior design concepts', 'Modular kitchen layouts & hardware specs', 'Custom wardrobe & storage designs', 'False ceiling and lighting details'],
        iconName: 'Sparkles'
      },
      {
        id: 'interior-decoration',
        title: 'Interior Decoration',
        category: 'interiors',
        categoryLabel: 'Interiors & Improvements',
        shortDesc: 'Material curation, wall paneling, paint finishes, and texture styling.',
        fullDesc: 'Harmonious selection of wall textures, decorative acoustic panels, curtains, and fine architectural hardware giving spaces a distinct character.',
        deliverables: ['Color and texture selection boards', 'Wall paneling and trim specifications', 'Hardware and fixture selection guides', 'Finishing touch advisory'],
        iconName: 'Palette'
      },
      {
        id: 'renovation-remodeling',
        title: 'Renovation & Remodeling',
        category: 'interiors',
        categoryLabel: 'Interiors & Improvements',
        shortDesc: 'Structural strengthening, room additions, floor extensions, and modernizing older properties.',
        fullDesc: 'Breathing new life into older homes and commercial buildings through structural repairs, bathroom upgrades, floor additions, and modern facade revamps.',
        deliverables: ['Structural health assessment', 'Selective demolition & reinforcement plan', 'Modernized layout and MEP overhaul', 'Facade and interior rejuvenation'],
        iconName: 'Wrench'
      }
    ]
  },
  {
    id: 'institutional',
    title: 'Institutional & Specialized Projects',
    subtitle: 'Education, Auditoriums & Public Facilities',
    description: 'Executing large-span structural works, specialized educational campuses, and community auditoriums.',
    items: [
      {
        id: 'educational-construction',
        title: 'Educational Institution Construction',
        category: 'institutional',
        categoryLabel: 'Institutional Projects',
        shortDesc: 'Schools, college blocks, laboratories, and hostel buildings built for high footfall and durability.',
        fullDesc: 'Design and construction of functional classrooms, library halls, and scientific laboratories with generous ventilation and safety adherence.',
        deliverables: ['High-durability civil construction', 'Compliant fire escape & wide corridor design', 'Acoustic classroom planning', 'Sanitation and safety infrastructure'],
        iconName: 'GraduationCap'
      },
      {
        id: 'auditorium-construction',
        title: 'Auditorium Construction',
        category: 'institutional',
        categoryLabel: 'Institutional Projects',
        shortDesc: 'Large column-free span halls, conference facilities, and cultural venues with acoustic considerations.',
        fullDesc: 'Complex structural trusses, stepped seating galleries, stage engineering, and acoustic wall integration for public and institutional auditoriums.',
        deliverables: ['Long-span structural roof engineering', 'Sightline & tiered seating planning', 'Acoustic panelling integration', 'Backstage and green-room infrastructure'],
        iconName: 'Theater'
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Project Discussion & Briefing',
    subtitle: 'Understanding Your Vision',
    description: 'We meet to understand your lifestyle, family needs, space requirements, aesthetic tastes, and preliminary budget expectations.',
    keyDeliverable: 'Comprehensive Project Scope & Needs Brief'
  },
  {
    stepNumber: 2,
    title: 'Site & Requirement Assessment',
    subtitle: 'Technical Land Evaluation',
    description: 'Our civil engineers inspect the plot for soil characteristics, orientation, road accessibility, setbacks, and local civic regulations.',
    keyDeliverable: 'Site Assessment & Dimensional Verification'
  },
  {
    stepNumber: 3,
    title: 'Concept Planning & 2D/3D Design',
    subtitle: 'Visualizing Your Space',
    description: 'We develop optimized 2D floor plans, spatial zoning, front elevations, and realistic 3D renderings for your review and refinement.',
    keyDeliverable: 'Approved 2D House Plans & 3D Elevations'
  },
  {
    stepNumber: 4,
    title: 'Estimate, BOQ & Scope Definition',
    subtitle: 'Transparent Pricing & Material Matrix',
    description: 'A clear itemized estimate and specification schedule detailing cement brands, steel grades, flooring, fixtures, and milestone timelines.',
    keyDeliverable: 'Transparent Itemized Estimate & Contract Scope'
  },
  {
    stepNumber: 5,
    title: 'Architectural & Engineering Drawings',
    subtitle: 'Structural & MEP Detailing',
    description: 'Our engineers produce detailed structural drawings (foundation, columns, beams, slabs), along with comprehensive electrical and plumbing schematics.',
    keyDeliverable: 'Full Working Drawing Set (Structural + MEP)'
  },
  {
    stepNumber: 6,
    title: 'Approval Assistance',
    subtitle: 'Regulatory Compliance',
    description: 'We prepare regulatory compliance drawings and assist in filing for local municipal or panchayat building plan approvals.',
    keyDeliverable: 'Approval Submission Package & Compliance Filings'
  },
  {
    stepNumber: 7,
    title: 'Construction & Site Coordination',
    subtitle: 'Rigorous On-Ground Execution',
    description: 'Experienced civil engineers supervise excavation, RCC framing, masonry, plastering, plumbing, wiring, and finishing with regular milestone updates.',
    keyDeliverable: 'Daily Site Supervision & Milestone Quality Checks'
  },
  {
    stepNumber: 8,
    title: 'Final Quality Check & Handover',
    subtitle: 'Stepping into Your Finished Building',
    description: 'A thorough final inspection of all fixtures, switches, plumbing lines, and surface finishes before handing over your keys.',
    keyDeliverable: 'Final Inspection Signoff & Formal Handover'
  }
];

export const PAIN_POINTS_DATA = [
  {
    question: 'Will my construction cost keep increasing unexpectedly?',
    concern: 'Cost overruns and hidden charges are the number one fear for homeowners.',
    solution: 'We prepare detailed Bill of Quantities (BOQ) and defined material matrices before construction starts. Every steel grade, cement brand, tile specification, and plumbing fixture is transparently recorded to prevent surprise revisions.'
  },
  {
    question: 'How do I know the construction quality and structural strength will be good?',
    concern: 'Worry about substandard sand, weak cement ratios, or inadequate steel reinforcement.',
    solution: 'Every project is backed by calculated structural engineering drawings aligned with IS standards. Our qualified site engineers oversee soil bearing checks, concrete mix ratios, curing periods, and steel tie-ins at every milestone.'
  },
  {
    question: 'Who coordinates the architect, structural engineer, electrician, and plumber?',
    concern: 'Hiring separate professionals leads to miscommunication, blaming, and costly site rework.',
    solution: 'Jayam Builders provides integrated design and construction. Our in-house team coordinates architectural plans, structural engineering, electrical conduits, and plumbing paths under one single responsible roof.'
  },
  {
    question: 'What happens if I need building plan approval and liaison help?',
    concern: 'Navigating municipal rules and documentation feels overwhelming for first-time builders.',
    solution: 'We draft CAD drawings compliant with Tamil Nadu Combined Development and Building Rules (TNCDBR) and assist with liaison documentation for local planning authorities.'
  },
  {
    question: 'I have a plot but don’t know how to start or what size house fits.',
    concern: 'Uncertainty about setbacks, road width regulations, and floor space index (FSI).',
    solution: 'We conduct a site assessment, calculate permissible built-up area and setbacks, and prepare customized 2D concept layouts suited specifically to your land orientation and family requirements.'
  },
  {
    question: 'How can I visualize how my house will actually look before spending money?',
    concern: 'Difficulty understanding 2D lines and fear that the built house won’t look appealing.',
    solution: 'We provide realistic 3D exterior facades, interior perspectives, and virtual walkthroughs so you see the exact lighting, textures, room flows, and colors before execution.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Established in 1998 — 25+ Years Experience',
    description: 'Over two and a half decades of continuous civil engineering practice and building construction across Tamil Nadu, bringing stability and deep local knowledge.',
    iconName: 'Award'
  },
  {
    title: 'Architecture + Structural + MEP Coordination',
    description: 'No fragmented contractors. Architectural layouts, structural reinforcement, electrical networks, and plumbing schematics are coordinated seamlessly.',
    iconName: 'Layers'
  },
  {
    title: 'Transparent Communication & Defined Scope',
    description: 'Clear milestone schedules, explicit material brand specifications, and honest guidance without hidden traps or vague promises.',
    iconName: 'FileText'
  },
  {
    title: 'Practical Solutions: "We Listen. We Understand."',
    description: 'We listen to your specific budget, lifestyle, and site constraints before proposing actionable, durable engineering solutions.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Residential & Commercial Capabilities',
    description: 'Equipped to construct bespoke private villas and residences as well as large-span commercial spaces, institutions, and auditoriums on BOQ basis.',
    iconName: 'Building2'
  },
  {
    title: 'Thorough Planning Before Construction',
    description: '2D layouts, 3D visualizations, soil evaluations, and structural drawings help you refine decisions earlier, saving significant time and rework.',
    iconName: 'CheckSquare'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'cost',
    question: 'How much does residential construction cost in Tamil Nadu?',
    shortAnswer: 'Residential construction starts from ₹1,650/sq.ft* of built-up area (conditions apply).',
    fullAnswer: 'Jayam Builders communicates residential construction starting from ₹1,650/sq.ft* of built-up area. Final construction cost varies depending on location, site conditions, structural requirements, built-up area, design complexity, specifications, materials, finishing selections, and project scope. Contact Jayam Builders for a customized, project-specific estimate.'
  },
  {
    id: 'faq-2',
    category: 'cost',
    question: 'Is ₹1,650/sq.ft the fixed final price for all houses?',
    shortAnswer: 'No. ₹1,650/sq.ft is a starting reference rate for standard residential built-up area under defined specifications.',
    fullAnswer: 'Actual project costs depend on specific factors including foundation depth (soil type), RCC structural engineering, floor height, number of storeys, architectural facade complexity, brand selections for tiles, sanitaryware, CP fittings, electrical wiring, woodwork, and interior finishes. We provide an exact itemized estimate after understanding your project requirements.'
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'Does Jayam Builders provide both architectural design and construction?',
    shortAnswer: 'Yes. We provide complete design-to-handover capabilities under one roof.',
    fullAnswer: 'We handle 2D concept planning, 3D exterior and interior visualization, architectural elevation design, structural drawings, electrical and plumbing drawings, municipal plan approval assistance, civil construction, interior decoration, and post-construction handover.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'Can Jayam Builders provide 2D plans and 3D elevations separately?',
    shortAnswer: 'Yes, our architectural design and planning services can be engaged independently.',
    fullAnswer: 'Whether you need only a 2D Vaastu-aligned floor plan, front elevation design, photorealistic 3D exterior/interior views, or a virtual video walkthrough for an upcoming build, our architectural design team provides standalone design packages.'
  },
  {
    id: 'faq-5',
    category: 'services',
    question: 'Do you provide structural, electrical, and plumbing (MEP) drawings?',
    shortAnswer: 'Yes, full engineering and working drawing sets are core civil engineering offerings.',
    fullAnswer: 'We prepare detailed structural drawings with bar-bending reinforcement details, foundation engineering, column and beam schedules, together with coordinated electrical conduit layouts, load balancing, and sanitary/water supply plumbing drawings.'
  },
  {
    id: 'faq-6',
    category: 'approvals',
    question: 'Can you help with building plan approval in Tamil Nadu?',
    shortAnswer: 'Yes. We prepare compliance drawings and assist with planning authority liaison.',
    fullAnswer: 'We draft CAD drawings conforming strictly to Tamil Nadu Combined Development and Building Rules (TNCDBR) and local planning authority guidelines (Corporation, Municipality, or Directorate of Town and Country Planning / DTCP) and support you through the liaison documentation process.'
  },
  {
    id: 'faq-7',
    category: 'coverage',
    question: 'Do you provide construction outside Madurai across Tamil Nadu?',
    shortAnswer: 'Yes. We are based in Madurai and execute residential and commercial projects across Tamil Nadu.',
    fullAnswer: 'Subject to project scale and feasibility, we serve clients in Chennai, Madurai, Coimbatore, Tiruchirappalli (Trichy), Salem, Erode, Kanchipuram, Kanyakumari, Tirunelveli, Tiruppur, Vellore, Thanjavur, Dindigul, Hosur, Karur, Namakkal, Thoothukudi, Sivakasi, Virudhunagar, Ramanathapuram, Theni, and surrounding regions.'
  },
  {
    id: 'faq-8',
    category: 'services',
    question: 'Do you construct commercial and institutional projects on BOQ basis?',
    shortAnswer: 'Yes. We execute commercial buildings, institutions, and auditoriums on Bill of Quantities (BOQ) contracts.',
    fullAnswer: 'For commercial complexes, retail spaces, educational buildings, and auditoriums, we work on a transparent BOQ (Bill of Quantities) basis with itemized rates, certified measurement logs, and structured milestone billing.'
  },
  {
    id: 'faq-9',
    category: 'approvals',
    question: 'Can you assist before I purchase a land or plot?',
    shortAnswer: 'Yes. We offer topographical surveys and plot feasibility assessments.',
    fullAnswer: 'Before investing in a property, our team can assess site boundaries, soil conditions, road approach widths, drainage levels, and development feasibility to help you make an informed land acquisition decision.'
  },
  {
    id: 'faq-10',
    category: 'process',
    question: 'How do I request a construction estimate from Jayam Builders?',
    shortAnswer: 'You can submit our online estimate enquiry form, call us at +91 80565 64798, or chat on WhatsApp.',
    fullAnswer: 'Fill out the project details on our website form, call us directly at +91 80565 64798, or connect on WhatsApp at +91 80565 64798. We will schedule a discussion, review your site dimensions, and provide a clear preliminary scope and estimate.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Contemporary Multi-Storey Residence',
    locality: 'Iyer Bungalow Area',
    city: 'Madurai',
    category: 'residential',
    categoryLabel: 'Residential Construction',
    builtUpArea: '2,850 sq.ft',
    scope: 'Architectural Design, 3D Elevation, Structural Drawings & Complete Turnkey Construction',
    designChallenge: 'Narrow north-facing urban plot requiring maximum natural light penetration and private double-height living zoning.',
    solution: 'Designed an open-plan courtyard layout with high-level clerestory louvers, contemporary textured facade, and optimized RCC frame structure.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern contemporary residential house construction and architectural design by Jayam Builders in Madurai',
    status: 'Completed Project'
  },
  {
    id: 'proj-2',
    title: 'Modern Tropical Villa',
    locality: 'Koodal Nagar',
    city: 'Madurai',
    category: 'residential',
    categoryLabel: 'Residential Construction',
    builtUpArea: '3,400 sq.ft',
    scope: '2D Planning, 3D Facade Design, Structural Engineering, and Turnkey Civil Work',
    designChallenge: 'Creating an energy-efficient home suited for Tamil Nadu summer heat with expansive shaded verandahs.',
    solution: 'Integrated deep roof overhangs, terracotta jali breeze walls, energy-efficient spatial orientation, and premium vitrified flooring.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern tropical villa architecture and civil construction in Tamil Nadu by Jayam Builders',
    status: 'Completed Project'
  },
  {
    id: 'proj-3',
    title: 'Commercial Retail & Office Complex',
    locality: 'Bypass Road',
    city: 'Madurai',
    category: 'commercial',
    categoryLabel: 'Commercial Construction',
    builtUpArea: '7,200 sq.ft (G+3 Floors)',
    scope: 'BOQ-Based Civil Construction, Structural Framing & Commercial Facade',
    designChallenge: 'High column-free ground floor retail space with heavy live-load capacity for upper commercial office floors.',
    solution: 'Executed heavy-duty post-tensioned beam grid and reinforced concrete frame with high-performance glass-and-aluminum composite panel exterior.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Commercial building construction on BOQ basis by Jayam Builders in Madurai',
    status: 'Completed Project'
  },
  {
    id: 'proj-4',
    title: 'Institutional Auditorium & Multipurpose Hall',
    locality: 'Trichy Road',
    city: 'Tiruchirappalli',
    category: 'institutional',
    categoryLabel: 'Institutional Project',
    builtUpArea: '9,500 sq.ft',
    scope: 'Long-Span Structural Steel & RCC Construction, Stage Engineering, and Liaison Guidance',
    designChallenge: '800-seat column-free auditorium hall with strict acoustic and fire-egress requirements.',
    solution: 'Designed and erected engineered steel space trusses with acoustic-treated wall insulation, wide emergency egress corridors, and stepped viewing galleries.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Institutional auditorium and conference facility construction by Jayam Builders in Tamil Nadu',
    status: 'Completed Project'
  },
  {
    id: 'proj-5',
    title: 'Minimalist 3D Elevation & Interior Architecture',
    locality: 'Anna Nagar',
    city: 'Madurai',
    category: 'architecture',
    categoryLabel: 'Architecture & 3D Design',
    builtUpArea: '2,200 sq.ft',
    scope: '3D Exterior Elevation, Interior Walkthrough, Modular Kitchen & Woodwork Styling',
    designChallenge: 'Visualizing seamless indoor-outdoor transition and warm minimalist interior cabinetry before execution.',
    solution: 'Rendered photorealistic 3D perspectives with custom ceiling coves, Italian marble texture pairing, and concealed lighting channels.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern interior design and 3D architectural visualization by Jayam Builders',
    status: 'Design Execution'
  },
  {
    id: 'proj-6',
    title: 'Heritage Home Structural Renovation & Remodeling',
    locality: 'Mattuthavani Area',
    city: 'Madurai',
    category: 'renovation',
    categoryLabel: 'Renovation & Remodeling',
    builtUpArea: '2,100 sq.ft',
    scope: 'Structural Column Jacketing, Floor Extension, Modern MEP Overhaul & Elevation Revamp',
    designChallenge: 'Strengthening 35-year-old load-bearing masonry to accommodate an additional first-floor suite with modern amenities.',
    solution: 'Implemented micro-concrete column encasement, renewed plumbing risers, restored roof slabs, and added a contemporary front facade.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Residential house structural renovation and remodeling by Jayam Builders',
    status: 'Completed Project'
  }
];

export const COST_BREAKDOWN_FACTORS = [
  {
    title: 'Soil & Foundation Conditions',
    desc: 'Deep black-cotton soil or rocky terrain requires specialized pile or raft foundations compared to normal soil.'
  },
  {
    title: 'Structural Steel & Concrete Grades',
    desc: 'Seismic detailing, column spans, and higher-grade TMT steel (Fe550D) or ready-mix concrete specs adjust structural cost.'
  },
  {
    title: 'Architectural Elevation Complexity',
    desc: 'Intricate cantilever projections, double heights, exterior stone cladding, or pergola elements shape facade investment.'
  },
  {
    title: 'Flooring, Tiles & Sanitary Brands',
    desc: 'Choice between standard vitrified tiles, large-format glazed tiles, Italian marble, and premium branded sanitary fittings.'
  },
  {
    title: 'Woodwork & Joinery Selection',
    desc: 'Teak wood main doors, UPVC / aluminum window profiles, and internal flush vs wooden membrane doors.'
  },
  {
    title: 'Electrical & Plumbing Specs',
    desc: 'Concealed wiring brand, modular switch series, three-phase distribution, solar hot water lines, and sanitary pipe grades.'
  }
];
