export default function TradingJournalApp() {
  const stats = {
    totalTrades: 0,
    winRate: '0%',
    avgRR: '0',
    bestSession: '-',
  };

  const trades = [];

  const checklist = [
    'HTF Bias Confirmed',
    'Liquidity Sweep',
    'MSS Confirmed',
    'Displacement',
    'FVG / IFVG Entry',
    'RR 1:2 or Higher',
    'Session Valid',
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold">Sniper Trading Journal</h1>
          <p className="text-zinc-400 mt-2">
            Multi Time Frame • Market Structure • FVG • MSS • Liquidity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
            <p className="text-zinc-400 text-sm">Total Trades</p>
            <h2 className="text-3xl font-bold mt-2">{stats.totalTrades}</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
            <p className="text-zinc-400 text-sm">Winrate</p>
            <h2 className="text-3xl font-bold mt-2">{stats.winRate}</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
            <p className="text-zinc-400 text-sm">Average RR</p>
            <h2 className="text-3xl font-bold mt-2">{stats.avgRR}</h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
            <p className="text-zinc-400 text-sm">Best Session</p>
            <h2 className="text-3xl font-bold mt-2">{stats.bestSession}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold">Trade Checklist</h2>
              <span className="text-sm text-zinc-400">Before Entry</span>
            </div>

            <div className="space-y-3">
              {checklist.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 bg-zinc-800 rounded-xl p-3"
                >
                  <input type="checkbox" className="w-5 h-5" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-5">Trade Plan</h2>

            <div className="space-y-4">
              <input
                placeholder="Pair (XAUUSD/BTCUSD)"
                className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
              />

              <select className="w-full bg-zinc-800 rounded-xl p-3 outline-none">
                <option>HTF Bias</option>
                <option>Bullish</option>
                <option>Bearish</option>
              </select>

              <select className="w-full bg-zinc-800 rounded-xl p-3 outline-none">
                <option>Entry Model</option>
                <option>FVG</option>
                <option>IFVG</option>
                <option>OB Reject</option>
                <option>MSS Confirm</option>
              </select>

              <input
                placeholder="Stop Loss"
                className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
              />

              <input
                placeholder="Take Profit"
                className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
              />

              <textarea
                placeholder="Trade Notes / Psychology"
                rows={5}
                className="w-full bg-zinc-800 rounded-xl p-3 outline-none"
              />

              <button className="w-full bg-white text-black rounded-xl p-3 font-semibold hover:opacity-90 transition">
                Save Trade
              </button>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 overflow-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-semibold">Trade Journal</h2>
            <span className="text-sm text-zinc-400">Backtest History</span>
          </div>

          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="text-zinc-400 border-b border-zinc-800">
                <th className="pb-3">Pair</th>
                <th className="pb-3">Bias</th>
                <th className="pb-3">Setup</th>
                <th className="pb-3">RR</th>
                <th className="pb-3">Session</th>
                <th className="pb-3">Result</th>
              </tr>
            </thead>

           <tbody>
  {trades.length === 0 ? (
    <tr>
      <td
        colSpan="6"
        className="py-6 text-center text-zinc-500"
      >
        No trades yet
      </td>
    </tr>
  ) : (
    trades.map((trade, index) => (
      <tr
        key={index}
        className="border-b border-zinc-800 hover:bg-zinc-800/40"
      >
        <td className="py-4">{trade.pair}</td>
        <td className="py-4">{trade.bias}</td>
        <td className="py-4">{trade.setup}</td>
        <td className="py-4">{trade.rr}</td>
        <td className="py-4">{trade.session}</td>
        <td
          className={`py-4 font-semibold ${
            trade.result === 'Win'
              ? 'text-green-400'
              : 'text-red-400'
          }`}
        >
          {trade.result}
        </td>
      </tr>
    ))
  )}
</tbody>
          </table>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-4">System Rules</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300">
            <div className="bg-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-2">Buy Conditions</h3>
              <ul className="space-y-2 text-sm">
                <li>• H4 / D1 Bullish</li>
                <li>• Sweep Sell-Side Liquidity</li>
                <li>• Bullish MSS</li>
                <li>• Strong Displacement</li>
                <li>• FVG / IFVG Hold</li>
                <li>• Enter at Discount</li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-2">Sell Conditions</h3>
              <ul className="space-y-2 text-sm">
                <li>• H4 / D1 Bearish</li>
                <li>• Sweep Buy-Side Liquidity</li>
                <li>• Bearish MSS</li>
                <li>• Strong Displacement</li>
                <li>• FVG / IFVG Hold</li>
                <li>• Enter at Premium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}