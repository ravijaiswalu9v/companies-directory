function ViewControls({ view, onViewChange, sortBy, onSortChange }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => onViewChange('card')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'card'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Card View
        </button>
        <button
          onClick={() => onViewChange('table')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            view === 'table'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Table View
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="employees-asc">Employees (Low-High)</option>
          <option value="employees-desc">Employees (High-Low)</option>
          <option value="founded-asc">Founded (Oldest)</option>
          <option value="founded-desc">Founded (Newest)</option>
        </select>
      </div>
    </div>
  )
}

export default ViewControls