/** Membership, The Gym, Events and Visit content. Split from content.ts only
    to keep each file readable. */

export const TIERS = [
  {
    name: "Day Pass",
    price: "$22",
    per: "One visit",
    features: [
      "All day, in and out as you like",
      "Shoe rental included",
      "No expiry, buy it at the desk",
      "Chalk is free, always",
    ],
    cta: "Buy a Day Pass",
    ghost: true,
  },
  {
    name: "Punch Card",
    price: "$180",
    per: "Ten visits",
    features: [
      "Ten climbs, $18 each",
      "Shoe rental included",
      "Never expires",
      "Share it with whoever you like",
    ],
    cta: "Buy a Punch Card",
    ghost: true,
  },
  {
    name: "Membership",
    price: "$79",
    per: "per month · no contract",
    features: [
      "Unlimited climbing, every hour we're open",
      "20% off classes and gear",
      "A guest pass every month",
      "Freeze it for up to two months a year",
      "Cancel from your phone, no phone call",
    ],
    cta: "Join Northwall",
    flag: "Most popular",
    pop: true,
  },
];

/** Column order matches TIERS above — the canvas had the cards and the table
    in different orders, which read as an error. */
export const COMPARE_ROWS = [
  { label: "Climbing access", day: "One day", punch: "Ten days", member: "Unlimited", memberYes: true },
  { label: "Shoe rental included", day: "Yes", dayYes: true, punch: "Yes", punchYes: true, member: "Yes", memberYes: true },
  { label: "Guest passes", day: "—", dayNo: true, punch: "Shareable", member: "One a month", memberYes: true },
  { label: "Class discount", day: "—", dayNo: true, punch: "—", punchNo: true, member: "20% off", memberYes: true },
  { label: "Youth team eligible", day: "—", dayNo: true, punch: "—", punchNo: true, member: "Yes", memberYes: true },
  { label: "Reciprocal gyms", day: "—", dayNo: true, punch: "—", punchNo: true, member: "4 Northwest gyms" },
  { label: "Freeze option", day: "—", dayNo: true, punch: "Never expires", member: "Up to 2 months", memberYes: true },
];

export const MEMBER_FAQ = [
  {
    tab: "Money",
    items: [
      { q: "Is there a joining fee?", a: "No. The first month is $79 and so is every month after it." },
      {
        q: "What happens if I cancel?",
        a: "You climb until the end of the month you've paid for, then it stops. Two taps in your account, no call, no retention conversation.",
      },
      {
        q: "Can I freeze for a month?",
        a: "Yes — up to two months a year, free. Injuries, travel, a bad winter. Freeze it from the same page you'd cancel from.",
      },
      {
        q: "Do you do student or military rates?",
        a: "$65 a month for students, military and first responders. Bring ID to the desk once and it's on your account for good.",
      },
    ],
  },
  {
    tab: "Access",
    items: [
      {
        q: "Can I bring a guest?",
        a: "Members get one free guest pass a month. Beyond that a guest pays the $22 day rate, shoes included.",
      },
      {
        q: "Are there peak hours?",
        a: "Weeknights between 6 and 9 are the busiest, Friday most of all. Mornings and early afternoons the gym is close to empty. No surcharge either way.",
      },
      {
        q: "Do you sell family memberships?",
        a: "Yes. $145 a month for two adults at the same address, plus $30 for each child under 18.",
      },
    ],
  },
  {
    tab: "Everything else",
    items: [
      { q: "Do punch cards expire?", a: "Never. We've had people finish one four years after they bought it." },
      {
        q: "Can two people share one?",
        a: "Yes, and plenty do. It's ten visits, not ten visits by one person. Bring whoever.",
      },
      {
        q: "What if I only climb once a month?",
        a: "Then buy day passes, or a punch card if you like paying less. A membership stops making sense below about three visits a month and we'd rather tell you that now.",
      },
    ],
  },
];

export const FOUNDERS = {
  slot: "PORTRAIT: Ilse Vandermeer and Kwame Osei-Bonsu standing in front of the cave wall, work clothes, unposed",
  src: "/photos/founders.webp",
  badge: "Ilse & Kwame · Owners",
  title: "Ilse Vandermeer & Kwame Osei-Bonsu",
  paras: [
    "They met on the mats at a gym in Seattle in 2013, arguing about the beta on a V6 that neither of them ever did. Ilse was a structural engineer. Kwame was managing a bike shop and setting on weekends.",
    "For four years after they moved south they drove to Bellevue two or three nights a week, because Tacoma had nothing. Ninety minutes round trip for two hours of climbing, all winter, every winter.",
    "In 2019 they signed a lease on a former marine supply warehouse on Dock Street — 4,000 square feet, no heating, one wall and a secondhand crash pad they bought off a closing gym in Olympia. Forty people joined in the first month. Both of them still set.",
  ],
  pullquote: "We built the gym we were driving ninety minutes to find.",
};

