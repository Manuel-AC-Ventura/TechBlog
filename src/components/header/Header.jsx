

export const Header = ()=>{
  return(
    <header className="w-full max-sm:h-auto md:h-auto lg:h-80 py-10 bg-[#F8F8FF] flex items-center justify-center">
      <div className="max-sm:w-4/5 md:w-5/6 lg:w-3/5 flex max-sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-around">
        <div className="max-sm:w-full md:w-4/6 lg:w-3/6 max-sm:text-center md:text-center lg:text-left lg:items-start flex flex-col gap-5 md:items-center">
          <h1 className="text-xl font-semibold">Encontre os <span className="text-[#846AFF]">melhores artigos</span> de programação em um só lugar</h1>
          <p className="text-[#121214]">Explore o topo da programação em um só lugar!Seu destino único para dicas e tendências atuais.</p>
          <button className="w-2/6 max-sm:w-full text-white font-semibold rounded p-2 cursor-pointer bg-[#846AFF]">Buscar artigos</button>
        </div>
        <div>
        <img className="h-64" src="logo.svg" alt="" />
        </div>
      </div>
    </header>
  )
}