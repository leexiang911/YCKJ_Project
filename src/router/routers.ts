// Home
// Works
// News
// About
// careers
// Contact
// English
// import home from 

type routerItem = {
    name: string,//名字
    path: string,//路径
    component: any,//组件
    mate: {        //附带参数
        exact: boolean // 是否精确匹配,如果有子页面建议使用不精确匹配
    }
}



const routerArr: routerItem[] = [
    // 首页
    {
        name: "Home",
        path: "/",
        component: () => import(/*wepackChunkName:"Home"*/"../views/Home/index.vue"),
        mate: {
            exact: true
        }
    },
    // 工作
    {
        name: "Works",
        path: "/works",
        component: () => import(/*wepackChunkName:"About"*/"../views/Works/index.vue"),
        mate: {
            exact: true,
        }
    },
    // 新闻
    {
        name: "News",
        path: "/news",
        component: () => import(/*wepackChunkName:"careers"*/"../views/News/index.vue"),
        mate: {
            exact: false,
        }
    },
    // 关于      
    {
        name: "About",
        path: "/about",
        component: () => import(/*wepackChunkName:"About"*/"../views/About/index.vue"),
        mate: {
            exact: false,
        }
    },

    // 接触
    {
        name: "Contact",
        path: "/contact",
        component: () => import(/*wepackChunkName:"About"*/"../views/Contact/index.vue"),
        mate: {
            exact: false
        }
    },
    // 职业
    {
        name: "Careers",
        path: "/careers",
        component: () => import(/*wepackChunkName:"careers"*/"../views/Careers/index.vue"),
        mate: {
            exact: true
        }
    },

]
export default routerArr;