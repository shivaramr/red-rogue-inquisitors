const fetchFnActionCreator = (payload) => {
  const { status } = payload || {};
  if (status) {
    return {
      type: "FETCH_LINE_NAME",
      payload,
    };
  }
  return { type: "FETCH_LINE_NAME", payload: null };
};

//   export const getPLStandings = ({ dispatch, body }) => {
export const getPLStandings = () => {
  // fetchFN is the fetch API function
  fetch("https://livescore-api.com/api-client/competitions/standings.json?competition_id=2&key=demo_key&secret=demo_secret", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      [process.env.REACT_APP_API_KEY]: process.env.REACT_APP_API_VALUE,
      Authorization: process.env.REACT_APP_API_VALUE,
    },
  }).then((response) => {
    console.log(response);
    if (response.status !== 200) throw new Error("Server responds with error");
    return response.json();
  });
  //   .then((resultJson) => {
  //     dispatch(fetchFnActionCreator(resultJson));
  //   });
};
