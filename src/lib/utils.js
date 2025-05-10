
const returnTab = (title, pages) => ({title, pages});
const returnpage = (title, link) => ({title, link});

const adminPages = [

    returnpage("Dashboard","/"),
    returnpage("Permissões","/permissoes/list"),
    returnpage("Papéis","/papeis/list"),
    returnpage("Usuários","/usuarios/list"),

].map(page => ({...page, section:"Administrador"}));


const registryPages = [

    returnpage("Clientes","/clientes/list"),
    returnpage("Brinquedos","/brinquedos/list"),
    returnpage("Tipo Brinquedo","/tipo-brinquedos/list"),
    returnpage("Marca","/marcas/list"),
    returnpage("Pagamento","/pagamentos/list"),

].map(page => ({...page, section:"Cadastros"}));

const processPages = [

    returnpage("Locação","/locacoes/list"),

].map(page => ({...page, section:"Processos"}));


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
