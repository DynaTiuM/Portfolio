export const scrollToSection = (id: string, yOffset: number) => {
    const element = document.getElementById(id);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};