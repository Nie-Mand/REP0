function App() {
  return (
    <div className="flex items-center justify-center py-40 space-x-10">
      <label>
        <input name="_" type="radio" className="accent-cyan-600" />
        <span>Cyan 400</span>
      </label>
      <label>
        <input name="_" type="radio" className="accent-cyan-300" />
        <span>Cyan 300</span>
      </label>
      <label>
        <input name="_" type="radio" className="accent-[#4EADFF]" />
        <span>Custom Color: #4EADFF</span>
      </label>
    </div>
  );
}

export default App;
