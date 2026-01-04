
import Link from "next/link";
import Image from "next/image";

export default function loading() {
    const arr = Array.from({ length: 20}); 
    return (
        <section className="grid grid-cols-5 container mt-16 gap-3">
            {
                arr.map((_, index) => (

                    <div key={index}
                        role="status"
                        // Mantive h-64, mas ajustei o padding para p-4 para ganhar espaço
                        className=" w-full max-w-sm h-64 p-2 bg-white rounded-xl  dark:border-gray-300 animate-pulse flex flex-col justify-between "
                    >
                        {/* 1. Reduzi a imagem de h-48 (192px) para h-32 (128px).
                 Agora sobra espaço para o texto.
              */}
                        <div className="flex items-center justify-center w-full h-40 bg-gray-300 rounded-lg dark:bg-gray-300 shrink-0 ">
                            <svg
                                className="w-8 h-8 text-gray-200 dark:text-gray-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
        
                        {/* 2. Reduzi a quantidade de linhas de texto. 
                 6 linhas não cabem em um card pequeno. Deixei apenas 3 linhas (Título + 2 linhas).
                 Usei 'mt-4' em vez de space-y-8 no pai para controlar melhor o espaço.
              */}
                        <div className="w-full my-4 space-y-2.5">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-3/4"></div>
                        </div>
        
                        <span className="sr-only">Loading...</span>
                    </div>
        
        
    ))}
    </section>
    );
}