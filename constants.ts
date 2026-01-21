import { Profile, Publication, CoverArt, Award, GalleryPhoto } from './types';

// ==============================================================================
//  INSTRUCTIONS FOR IMAGES (GITHUB METHOD)
// ==============================================================================
// 1. Upload your images (Headshot, AFM, AMI, CM covers, Awards, Photos) to your GitHub repository.
// 2. Open the image in GitHub, right-click the "Raw" button, select "Copy Link".
// 3. Paste the links into the 'headshotUrl' and 'imageUrl' fields below.
// ==============================================================================

// ==========================================
// USER PROFILE DATA
// ==========================================
export const PROFILE: Profile = {
  name: "Shih-Ho Lin 林世和",
  role: "Ph.D. Candidate (Graduating Soon)",
  institution: "National Taiwan University",
  email: "f07549022@ntu.edu.tw",
  address: "No. 1, Sec. 4, Roosevelt Rd., Taipei 106319, Taiwan",
  addressZh: "106319 臺北市羅斯福路四段一號",
  googleScholarUrl: "https://scholar.google.com/citations?user=JSngMeYAAAAJ&hl=zh-TW",
  linkedinUrl: "https://www.linkedin.com/in/shih-ho-lin",
  
  // [TODO: HEADSHOT PHOTO]
  // Paste your GitHub Raw Link for your profile photo below.
  headshotUrl: "https://raw.githubusercontent.com/howard0338/Images/ae37165ce79cc32f81b63b2c18ac3c7681de46c5/public/Headshot.jpg", 

  logoUrl: "https://raw.githubusercontent.com/howard0338/Images/4e08dbff637a40d351697cbd97f28c985db61e02/public/NTULogo.png",

  bio: "I am a polymer material scientist and engineer specializing in biomedical material design, characterization, and AI-driven solutions. With 4+ years of in vivo experience and 7+ years in synchrotron radiation center, my expertise integrates advanced technologies to create next-generation biomedical solutions.",
  
  skills: [
    "Polymer Science",
    "Self-healing Hydrogel",
    "Material Design & Development",
    "Synchrotron Tech.",
    "Neuro-engineering",
    "Neural Stem Cells",
    "AI Integration"
  ]
};

