import React from 'react';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

function SideBar() {

    const returnTab = (title,pages) => ({title, pages});
    const returnpage = (title,link) => ({title, link});

    const navTreeSections = [
        returnTab("Administrador",[
            returnpage("Dashboard","/"),
            returnpage("Permissões",""),
            returnpage("Papéis",""),
            returnpage("Usuários","")
        ]),
        returnTab("cadastros",[
            returnpage("Clientes","/clientes/list"),
            returnpage("Brinquedos",""),
            returnpage("Tipo Brinquedo",""),
            returnpage("Marca",""),
            returnpage("Pagamento","")
        ]),
        returnTab("Processos",[
            returnpage("Locação","/locacoes/list")
        ])
    ]

    return (
        <nav>
            <div className="bg-gradient-to-b from-sky-200 to-fuchsia-200 h-full w-60">
                <section className='border-b-2 border-gray-500/25'>
                    <img className="w-60 object-cover" src="/images/logo.png" />
                </section>
                {
                    navTreeSections.map(({title, pages})=>(
                        <section key={title} className='border-b-2 border-gray-500/25 min-h-10 p-2 pt-4 pb-10'>
                            <h1 className='text-xl underline text-center pb-2'>{title.toUpperCase()}</h1>
                            <ul className='pl-5'>
                                {pages.map((page)=>(
                                    <li key={page.link} className="flex gap-2 items-center">
                                        <ArrowRightIcon/><a href={page.link} className="hover:underline">{page.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))
                }
            </div>
        </nav>
    );
}

export default SideBar;