import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  GET_PORTFOLIOS,
  GET_PORTFOLIO,
  GET_USER_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO,
  SIGN_IN,
  SIGN_OUT,
  GET_USER,
  FORUM_CATEGORIES,
  TOPICS_BY_CATEGORY,
  CREATE_TOPIC,
  TOPIC_BY_SLUG,
  POSTS_BY_TOPIC,
  CREATE_POST,
  GET_HIGHLIGHT,
  DELETE_TOPIC,
  GET__PORTFOLIOS_BYKEY,
  GET_USERS_BYKEY,
  GET_USER_BYID,
} from "@/apollo/queries";

export const useGetUserById = (options) => useQuery(GET_USER_BYID, options);
export const useGetUsersByKey = (options) => useQuery(GET_USERS_BYKEY, options);
export const useGetPortfoliosByKey = (options) =>
  useQuery(GET__PORTFOLIOS_BYKEY, options);
export const useGetHighlight = (options) => useQuery(GET_HIGHLIGHT, options);
export const useGetPortfolios = (options) => useQuery(GET_PORTFOLIOS, options);
export const useGetPortfolio = (options) => useQuery(GET_PORTFOLIO, options);
export const useGetUserPortfolios = () => useQuery(GET_USER_PORTFOLIOS);
export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO);
export const useDeleteTopic = () => useMutation(DELETE_TOPIC);

export const useDeletePortfolio = () =>
  useMutation(DELETE_PORTFOLIO, {
    update(cache, { data: { deletePortfolio } }) {
      const { userPortfolios } = cache.readQuery({
        query: GET_USER_PORTFOLIOS,
      });
      const newPortfolios = userPortfolios.filter(
        (p) => p._id !== deletePortfolio
      );
      cache.writeQuery({
        query: GET_USER_PORTFOLIOS,
        data: { userPortfolios: newPortfolios },
      });
    },
  });
export const useCreatePortfolio = () =>
  useMutation(CREATE_PORTFOLIO, {
    update(cache, { data: { createPortfolio } }) {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    },
  });

export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });
export const useSignOut = () => useMutation(SIGN_OUT);
export const useLazyGetUser = () => useLazyQuery(GET_USER);
export const useGetUser = () => useQuery(GET_USER);

export const useGetForumCategories = () => useQuery(FORUM_CATEGORIES);

export const useGetTopicsByCategory = (options) =>
  useQuery(TOPICS_BY_CATEGORY, options);

export const useGetTopicBySlug = (options) => useQuery(TOPIC_BY_SLUG, options);

export const useCreateTopic = () =>
  useMutation(CREATE_TOPIC, {
    update(cache, { data: { createTopic } }) {
      try {
        const { topicsByCategory } = cache.readQuery({
          query: TOPICS_BY_CATEGORY,
          variables: {
            category: createTopic.forumCategory.slug,
          },
        });
        cache.writeQuery({
          query: TOPICS_BY_CATEGORY,
          data: { topicsByCategory: [...topicsByCategory, createTopic] },
          variables: {
            category: createTopic.forumCategory.slug,
          },
        });
      } catch (e) {}
    },
  });
export const useGetPostsByTopic = (options) =>
  useQuery(POSTS_BY_TOPIC, options);

export const useCreatePost = () =>
  useMutation(CREATE_POST, {
    update(cache) {
      try {
        Object.keys(cache.data.data).forEach((key) => {
          key.match(/^Post/) && cache.data.delete(key);
        });
      } catch (e) {}
    },
  });
