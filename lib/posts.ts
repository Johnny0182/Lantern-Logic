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
    slug: 'hypergrid-ai-clouds',
    title: 'Hypergrid AI Clouds Are Rewiring the Energy Internet',
    excerpt:
      'Modular data centers are docking with renewable microgrids to spin up planet-scale AI without melting the grid.',
    content: [
      'The hyperscale playbook is getting rewritten in real time. Instead of dropping another megastructure in the desert, AI teams are orchestrating fleets of modular compute pods that clip into community-owned microgrids.',
      'Each pod negotiates for clean power in milliseconds, balancing inference surges with wind, tidal, and battery capacity. The result is a responsive mesh that can flex up for training runs and drop down to baseline when only inference is needed.',
      'Lantern + Logic toured three pilots across Reykjavík, Singapore, and Oaxaca. We break down the orchestration layer, the open telemetry standard that lets civic operators audit drawdowns, and the new jobs emerging around grid choreography.',
    ],
    category: 'Infrastructure',
    readTime: '8 min read',
    publishedAt: '2 hours ago',
    mood: 'hero',
    accent: '#c0602c',
    gradient: 'linear-gradient(135deg, rgba(36, 30, 24, 0.55), rgba(192, 96, 44, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'post-quantum-red-team',
    title: 'Inside the Post-Quantum Red Team Keeping Wallets Safe',
    excerpt:
      'Crypto custodians, banks, and civic networks are stress-testing every handshake before quantum machines arrive.',
    content: [
      'The quantum threat to encryption isn’t theoretical anymore. A coalition of security labs is running coordinated red-team exercises that simulate Shor-powered adversaries against today’s wallets, payments, and identity rails.',
      'We embedded with the task force’s “zero-day orchestra,” a rotating crew of cryptographers and creative hackers who blend adversarial ML with human ingenuity to smash outdated assumptions.',
      'This feature maps out the migration plan, recommended hardware upgrades, and the open-source suite you can deploy today to quantum-harden your infrastructure.',
    ],
    category: 'Cybersecurity',
    readTime: '7 min read',
    publishedAt: '4 hours ago',
    mood: 'feature',
    accent: '#3f6d70',
    gradient: 'linear-gradient(140deg, rgba(28, 34, 43, 0.6), rgba(63, 109, 112, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80',
  },
  {
    slug: 'synthetic-media-cooperatives',
    title: 'Synthetic Media Cooperatives Are Monetizing the Meme Graph',
    excerpt:
      'Community-owned model studios let creators license voice, likeness, and meme DNA without surrendering rights.',
    content: [
      'Instead of handing their likeness to a single platform, creators are spinning up co-ops that run high-fidelity diffusion and voice models on shared infrastructure. Smart contracts govern how every derivative clip is licensed and paid out.',
      'The cooperatives are onboarding lawyers, archivists, and cultural historians to ensure every prompt inherits the right lineage. It’s a mash-up of talent agency and credit union, tuned for the synthetic era.',
      'We highlight the governance templates, federated moderation stack, and the revenue analytics dashboards that members use to stay transparent.',
    ],
    category: 'Creator Economy',
    readTime: '6 min read',
    publishedAt: 'Today',
    mood: 'feature',
    accent: '#b88a4a',
    gradient: 'linear-gradient(150deg, rgba(34, 28, 24, 0.62), rgba(184, 138, 74, 0.35))',
    coverImage: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1500&q=80',
  },
  {
    slug: 'biofabrication-habitats',
    title: 'Biofabrication Habitats Grow Housing on Demand',
    excerpt:
      'Architects and mycelium engineers are co-designing living shells that self-heal, sequester carbon, and power themselves.',
    content: [
      'Startup consortia are mixing bioprinted lattices with engineered mycelium to “grow” homes that strengthen over time. The units are seeded in orbital warehouses, then hydrated on-site so walls sprout in days instead of months.',
      'Embedded micro-inverters capture energy from the metabolic heat and light the interior. The habitats can be composted, regrown, or patched with another growth cycle.',
      'We analyze the supply chain, regulatory path, and the circular financing instrument that lets cities lease growth capacity instead of buying static inventory.',
    ],
    category: 'Climate Tech',
    readTime: '9 min read',
    publishedAt: 'Yesterday',
    mood: 'feature',
    accent: '#d6a656',
    gradient: 'linear-gradient(145deg, rgba(28, 38, 28, 0.6), rgba(214, 166, 86, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1505842465776-3acb7d92c7f0?auto=format&fit=crop&w=1500&q=80',
  },
  {
    slug: 'martian-ops-console',
    title: 'Dispatch: Martian Ops Console Runs the Next Mission Control',
    excerpt:
      'Human factors teams in Houston and Bengaluru are prototyping a collaborative mission console for Mars supply runs.',
    content: [
      'The Martian Ops Console merges holo-maps, swarm robotics telemetry, and time-shifted crew logs into a single situational awareness hub.',
      'We shadowed the human factors crew translating astronaut feedback into interface upgrades, from breathable typography to predictive handoff scripts that keep teams aligned across 20-minute delays.',
      'The dispatch unpacks the open API spec, the VR rehearsal rooms, and how they are hardening the system against adversarial spoofing.',
    ],
    category: 'Space Systems',
    readTime: '11 min read',
    publishedAt: 'Today',
    mood: 'dispatch',
    accent: '#3f6d70',
    gradient: 'linear-gradient(150deg, rgba(24, 30, 38, 0.65), rgba(63, 109, 112, 0.34))',
    coverImage: 'https://images.unsplash.com/photo-1581091870634-81f8a1f1d94b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'robotic-surgery-field-clinics',
    title: 'Dispatch: Robotic Surgery Pods Roll Into Climate Field Clinics',
    excerpt:
      'Mobile trauma units are pairing edge AI with remote surgeons to stabilize patients where hospitals are hours away.',
    content: [
      'As climate volatility pushes more communities off-grid, NGOs are deploying robotic surgery pods built on ruggedized trailers. Each pod contains sterilization, imaging, and haptic telepresence gear that specialists can control over low-bandwidth satellite links.',
      'We follow a convoy in Senegal as they coordinate with local nurses, calibrate latency buffers, and sync with drones that deliver blood and pharmaceuticals.',
      'The dispatch covers the mesh networking stack, data governance protocols, and how local clinicians are being trained to maintain the fleets.',
    ],
    category: 'Health Tech',
    readTime: '10 min read',
    publishedAt: 'Yesterday',
    mood: 'dispatch',
    accent: '#c0602c',
    gradient: 'linear-gradient(150deg, rgba(36, 28, 24, 0.62), rgba(192, 96, 44, 0.3))',
    coverImage: 'https://images.unsplash.com/photo-1580281657521-6dd25fa5dd5e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'policy-lab-sandboxes',
    title: 'Dispatch: Policy Lab Sandboxes Stress-Test AI Legislation',
    excerpt:
      'Regulators and founders are co-simulating algorithmic harms inside multiplayer sandboxes before rules are signed.',
    content: [
      'Legislators tired of reactive policy are building digital twins of proposed AI laws. Teams plug in synthetic citizens, adversarial agents, and real product telemetry to see where loopholes live before a rule hits parliament.',
      'The sandboxes run like esports arenas—policy authors sit next to founders, ethicists, and civic hackers as they iterate language live.',
      'We explore the open datasets fueling the sims, the dispute resolution rituals, and the template MoUs helping other governments join in.',
    ],
    category: 'Policy',
    readTime: '12 min read',
    publishedAt: '2 days ago',
    mood: 'dispatch',
    accent: '#62788a',
    gradient: 'linear-gradient(150deg, rgba(26, 32, 42, 0.62), rgba(98, 120, 138, 0.34))',
    coverImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'quantum-firmware-updates',
    title: 'Quantum Firmware Updates Go Over-the-Air',
    excerpt:
      'Cryo racks are learning to patch themselves thanks to superconducting control stacks that compress updates into kilobytes.',
    content: [
      'Maintaining a quantum computer used to require a white-glove visit from specialists. A wave of startups is shipping OTA firmware that piggybacks on cryogenic control stacks, letting operators deploy calibrations overnight.',
      'The approach hinges on aggressive compression, synthetic telemetry for verification, and a rollback protocol that can recover from decoherence spikes.',
      'Here’s how to prepare your own lab, from shielding upgrades to the observability dashboard that makes quantum uptime feel like cloud ops.',
    ],
    category: 'Quantum',
    readTime: '4 min read',
    publishedAt: 'Today',
    mood: 'quick',
    accent: '#3f6d70',
    gradient: 'linear-gradient(145deg, rgba(24, 30, 36, 0.6), rgba(63, 109, 112, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'semiconductor-talent-graph',
    title: 'The Semiconductor Talent Graph Is Going Open Source',
    excerpt:
      'Universities and fabs are open-sourcing skills data so talent can redeploy faster when new fabs spin up.',
    content: [
      'Supply chain shocks forced chipmakers to collaborate in ways nobody expected. The latest: an open skills graph where fabs, universities, and unions publish anonymized data on training hours, certifications, and job placements.',
      'With federated identity, workers can prove competency without exposing personal info. Workforce boards use the graph to route people to scholarships, apprenticeships, and relocation stipends.',
      'We cover the technical architecture, the incentives for sharing, and the emerging analytics startups building insights on top.',
    ],
    category: 'Industry',
    readTime: '5 min read',
    publishedAt: 'Yesterday',
    mood: 'quick',
    accent: '#d6a656',
    gradient: 'linear-gradient(150deg, rgba(28, 30, 24, 0.6), rgba(214, 166, 86, 0.3))',
    coverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'ai-safety-ux-toolkit',
    title: 'Designers Drop an AI Safety UX Toolkit',
    excerpt:
      'Product teams are swapping modal fatigue for progressive disclosure, consent loops, and contextual guardrails.',
    content: [
      'AI safety doesn’t have to feel like paperwork. A cross-company working group just released an open toolkit of UI patterns, copy decks, and testing rituals that make disclosures intuitive.',
      'The toolkit includes responsive consent loops, friction points that can expand or contract based on risk, and prototyping files for Figma and WebXR.',
      'We dig into the human research that informed the toolkit and how teams are measuring trust lift after rolling it out.',
    ],
    category: 'Product',
    readTime: '3 min read',
    publishedAt: '2 days ago',
    mood: 'quick',
    accent: '#62788a',
    gradient: 'linear-gradient(150deg, rgba(26, 30, 38, 0.6), rgba(98, 120, 138, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1582719478181-2cf4e3c2490c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'metaverse-logistics',
    title: 'Metaverse Logistics Teams Are Shipping Real Goods',
    excerpt:
      'Immersive commerce crews are synchronizing haptics, robotics, and fulfillment so virtual purchases arrive faster than the stream.',
    content: [
      'Shopping inside immersive worlds is no longer a novelty. Logistics teams now mirror every virtual storefront with a robotics choreographer that packs and ships the item before you leave the scene.',
      'We toured a “feelable warehouse” where digital twins sync with pick-and-place bots, while generative avatars verify identity without killing immersion.',
      'The story includes the API playbook that lets indie developers plug their worlds into the fulfillment graph overnight.',
    ],
    category: 'Commerce',
    readTime: '4 min read',
    publishedAt: 'Last week',
    mood: 'quick',
    accent: '#3f6d70',
    gradient: 'linear-gradient(150deg, rgba(24, 30, 36, 0.6), rgba(63, 109, 112, 0.3))',
    coverImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'neural-rights-consortium',
    title: 'Neural Rights Consortium Publishes a Civic Playbook',
    excerpt:
      'Cities want brain-computer interfaces, but only with consent infrastructure, transparency logs, and civic review boards.',
    content: [
      'Brain-computer interfaces are moving from clinics to consumer headsets. In response, a consortium of cities, ethicists, and startups crafted a playbook for neural rights rooted in informed consent.',
      'The guide spells out how to build neural privacy boards, run breach drills, and visualize consent state in public dashboards so residents know when sensing is active.',
      'We summarize the enforcement levers, the open-source firmware clauses, and how community groups are already customizing the template.',
    ],
    category: 'Society',
    readTime: '5 min read',
    publishedAt: 'Last week',
    mood: 'quick',
    accent: '#b88a4a',
    gradient: 'linear-gradient(150deg, rgba(30, 28, 24, 0.62), rgba(184, 138, 74, 0.32))',
    coverImage: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1400&q=80',
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
