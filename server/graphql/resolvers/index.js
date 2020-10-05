const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: "Job in Netcentric",
      company: "Netcentric",
      companyWebsite: "www.google.com",
      location: "Spain, Barcelona",
      jobTitle: "Engineer",
      description: "Doing something, programing....",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
    },
    {
      _id: "da789ad1",
      title: "Job in Siemens",
      company: "Siemens",
      companyWebsite: "www.google.com",
      location: "Slovakia, Kosice",
      jobTitle: "Software Engineer",
      description: "Responsoble for parsing framework for JSON medical data.",
      startDate: "01/01/2011",
      endDate: "01/01/2013",
    },
    {
      _id: "sadcxv9",
      title: "Work in USA",
      company: "Facebook",
      companyWebsite: "www.google.com",
      location: "USA, Montana",
      jobTitle: "Housekeeping",
      description: "So much responsibility....Overloaaaaaad",
      startDate: "01/01/2010",
      endDate: "01/01/2011",
    },
  ],
};

exports.mixedQueries = {
  highlight: async (root, { limit = 3 }, ctx) => {
    const portfolios = await ctx.models.Portfolio.getLatest(limit);
    const topics = await ctx.models.Topic.getLatest(limit);
    return {
      portfolios,
      topics,
    };
  },
};

exports.portfolioQueries = {
  portfolio: (root, { id }, ctx) => {
    return ctx.models.Portfolio.getById(id);
  },
  portfolios: (root, { ...pagination }, ctx) => {
    return ctx.models.Portfolio.getAll({ ...pagination });
  },
  userPortfolios: (root, args, ctx) => {
    return ctx.models.Portfolio.getAllByUser();
  },
  portfoliosByKey: (root, { key }, ctx) => {
    return ctx.models.Portfolio.getAllByKey(key);
  },
};

exports.portfolioMutations = {
  createPortfolio: async (root, { input }, ctx) => {
    const createdPortfolio = await ctx.models.Portfolio.create(input);
    return createdPortfolio;
  },
  updatePortfolio: async (root, { id, input }, ctx) => {
    const updatedPortfolio = await ctx.models.Portfolio.findAndUpdate(
      id,
      input
    );
    return updatedPortfolio;
  },
  deletePortfolio: async (root, { id }, ctx) => {
    const deletedPortfolio = await ctx.models.Portfolio.findAndDelete(id);
    return deletedPortfolio._id;
  },
};

exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
  usersByKey: (root, { key }, ctx) => {
    return ctx.models.User.getAllByKey(key);
  },
  userById: (root, { ID }, ctx) => {
    return ctx.models.User.getById(ID);
  },
};

exports.userMutations = {
  signUp: async (root, { input }, ctx) => {
    const registredUser = await ctx.models.User.signUp(input);
    return registredUser._id;
  },

  // uploadImage: async (parent, { filename }, ctx) => {

  //   const avatar = await cloudinary.v2.uploader.upload(filename);
  //await models.User.update({photo:})

  // }

  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },

  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};

exports.forumQueries = {
  forumCategories: (root, args, ctx) => {
    return ctx.models.ForumCategory.getAll();
  },
  topicsByCategory: async (root, { category }, ctx) => {
    const forumCategory = await ctx.models.ForumCategory.getBySlug(category);
    if (!forumCategory) {
      return null;
    }

    return ctx.models.Topic.getAllByCategory(forumCategory._id);
  },
  topicBySlug: (root, { slug }, ctx) => {
    return ctx.models.Topic.getBySlug(slug);
  },
  postsByTopic: async (root, { slug, ...pagination }, ctx) => {
    const topic = await ctx.models.Topic.getBySlug(slug);
    return ctx.models.Post.getAllByTopic({ topic, ...pagination });
  },
};

exports.forumMutations = {
  createTopic: async (root, { input }, ctx) => {
    const category = await ctx.models.ForumCategory.getBySlug(
      input.forumCategory
    );
    input.forumCategory = category._id;
    const topic = await ctx.models.Topic.create(input);
    return topic;
  },

  deleteTopic: async (root, { id }, ctx) => {
    const deletedTopic = await ctx.models.Topic.findAndDelete(id);
    return deletedTopic._id;
  },

  createPost: async (root, { input }, ctx) => {
    const post = await ctx.models.Post.create(input);
    return post;
  },
};
