const mongoose = require("mongoose");
const moment = require("moment");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const forum1Id = mongoose.Types.ObjectId();
const forum2Id = mongoose.Types.ObjectId();
const forum3Id = mongoose.Types.ObjectId();
const topic1Id = mongoose.Types.ObjectId();

const post1Id = mongoose.Types.ObjectId();
const post1CreatedAt = moment().subtract(7, "days");

const post2Id = mongoose.Types.ObjectId();
const post2CreatedAt = moment(post1CreatedAt).add(1, "days");

const post3Id = mongoose.Types.ObjectId();
const post3CreatedAt = moment(post2CreatedAt).add(1, "days");

const post4Id = mongoose.Types.ObjectId();
const post4CreatedAt = moment(post3CreatedAt).add(1, "days");

const data = {
  users: [
    {
      _id: user1Id,
      avatar:
        "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png",
      email: "jess@gmail.com",
      name: "Jessica Rabbit",
      username: "Jess2020",
      info: "Hello I am Jess and I am a developer!",
      password: "test1234",
      role: "admin",
    },
    {
      _id: user2Id,
      avatar:
        "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png",
      email: "jenn@gmail.com",
      name: "Jennifer Parker",
      username: "Jenn2020",
      info: "Hello I am Test and I am a test!",
      password: "test1234",
    },
  ],
  portfolios: [
    {
      title: "Web developer at Google",
      company: "Google",
      companyWebsite: "www.google.com",
      location: "Mountain View, CA",
      jobTitle: "Web Developer",
      description: "Creating Angular applications....",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
      user: user1Id,
    },
    {
      title: "UX Engineer at Shopify",
      company: "Shopify",
      companyWebsite: "www.shopify.com",
      location: "Ottawa, ON, Canada",
      jobTitle: "UX Engineer",
      description: "Responsoble for creating Apollo/GraphQL apps",
      startDate: "01/01/2011",
      endDate: "01/01/2013",
      user: user1Id,
    },
    {
      title: "Software Engineer at Facebook",
      company: "Facebook",
      companyWebsite: "www.facebook.com",
      location: "Menlo Park, CA",
      jobTitle: "Software Engineer",
      description: "Creating React/Redux apps",
      startDate: "01/01/2010",
      endDate: "01/01/2011",
      user: user2Id,
    },
  ],
  forumCategories: [
    {
      _id: forum1Id,
      title: "Developer Discussion",
      subTitle: "Open any topic you want",
      slug: "general-discussion",
    },
    {
      _id: forum2Id,
      title: "Employer Challenges",
      subTitle: "Challenge winners get the job!",
      slug: "challenges",
    },
    {
      _id: forum3Id,
      title: "Work from home humor",
      subTitle: "Some funny WFH stuff",
      slug: "developer-jokes",
    },
  ],
  topics: [
    {
      _id: topic1Id,
      title: "How to learn JS",
      slug: "how-to-learn-js",
      content:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      forumCategory: forum1Id,
      user: user1Id,
    },
    {
      title: "How to learn JAVA",
      slug: "how-to-learn-java",
      content:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      forumCategory: forum1Id,
      user: user1Id,
    },
    {
      title: "How to learn C++",
      slug: "how-to-learn-c++",
      content:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      forumCategory: forum1Id,
      user: user1Id,
    },
  ],
  posts: [
    {
      _id: post1Id,
      content: "Hey there how are you ?",
      slug: "md43",
      fullSlug: post1CreatedAt.toISOString() + ":md43",
      topic: topic1Id,
      user: user1Id,
      createdAt: post1CreatedAt,
    },
    {
      _id: post2Id,
      content: "What do you think about this Python tutorial?",
      slug: "md59",
      fullSlug: post2CreatedAt.toISOString() + ":md59",
      topic: topic1Id,
      user: user2Id,
      createdAt: post2CreatedAt,
    },
    {
      _id: post3Id,
      content: "I think it's super helpful' (:",
      slug: "md59/md79",
      fullSlug:
        post2CreatedAt.toISOString() +
        ":md59" +
        "/" +
        post3CreatedAt.toISOString() +
        ":md79",
      topic: topic1Id,
      user: user1Id,
      parent: post2Id,
      createdAt: post3CreatedAt,
    },
    {
      _id: post4Id,
      content: "Good to hear that!",
      slug: "md59/md79/md89",
      fullSlug:
        post2CreatedAt.toISOString() +
        ":md59" +
        "/" +
        post3CreatedAt.toISOString() +
        ":md79" +
        "/" +
        post4CreatedAt.toISOString() +
        ":md89",
      topic: topic1Id,
      user: user2Id,
      parent: post3Id,
      createdAt: post4CreatedAt,
    },
  ],
};

module.exports = data;
