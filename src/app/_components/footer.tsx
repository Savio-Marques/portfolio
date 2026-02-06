export const Footer = () => {
  return (
    <footer className="px-6 max-w-3xl mx-auto py-12 border-t border-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-gray-600 uppercase tracking-wider">
        <span>
          © {new Date().getFullYear()} Sávio Marques
        </span>
        
        <span>
          Desenvolvedor
        </span>
      </div>
    </footer>
  );
};