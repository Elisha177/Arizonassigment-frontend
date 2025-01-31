const ShopByRoom = () => {
    const rooms = [
      {
        id: 1,
        title: "Dining Room",
        link: "/category/dining-room?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-dining-room.jpg",
        alt: "clustered pendants over a table"
      },
      {
        id: 2,
        title: "Entry/Foyer",
        link: "/category/entryway-foyer?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-entry-room.jpg",
        alt: "white farmhouse pendant hanging in an entryway"
      },
      {
        id: 3,
        title: "Outdoor",
        link: "/Outdoor-Lighting.htm?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-outdoor-room.jpg",
        alt: "black wall light on a wood shingled exterior wall"
      },
      {
        id: 4,
        title: "Kitchen",
        link: "/category/kitchen-lighting?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-kitchen-room.jpg",
        alt: "linear chandelier over a kitchen island"
      },
      {
        id: 5,
        title: "Bathroom",
        link: "/category/bathroom-lights?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-bath-room.jpg",
        alt: "two modern bathroom vanity lights on either side of a mirror above a modern vanity"
      },
      {
        id: 6,
        title: "Living Room",
        link: "/category/living-room?bid=bmb",
        image: "https://images.1stoplighting.com/site/common/promos/all/2022/1-aug-living-room.jpg",
        alt: "globe pendant in a bright white living room"
      }
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Shop by Room</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="mb-6">
              <a 
                href={room.link}
                className="block text-center hover:opacity-90 transition-opacity"
              >
                <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={room.image}
                    className="w-full h-full object-cover border-r-4 hover:scale-105 transition-transform duration-300"
                    width={150}
                    height={150}
                    alt={room.alt}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShopByRoom;