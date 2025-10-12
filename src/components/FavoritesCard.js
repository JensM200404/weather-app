"use client";

import { Star } from "lucide-react";

export default function FavoritesCard({
  favorites,
  removeFavorite,
  onCityClick,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-900">Favorite Cities</h2>
      </div>
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Star className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500">No favorite cities yet</p>
          <p className="text-sm text-gray-400 mt-2">
            Search for cities to add them to your favorites
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {favorites.map((city) => (
            <li
              key={city}
              className="flex justify-between items-center p-3 rounded border border-gray-300 bg-gray-50 font-medium"
            >
              <button
                onClick={() => onCityClick(city)}
                className="text-left text-blue-600 hover:underline flex-grow"
              >
                {city}
              </button>
              <button
                onClick={() => removeFavorite(city)}
                className="text-red-500 hover:text-red-700 font-bold ml-3"
                aria-label={`Remove ${city} from favorites`}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
