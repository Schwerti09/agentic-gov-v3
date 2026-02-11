export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 text-sm text-white/60 flex items-center justify-between flex-wrap gap-3">
        <div>© {new Date().getFullYear()} KI Compliance Dominator</div>
        <div className="flex gap-4">
          <a className="hover:opacity-80" href="/legal/impressum">Impressum</a>
          <a className="hover:opacity-80" href="/legal/datenschutz">Datenschutz</a>
          <a className="hover:opacity-80" href="/legal/agb">AGB</a>
        </div>
      </div>
    </footer>
  );
}
