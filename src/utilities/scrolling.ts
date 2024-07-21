// helper function to keep link clean when scrolling to section
export function scrollToSection(sectionId: string) {
  if (sectionId.startsWith("/")) {
    window.location.href = sectionId;
    return;
  }

  const section = document.getElementById(sectionId);
  if (section) section?.scrollIntoView({ behavior: "smooth" });
}