export const FACILITIES = [
  { n: "01", title: "14,000 sq ft of climbing", body: "Five walls, nothing over fifteen feet, all of it matted floor to wall." },
  { n: "02", title: "Moon Board and hangboards", body: "A benchmarked Moon Board in the training bay, plus four hangboards at three heights." },
  { n: "03", title: "Free weights and stretching", body: "Dumbbells, kettlebells, rings and enough floor space to warm up properly before you pull on." },
  { n: "04", title: "Showers and day lockers", body: "Two showers, towels for a dollar, and lockers you don't need to bring a padlock for." },
  { n: "05", title: "Coffee bar and a couch", body: "Decent espresso and a sofa nobody leaves. A fair amount of climbing gets talked about and not done here." },
  { n: "06", title: "Free parking", body: "Free lot behind the building, entrance off S 11th. Bike racks inside the front door." },
];

export const MILESTONES = [
  { year: "2019", body: "One wall, forty members, and a warehouse with no heating. People climbed in puffy jackets until March." },
  { year: "2021", body: "The cave goes in, doubling the steep terrain. It cost more than the first year of rent and was worth it inside a month." },
  { year: "2022", body: "Youth team starts with nine kids and Rafael, who was coaching them for free before we could pay him." },
  { year: "2024", body: "Full renovation — 14,000 square feet, proper heating, and a second setter hired so nobody has to set alone at 6am." },
  { year: "2026", body: "Weekly resets on every wall. Something in the building is new every single Tuesday." },
];

export const GYM_TILES = [
  { slot: "PHOTO: the cave from the mats, looking up into the overhang", src: "/photos/gym-cave.webp", cap: "The cave", ratio: "3/4" },
  { slot: "PHOTO: the yellow wall busy on a weekday evening", src: "/photos/gym-yellow.webp", cap: "The yellow wall", ratio: "4/3" },
  { slot: "PHOTO: coffee bar, espresso machine, mugs on a shelf", src: "/photos/gym-coffee.webp", cap: "Coffee bar", ratio: "1/1" },
  { slot: "PHOTO: Moon Board in the training bay, chalk dust in the light", src: "/photos/gym-board.webp", cap: "Training board", ratio: "4/5" },
  { slot: "PHOTO: youth team mid-session, kids queuing at a problem", src: "/photos/gym-youth.webp", cap: "Youth team", ratio: "4/3" },
  { slot: "PHOTO: setting crew at 6am, holds laid out across the mats", src: "/photos/gym-setting.webp", cap: "Setting, 6am", ratio: "3/4" },
  { slot: "PHOTO: the couch by the coffee bar, three people talking, shoes off", src: "/photos/gym-couch.webp", cap: "The couch", ratio: "1/1" },
  { slot: "PHOTO: the arête from the side, dramatic light", src: "/photos/gym-arete.webp", cap: "The arête", ratio: "4/3" },
  { slot: "PHOTO: exterior of the warehouse on Dock Street at dusk, lime sign lit", src: "/photos/gym-exterior.webp", cap: "1140 Dock Street", ratio: "4/5" },
  { slot: "PHOTO: wall of rental shoes behind the front desk", src: "/photos/gym-shoes.webp", cap: "Rental shoes", ratio: "4/3" },
];

export const EVENTS = [
  {
    tag: "Comp",
    date: "Saturday, April 18 · $30",
    title: "Spring Send-Off Comp",
    body: "Forty problems, five hours, every grade from VB up. Climb what you like, count your best five. Prizes from local shops and a keg that doesn't last.",
    cta: "Enter",
    slot: "PHOTO: comp day, crowd watching a climber on the cave, numbered tape on problems",
    src: "/photos/ev-comp.webp",
  },
  {
    tag: "League",
    date: "Six weeks from April 2 · $45 a team",
    title: "Thursday Night League",
    body: "Teams of three, six Thursdays, deliberately forgiving scoring. Last year a team of first-timers finished fourth and nobody could explain how.",
    cta: "Sign your team up",
    slot: "PHOTO: three climbers in a team huddle looking at a scorecard",
    src: "/photos/ev-league.webp",
  },
  {
    tag: "Youth",
    date: "Saturday, May 9",
    title: "Youth Regional Qualifier",
    body: "We're hosting. Categories from U11 to U19, doors open 8am, spectators free. The gym closes to general climbing until 4pm — sorry.",
    cta: "Details",
    slot: "PHOTO: young competitor mid-problem with judges watching",
    src: "/photos/ev-youth.webp",
  },
  {
    tag: "Free",
    date: "First Friday monthly · Free",
    title: "Beginner's Night",
    body: "No experience, no shoes, no money. Shoes are free that night, two staff on the floor the whole time, and about half the room has never climbed before.",
    cta: "Just turn up",
    slot: "PHOTO: beginners night, staff member showing a group how to fall onto the mats",
    src: "/photos/ev-beginner.webp",
  },
  {
    tag: "Social",
    date: "Saturday, April 25 · Free",
    title: "Setter's Choice Night",
    body: "Naledi and Kwame pick the worst problems they've ever made and put them back up for one night. It is not a good climbing session. It is a very good evening.",
    cta: "Details",
    slot: "PHOTO: setters laughing while a climber flails on an awkward problem",
    src: "/photos/ev-setters.webp",
  },
  {
    tag: "Private",
    date: "Any day · from $400",
    title: "Private Bookings",
    body: "Birthdays, work things, teams that need something better than an escape room. Up to 40 people, staffed and briefed, two hours minimum.",
    cta: "Enquire",
    slot: "PHOTO: birthday group of ten in the gym, one climbing, rest watching",
    src: "/photos/ev-private.webp",
  },
];

