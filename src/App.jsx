import { useState, useMemo, useEffect } from 'react'
import { companiesData } from './data/companies'
import CompanyCard from './components/CompanyCard'
import CompanyTable from './components/CompanyTable'
import FilterBar from './components/FilterBar'
import ViewControls from './components/ViewControls'
import Pagination from './components/Pagination'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'

function App() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    industry: ''
  })
  const [view, setView] = useState('card')
  const [sortBy, setSortBy] = useState('name-asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const itemsPerPage = 6

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Filter and sort companies
  const filteredAndSortedCompanies = useMemo(() => {
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

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedCompanies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCompanies = filteredAndSortedCompanies.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleSortChange = (newSort) => {
    setSortBy(newSort)
    setCurrentPage(1)
  }

  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600 font-medium">Loading companies...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Companies Directory
          </h1>
          <p className="text-gray-600 mt-2">
            Explore and filter through our database of {companiesData.length} companies
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Filter Bar */}
        <FilterBar 
          companies={companiesData} 
          onFilterChange={handleFilterChange}
        />

        {/* View Controls & Sort */}
        <ViewControls
          view={view}
          onViewChange={setView}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium">
            {filteredAndSortedCompanies.length > 0 ? (
              <>
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedCompanies.length)} of {filteredAndSortedCompanies.length} companies
              </>
            ) : (
              'No companies found'
            )}
          </p>
        </div>

        {/* Companies Display */}
        {currentCompanies.length > 0 ? (
          <>
            {view === 'card' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <CompanyTable companies={currentCompanies} />
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="mt-4 text-gray-500 text-lg">
              No companies found matching your filters.
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App