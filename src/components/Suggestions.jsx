/* eslint-disable no-unused-vars */
import React from 'react';

const Suggestions = () => {
  const suggestions = [
    {
      text: "floor lamps",
      href: "/category/bedroom-lighting?hasddr=true&isdesktop=true&category=floor+lamps&bid=suggestions"
    },
    {
      text: "wall sconces",
      href: "/category/wall-lights?category=wall-lights%2Cswing-arms%2Cpicture-lighting&bid=suggestions"
    },
    {
      text: "celest",
      href: "/Quorum/0-0-0-183/list.aspx?family=celeste&bid=suggestions"
    },
    {
      text: "visual comfort",
      href: "/search.aspx?search=visual+comfort&bid=suggestions"
    },
    {
      text: "uttermost decor",
      href: "/Uttermost/0-0-0-208/list.aspx?category=home-furnishings&bid=suggestions"
    },
    {
      text: "linear chandelier",
      href: "/category/linear-chandelier-lighting&bid=suggestions"
    },
    {
      text: "table lamps",
      href: "/category/bedroom-lighting?category=1%7cfloor+lamps&bid=suggestions"
    },
    {
      text: "wall art",
      href: "/category/living-room?category=wall-decor&bid=suggestions"
    }
  ];

  return (
    <div className="mb-5">
      <div className="w-full">
        <h3 className="text-center text-2xl font-semibold mb-4">
          People are Searching for...
        </h3>
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => window.location.href = suggestion.href}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full 
                         hover:bg-gray-50 transition-colors duration-200 
                         text-gray-700 shadow-sm whitespace-nowrap"
            >
              {suggestion.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;