export const EVENT_DETAIL = [
  {
    tag: "Thursdays",
    eyebrow: "Six weeks from April 2",
    title: "Thursday Night League",
    paras: [
      "Teams of three, any mix of abilities. Each week there are thirty problems on a card spread from VB to V9, you climb for two hours and count your best six.",
      "The scoring is deliberately forgiving: a V1 flashed is worth more than a V6 nobody finishes, so a team of beginners can genuinely beat a team of regulars. Several have.",
      "$45 a team for all six weeks. Turn up at 6:30, climb until 9, argue about the scoring afterwards.",
    ],
    cta: { label: "Sign Your Team Up", href: "#book", ghost: false },
    slot: "PHOTO: league night, scoreboard on the wall, busy gym",
    src: "/photos/ev-league-alt.webp",
    flip: false,
  },
  {
    tag: "From $400",
    eyebrow: "Private bookings",
    title: "Book the gym",
    paras: [
      "Two hours, up to forty people, two of our staff on the floor for the whole session. Shoes for everyone, a floor briefing, and someone whose job is to make sure the nervous ones have a good time.",
      "$400 for up to fifteen people, $22 a head above that. We'll clear the coffee bar for you and there's a caterer on Dock Street we like — pizza, and enough of it.",
      "Two weeks' notice is comfortable. One week is usually fine. Saturdays book out about a month ahead.",
    ],
    cta: { label: "Enquire About a Booking", href: "#book", ghost: true },
    slot: "PHOTO: work group in the gym mid-session, coffee bar in background",
    src: "/photos/ev-private-alt.webp",
    flip: true,
  },
];

export const EVENT_QUOTES = [
  {
    quote:
      "I entered the Send-Off six weeks after my first ever session, mostly by accident. I came 31st out of 44 and had the best Saturday of the year.",
    who: "Hollis Nakamura",
    sub: "First comp, 2025",
  },
  {
    quote:
      "Our team was two people who climb and one who didn't. By week four the one who didn't was the one checking the scorecard.",
    who: "Ekow Mensah",
    sub: "Thursday Night League",
  },
  {
    quote:
      "I booked it for eighteen engineers who hate team activities. Nobody looked at their phone for two hours, which has never happened before.",
    who: "Roisin Delaney",
    sub: "Private booking, February",
  },
];

export const VISIT_STEPS = [
  {
    n: "01",
    title: "Sign the waiver",
    body: "Online, two minutes, do it before you come. Under 18s need a parent or guardian to sign theirs.",
    meta: "northwallclimbing.com/waiver",
  },
  {
    n: "02",
    title: "Turn up in comfortable clothes",
    body: "Shorts or leggings and a t-shirt. That's the dress code and there isn't a second half to it.",
    meta: "No kit required",
  },
  {
    n: "03",
    title: "Rent shoes at the desk",
    body: "Six dollars, sizes 4 to 15. Then someone will point you at the yellow wall and tell you where to start.",
    meta: "$6 · chalk is free",
  },
];

export const VISIT_FAQ = [
  {
    q: "What do I wear?",
    a: "Shorts or leggings and a t-shirt — anything you can lift a knee to your chest in. Nothing else is needed. No gloves, ever.",
  },
  {
    q: "Do I need my own shoes?",
    a: "No. Rentals are $6 and they're fine. Most people buy their own somewhere around visit ten, when they've worked out what they like.",
  },
  {
    q: "Can I come alone?",
    a: "Yes — most people do. Bouldering needs no partner and no belayer. You'll end up talking to someone about a problem within an hour anyway.",
  },
  {
    q: "How old do kids have to be?",
    a: "Five and up on the walls with a parent present. Kids Club runs Saturdays for ages 5–8, youth team from 9.",
  },
  {
    q: "Is there anywhere to leave my stuff?",
    a: "Day lockers by the front desk, no padlock needed. Bags aren't allowed on the mats, so use them.",
  },
  {
    q: "Do you have a shower?",
    a: "Two of them, with towels for a dollar. Plenty of people climb before work and go straight on.",
  },
];
