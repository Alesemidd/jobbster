const portfolioFields = ` title: String,
company: String,
companyWebsite: String,
location: String,
jobTitle: String,
daysOfExperience: Int,
isCurrentlyEmployed: Boolean
description: String,
startDate: String,
endDate: String`;

exports.portfolioTypes = `

type Portfolio {
  _id: ID,
 ${portfolioFields}

}

type PagPortfolios {
  portfolios: [Portfolio]
  count: Int
}

input PortfolioInput {
    ${portfolioFields}
  }


`;

exports.userTypes = `
type User {
  _id: ID,
  jobtitle: String
  avatar: String
  username: String
  name: String
  email: String
  role: String
  cv: String
  techstack: String
  company: String
  phone: String
  linked: String
  stack: String
}

  input SignUpInput {
    role: String!
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
    cv: String
    jobtitle: String
    company: String
    phone: String
    linked: String
    stack: String
  }
  
  input SignInInput {    
    email: String!
    password: String!
  }
`;

exports.forumTypes = `
  type ForumCategory {
    _id: ID
    title: String
    subTitle: String
    slug: String
  }

  type Author {
    avatar: String
    username: String
  }
  type Topic {
    _id: ID
    slug: String
    title: String
    content: String
    forumCategory: ForumCategory
    user: Author
    createdAt: String
    post: Post
  }

  input TopicInput {
    title: String
    content: String
    forumCategory: String
  }

  type Post {
    _id: ID
    content: String
    slug: String
    fullSlug: String
    topic: Topic
    user: User
    parent: Post
    createdAt: String
  }

  type PagPosts {
    posts: [Post]
    count: Int
  }

  input PostInput {
    content: String
    parent: String
    topic: String
  }

  type HighlightRes {
    portfolios: [Portfolio]
    topics: [Topic]
  }
`;
