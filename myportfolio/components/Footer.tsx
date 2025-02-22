const Footer = () => {
    return (
      <footer className="py-4 bg-white text-white text-center">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;