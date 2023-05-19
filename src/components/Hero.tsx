import nlwLogo from '../assets/logo-spacetime.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="text-sm inline-block rounded-full bg-green-500 p-3 px-5 font-alt uppercase leading-none text-gray-900 hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
