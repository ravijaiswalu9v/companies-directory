function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Company Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {company.name}
      </h3>
      
      {/* Industry Badge */}
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-3">
        {company.industry}
      </span>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {company.description}
      </p>
      
      {/* Company Details */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex items-center">
          <span className="font-semibold w-24">Location:</span>
          <span>{company.location}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold w-24">Employees:</span>
          <span>{company.employees}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold w-24">Founded:</span>
          <span>{company.founded}</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard