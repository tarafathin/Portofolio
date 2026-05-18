export default function MarqueeSection() {
  const items = [
    "UI/UX Design",
    "✦",
    "Figma",
    "✦",
    "Flutter",
    "✦",
    "Frontend Dev",
    "✦",
    "User Research",
    "✦",
    "Prototyping",
    "✦",
    "Next.js",
    "✦",
    "Tailwind CSS",
    "✦",
    "Quality Assurance",
    "✦",
    "Scrum Master",
    "✦",
  ];

  const doubleItems = [...items, ...items]; // duplicate untuk infinite loop

  return (
    <div
      className="w-full overflow-hidden py-5 border-y"
      style={{
        background: "var(--accent)",
        borderColor: "var(--accent-light)",
      }}
    >
      <div className="marquee-track">
        {doubleItems.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-4 font-display font-bold text-sm tracking-widest"
            style={{
              fontFamily: "Syne, sans-serif",
              color: "var(--text-dark)",
              fontSize: item === "✦" ? "10px" : "13px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
