/**
 * [EN] Main application component
 * [ES] Componente principal de la aplicación
 */

import { useState } from 'react'

/**
 * [EN] Main App component - Root of PWA
 * [ES] Componente App principal - Raíz de la PWA
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <h1 className="text-3xl font-bold text-white">
          📊 PWA Inversiones DRFIC
        </h1>
        <p className="text-gray-400 text-sm">
          AI-Powered Investment Platform
        </p>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Placeholder para componentes */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">📈 Portfolio</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">📊 Market Data</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">🔔 Alerts</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4">⚙️ Settings</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>
        </div>

        {/* Test Counter */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mt-8 w-full max-w-md mx-auto">
          <p className="text-gray-300 mb-4">
            Click count: <span className="text-blue-400 font-bold">{count}</span>
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Click me
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
