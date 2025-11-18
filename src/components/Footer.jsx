function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white shadow-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p className="mb-2">
            Companies Directory - Frontend Developer Assessment
          </p>
          <p className="text-sm">
            © {currentYear} Frontlines Media. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer