import { Divider } from '@material-ui/core'
import React from 'react'
import { Jh_BlogFrame } from '../../components/Jh_BlogFrame/Jh_BlogFrame'
import { Jh_Pagination } from '../../components/Jh_Pagination'
import { LargePostCard } from './components/LargePostCard'
const posts = [
    {
        date: 'November 23, 2017',
        description: 'Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.',
        image:"https://creativelayers.net/themes/jobhunt-html/images/resource/bl1.jpg",
        numberOfComments:4,
        title:"11 Tips to Help You Get New Clients Through Cold Calling"
    },
    {
        date: 'November 23, 2017',
        description: 'Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.',
        image:"https://creativelayers.net/themes/jobhunt-html/images/resource/bl2.jpg",
        numberOfComments:4,
        title:"Do you have a job that the average person doesn’t even know exists?"
    },    {
        date: 'November 23, 2017',
        description: 'Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.',
        image:"https://creativelayers.net/themes/jobhunt-html/images/resource/bl3.jpg",
        numberOfComments:4,
        title:"DigitalOcean launches first Canadian data centre in Toronto"
    },    {
        date: 'November 23, 2017',
        description: 'Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.',
        image:"https://creativelayers.net/themes/jobhunt-html/images/resource/bl4.jpg",
        numberOfComments:4,
        title:"Canada’s six biggest banks earned a combined $9.2 billion in Q3"
    },    {
        date: 'November 23, 2017',
        description: 'Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.',
        image:"https://farm4.static.flickr.com/3563/3486756814_08ebc50268_z.jpg",
        numberOfComments:4,
        title:"Using Banner Stands To Increase Trade Show  Traffic"
    },

]


 const BlogList = () => {
    return (
        <Jh_BlogFrame>
      {posts.map((post,index,posts)=>(
          <>
          <LargePostCard 
          date={post.date}
          description={post.description}
          image={post.image}
          numberOfComments={post.numberOfComments}
          title={post.title}
          />
              <Divider light/>
          </>
      ))}
      <Jh_Pagination pages={10}/>
        </Jh_BlogFrame>
    )
}
export default BlogList