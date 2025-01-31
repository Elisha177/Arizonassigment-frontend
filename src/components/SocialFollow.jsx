const SocialFollow = () => {
    const socialLinks = [
      {
        id: 1,
        name: "Instagram",
        url: "https://www.instagram.com/1stoplighting"
      },
      {
        id: 2,
        name: "Facebook",
        url: "https://www.facebook.com/1STOPLighting/"
      },
      {
        id: 3,
        name: "Pinterest",
        url: "https://pinterest.com/1stoplighting"
      }
    ];
  
    return (
      <div className="w-full bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Are You Following Us?
            </h3>
            <p className="text-gray-700 mb-6">
              Check out the latest home lighting and decor trends, new arrivals and much more!{' '}
              <strong className="font-semibold">#1stoplove</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6 
                    py-2 
                    bg-[#FF7F75] 
                    border 
                    border-gray-300 
                    rounded-md 
                    shadow-sm 
                    text-gray-700 
                    hover:bg-gray-50 
                    hover:border-gray-400 
                    transition-colors 
                    duration-200 
                    inline-flex 
                    items-center 
                    gap-2
                  "
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SocialFollow;