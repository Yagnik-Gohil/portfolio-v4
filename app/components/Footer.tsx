export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        text-[hsl(var(--foreground))]
        text-sm
        opacity-70
        transition-opacity duration-300
        hover:opacity-100
      "
    >
      <p>&copy; 2025 Yagnik Gohil. All rights reserved.</p>
    </footer>
  );
}
