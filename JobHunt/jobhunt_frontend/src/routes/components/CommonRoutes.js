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
    { path: "/pricing", pageName: 'Pricing' },
    { path: "/jobs", pageName: 'JobList' },
    { path: "/job/:jobId/:companyId", pageName: 'JobSingle' },
    { path: "/policies", pageName: 'Policies' },

]
export {CommonRoutes}