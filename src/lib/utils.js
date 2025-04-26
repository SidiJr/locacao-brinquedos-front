
const returnTab = (title, pages) => ({title, pages});
const returnpage = (title, link, navText) => ({title, link, navText});

const adminPages = [
    returnpage("Dashboard","/","Home"),
    returnpage("Permissões","1"),
    returnpage("Papéis","2"),
    returnpage("Usuários","3"),
];

const registryPages = [
    returnpage("Clientes","/clientes/list"),
    returnpage("Brinquedos","4"),
    returnpage("Tipo Brinquedo","5"),
    returnpage("Marca","6"),
    returnpage("Pagamento","7"),
];

const processPages = [
    returnpage("Locação","/locacoes/list","Incluir Locação"),
];

export const pages = [
    ...adminPages,
    ...registryPages,
    ...processPages,
]

export const navTreeSections = [
    returnTab("Administrador", adminPages),
    returnTab("cadastros", registryPages),
    returnTab("Processos", processPages),
]
