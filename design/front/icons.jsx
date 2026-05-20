// Icon set - hand-tuned, single stroke 1.5
const Icon = ({ name, size = 18, stroke = 1.6 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "home":
      return <svg {...props}><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V10"/><path d="M10 20v-5h4v5"/></svg>;
    case "briefcase":
      return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>;
    case "cap":
      return <svg {...props}><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>;
    case "hands":
      return <svg {...props}><path d="M3 12c1.5-1 4-1 6 1l3 3 3-3c2-2 4.5-2 6-1"/><path d="M3 16c1.5-1 4-1 6 1l3 3 3-3c2-2 4.5-2 6-1"/></svg>;
    case "gallery":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 16-5-5-8 8"/></svg>;
    case "spark":
      return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8"/></svg>;
    case "download":
      return <svg {...props}><path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/></svg>;
    case "linkedin":
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01"/><path d="M12 17v-4a2 2 0 1 1 4 0v4"/><path d="M12 10v7"/></svg>;
    case "mail":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case "message":
      return <svg {...props}><path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1.4 3.5A8 8 0 0 1 21 12Z"/></svg>;
    case "phone":
      return <svg {...props}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case "pin":
      return <svg {...props}><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "sun":
      return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></svg>;
    case "moon":
      return <svg {...props}><path d="M20 14a8 8 0 1 1-10-10 7 7 0 0 0 10 10Z"/></svg>;
    case "chev":
      return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case "github":
      return <svg {...props}><path d="M9 19c-4 1-4-2-6-2.5"/><path d="M15 22v-3.5a3 3 0 0 0-1-2.3c3 0 6-2 6-5.5a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1-.3-3.3 1.2a11 11 0 0 0-6 0C7.1 2.4 6.1 2.7 6.1 2.7a4 4 0 0 0-.1 3A4.3 4.3 0 0 0 4.8 8.7c0 3.5 3 5.5 6 5.5a3 3 0 0 0-1 2.3V22"/></svg>;
    case "external":
      return <svg {...props}><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M20 14v6H4V4h6"/></svg>;
    case "compass":
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="m15 9-4 1.5L9 15l4-1.5L15 9z"/></svg>;
    case "package":
      return <svg {...props}><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/></svg>;
    case "voice":
      return <svg {...props}><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>;
    case "heart":
      return <svg {...props}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>;
    case "menu":
      return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "flag-fr":
      return <svg width={size} height={size} viewBox="0 0 24 16"><rect width="8" height="16" fill="#0055A4"/><rect x="8" width="8" height="16" fill="#fff"/><rect x="16" width="8" height="16" fill="#EF4135"/></svg>;
    case "flag-en":
      return <svg width={size} height={size} viewBox="0 0 24 16"><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2"/><path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="3"/><path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="1.5"/></svg>;
    default:
      return null;
  }
};
window.Icon = Icon;

// Section icon map
const NAV_ICONS = {
  accueil: "home",
  experiences: "briefcase",
  formations: "cap",
  benevolat: "hands",
  portfolio: "gallery",
  competences: "spark",
};
window.NAV_ICONS = NAV_ICONS;

const NAV_ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "experiences", label: "Expériences" },
  { id: "formations", label: "Formations" },
  { id: "benevolat", label: "Bénévolat" },
  { id: "portfolio", label: "Projets" },
  { id: "competences", label: "Compétences" },
];
window.NAV_ITEMS = NAV_ITEMS;

// Avatar placeholder — soft gradient with initials
const Avatar = ({ size = 80, initials = "AA" }) => {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #d6e8e8 0%, #c8d8e9 45%, #e9d5d2 100%)",
      display: "grid", placeItems: "center",
      fontFamily: "var(--serif)", fontStyle: "italic",
      fontSize: size * 0.42, color: "#3b4350", fontWeight: 400,
      letterSpacing: "-0.02em",
    }}>
      {initials}
    </div>
  );
};
window.Avatar = Avatar;
