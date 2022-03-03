import React from 'react'

const About = ( {posts} ) => {
    return (
        <section>
            <ul>
            { posts.map(post => {
                return (
                <li key={post.id}>{post.title}</li>
                )
            }) }
            </ul>
        </section>
    )
}

export const getServerSideProps = async (context) => {
    console.log(context);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {props :  {posts : data}};
}

export default About