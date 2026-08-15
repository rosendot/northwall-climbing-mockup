export const SHOP = {
  name: "Northwall Climbing",
  tagline: "Bouldering · Tacoma",
  blurb: "Northwall Climbing, Tacoma. Bouldering only, since 2019.",
  address1: "1140 Dock Street",
  address2: "Tacoma, WA 98402",
  phone: "(253) 555-0119",
  phoneHref: "tel:+12535550119",
  email: "climb@northwallclimbing.com",
  footTagline: "No ropes. No harnesses. No partner required.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Climbing", href: "/climbing" },
  { label: "Classes", href: "/classes" },
  { label: "Membership", href: "/membership" },
  { label: "The Gym", href: "/the-gym" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/visit" },
];

export const FOOTER_LINKS = {
  climbing: [
    { label: "What's on the walls", href: "/climbing" },
    { label: "Grades, explained", href: "/climbing#grades" },
    { label: "Classes & coaching", href: "/classes" },
    { label: "Comps & leagues", href: "/events" },
    { label: "Membership", href: "/membership" },
  ],
  gym: [
    { label: "Hours", href: "/visit#hours" },
    { label: "Directions & parking", href: "/visit#map" },
    { label: "Sign the waiver", href: "/visit#waiver" },
    { label: "Facilities", href: "/the-gym" },
    { label: "Our story", href: "/the-gym" },
  ],
};

// Mon–Fri 6am–11pm, Sat–Sun 8am–9pm, expressed as minutes from midnight.
export const HOURS = [
  { day: "Monday", dow: 1, text: "6am – 11pm" },
  { day: "Tuesday", dow: 2, text: "6am – 11pm" },
  { day: "Wednesday", dow: 3, text: "6am – 11pm" },
  { day: "Thursday", dow: 4, text: "6am – 11pm" },
  { day: "Friday", dow: 5, text: "6am – 11pm" },
  { day: "Saturday", dow: 6, text: "8am – 9pm" },
  { day: "Sunday", dow: 0, text: "8am – 9pm" },
];

export const HOURS_NOTE = "Setting happens Tuesday mornings — the cave may be closed until noon.";
