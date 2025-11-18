import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell
} from 'recharts';
import { PERFORMANCE_DATA } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900 border border-zinc-700 p-3 rounded shadow-xl">
        <p className="font-bold text-white mb-1">{payload[0].payload.name}</p>
        <p className="text-sm text-brand-400">Success: {payload[0].value}%</p>
        {payload[0].payload.cost > 0 && (
          <p className="text-sm text-zinc-400">Cost: ${payload[0].payload.cost}</p>
        )}
      </div>
    );
  }
  return null;
};

const ChartsSection: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benchmarking Results</h2>
             <p className="text-zinc-400">Evaluating state-of-the-art models on 225 diverse CAPTCHAs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Bar Chart - Success Rate */}
          <div className="bg-dark-900 p-6 rounded-2xl border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Pass Rate @ 1 Attempt</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={PERFORMANCE_DATA}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} stroke="#666" />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    stroke="#999" 
                    width={80}
                    tick={{fontSize: 12}} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="passRate" radius={[0, 4, 4, 0]} barSize={20}>
                    {PERFORMANCE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.type === 'Human' ? '#22c55e' : '#8b5cf6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-6 text-sm justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-500 rounded-sm"></div>
                    <span className="text-zinc-400">Human Baseline</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-ai-500 rounded-sm"></div>
                    <span className="text-zinc-400">AI Models</span>
                </div>
            </div>
          </div>

          {/* Scatter Plot - Cost vs Performance */}
          <div className="bg-dark-900 p-6 rounded-2xl border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Cost vs. Performance Efficiency</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    type="number" 
                    dataKey="cost" 
                    name="Cost" 
                    unit="$" 
                    stroke="#666"
                    label={{ value: 'Cost (USD)', position: 'insideBottom', offset: -10, fill: '#666' }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="passRate" 
                    name="Pass Rate" 
                    unit="%" 
                    stroke="#666"
                    label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft', fill: '#666' }}
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                              <div className="bg-black/90 border border-zinc-700 p-2 rounded text-xs">
                                  <span className="text-white font-bold block mb-1">{data.name}</span>
                                  <span className="text-zinc-400 block">Cost: ${data.cost}</span>
                                  <span className="text-brand-400 block">Success: {data.passRate}%</span>
                              </div>
                          )
                      }
                      return null;
                  }} />
                  <Scatter name="Models" data={PERFORMANCE_DATA.filter(d => d.type === 'AI')} fill="#8b5cf6">
                    {PERFORMANCE_DATA.filter(d => d.type === 'AI').map((entry, index) => (
                        <Cell key={`cell-${index}`} fillOpacity={0.6} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
             <p className="mt-4 text-sm text-zinc-500 text-center px-8">
                Ideally, models should be in the <span className="text-white">top-left</span> (High Success, Low Cost). 
                Currently, high performance (e.g., o3) comes at extreme cost.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
