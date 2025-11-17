import { useState } from 'react'
import { companiesData } from './data/companies'
import CompanyCard from './components/CompanyCard'
import FilterBar from './components/FilterBar'

function App() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    industry: ''
  })

  // Filter companies based on current filters
  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase())
    
    const matchesLocation = filters.location === '' || 
      company.location === filters.location
    
    const matchesIndustry = filters.industry === '' || 
      company.industry === filters.industry

    return matchesSearch && matchesLocation && matchesIndustry
  })

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Companies Directory
          </h1>
          <p className="text-gray-600 mt-2">
            Total companies: {companiesData.length}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
        <FilterBar 
          companies={companiesData} 
          onFilterChange={setFilters}
        />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">
            Showing {filteredCompanies.length} of {companiesData.length} companies
          </p>
        </div>

        {/* Companies Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No companies found matching your filters.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App