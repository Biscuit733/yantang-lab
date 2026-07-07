export type NavItem = {
  name: string
  path: string
}

export const navItems: NavItem[] = [
    {
        name:'Home',
        path:'/'
    },{
        name:'About',
        path:'/about'
    },{
        name:'Articles',
        path:'/articles'
    },{
        name:'Gallery',
        path:'/gallery'
    },{
        name:'Projects',
        path:'/projects'
    }
]