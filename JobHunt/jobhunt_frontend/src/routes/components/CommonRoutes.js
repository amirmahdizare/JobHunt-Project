const CommonRoutes = [
    {path:'/',redirectTo:'/home'},
    {path:'/home',pageName:'HomePage'},
    {path:'/aboutus',pageName:'AboutUs'},
    {path:'/bloglist',pageName:'BlogList'},
    {path:'/blog/:id',pageName:'BlogSingle'},
    {path:'/contactus',pageName:'ContactUs'},
    {path:'/faq',pageName:'FAQ'},
    {path:'/terms',pageName:'Terms'},
    {path:'/howitworks',pageName:'HowItWorks'},
    { path: "/signup", pageName: 'SignupPage' },
]
export {CommonRoutes}