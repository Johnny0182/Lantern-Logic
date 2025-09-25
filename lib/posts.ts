export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  mood: 'hero' | 'feature' | 'quick';
  accent: string;
  gradient: string;
}

export const posts: Post[] = [
  {
    slug: 'synthetic-sunrises',
    title: 'Synthetic Sunrises: Designing the Mood of Smart Cities',
    excerpt:
      'Urban planners are programming artificial dawns to keep megacities in sync. Can code make mornings feel more human?',
    content: [
      'As global cities rise vertically, natural light becomes a premium amenity. Designers are responding with synthetic skylines — programmable facades that bloom into sunrise gradients before commuters pour into the streets.',
      'The Lantern Logic team embedded with Seoul’s newest “always dawn” district to understand how circadian lighting is woven into transit, wellness, and retail moments. Residents receive a personalized color temperature blend based on sleep history, while public plazas pivot to cooler palettes once afternoon productivity should spike.',
      'Yet the soft glow hides hard questions: Who controls the dimmer switch of a city? Civic technologists argue that these systems must be transparent and modular to avoid a new class divide between biologically-aligned neighborhoods and everyone else.'
    ],
    category: 'Future Cities',
    readTime: '7 min read',
    publishedAt: '2 hours ago',
    mood: 'hero',
    accent: '#f67280',
    gradient: 'linear-gradient(135deg, rgba(246, 114, 128, 0.9), rgba(192, 108, 132, 0.65))'
  },
  {
    slug: 'wiki-rewilding',
    title: 'Rewilding Wikipedia with Generative Stewardship',
    excerpt:
      'Volunteer editors are enlisting AI partners to rehabilitate neglected knowledge ecosystems without erasing human nuance.',
    content: [
      'Hyper-niche communities are turning Wikipedia stubs into lush, multimedia gardens. Instead of letting bots run wild, curators are pairing generative systems with review circles to preserve tone, citations, and lived context.',
      'The hybrid workflow mirrors ecological stewardship: algorithms propose seedlings of content, while humans prune, translate, and prioritize based on cultural sensitivity. The result is an encyclopedic canopy that resists homogeneity.',
      'Our playbook outlines how to evaluate synthetic contributions, mentor new editors, and structure transparency reports that keep trust intact.'
    ],
    category: 'Knowledge Systems',
    readTime: '5 min read',
    publishedAt: '4 hours ago',
    mood: 'feature',
    accent: '#c06c84',
    gradient: 'linear-gradient(135deg, rgba(192, 108, 132, 0.85), rgba(108, 91, 123, 0.6))'
  },
  {
    slug: 'climate-soundtracks',
    title: 'Climate Soundtracks for the Circular Economy',
    excerpt:
      'Composers and manufacturers are syncing audio identities to recycled materials to reveal hidden loops in supply chains.',
    content: [
      'Circular economy brands have always needed better storytelling. By publishing sonic signatures tied to material provenance, designers are helping consumers sense the loops embedded in everyday objects.',
      'We toured three factories that choreograph sound cues with every reclaimed batch. The experience feels like a living score where each instrument is a diverted waste stream.',
      'The approach could scale beyond marketing: regulators are experimenting with acoustic disclosures that alert communities when pollution thresholds near critical limits.'
    ],
    category: 'Climate & Culture',
    readTime: '6 min read',
    publishedAt: 'Yesterday',
    mood: 'feature',
    accent: '#6c5b7b',
    gradient: 'linear-gradient(140deg, rgba(108, 91, 123, 0.85), rgba(53, 92, 125, 0.7))'
  },
  {
    slug: 'microstudio-renaissance',
    title: 'The Microstudio Renaissance Is Fueling Solo Inventors',
    excerpt:
      'Compact lab lofts are equipping independent builders with cinematic tools and biotech rigs in one membership.',
    content: [
      'Membership microstudios used to be glorified co-working pods. The new wave blends fabrication bays, podcast caves, and wet labs for $300 a month.',
      'We interviewed six founders whose ventures went from sketch to prototype without leaving a single block. The key unlock? Shared compliance teams who bake regulatory hygiene into every workstation.',
      'For cities courting builders, microstudios are becoming civic infrastructure — a place to pilot policies in weeks instead of years.'
    ],
    category: 'Creator Economy',
    readTime: '4 min read',
    publishedAt: 'Yesterday',
    mood: 'quick',
    accent: '#355c7d',
    gradient: 'linear-gradient(135deg, rgba(53, 92, 125, 0.85), rgba(250, 209, 181, 0.9))'
  },
  {
    slug: 'intimate-ai-interfaces',
    title: 'Intimate AI Interfaces for Boutique Healthcare',
    excerpt:
      'Concierge clinics are building bedside agents that whisper insights without hijacking human rapport.',
    content: [
      'Healthcare startups are finally ditching sterile dashboards. Boutique clinics now favor ambient projection, haptics, and biometrics woven into warm, tactile experiences.',
      'Lantern Logic designers co-created a bedside agent that surfaces metrics as woven light patterns along the headboard. Patients reported a 30% drop in tech anxiety.',
      'We share prototyping tips for maintaining consent, grounding, and the human-to-human attention that matters most.'
    ],
    category: 'Human-Centered AI',
    readTime: '8 min read',
    publishedAt: '2 days ago',
    mood: 'quick',
    accent: '#f67280',
    gradient: 'linear-gradient(150deg, rgba(250, 209, 181, 0.9), rgba(246, 114, 128, 0.7))'
  },
  {
    slug: 'astro-archive',
    title: 'Archiving the Night Sky for the Post-Satellite Era',
    excerpt:
      'Astronomers are racing to capture dark-sky panoramas before orbit turns into a permanent light show.',
    content: [
      'With megaconstellations multiplying, dark-sky preserves are accelerating efforts to capture pristine celestial baselines.',
      'An international coalition is building an encrypted, community-owned archive of night-sky footage to inform future spectrum policy.',
      'The archive doubles as an immersive art platform, letting people experience ancient starlight through volumetric domes.'
    ],
    category: 'Space Futures',
    readTime: '9 min read',
    publishedAt: 'Last week',
    mood: 'quick',
    accent: '#355c7d',
    gradient: 'linear-gradient(140deg, rgba(53, 92, 125, 0.9), rgba(108, 91, 123, 0.65))'
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
