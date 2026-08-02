// helper function to keep link clean when scrolling to section
export function scrollToSection(sectionId: string) {
  if (sectionId.startsWith("/")) {
    window.location.href = sectionId;
    return;
  }

  // "home" / "top" always scroll to page start
  if (sectionId === "home" || sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
