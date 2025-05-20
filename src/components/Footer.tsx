export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Smart Chidi Oparaugo</h2>
          <p className="text-gray-400 mb-6">
            AI Specialist & Automation Expert
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Smart Chidi Oparaugo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}