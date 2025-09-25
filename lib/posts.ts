export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  mood: 'hero' | 'feature' | 'dispatch' | 'quick';
  accent: string;
  gradient: string;
  coverImage: string;
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
    gradient: 'linear-gradient(135deg, rgba(246, 114, 128, 0.9), rgba(192, 108, 132, 0.65))',
    coverImage: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1600&q=80'
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
    gradient: 'linear-gradient(135deg, rgba(192, 108, 132, 0.85), rgba(108, 91, 123, 0.6))',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80'
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
    gradient: 'linear-gradient(140deg, rgba(108, 91, 123, 0.85), rgba(53, 92, 125, 0.7))',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'immersive-transit-lounges',
    title: 'Immersive Transit Lounges Reset the Commuter Ritual',
    excerpt:
      'Airports are rehabbing empty concourses into restorative galleries where biometrics melt into ambient art.',
    content: [
      'The post-pandemic travel surge exposed how utilitarian concourses actually drain productivity. A new class of “calm tech” transit lounges swaps departure boards for reactive murals that stream live transit data only when you need it.',
      'Lantern Logic partnered with Nordic airport designers to prototype a modular lounge kit. Each bay pairs scent, light, and adaptive audio to match chronotypes. Travelers opt-in by tapping a tactile tile — no apps, no friction.',
      'Results from the pilot show a 40% uptick in passenger satisfaction scores. We break down the materials library and data ethics guardrails that keep the system human-first.'
    ],
    category: 'Mobility Futures',
    readTime: '6 min read',
    publishedAt: 'Today',
    mood: 'feature',
    accent: '#355c7d',
    gradient: 'linear-gradient(145deg, rgba(53, 92, 125, 0.85), rgba(250, 209, 181, 0.78))',
    coverImage: 'https://images.unsplash.com/photo-1521721137577-22ad38b3ec0f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'tidal-grid-briefing',
    title: 'Dispatch: Inside the North Sea’s Tidal Grid Accelerator',
    excerpt:
      'Our field team documents how modular turbines, fishing cooperatives, and indigenous stewards are co-designing Europe’s cleanest megaproject.',
    content: [
      'The Tidal Grid Accelerator is part lab, part living reef. Over the past six months we have embedded with marine engineers and coastal cooperatives aligning on a single mandate: center biodiversity while scaling renewable output.',
      'This dispatch shares sketches from the offshore control rooms, interviews with the Skagerrak fisheries who steward the waters, and a primer on how the accelerator’s open IP clauses could reset the politics of infrastructure.',
      'We close with a toolkit for civic teams hoping to adapt the model to other archipelagos without repeating colonial extraction patterns.'
    ],
    category: 'Field Dispatch',
    readTime: '12 min read',
    publishedAt: 'Today',
    mood: 'dispatch',
    accent: '#f67280',
    gradient: 'linear-gradient(160deg, rgba(246, 114, 128, 0.85), rgba(192, 108, 132, 0.65))',
    coverImage: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80'
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
    gradient: 'linear-gradient(135deg, rgba(53, 92, 125, 0.85), rgba(250, 209, 181, 0.9))',
    coverImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80'
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
    gradient: 'linear-gradient(150deg, rgba(250, 209, 181, 0.9), rgba(246, 114, 128, 0.7))',
    coverImage: 'https://images.unsplash.com/photo-1601934823311-d1599c5ef8c6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kinetic-campus-labs',
    title: 'Dispatch: Kinetic Campus Labs Rewrite Research Workflows',
    excerpt:
      'A tour of mixed-reality studios at three universities experimenting with kinetic walls, responsive light, and cohort-based protocols.',
    content: [
      'Kinetic labs blur the line between architecture and instrumentation. We spent two weeks moving with cohort teams at three universities who choreograph their research across rooms that literally reshape themselves every hour.',
      'The rooms remember each cohort’s sequence. When environmental scientists roll in, the wall LEDs dim to circadian-safe amber. When performance technologists take over, the same walls ripple to become motion-capture canvases.',
      'This dispatch dissects how facilities managers budget for modular hardware, the governance structures that determine access, and why the students call it “studying inside a living organism.”'
    ],
    category: 'Field Dispatch',
    readTime: '10 min read',
    publishedAt: '2 days ago',
    mood: 'dispatch',
    accent: '#6c5b7b',
    gradient: 'linear-gradient(140deg, rgba(108, 91, 123, 0.88), rgba(53, 92, 125, 0.7))',
    coverImage: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80'
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
    gradient: 'linear-gradient(140deg, rgba(53, 92, 125, 0.9), rgba(108, 91, 123, 0.65))',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'luminous-wildcards',
    title: 'Luminous Wildcards Illuminate Climate Scenarios',
    excerpt:
      'Scenario planners are training projection orbs to glow with probabilities, giving city councils a tactile way to debate futures.',
    content: [
      'A consortium of civic futurists has introduced Luminous Wildcards — translucent orbs that encode data about climate tipping points. When a scenario becomes more likely, the orb brightens and shifts hue.',
      'The system lives in public briefing rooms where residents can literally grasp the stakes. It pairs with open dashboards so constituents can audit assumptions in real time.',
      'Policy teams say the tactile layer keeps debate grounded. We outline a starter kit for building your own luminous library with off-the-shelf LEDs and open climate models.'
    ],
    category: 'Civic Tech',
    readTime: '3 min read',
    publishedAt: 'Last week',
    mood: 'quick',
    accent: '#f67280',
    gradient: 'linear-gradient(145deg, rgba(246, 114, 128, 0.85), rgba(250, 209, 181, 0.85))',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'sensorial-supply-chains',
    title: 'Climate Retailers Map Sensorial Supply Chains',
    excerpt:
      'Experiential stores are teaching buyers to taste, hear, and feel recycled content before it ever hits the shelves.',
    content: [
      'Retailers obsessed with circularity are finally getting better show-and-tell tools. We profile the sensorial labs inside three flagship stores that guide shoppers through the lifecycle of every garment.',
      'By translating emission data into tactile samples and spatial audio, sustainability officers are seeing conversion lifts without resorting to greenwashing.',
      'The piece ends with a blueprint for building your own sensorial chain walkthrough with off-the-shelf components.'
    ],
    category: 'Climate & Culture',
    readTime: '7 min read',
    publishedAt: 'Last week',
    mood: 'feature',
    accent: '#c06c84',
    gradient: 'linear-gradient(150deg, rgba(192, 108, 132, 0.85), rgba(246, 114, 128, 0.6))',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80'
  }
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
