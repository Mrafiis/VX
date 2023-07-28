import { useState } from 'react'
import rafi from './assets/Foto.jpg'
import './app.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={rafi} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Biodata</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Nama Lengkap : Muhammad Rafi Iftikharus Sadat
         {/* <code>src/App.jsx</code>  */}
        </p>
        <p>Sekolah : Medikacom</p>
        <p>Kelas : XII B</p>
        <p>Jurusan : Rekayasa Perangkat Lunak</p>
        <p>Hobi : Badminton</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
