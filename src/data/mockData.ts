export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  location: string;
  title: string;
  description: string;
  image: string;
  status?: string;
  delivery?: string;
  sqft?: string;
  bedrooms?: string;
  bathrooms?: string;
  garage?: string;
  lotSize?: string;
  floors?: string;
  propertyType?: string;
  features?: ProjectFeature[];
  fullDescription?: string;
  longDescription?: string;
  floorplanUrl?: string;
  mapUrl?: string;
  galleryItems?: { id: number; src: string; category: 'exterior' | 'interior' }[];
  isRental?: boolean;
  airbnbUrl?: string;
}

export interface SiteData {
  companyName: string;
  logoUrl: string;
  navLinks: NavLink[];
  contact: {
    hq: string;
    phone: string;
    email: string;
  };
  hero: {
    title: React.ReactNode;
    subtitle: string;
    description: string;
    bgImage: string;
    sliderImages?: string[];
  };
  about: {
    tagline: string;
    title: string;
    description: string;
    yearsExperience: string;
    yearsText: string;
    features: { icon: string; title: string; desc: string }[];
    image: string;
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  modularSteel: {
    tagline: string;
    title: string;
    description: string;
    awardTitle: string;
    image: string;
    bgImage: string;
  };
  projects: {
    title: string;
    description: string;
    items: ProjectItem[];
  };
  trustBadges: { icon: string; title: string; }[];
  contactSection: {
    tagline: string;
    title: string;
    description: string;
    bgImage: string;
  };
  footer: {
    description: string;
  };
  ui: {
    getQuote: string;
    requestConsultation: string;
    viewProjects: string;
    viewDetails: string;
    mainHq: string;
    directLine: string;
    inquiries: string;
    contactForm: {
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    footer: {
      quickLinks: string;
      privacyPolicy: string;
      termsOfService: string;
      licensingInfo: string;
      investorRelations: string;
      newsletter: string;
      newsletterDesc: string;
      emailPlaceholder: string;
      joinBtn: string;
      copyrightText: string;
      license1: string;
      license2: string;
    }
  };
  gallery: string[];
}

const siteDataEN: SiteData = {
  companyName: "Ruben D Salazar, Inc.",
  logoUrl: "/logo-rds.webp",
  navLinks: [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "projects", label: "Our projects", href: "#projects" },
    { id: "contact", label: "Contacts", href: "#contact" },
  ],
  contact: {
    hq: "Cape Coral FL USA",
    phone: "+1 (239) 284 5886",
    email: "rubendarios@gmail.com",
  },
  hero: {
    title: "We build and manage places and infrastructures.",
    subtitle: "47 Projects Completed | 25+ Years of Experience",
    description: "",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV2BG3KDnlrAcnqqCYgZgeRmWe9ZZy9n-Qm8e9YfFXEM80dkVr3kp0e18yc6WtzVPZzhSkvp7j5VExKy2Q_gITWtVQ91XSIZUz5zC35fnVBGwfJ0GCALZmX1sIf_flzjxUHltjZY3OmgR7pxyBaQcM8rcXPjZeymcl0dPM0qieHID9liisf4n4NX00AR-Ui0iX4HvWjFqp79Dnel6tiQfxz_qBisRJ9ZgXOk3pw1a3xNHmX_LmrGUPKpxvacJSPXIsscWx0OODWKVX",
    sliderImages: ["/hero-1.jpeg", "/hero-2.jpeg", "/hero-3.jpeg"],
  },
  about: {
    tagline: "About Us",
    title: "Our company Ruben D Salazar, Inc.",
    description: "We are a general contractor with licensed and insured in Florida (CBC#1253051) and are legally authorized to build new homes or complete interior or exterior renovations of any scope or size. Need a contractor to build your dream home? We would love to be part of turning your dreams into reality. We have spent the past 32 years building relationships with the community and trusted contractors.",
    yearsExperience: "25",
    yearsText: "Years of Experience in Florida.",
    image: "/about.png",
    features: [
      {
        icon: "verified",
        title: "Licensed and Insured in Florida",
        desc: "General Contractor License (CBC#1253051) adhering to the highest standards of safety."
      },
      {
        icon: "real_estate_agent",
        title: "Licensed Relocation Expert",
        desc: "Seamless transition and real estate solutions for incoming Florida residents."
      }
    ]
  },
  services: {
    title: "Our Services",
    description: "We've built our way of life by building and remodeling homes.",
    items: [
      {
        id: "s1",
        icon: "architecture",
        title: "Project Planning.",
        description: "From the simple to the most luxurious, we've experienced it all and can assist you every step of the way.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
      },
      {
        id: "s2",
        icon: "construction",
        title: "General Contracting.",
        description: "As general residential contractors, we strive to meet all the needs for any home project you may have, to fully satisfy our clients.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
      },
      {
        id: "s3",
        icon: "home_repair_service",
        title: "Remodeling.",
        description: "We will work with you to meet deadlines and coordinate with other related projects. We will maintain open communication.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
      }
    ]
  },
  modularSteel: {
    tagline: "25 years of experience",
    title: "Construction of new homes and commercial and residential expansions",
    description: "Make sure to choose the right property for your purpose. We offer everything from the production of engineer-certified plans to the complete construction of the project. We assess the site and coordinate every step, from foundation to final installation, using skilled craftsmen and reliable subcontractors to bring your vision to life.",
    awardTitle: "5 consecutive years winning the Best Builder Award in Cape Coral.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSmwXGUXsB2mz9huGm_XTCfy9Uh3FBRx0Sa_2xJpH4M0hmC8qRFl38jWEEMfbyEy9igC-zQPKk7Xb72caq2KtVAaMMwe9blCO_gWeZp5JMY-c4CQ3UuM8jzIfj86VjPsPBbGiW7HK5Xw8abre_zzhAVF8xvtg_bmMkZEGQhHrTylZKDQMiD6H8d_44Ve-vU0aN1WIOZusUBtimqUQw3QW1nuSUW0mdkycNc717AfV1Vg3w1eETr3ra3dmp5bAoiWxVaMEiUQg7_px3",
    image: "/premio-de-al-mejor-constructor.webp"
  },
  projects: {
    title: "Featured Projects",
    description: "Quality and Luxury Projects",
    items: [
      {
        id: "lehigh-acres",
        location: "2904 6th St W, Lehigh Acres, FL 33971",
        title: "Discover Your New Home in Lehigh Acres",
        description: "We offer everything from the production of engineer-certified plans to the complete construction of your luxury home project.",
        fullDescription: "A modern architectural marvel situated in the heart of Lehigh Acres. Built using high endurance modular materials and carefully planned to optimize natural light, ventilation, and Florida's coastal requirements.",
        longDescription: "Lehigh Acres is a vibrant community near Fort Myers, famous for open spaces and a tranquil environment. Ideal for those seeking peace and nature while remaining close to modern amenities.",
        image: "/projects/lehigh/img-1.webp",
        status: "Completed",
        sqft: "1,700 sq ft",
        bedrooms: "3",
        bathrooms: "2",
        garage: "Double",
        lotSize: "1/4 acre",
        floorplanUrl: "/plano-lehigh.pdf",
        mapUrl: "https://maps.google.com/maps?q=2904%206th%20St%20W,%20Lehigh%20Acres,%20FL%2033971&t=&z=14&ie=UTF8&iwloc=&output=embed",
        features: [
          { icon: "check_circle", title: "3 spacious bedrooms", desc: "" },
          { icon: "check_circle", title: "2 full bathrooms", desc: "" },
          { icon: "check_circle", title: "Fully equipped kitchen", desc: "" },
          { icon: "check_circle", title: "Practical laundry area", desc: "" }
        ],
        galleryItems: [
          { id: 1, src: '/projects/gallery/home-2.jpg.webp', category: 'interior' },
          { id: 2, src: '/projects/gallery/home-6.jpg.webp', category: 'interior' },
          { id: 3, src: '/projects/gallery/home-7.jpg.webp', category: 'interior' },
          { id: 4, src: '/projects/gallery/house-3.jpg.webp', category: 'exterior' },
          { id: 5, src: '/projects/gallery/house-4.jpg.webp', category: 'interior' },
          { id: 6, src: '/projects/gallery/house-5.jpg.webp', category: 'interior' },
          { id: 7, src: '/projects/gallery/house-6.jpg.webp', category: 'interior' },
          { id: 8, src: '/projects/gallery/house-7.jpg.webp', category: 'interior' },
          { id: 9, src: '/projects/gallery/house-8.jpg.webp', category: 'interior' },
          { id: 10, src: '/projects/gallery/house-9.jpg.webp', category: 'interior' },
          { id: 11, src: '/projects/gallery/house-10.jpg.webp', category: 'interior' },
          { id: 12, src: '/projects/gallery/house-11.jpg.webp', category: 'interior' },
          { id: 13, src: '/projects/gallery/house-12.jpg.webp', category: 'interior' },
          { id: 14, src: '/projects/gallery/house-13.jpg.webp', category: 'interior' },
          { id: 15, src: '/projects/gallery/house2-1.jpg.webp', category: 'exterior' },
        ]
      },
      {
        id: "cape-coral",
        location: "432 Burnt Store Rd S, Cape Coral, FL 33991",
        title: "Modern and Luxurious Living Awaits You in Cape Coral",
        description: "Modern luxury under construction in the prestigious Burnt Store area.",
        fullDescription: "Explore the opportunity to own a modern and spacious home under construction in the prestigious area of Burnt Store Rd S, Cape Coral, FL. This residential project offers contemporary design and a prime location with panoramic views and direct access to waterways.",
        longDescription: "This two-story private residence spans 13,175 sq ft of prime lot area, featuring 5 bedrooms and 4.5 bathrooms. Designed for the ultimate waterfront lifestyle, the property offers direct access to Cape Coral's world-famous canal system.",
        image: "/projects/cape-coral/showcase-1.webp",
        status: "Under Construction",
        delivery: "2 months",
        sqft: "1,700 - 2,500 sq ft",
        bedrooms: "5",
        bathrooms: "4.5",
        garage: "Two-Car",
        floors: "Two",
        propertyType: "Private Residence",
        lotSize: "13,175 sq ft",
        mapUrl: "https://maps.google.com/maps?q=432%20Burnt%20Store%20Rd%20S,%20Cape%20Coral,%20FL%2033991&t=&z=14&ie=UTF8&iwloc=&output=embed",
        features: [
          { icon: "star", title: "Prime Water Access", desc: "Direct access to waterways from the prestigious Burnt Store Rd area." },
          { icon: "architecture", title: "Contemporary Design", desc: "Sleek, modern architectural lines optimized for natural light." },
          { icon: "layers", title: "Two-Story Living", desc: "Spacious multi-level layout for maximum comfort." },
          { icon: "landscape", title: "Generous Lot", desc: "Large 13,175 sq ft property with plenty of space for outdoor living." }
        ],
        galleryItems: [
          { id: 101, src: '/projects/cape-coral/showcase-1.webp', category: 'exterior' },
          { id: 102, src: '/projects/cape-coral/showcase-2.webp', category: 'interior' },
          { id: 103, src: '/projects/cape-coral/showcase-3.webp', category: 'exterior' },
          { id: 6, src: '/projects/cape-coral/1000001031.jpg.webp', category: 'interior' },
          { id: 7, src: '/projects/cape-coral/1000001032.jpg.webp', category: 'interior' },
          { id: 8, src: '/projects/cape-coral/1000001033.jpg.webp', category: 'interior' },
          { id: 9, src: '/projects/cape-coral/1000001034.jpg.webp', category: 'interior' },
          { id: 10, src: '/projects/cape-coral/1000001035.jpg.webp', category: 'interior' },
          { id: 11, src: '/projects/cape-coral/1000001036.jpg.webp', category: 'interior' },
          { id: 12, src: '/projects/cape-coral/1000001037.jpg.webp', category: 'interior' },
          { id: 13, src: '/projects/cape-coral/1000001038-scaled.jpg.webp', category: 'interior' },
          { id: 14, src: '/projects/cape-coral/1000001040.jpg.webp', category: 'interior' },
          { id: 15, src: '/projects/cape-coral/1000001041.jpg.webp', category: 'interior' },
          { id: 16, src: '/projects/cape-coral/1000001043.jpg.webp', category: 'interior' },
          { id: 17, src: '/projects/cape-coral/1000001044.jpg.webp', category: 'interior' },
          { id: 18, src: '/projects/cape-coral/1000001045.jpg.webp', category: 'interior' },
          { id: 19, src: '/projects/cape-coral/1000001047.jpg.webp', category: 'interior' },
          { id: 20, src: '/projects/cape-coral/1000001048.jpg.webp', category: 'interior' },
          { id: 21, src: '/projects/cape-coral/1000001049.jpg.webp', category: 'interior' },
          { id: 22, src: '/projects/cape-coral/1000001050.jpg.webp', category: 'interior' },
          { id: 23, src: '/projects/cape-coral/1000001051.jpg.webp', category: 'interior' },
          { id: 24, src: '/projects/cape-coral/1000001052.jpg.webp', category: 'interior' },
          { id: 1, src: '/projects/cape-coral/432-Burnt-Store-Rd-S-1.jpg.webp', category: 'exterior' },
          { id: 2, src: '/projects/cape-coral/432-Burnt-Store-Rd-S-3.jpg.webp', category: 'exterior' },
          { id: 3, src: '/projects/cape-coral/432-Burnt-Store-Rd-S-4.jpg.webp', category: 'exterior' },
          { id: 4, src: '/projects/cape-coral/432-Burnt-Store-Rd-S-5.jpg.webp', category: 'exterior' },
          { id: 5, src: '/projects/cape-coral/432-Burnt-Store-Rd-S-6.jpg.webp', category: 'exterior' }
        ]
      },
      {
        id: "lucia-rental",
        isRental: true,
        airbnbUrl: "https://www.airbnb.com.co/rooms/817437820840011187",
        location: "Bokeelia, FL",
        title: "Escape to Coastal Paradise in Bokeelia",
        description: "Waterfront Vacation Retreat with Pool, Private Dock, and Modern Comforts.",
        image: "https://rubendsalazar.com/wp-content/uploads/2024/08/house-1024x576.jpg",
        status: "Available",
        delivery: "Immediate",
        sqft: "Cozy 2-Bedroom",
        bedrooms: "2",
        bathrooms: "1",
        propertyType: "Private Residence",
        features: [
          { icon: "water", title: "Direct Water Access", desc: "Private Dock and Boat Lift available for your use." },
          { icon: "pool", title: "Covered Pool", desc: "Relax in a Bug-Free Environment." },
          { icon: "security", title: "Top Security", desc: "Exterior Cameras for Your Peace of Mind." },
          { icon: "kitchen", title: "Equipped Kitchen", desc: "Fully equipped with stainless steel appliances." }
        ],
        fullDescription: "Located on Pine Island, this charming waterfront home offers the perfect blend of tranquility and modern comfort. Ideal for small families, couples, or solo adventurers looking to escape to a serene, nature-filled setting.",
        longDescription: "This cozy 2-bedroom, 1-bathroom home is designed to offer you the best vacation experience. From its fully equipped kitchen with stainless steel appliances to its spacious deck with water views, every detail is thoughtfully considered for your comfort. From the Bokeelia fishing pier to the beaches of Boca Grande, there's something for everyone in this vibrant coastal community. Explore nature preserves, rent a boat to tour nearby islands, or simply relax while watching dolphins play in the bay.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.125!2d-82.1611!3d26.702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db44d!2s1604+Buccaneer+St%2C+Bokeelia%2C+FL+33922!5e0!3m2!1sen!2sus!4v1",
        galleryItems: [
          { id: 201, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/house-1024x576.jpg', category: 'exterior' },
          { id: 202, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/pool2-300x300.jpg', category: 'exterior' },
          { id: 203, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/muelle-300x300.jpg', category: 'exterior' },
          { id: 204, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/segurity-300x300.jpg', category: 'exterior' },
          { id: 205, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/17b5a513-ca0d-44e2-8661-6f11286d05bd.jpg.webp', category: 'interior' },
          { id: 206, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/1d521200-b2bc-4d49-bb36-2ce65c92a207.jpeg.webp', category: 'interior' },
          { id: 207, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/27057187-db47-4ee5-b409-b837f54f9ef5.jpg.webp', category: 'interior' },
          { id: 208, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/2efaffe8-8bb0-4e4b-88ef-d1be7d6e4c1a.jpg.webp', category: 'interior' },
          { id: 209, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/47db9bae-ba4f-4ae0-bfaa-b2533bc3ed5e.jpg-1.webp', category: 'interior' },
          { id: 210, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/5ed8f657-6c61-4656-beea-dc95ef374271.jpg.webp', category: 'exterior' },
          { id: 211, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/72ad9bd0-2b34-461c-9177-701d0b51f3cf.jpeg.webp', category: 'interior' },
          { id: 212, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/a3c6235c-aa5b-4b42-88dc-e2c6a43917f8.jpeg.webp', category: 'interior' },
          { id: 213, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/a4055374-bb00-4b2a-983e-e8af664db3f1.jpg-1.webp', category: 'interior' },
          { id: 214, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/c66791af-f12e-4ead-9a78-621ee208feb0.jpeg.webp', category: 'exterior' },
          { id: 215, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/dffe1c9b-2ee8-449d-8c67-777131faac8b.jpeg.webp', category: 'interior' },
          { id: 216, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/eb0b2319-2c1e-458a-a26a-ae2bf3ab9c02.jpg.webp', category: 'interior' },
          { id: 217, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/ef7e05a2-0696-4b89-83f0-8a8d8087c73d.jpeg.webp', category: 'interior' },
          { id: 218, src: 'https://rubendsalazar.com/wp-content/uploads/2024/08/ff82a17b-07be-455c-9047-3ed5e9eef1d0.jpg.webp', category: 'interior' }
        ]
      }
    ]
  },
  trustBadges: [
    { icon: "gavel", title: "Licensed and Insured General Contractor" },
    { icon: "location_on", title: "Operating entirely in Florida" },
    { icon: "flight_takeoff", title: "Licensed Real Estate Relocation Agent" },
    { icon: "precision_manufacturing", title: "High Quality Custom Housing Builder" },
  ],
  contactSection: {
    tagline: "Do you need more information or assistance?",
    title: "Creating quality urban lifestyles, building stronger communities.",
    description: "He is a certified construction contractor with Florida license and insurance (CBC 1253051) and a licensed Florida real estate relocation agent (SL3185388).",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV2BG3KDnlrAcnqqCYgZgeRmWe9ZZy9n-Qm8e9YfFXEM80dkVr3kp0e18yc6WtzVPZzhSkvp7j5VExKy2Q_gITWtVQ91XSIZUz5zC35fnVBGwfJ0GCALZmX1sIf_flzjxUHltjZY3OmgR7pxyBaQcM8rcXPjZeymcl0dPM0qieHID9liisf4n4NX00AR-Ui0iX4HvWjFqp79Dnel6tiQfxz_qBisRJ9ZgXOk3pw1a3xNHmX_LmrGUPKpxvacJSPXIsscWx0OODWKVX"
  },
  footer: {
    description: "Building relationships with the community and trusted contractors for 32 years. Contact us today via whatsapp or mail."
  },
  ui: {
    getQuote: "Get a Quote",
    requestConsultation: "Explore more",
    viewProjects: "View Projects",
    viewDetails: "Explore Now",
    mainHq: "Headquarters Location",
    directLine: "Company phone numbers",
    inquiries: "Business Email",
    contactForm: {
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your name",
      phone: "Phone",
      phonePlaceholder: "+1 (000) 000-0000",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Project Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Inquiry"
    },
    footer: {
      quickLinks: "Quick Links",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      licensingInfo: "Licensing Information",
      investorRelations: "Investor Relations",
      newsletter: "Newsletter",
      newsletterDesc: "Sign up for updates on new home developments and real estate opportunities.",
      emailPlaceholder: "Email address",
      joinBtn: "Join",
      copyrightText: "Ruben D Salazar © Enlace Agencia 2022© All rights reserved",
      license1: "FL State License #CBC1253051",
      license2: "Real Estate License #SL3185388"
    }
  },
  gallery: [
    "/projects/gallery/house-1.jpg.webp",
    "/projects/gallery/house-2.jpg.webp",
    "/projects/gallery/house-3.jpg.webp",
    "/projects/gallery/house-3.jpg-2.webp",
    "/projects/gallery/house-4.jpg.webp",
    "/projects/gallery/house-5.jpg.webp",
    "/projects/gallery/house-6.jpg.webp",
    "/projects/gallery/house-8.jpg.webp",
    "/projects/gallery/house-9.jpg.webp",
    "/projects/gallery/house-10.jpg.webp",
    "/projects/gallery/house-11.jpg.webp",
    "/projects/gallery/house-12.jpg.webp",
  ]
};

const siteDataES: SiteData = {
  companyName: "Ruben D Salazar, Inc.",
  logoUrl: "/logo-rds.webp",
  navLinks: [
    { id: "home", label: "Inicio", href: "#" },
    { id: "about", label: "Nosotros", href: "#about" },
    { id: "services", label: "Servicios", href: "#services" },
    { id: "projects", label: "Nuestras obras", href: "#projects" },
    { id: "contact", label: "Contactos", href: "#contact" },
  ],
  contact: {
    hq: "Cape Coral FL USA",
    phone: "+1 (239) 284 5886",
    email: "rubendarios@gmail.com",
  },
  hero: {
    title: "Construimos y administramos lugares e infraestructuras.",
    subtitle: "147 Proyectos Completados | 25+ Años de Experiencia",
    description: "",
    bgImage: siteDataEN.hero.bgImage,
    sliderImages: siteDataEN.hero.sliderImages,
  },
  about: {
    tagline: "Nosotros",
    title: "Nuestra compañía Ruben D Salazar, Inc.",
    description: "Somos un contratista general con licencia y seguro en Florida (CBC#1253051) y estamos legalmente autorizados para construir nuevas casas o completar renovaciones interiores o exteriores de cualquier alcance o tamaño. ¿Necesita un contratista para construir su casa de ensueño? Nos encantaría ser parte de convertir sus sueños en realidad. Hemos pasado los últimos 32 años construyendo relaciones con la comunidad y contratistas de confianza.",
    yearsExperience: "25",
    yearsText: "Años de Experiencia en Florida.",
    image: siteDataEN.about.image,
    features: [
      {
        icon: "verified",
        title: "Licencia y seguro en Florida",
        desc: "Licencia de Contratista (CBC#1253051) cumpliendo con los más altos estándares."
      },
      {
        icon: "real_estate_agent",
        title: "Especialista en Reubicación",
        desc: "Transición sin problemas y soluciones inmobiliarias en todo el suroeste floridano."
      }
    ]
  },
  services: {
    title: "Nuestros Servicios",
    description: "Hemos construido nuestra forma de vida al construir y remodelar hogares.",
    items: [
      {
        id: "s1",
        icon: "architecture",
        title: "Planificación de proyectos.",
        description: "Desde lo simple hasta lo más lujoso, lo hemos experimentado todo y podemos ayudarte en cada paso del camino.",
        image: siteDataEN.services.items[0].image
      },
      {
        id: "s2",
        icon: "construction",
        title: "Contrato general.",
        description: "Como contratistas generales de residencias, nos esforzamos por satisfacer todas las necesidades para cualquier proyecto en el hogar que pueda tener.",
        image: siteDataEN.services.items[1].image
      },
      {
        id: "s3",
        icon: "home_repair_service",
        title: "Remodelación.",
        description: "Trabajaremos contigo para cumplir con los plazos y coordinar con otros proyectos relacionados. Mantendremos una comunicación abierta.",
        image: siteDataEN.services.items[2].image
      }
    ]
  },
  modularSteel: {
    tagline: "25 años de experiencia",
    title: "Construcción de nuevas viviendas y ampliaciones comerciales y residenciales.",
    description: "Asegúrate de elegir la propiedad adecuada para tu propósito. Ofrecemos desde la producción de planos certificados por ingenieros hasta la construcción completa del proyecto. Evaluamos el sitio y coordinamos cada paso, desde la cimentación hasta la instalación final, utilizando artesanos habilidosos y subcontratistas confiables para materializar tu visión.",
    awardTitle: "5 años consecutivos ganando el premio al mejor constructor en Cape Coral",
    bgImage: siteDataEN.modularSteel.bgImage,
    image: siteDataEN.modularSteel.image
  },
  projects: {
    title: "Proyectos Destacados",
    description: "Proyectos de Calidad y Lujo",
    items: [
      {
        id: "lehigh-acres",
        location: "2904 6th St W, Lehigh Acres, FL 33971",
        title: "Descubre Tu Nuevo Hogar en Lehigh Acres",
        description: "Ofrecemos de todo, desde la producción y planificación hasta la construcción exitosa de tu nuevo proyecto llave en mano.",
        fullDescription: "Una maravilla arquitectónica moderna situada en el corazón de Lehigh Acres. Construida con materiales modulares de alta resistencia y planificada cuidadosamente para optimizar la luz natural, la ventilación y los requisitos locales de Florida.",
        longDescription: "Lehigh Acres es una comunidad vibrante cerca de Fort Myers, famosa por los espacios abiertos y un ambiente tranquilo. Ideal para quienes buscan paz y naturaleza.",
        image: siteDataEN.projects.items[0].image,
        status: "Completado",
        sqft: "1,700 sq ft",
        bedrooms: "3",
        bathrooms: "2",
        garage: "Doble",
        lotSize: "1/4 acre",
        floorplanUrl: "/plano-lehigh.pdf",
        mapUrl: siteDataEN.projects.items[0].mapUrl,
        features: [
          { icon: "check_circle", title: "3 amplias habitaciones", desc: "" },
          { icon: "check_circle", title: "2 baños completos", desc: "" },
          { icon: "check_circle", title: "Cocina completamente equipada", desc: "" },
          { icon: "check_circle", title: "Práctica área de lavandería", desc: "" }
        ],
        galleryItems: siteDataEN.projects.items[0].galleryItems
      },
      {
        id: "cape-coral",
        location: "432 Burnt Store Rd S, Cape Coral, FL 33991",
        title: "La Vida Moderna y Lujosa Te Espera en Cape Coral",
        description: "Lujo moderno en construcción en la prestigiosa zona de Burnt Store.",
        fullDescription: "Explore la oportunidad de poseer una casa moderna y espaciosa en construcción en la prestigiosa zona de Burnt Store Rd S, Cape Coral, FL. Este proyecto residencial ofrece un diseño contemporáneo y una ubicación privilegiada con vistas panorámicas y acceso directo a canales navegables.",
        longDescription: "Esta residencia privada de dos plantas ocupa un terreno de 13,175 pies cuadrados y cuenta con 5 habitaciones y 4.5 baños. Diseñada para un estilo de vida frente al mar, ofrece acceso directo al sistema de canales de Cape Coral.",
        image: siteDataEN.projects.items[1].image,
        status: "En Construcción",
        delivery: "2 meses",
        sqft: "1,700 - 2,500 pies cuadrados",
        bedrooms: "5",
        bathrooms: "4.5",
        garage: "Para Dos Autos",
        floors: "Dos",
        propertyType: "Residencia Privada",
        lotSize: "13,175 pies cuadrados",
        mapUrl: siteDataEN.projects.items[1].mapUrl,
        features: [
          { icon: "star", title: "Acceso al Agua", desc: "Acceso directo a canales navegables desde la prestigiosa zona de Burnt Store Rd." },
          { icon: "architecture", title: "Diseño Contemporáneo", desc: "Líneas arquitectónicas modernas optimizadas para la luz natural." },
          { icon: "layers", title: "Dos Plantas", desc: "Espaciosa distribución de varios niveles para el máximo confort." },
          { icon: "landscape", title: "Terreno Generioso", desc: "Amplia propiedad de 13,175 pies cuadrados con mucho espacio libre." }
        ],
        galleryItems: siteDataEN.projects.items[1].galleryItems
      },
      {
        id: "lucia-rental",
        isRental: true,
        airbnbUrl: siteDataEN.projects.items[2].airbnbUrl,
        location: "Bokeelia, FL",
        title: "Escapa al Paraíso Costero en Bokeelia",
        description: "Retiro vacacional frente al mar con piscina, muelle privado y comodidades modernas.",
        image: siteDataEN.projects.items[2].image,
        status: "Disponible",
        delivery: "Inmediata",
        sqft: "Acogedora 2 Habitaciones",
        bedrooms: "2",
        bathrooms: "1",
        propertyType: "Residencia Privada",
        features: [
          { icon: "water", title: "Acceso Directo al Agua", desc: "Muelle privado y elevador de botes disponible para tu uso." },
          { icon: "pool", title: "Piscina Techada", desc: "Relájate en un ambiente libre de insectos." },
          { icon: "security", title: "Máxima Seguridad", desc: "Cámaras exteriores para tu tranquilidad." },
          { icon: "kitchen", title: "Cocina Equipada", desc: "Totalmente equipada con electrodomésticos de acero inoxidable." }
        ],
        fullDescription: "Ubicada en Pine Island, esta encantadora casa frente al agua ofrece la combinación perfecta de tranquilidad y comodidad moderna. Ideal para familias pequeñas, parejas o aventureros solitarios que buscan escapar a un entorno sereno y lleno de naturaleza.",
        longDescription: "Esta acogedora casa de 2 habitaciones y 1 baño está diseñada para ofrecerte la mejor experiencia vacacional. Desde su cocina completamente equipada con electrodomésticos de acero inoxidable hasta su espaciosa terraza con vistas al agua, cada detalle está pensado para tu máxima comodidad. Desde el muelle de pesca de Bokeelia hasta las playas de Boca Grande, hay algo para todos en esta vibrante comunidad costera. Explora reservas naturales, alquila un barco para recorrer las islas cercanas o simplemente relájate contemplando los delfines jugar en la bahía.",
        mapUrl: siteDataEN.projects.items[2].mapUrl,
        galleryItems: siteDataEN.projects.items[2].galleryItems
      }
    ]
  },
  trustBadges: [
    { icon: "gavel", title: "Contratista General Licenciado y Asegurado" },
    { icon: "location_on", title: "Operando completamente en la Florida" },
    { icon: "flight_takeoff", title: "Agente de Reubicación Inmobiliaria" },
    { icon: "precision_manufacturing", title: "Constructores de Alta Calidad y Detalle" },
  ],
  contactSection: {
    tagline: "¿Necesitas más información o ayuda?",
    title: "Creando estilos de vida urbanos de calidad, construyendo comunidades más fuertes.",
    description: "Es un contratista de construcción certificado con licencia y seguro de Florida (CBC 1253051) y un agente de reubicación de bienes raíces de Florida con licencia (SL3185388).",
    bgImage: siteDataEN.contactSection.bgImage
  },
  footer: {
    description: "Construyendo las bases de la comunidad de SWFL desde hace 32 años de trayectoria. Somos su contratista de confianza."
  },
  ui: {
    getQuote: "Obtener Presupuesto",
    requestConsultation: "Descubre más",
    viewProjects: "Ver Proyectos",
    viewDetails: "¡Explora Ahora!",
    mainHq: "La Oficina Central",
    directLine: "Teléfonos de la empresa",
    inquiries: "Recepción de Correos",
    contactForm: {
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Escribe tu nombre",
      phone: "Teléfono",
      phonePlaceholder: "+1 (000) 000-0000",
      email: "Correo Electrónico",
      emailPlaceholder: "tu@correo.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu necesidad...",
      submit: "Enviar Consulta"
    },
    footer: {
      quickLinks: "Enlaces Rápidos",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio",
      licensingInfo: "Información de Licencias",
      investorRelations: "Relaciones con Clientes",
      newsletter: "Boletín Informativo",
      newsletterDesc: "Regístrate para recibir actualizaciones sobre propiedades en Florida.",
      emailPlaceholder: "Dirección de correo",
      joinBtn: "Unirse",
      copyrightText: "Ruben D Salazar © Enlace Agencia 2022© Todos los derechos reservados",
      license1: "Licencia del Estado FL #CBC1253051",
      license2: "Licencia Bienes Raíces #SL3185388"
    }
  },
  gallery: siteDataEN.gallery
};

export const translations = {
  en: siteDataEN,
  es: siteDataES
};
