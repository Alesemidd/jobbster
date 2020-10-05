import { gql } from "apollo-boost";

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id
      daysOfExperience @client
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query Portfolios($pageNum: Int, $pageSize: Int) {
    portfolios(pageNum: $pageNum, pageSize: $pageSize) {
      portfolios {
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
      count
    }
  }
`;

export const GET__PORTFOLIOS_BYKEY = gql`
  query PortfoliosByKey($key: String) {
    portfoliosByKey(key: $key) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const GET_USERS_BYKEY = gql`
  query UsersByKey($key: String) {
    usersByKey(key: $key) {
      _id
      name
      jobtitle
      stack
    }
  }
`;

export const GET_USER_BYID = gql`
  query getUserById($ID: String) {
    userById(ID: $ID) {
      _id
      name
      jobtitle
      stack
      cv
      email
      phone
      linked
      avatar
    }
  }
`;

export const GET_USER_PORTFOLIOS = gql`
  query UserPortfolios {
    userPortfolios {
      _id
      company
      title
      description
      location
      jobTitle
      startDate
    }
  }
`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio(
    $title: String
    $company: String
    $companyWebsite: String
    $location: String
    $jobTitle: String
    $description: String
    $startDate: String
    $endDate: String
  ) {
    createPortfolio(
      input: {
        title: $title
        company: $company
        companyWebsite: $companyWebsite
        location: $location
        jobTitle: $jobTitle
        description: $description
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio(
    $id: ID
    $title: String
    $company: String
    $companyWebsite: String
    $location: String
    $jobTitle: String
    $description: String
    $startDate: String
    $endDate: String
  ) {
    updatePortfolio(
      id: $id
      input: {
        title: $title
        company: $company
        companyWebsite: $companyWebsite
        location: $location
        jobTitle: $jobTitle
        description: $description
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`;
export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id: ID) {
    deletePortfolio(id: $id)
  }
`;

export const DELETE_TOPIC = gql`
  mutation DeleteTopic($id: ID) {
    deleteTopic(id: $id)
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $role: String!
    $avatar: String
    $jobtitle: String
    $phone: String
    $stack: String
    $name: String
    $company: String
    $username: String!
    $linked: String
    $email: String!
    $password: String!
    $passwordConfirmation: String!
    $cv: String
  ) {
    signUp(
      input: {
        role: $role
        avatar: $avatar
        username: $username
        name: $name
        company: $company
        cv: $cv
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
        phone: $phone
        stack: $stack
        jobtitle: $jobtitle
        linked: $linked
      }
    )
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      username
      role
      avatar
    }
  }
`;

export const GET_USER = gql`
  query User {
    user {
      _id
      avatar
      name
      cv
      email
      username
      role
      jobtitle
      phone
      linked
      stack
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;

export const FORUM_CATEGORIES = gql`
  query ForumCategories {
    forumCategories {
      slug
      title
      subTitle
    }
  }
`;

const topicResponse = `
  _id
  slug
  title
  content
  user {
    username
    avatar
  }
  post {
    _id
  }
  forumCategory {
    _id
    title
    slug
  }
`;

export const TOPICS_BY_CATEGORY = gql`
  query TopicsByCategory($category: String) {
    topicsByCategory(category: $category) {
    ${topicResponse}
    }
  }
`;
export const TOPIC_BY_SLUG = gql`
  query TopicBySlug($slug: String) {
    topicBySlug(slug: $slug) {
      ${topicResponse}
    }
  }
`;

export const CREATE_TOPIC = gql`
  mutation CreateTopic(
    $title: String
    $content: String
    $forumCategory: String
  ) {
    createTopic(
      input: { title: $title, content: $content, forumCategory: $forumCategory }
    ) {
      ${topicResponse}
    }
  }
`;

const postResponse = `
  _id
  content
  slug
  createdAt
  user {
    username
    avatar
  }
  parent {
    content
    user {
      username
      avatar
    }
  }
`;

export const POSTS_BY_TOPIC = gql`
    query PostsByTopic($slug: String, $pageNum: Int, $pageSize: Int) {
      postsByTopic(slug: $slug, pageNum: $pageNum, pageSize: $pageSize) {
        posts {
          ${postResponse}
        }
        count
      }
    }
`;

export const CREATE_POST = gql`
  mutation CreatePost(
    $content: String
    $topic: String
    $parent: String
  ) {
    createPost(input: {
      content: $content
      topic: $topic
      parent: $parent
    }) {
      ${postResponse}
    }
  }
`;

export const GET_HIGHLIGHT = gql`
  query Highlight($limit: Int) {
    highlight(limit: $limit) {
      portfolios {
        _id
        title
        description
        jobTitle
        startDate
        endDate
      }
      topics {
        _id
        title
        content
        slug
        user {
          username
          avatar
        }
        createdAt
      }
    }
  }
`;
