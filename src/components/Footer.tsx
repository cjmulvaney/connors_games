export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center text-sm">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Connor Mulvaney. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
