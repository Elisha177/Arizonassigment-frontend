const TrendingStyles = () => {
    const styles = [
      {
        id: 1,
        image: "https://imgcms.1stoplighting.com/site/common/promos/all/2023/brinley-by-kichler.jpg",
        title: "Farmhouse",
        description: "Feast your eyes on neutrals and vintage accents.",
        link: "/promo/rustic-farmhouse?bid=bmb",
        alt: "farmhouse style cluster pendants from Kichler Brinely collection"
      },
      {
        id: 2,
        image: "https://imgcms.1stoplighting.com/site/common/promos/all/2023/lazlo-by-lark.jpg",
        title: "Mid-Century Modern",
        description: "Bold, functional, curvy, oh-so-chic.",
        link: "/promo/mid-century-style?bid=bmb",
        alt: "mid century style chandelier from the lazlo collection by lark in front of yellow curtains"
      }
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Trending Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {styles.map((style) => (
            <div key={style.id} className="mb-8">
              <a href={style.link} className="block">
                <img
                  src={style.image}
                  className="w-full h-auto object-cover rounded-lg"
                  width={785}
                  height={400}
                  alt={style.alt}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{style.title}</h3>
                <p className="text-gray-600 mb-3">{style.description}</p>
                <p>
                  <a 
                    href={style.link} 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TrendingStyles;