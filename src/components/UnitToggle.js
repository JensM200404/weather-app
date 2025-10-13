export default function UnitToggle({ units, setUnits }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
      <button
        onClick={() => setUnits("metric")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          units === "metric"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnits("imperial")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          units === "imperial"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        °F
      </button>
    </div>
  );
}
