import { useState } from 'react'

function FilterBar({ companies, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')

  // Get unique locations and industries from companies data
  const locations = [...new Set(companies.map(c => c.location))].sort()
  const industries = [...new Set(companies.map(c => c.industry))].sort()

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onFilterChange({
      searchTerm: value,
      location: selectedLocation,
      industry: selectedIndustry
    })
  }

  // Handle location filter change
  const handleLocationChange = (e) => {
    const value = e.target.value
    setSelectedLocation(value)
    onFilterChange({
      searchTerm,
      location: value,
      industry: selectedIndustry
    })
  }

  // Handle industry filter change
  const handleIndustryChange = (e) => {
    const value = e.target.value
    setSelectedIndustry(value)
    onFilterChange({
      searchTerm,
      location: selectedLocation,
      industry: value
    })
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedLocation('')
    setSelectedIndustry('')
    onFilterChange({
      searchTerm: '',
      location: '',
      industry: ''
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Filter Companies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search by Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search by Name
          </label>
          <input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter by Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={handleIndustryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex items-end">
          <button
            onClick={handleClearFilters}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterBar