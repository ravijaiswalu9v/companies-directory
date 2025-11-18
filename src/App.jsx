import { useState, useMemo } from 'react'
import { companiesData } from './data/companies'
import CompanyCard from './components/CompanyCard'
import CompanyTable from './components/CompanyTable'
import FilterBar from './components/FilterBar'
import ViewControls from './components/ViewControls'

function App() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    industry: ''
  })
  const [view, setView] = useState('card') // 'card' or 'table'
  const [sortBy, setSortBy] = useState('name-asc')

  // Filter and sort companies
  const processedCompanies = useMemo(() => {
    // First, filter
    let result = companiesData.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
      
      const matchesLocation = filters.location === '' || 
        company.location === filters.location
      
      const matchesIndustry = filters.industry === '' || 
        company.industry === filters.industry

      return matchesSearch && matchesLocation && matchesIndustry
    })

    // Then, sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'employees-asc':
          return a.employees - b.employees
        case 'employees-desc':
          return b.employees - a.employees
        case 'founded-asc':
          return a.founded - b.founded
        case 'founded-desc':
          return b.founded - a.founded
        default:
          return 0
      }
    })

    return result
  }, [filters, sortBy])

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

        {/* View Controls & Sort */}
        <ViewControls
          view={view}
          onViewChange={setView}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">
            Showing {processedCompanies.length} of {companiesData.length} companies
          </p>
        </div>

        {/* Companies Display */}
        {processedCompanies.length > 0 ? (
          view === 'card' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedCompanies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <CompanyTable companies={processedCompanies} />
          )
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
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