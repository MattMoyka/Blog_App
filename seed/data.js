import db from "../db/connection.js";


import post from "../models/post.js";

const insertData = async () => {
  await db.dropDatabase();

  const posts = [
    {
      title: 'first post',
      description: "this is the first post of the blog"
    },
    {
      title: 'second post',
      description: "this is the second post of the blog"
    },
    {
      title: 'third post',
      description: "this is the third post of the blog"
    },
    {
      title: 'fourth post',
      description: "this is the fourth post of the blog"
    },
    {
      title: 'fifth post',
      description: "this is the fifth post of the blog"
    },
    {
      title: 'sixth post',
      description: "this is the sixth post of the blog"
    }
  ]

  await post.insertMany(posts)
  console.log(posts.length + "posts created!")
  db.close()
}

insertData();
