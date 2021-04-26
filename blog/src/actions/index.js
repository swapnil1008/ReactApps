import jsonplaceholder from "../apis/JSONPlaceholder";
import _ from "lodash";

export const fetchPostsandUsers = () => {
  return async (dispatch, getState) => {
    console.log("fetching posts...");
    await dispatch(fetchPosts());
    console.log(getState().posts);
    console.log("fetched posts!");
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    console.log(userIds);
    userIds.forEach((id) => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

/*_.memoize
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
*/