// ==========================================
// PUBLICATIONS LIST
// ==========================================
export const PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: "p1",
    title: "Smart hydrogels for in situ tissue drug delivery",
    authors: ["S.H. Lin", "S.h. Hsu"],
    venue: "Journal of Biomedical Science 32 (1), 70",
    year: 2025,
    link: "https://doi.org/10.1186/s12929-025-01166-2",
    tags: ["Drug Delivery", "Hydrogel"]
  },
  {
    id: "p2",
    title: "Injectable hierarchical bioactive hydrogels with fibroblast growth factor 21/edaravone/caffeic acid asynchronous delivery for treating Parkinson's disease",
    authors: ["J. Xu", "P. Dai", "C. Zhang", "N. Dong", "C. Li", "C. Tang", "Z. Jin", "S.H. Lin", "L. Ye", "T. Sun", "S.h. Hsu"],
    venue: "Advanced Science 12 (4), 2412020",
    year: 2025,
    link: "https://doi.org/10.1002/advs.202412020",
    tags: ["Parkinson’s", "Hydrogel"]
  },
  {
    id: "p3",
    title: "An antioxidative injectable chitosan hydrogel based on tannic acid modified dialdehyde polyurethane nano-crosslinker targeting RIPK1 to regulate neuroinflammation for Parkinson’s disease treatment",
    authors: ["J. Xu", "C. Guo", "G. Zhou", "H. Chen", "P. Dai", "C. Tang", "S.H. Lin", "T.Y. Chen", "C. Zhang", "S.h. Hsu"],
    venue: "Biomaterials, 123614",
    year: 2025,
    link: "https://www.sciencedirect.com/science/article/pii/S0142961225005332",
    tags: ["Neuroinflammation", "Biomaterials"]
  },
  {
    id: "p4",
    title: "A self-healing micellar hydrogel system for controlled release of caffeic acid phenethyl ester and durable inhibition of prostate tumor",
    authors: ["P.Y. Chen", "S.H. Lin", "H.D. Wang", "S.h. Hsu", "C.P. Chuu"],
    venue: "International Journal of Biological Macromolecules, 147362",
    year: 2025,
    link: "https://www.sciencedirect.com/science/article/pii/S014181302507919X",
    tags: ["Tumor Inhibition", "Drug Delivery"]
  },
  // 2024
  {
    id: "p5",
    title: "Chitosan catechol-tannic acid composite hydrogel and cryogel with antimicrobial and hemostatic properties",
    authors: ["L.J. Huang", "S.H. Lin", "T.Y. Chen", "S.h. Hsu"],
    venue: "International Journal of Biological Macromolecules 270, 132174",
    year: 2024,
    link: "https://www.sciencedirect.com/science/article/pii/S0141813024029799",
    tags: ["Antimicrobial", "Hemostatic"]
  },
  // 2023
  {
    id: "p6",
    title: "Injectable, micellar chitosan self‐healing hydrogel for asynchronous dual‐drug delivery to treat stroke rats",
    authors: ["S.H. Lin", "A.P.H. Huang", "S.h. Hsu"],
    venue: "Advanced Functional Materials 33 (45), 2303853",
    year: 2023,
    link: "https://doi.org/10.1002/adfm.202303853",
    tags: ["Stroke", "Drug Delivery"]
  },
  {
    id: "p7",
    title: "Stretchable and biodegradable chitosan-polyurethane-cellulose nanofiber composites as anisotropic materials",
    authors: ["Y.F. Shih", "S.H. Lin", "J. Xu", "C.J. Su", "C.F. Huang", "S.h. Hsu"],
    venue: "International Journal of Biological Macromolecules 230, 123116",
    year: 2023,
    link: "https://www.sciencedirect.com/science/article/pii/S0141813022032639",
    tags: ["Biodegradable", "Nanofiber"]
  },
  // 2022
  {
    id: "p8",
    title: "Biomimetic strain-stiffening in chitosan self-healing hydrogels",
    authors: ["Y. Liu", "S.H. Lin", "W.T. Chuang", "N.T. Dai", "S.h. Hsu"],
    venue: "ACS Applied Materials & Interfaces 14 (14), 16032-16046",
    year: 2022,
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.2c01720",
    tags: ["Biomimetic", "Self-healing"]
  },
  {
    id: "p9",
    title: "Functionalized cellulose nanofibers as crosslinkers to produce chitosan self-healing hydrogel and shape memory cryogel",
    authors: ["L.T. Juan", "S.H. Lin", "C.W. Wong", "U.S. Jeng", "C.F. Huang", "S.h. Hsu"],
    venue: "ACS Applied Materials & Interfaces 14 (32), 36353-36365",
    year: 2022,
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.2c07170",
    tags: ["Shape Memory", "Cryogel"]
  },
  {
    id: "p10",
    title: "Gelation and the self-healing behavior of the chitosan–catechol hydrogel",
    authors: ["Y.T. Lan", "Q.P. Cheng", "J. Xu", "S.H. Lin", "J.M. Lin", "S.h. Hsu"],
    venue: "Polymers 14 (21), 4614",
    year: 2022,
    link: "https://www.mdpi.com/2073-4360/14/21/4614",
    tags: ["Gelation", "Hydrogel"]
  },
  {
    id: "p11",
    title: "Creative transformation of biomedical polyurethanes: from biostable tubing to biodegradable smart materials",
    authors: ["S.h. Hsu", "J. Xu", "S.H. Lin", "S.D. Wu", "Q.P. Cheng", "C.W. Wong"],
    venue: "Journal of Polymer Research 29 (2), 70",
    year: 2022,
    link: "https://link.springer.com/article/10.1007/s10965-022-02919-5",
    tags: ["Polyurethanes", "Smart Materials"]
  },
  // 2021
  {
    id: "p12",
    title: "Injectable phenolic-chitosan self-healing hydrogel with hierarchical micelle architectures and fast adhesiveness",
    authors: ["S.H. Lin", "C.M. Papadakis", "J.J. Kang", "J.M. Lin", "S.h. Hsu"],
    venue: "Chemistry of Materials 33 (11), 3945-3958",
    year: 2021,
    link: "https://pubs.acs.org/doi/full/10.1021/acs.chemmater.1c00028",
    tags: ["Micelle", "Adhesiveness"]
  },
  // 2019
  {
    id: "p13",
    title: "Smart polymers for cell therapy and precision medicine",
    authors: ["H.J. Huang", "Y.L. Tsai", "S.H. Lin", "S.h. Hsu"],
    venue: "Journal of Biomedical Science 26 (1), 73",
    year: 2019,
    link: "https://link.springer.com/article/10.1186/s12929-019-0571-4",
    tags: ["Cell Therapy", "Precision Medicine"]
  }
];

