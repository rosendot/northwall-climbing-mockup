/** Page content lifted from the Claude Design canvas, kept as data so the
    pages stay markup and the copy stays reviewable in one place. */

export const STATS = [
  { num: "14,000", label: "Square feet of wall" },
  { num: "220", label: "Problems set right now" },
  { num: "52", label: "Resets a year" },
  { num: "V0–V11", label: "Grade range on the walls" },
];

export const PILLARS = [
  {
    title: "You don't need a partner",
    body: "Bouldering is solo by default. Nobody holds your rope, nobody waits on you. Turn up alone at 8pm and climb until close without saying a word to anyone — or don't, most people end up talking.",
  },
  {
    title: "New problems every Tuesday",
    body: "Two setters, a full reset of one wall each week. Come back in seven days and a quarter of the gym is something you've never touched. It's never the same gym twice.",
  },
  {
    title: "Nobody's watching",
    body: "Everyone here fell off something ten minutes ago. The beginner wall is the busiest wall in the building, most nights by a wide margin.",
  },
];

export const FIRST_VISIT = [
  {
    n: "01",
    title: "Sign the waiver",
    body: "Online before you come, or at the desk when you get here. Either way it's five minutes.",
    meta: "5 minutes",
  },
  {
    n: "02",
    title: "Rent shoes",
    body: "Six dollars, sizes 4 to 15. Climbing shoes should feel snug, not painful — the desk will size you.",
    meta: "$6 · sizes 4–15",
  },
  {
    n: "03",
    title: "Watch the floor briefing",
    body: "Two minutes on how to fall, where not to stand, and how the grades work. It runs on the hour.",
    meta: "2 minutes",
  },
  {
    n: "04",
    title: "Start on the yellow wall",
    body: "Lowest angle, biggest holds, softest grades. Work up from there whenever you feel like it.",
    meta: "VB–V2",
  },
];

export const SET_REPORTS = [
  {
    tag: "Reset",
    date: "Tuesday, March 17",
    title: "Cave reset — 18 new problems, V2 to V8",
    body: "The whole steep section came down Monday night. Eighteen up, and the grade spread is wider than usual: five under V4 for anyone who's been avoiding the cave.",
    slot: "PHOTO: setter on a ladder bolting new holds into the cave, hex key in hand",
  },
  {
    tag: "Setting",
    date: "Thursday, March 12",
    title: "The yellow wall got easier on purpose",
    body: "We softened the whole beginner wall by about a grade. Naledi explains why a wall that flatters you on day one is doing its job better than one that doesn't.",
    slot: "PHOTO: the yellow beginner wall busy with climbers of mixed ages",
  },
  {
    tag: "Setter's notes",
    date: "Tuesday, March 10",
    title: "Setter's notes: the blue V5 everyone hates",
    body: "Four people have asked us to take it down. It's staying up until Sunday. Here's what the second move is actually asking you to do with your hips.",
    slot: "PHOTO: close-up of a blue volume and small crimps on a vertical wall",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I came in having never climbed and nobody made me feel stupid about it. Three months later I'm on V4s.",
    who: "Priya Raghunathan",
    sub: "Member since 2024",
  },
  {
    quote:
      "The Tuesday reset is the whole reason I keep the membership. It's a new gym every week.",
    who: "Devon Achebe",
    sub: "Member since 2021",
  },
  {
    quote: "My kid does the youth team and I climb while she trains. Best two hours of my week.",
    who: "Marisol Trujillo",
    sub: "Member since 2023",
  },
  {
    quote:
      "I travel for work and climb in a lot of gyms. The setting here is better than places three times the size.",
    who: "Anders Lindqvist",
    sub: "Punch card holder",
  },
];

