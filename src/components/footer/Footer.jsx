
export const Footer = ()=>{
  return(
    <div className="w-full h-96 bg-[#F8F8FF] text-[#121214] py-12 flex justify-center">
      <div className="max-sm:w-5/6 md:w-5/6 lg:w-2/6 flex flex-col gap-5 items-center">
        <h1 className="text-lg font-semibold">Entre em contato</h1>
        <input className="w-full p-2 rounded border border-[#EAEAEA] outline-none" type="text" placeholder="Nome" />
        <input className="w-full p-2 rounded border border-[#EAEAEA] outline-none" type="email" placeholder="Email" />
        <textarea className="w-full p-2 rounded border border-[#EAEAEA] outline-none resize-none" placeholder="Assunto da mensagem"></textarea>
        <button className="w-full py-2 text-white text-center font-semibold bg-[#846AFF] rounded uppercase">entrar em contato</button>
      </div>
    </div>
  )
}