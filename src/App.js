import React from 'react';
import './App.css';
import bgImage from './img/image1.png'

function App() {
  return (
    <body className="bg-zinc-900 lg:bg-gradient-to-br from-zinc-900 to-zinc-800 w-screen h-screen flex justify-center items-center">
	<section className="w-5/6 md:w-1/2 bg-zinc-950 rounded-3xl flex">
		<section 
      id="form" 
      className="basis-full lg:basis-5/12 flex flex-col items-center text-white">
			<div className="flex items-baseline gap-1">
        <h1 className="font-sans text-2xl text-white font-bold my-12">Faça o seu Login</h1>
        <span className="w-3 h-3 bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-full inline-block"></span>
      </div>	
			<form className="flex flex-col px-5 gap-8 text-gray-400 pb-10">
				<label className="group h-14">
					Email
					<div className="transition-opacity ease-in opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md" />

					<div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">
						<input type="email" className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none w-full" />
					</div>
				</label>

				<label className="group h-14">
					Senha
					<div className="transition-opacity ease-in opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md" />

					<div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">
						<input type="password" className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none w-full" />
					</div>
				</label>

				<a href="link" className="text-right text-sm underline">esqueci minha senha</a>
				<button type="submit" className="bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] font-bold text-white rounded-lg p-1">Entrar</button>
				<a href="link" className="text-center text-sm underline">ainda não tenho uma conta</a>
			</form>
		</section>
		<section id="picture" className="w-0 lg:w-7/12">
			<img src={bgImage} alt="Imagem de uma pessoa com um notebook" className="w-full h-full object-cover rounded-r-3xl shadow-[inset_400px_30px_400px_-100px_theme('colors.zinc.950')] opacity-70" />
		</section>
	</section>
</body>
  );
}

export default App;

// teste commit 2