export const AREAS = [
  {
    tag: "Area 01",
    eyebrow: "Low angle · technical",
    title: "The Slab",
    paras: [
      "Less than vertical, which sounds easier and isn't. Slab is about trusting your feet on holds that look like nothing, and it's where almost everyone starts because the falls are short and the moves are slow.",
      "If you've never climbed, you'll spend your first hour here and leave with sore calves instead of sore fingers.",
    ],
    meta: ["V0–V4", "Reset monthly"],
    slot: "PHOTO: climber on a low-angle slab wall, weight over toes, careful footwork",
    flip: false,
  },
  {
    tag: "Area 02",
    eyebrow: "45 degrees · powerful",
    title: "The Cave",
    paras: [
      "Forty-five degrees of overhang and the wall that humbles people. Everything here is about tension — holding your feet on when gravity is trying to swing them off.",
      "It's the hardest terrain in the building and also, oddly, where beginners have the most fun, because falling off steep ground is easy and painless.",
    ],
    meta: ["V4–V11", "Reset weekly"],
    slot: "PHOTO: 45-degree overhang, climber horizontal off big holds, feet cutting loose",
    flip: true,
  },
  {
    tag: "Area 03",
    eyebrow: "Outside corner · balance",
    title: "The Arête",
    paras: [
      "An outside corner you climb around rather than up. Body position does most of the work, so it rewards people who are patient more than people who are strong.",
      "It is also the most photographed wall in the gym, which we suspect is why it stays busy.",
    ],
    meta: ["V2–V7", "Reset monthly"],
    slot: "PHOTO: climber wrapped around an outside corner arête, body tension, dramatic side light",
    flip: false,
  },
  {
    tag: "Area 04",
    eyebrow: "Beginner wall · always open",
    title: "The Yellow Wall",
    paras: [
      "A whole wall kept deliberately soft. Big holds, short problems, grades set a notch under what they'd be anywhere else in the building.",
      "It's always busy and that's the point — you are never the only person on it figuring something out for the first time.",
    ],
    meta: ["VB–V2", "Reset weekly"],
    slot: "PHOTO: the yellow beginner wall, several first-timers climbing at once, big friendly holds",
    flip: true,
  },
];

export const GRADE_FAQ = [
  {
    q: "What does V0 mean?",
    a: "V grades run from VB (beginner) upward with no ceiling — V0 is the easiest graded problem in most gyms, and the scale gets harder as the number goes up. It measures difficulty, not height. A V0 and a V8 can be on the same fifteen-foot wall, three feet apart.",
  },
  {
    q: "How long until I climb a V3?",
    a: "Climbing twice a week, most people are on V2s inside two months and touching V3 somewhere between three and six. It depends far more on how often you turn up than on how strong you are when you start.",
  },
  {
    q: "Why is the same grade harder at other gyms?",
    a: "Because grades are opinions. Every gym's setters calibrate against their own walls and their own regulars. Ours are set to be honest rather than flattering, with one exception — the yellow wall, which we soften on purpose.",
  },
  {
    q: 'What is a "project"?',
    a: "A problem you can't do yet. You try it, fall off, work out one more move, and come back on Thursday. Having a project is the point at which climbing stops being exercise and starts being a hobby.",
  },
  {
    q: "Do I need to know the grades to have fun?",
    a: "No. Plenty of people climb here for years and only ever notice whether a problem looks fun. Pull on the holds that look good to you and ignore the tape.",
  },
];

export const CLIMB_GALLERY = [
  { slot: "PHOTO: wide shot of the main room, several climbers on different walls", wide: true },
  { slot: "PHOTO: older climber topping out a slab problem", wide: false },
  { slot: "PHOTO: hands chalking up, close crop", wide: false },
  { slot: "PHOTO: teenager on the cave, feet cut loose", wide: false },
  { slot: "PHOTO: two climbers sitting on mats talking through a problem", wide: false },
  { slot: "PHOTO: first-timer on the yellow wall, big grin", wide: false },
  { slot: "PHOTO: the arête at night under lime-tinted light", wide: true },
  { slot: "PHOTO: climbing shoes and a brush on the edge of a crash pad", wide: false },
];

export const CLASSES = [
  {
    title: "Intro to Bouldering",
    price: "$35",
    when: "90 minutes · Sat 1pm & Sun 11am",
    body: "How to fall, how to read a problem, and how to use your feet. Includes shoes and a day pass, so it costs thirteen dollars more than just turning up. The one to book first.",
    cta: "Book an intro",
    flag: "Start here",
    featured: true,
    slot: "PHOTO: coach demonstrating a first move to two adults on the yellow wall",
  },
  {
    title: "Movement Basics",
    price: "$140",
    when: "4-week course · Tuesdays 6pm",
    body: "Four sessions on the things nobody tells you: flagging, drop knees, where to look, and why you keep pulling with your arms. For people climbing V1–V3 who've stopped improving.",
    cta: "Join the next course",
    slot: "PHOTO: small group class watching a coach demonstrate a heel hook",
  },
  {
    title: "Project Coaching",
    price: "$75/hr",
    when: "1-on-1 · book any day",
    body: "Pick the problem you keep failing on and bring a coach to it. An hour is usually enough to find the thing you're doing wrong, which is usually your feet.",
    cta: "Book a session",
    slot: "PHOTO: coach and climber studying a single problem together from the mats",
  },
  {
    title: "Youth Team",
    price: "$160/mo",
    when: "Ages 9–17 · Mon + Wed 4:30pm",
    body: "Twice a week, structured, with a comp season for the kids who want one and no pressure for the ones who don't. Try a session before you commit to a month.",
    cta: "Ask about a trial",
    slot: "PHOTO: youth team kids mid-session, coach spotting from the mats",
  },
  {
    title: "Kids Club",
    price: "$22",
    when: "Ages 5–8 · Saturdays 10am",
    body: "An hour of games that happen to be climbing. Drop them off or stay and climb yourself — most parents do the second one.",
    cta: "Book a session",
    slot: "PHOTO: young kids climbing a low traverse wall, parents watching from a bench",
  },
  {
    title: "Women's Night",
    price: "Free",
    when: "Every Thursday 7pm · free with membership",
    body: "Not a class. A coach is on the floor, the music is better, and the cave is mostly women for three hours. $22 without a membership, which is just the day pass.",
    cta: "Turn up",
    slot: "PHOTO: women's night, group of climbers gathered around a problem in the cave",
  },
];

