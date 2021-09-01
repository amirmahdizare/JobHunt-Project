import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_ContentHeader } from '../Jh_ContentHeader'
import { Jh_SideBarMenu } from '../Jh_SideBarMenu'
import { RecentPosts } from './components/RecentPosts.js/RecentPosts'
import { SearchKeywordBlog } from './components/SearchKeywordBlog'
import { OurPhoto } from './components/OurPhoto'
import { Tags } from './components/Tags'
export const Jh_BlogFrame = (props) => {
    return (

        <Box>
            <Jh_ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Blog" />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={9}>
                    {props.children}

                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SearchKeywordBlog />
                        <Jh_SideBarMenu
                            title="Categories"
                            items={[
                                { name: 'Education', href: '#' },
                                { name: 'Information', href: '#' },
                                { name: 'Jobs', href: '#' },
                                { name: 'Learn', href: '#' },
                                { name: 'Skill', href: '#' }
                            ]} />
                        <RecentPosts />
                        <Jh_SideBarMenu
                            title="Archives"
                            items={[
                                { name: 'April 2017', href: '#' },
                                { name: 'March 2016', href: '#' },
                                { name: 'Fabruary 2015', href: '#' },
                                { name: 'July 2013', href: '#' },

                            ]} />
                        <Jh_SideBarMenu
                            title="Meta"
                            items={[
                                { name: 'Log in', href: '#' },
                                { name: 'Entries RSS', href: '#' },
                                { name: 'Comments RSS', href: '#' },
                                { name: 'WordPress.org', href: '#' },

                            ]} />
                            <OurPhoto/>
                            <Tags
                            tags={['Adwords','Sales','Travel','Our Blog','Trade','Traffic']}
                            />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}
