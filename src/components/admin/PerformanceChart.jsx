import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, Filter } from 'lucide-react';

const PerformanceChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const chartData = [
    { month: 'Jan', employees: 220, recruitment: 8, performance: 85 },
    { month: 'Fév', employees: 225, recruitment: 12, performance: 87 },
    { month: 'Mar', employees: 230, recruitment: 6, performance: 89 },
    { month: 'Avr', employees: 235, recruitment: 10, performance: 86 },
    { month: 'Mai', employees: 240, recruitment: 15, performance: 88 },
    { month: 'Juin', employees: 247, recruitment: 12, performance: 87 }
  ];

  const maxEmployees = Math.max(...chartData.map(d => d.employees));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[#2f365b] flex items-center">
          <BarChart3 size={20} className="mr-2" />
          Performance RH
        </h3>
        <div className="flex items-center space-x-2">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#ea532b]"
          >
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="quarter">Ce trimestre</option>
            <option value="year">Cette année</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 flex items-end space-x-2 mb-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex flex-col items-center space-y-1">
              {/* Employees Bar */}
              <div 
                className="w-full bg-[#2f365b] rounded-t-sm transition-all duration-500 hover:bg-[#3a4272]"
                style={{ height: `${(data.employees / maxEmployees) * 200}px` }}
                title={`${data.employees} employés`}
              ></div>
              {/* Performance Bar */}
              <div 
                className="w-full bg-[#ea532b] rounded-t-sm transition-all duration-500 hover:bg-[#d64a27]"
                style={{ height: `${(data.performance / 100) * 50}px` }}
                title={`${data.performance}% performance`}
              ></div>
            </div>
            <span className="text-xs text-gray-500 mt-2">{data.month}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#2f365b] rounded mr-2"></div>
          <span className="text-gray-600">Effectifs</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#ea532b] rounded mr-2"></div>
          <span className="text-gray-600">Performance</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-lg font-bold text-[#2f365b]">+5.2%</div>
          <div className="text-xs text-gray-500">Croissance effectifs</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-[#ea532b]">87%</div>
          <div className="text-xs text-gray-500">Performance moyenne</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">+2.1%</div>
          <div className="text-xs text-gray-500">Amélioration</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;