export const SCHEDULE = [
  {
    day: "Mon",
    slots: [
      { name: "Youth Team", time: "4:30–6:00pm", coach: "Coach Rafael Ibarra · ages 9–17", spots: "4 spots" },
    ],
  },
  {
    day: "Tue",
    slots: [
      { name: "Movement Basics", time: "6:00–7:30pm", coach: "Coach June Whitlock · 4-week course", spots: "2 spots" },
    ],
  },
  {
    day: "Wed",
    slots: [
      { name: "Youth Team", time: "4:30–6:00pm", coach: "Coach Rafael Ibarra · ages 9–17", spots: "4 spots" },
    ],
  },
  {
    day: "Thu",
    slots: [
      { name: "Women's Night", time: "7:00–10:00pm", coach: "Coach Naledi Mokoena on the floor", spots: "Open floor" },
    ],
  },
  { day: "Fri", slots: [], rest: "Open climbing only. Busiest night of the week, about 6 to 9pm." },
  {
    day: "Sat",
    slots: [
      { name: "Kids Club", time: "10:00–11:00am", coach: "Coach Tomas Berglund · ages 5–8", spots: "6 spots" },
      { name: "Intro to Bouldering", time: "1:00–2:30pm", coach: "Coach Tomas Berglund", spots: "Full", full: true },
    ],
  },
  {
    day: "Sun",
    slots: [
      { name: "Intro to Bouldering", time: "11:00am–12:30pm", coach: "Coach June Whitlock", spots: "5 spots" },
    ],
  },
];

export const COACHES = [
  {
    name: "Naledi Mokoena",
    role: "Head Setter & Coach",
    body: "Sets the problems you complain about. Takes the complaints as data.",
    slot: "PORTRAIT: Coach Naledi Mokoena, head setter, holding a hex key by the cave",
  },
  {
    name: "Rafael Ibarra",
    role: "Youth Team Lead",
    body: "Former comp climber. Better with twelve-year-olds than with adults, and honest about it.",
    slot: "PORTRAIT: Coach Rafael Ibarra with youth team kids in the background",
  },
  {
    name: "June Whitlock",
    role: "Movement",
    body: "Physio background. Will fix your knee drop, then explain why it was hurting your hip.",
    slot: "PORTRAIT: Coach June Whitlock demonstrating a movement drill",
  },
  {
    name: "Tomas Berglund",
    role: "Intro Sessions",
    body: "Has taught about 900 people to climb. Remembers roughly six of them, which he feels bad about.",
    slot: "PORTRAIT: Coach Tomas Berglund at the front desk with rental shoes",
  },
];

export const CLASS_FAQ = [
  {
    q: "Do I need a class to climb here?",
    a: "No. Sign the waiver, rent shoes, watch the two-minute floor briefing and go. Most people who climb here have never taken a class and never will.",
  },
  {
    q: "What should I wear?",
    a: "Whatever you can move in. Shorts or leggings, a t-shirt. No special kit, no chalk required on your first visit, no gloves ever.",
  },
  {
    q: "Is the intro session worth it if I've climbed outside?",
    a: "Probably not. If you've bouldered outdoors you already know how to fall and read a line — skip it, buy a day pass, and ask at the desk where the soft V3s are.",
  },
  {
    q: "Can I try the youth team before paying for a month?",
    a: "Yes. One free session, any Monday or Wednesday. Email us first so Rafael knows to expect them.",
  },
  {
    q: "What if I'm scared of heights?",
    a: "Bouldering might be your answer. Nothing here is over fifteen feet, the mats are a foot thick, and you're never more than a few seconds from the ground. Plenty of our members won't go near a rope.",
  },
];