// ==========================================
// COVER ARTS
// ==========================================
export const COVER_ARTS: CoverArt[] = [
  {
    id: "c1",
    journal: "Advanced Functional Materials",
    year: 2023,
    // [TODO: AFM COVER ART] - Paste your GitHub Link below
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/ae37165ce79cc32f81b63b2c18ac3c7681de46c5/public/cover%20art%20AFM.jpg", 
    caption: "Inside Front Cover",
    publicationId: "p6"
  },
  {
    id: "c2",
    journal: "ACS Applied Materials & Interfaces",
    year: 2022,
    // [TODO: AMI COVER ART] - Paste your GitHub Link below
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/ae37165ce79cc32f81b63b2c18ac3c7681de46c5/public/cover%20art%20AMI.jpg",
    caption: "Supplementary Cover",
    publicationId: "p8"
  },
  {
    id: "c3",
    journal: "Chemistry of Materials",
    year: 2021,
    // [TODO: CM COVER ART] - Paste your GitHub Link below
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/ae37165ce79cc32f81b63b2c18ac3c7681de46c5/public/cover%20art%20CM.jpg",
    caption: "Supplementary Cover",
    publicationId: "p12"
  }
];

// ==========================================
// AWARDS & PATENTS (4 Slots)
// ==========================================
export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "Future Tech Award",
    organization: "National Science and Technology Council (NSTC)",
    year: 2024,
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/dc1b033958638e3f5d6649bc090a14214ca82168/public/Future.jpg"
  },
  {
    id: "a2",
    title: "Science and Technology Scholarship",
    organization: "CTCI Foundation",
    year: 2023,
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/dc1b033958638e3f5d6649bc090a14214ca82168/public/CTCI.jpg"
  },
  {
    id: "a3",
    title: "Lam Research Thesis Award",
    organization: "Lam Research",
    year: 2023,
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/dc1b033958638e3f5d6649bc090a14214ca82168/public/LAM.jpg"
  },
  {
    id: "a4",
    title: "Republic of China (Taiwan) Patent",
    organization: "Intellectual Property Office",
    year: 2022,
    imageUrl: "https://raw.githubusercontent.com/howard0338/Images/dc1b033958638e3f5d6649bc090a14214ca82168/public/Patent.jpg"
  }
];

// ==========================================
// PHOTOS (Gallery)
// ==========================================
export const PHOTOS: GalleryPhoto[] = [
  {
    id: "ph1",
    // [TODO: Photo 1] - Paste your GitHub Link below
    imageUrl: "https://via.placeholder.com/600x400?text=Lab+Life",
    caption: "Working in the lab"
  },
  {
    id: "ph2",
    // [TODO: Photo 2] - Paste your GitHub Link below
    imageUrl: "https://via.placeholder.com/400x600?text=Conference",
    caption: "Presenting at SFB 2023"
  },
  {
    id: "ph3",
    // [TODO: Photo 3] - Paste your GitHub Link below
    imageUrl: "https://via.placeholder.com/600x400?text=Team",
    caption: "Research Group Retreat"
  }
];
