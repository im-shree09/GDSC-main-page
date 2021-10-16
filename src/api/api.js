const API_KEY= "3a57580de530cfc1314897cf8d3a7015";

const api={
    // fetchTrending
    fetchMovies : `api/shows`,
    fetchLatestMovies : `/movie/latest?api_key=3a57580de530cfc1314897cf8d3a7015&language=en-US`
};
export default api;




export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: "Nilay",
        userId: "1",
        parentId: null,
        createdAt: "2021-10-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second comment",
        username: "Nilay",
        userId: "2",
        parentId: null,
        createdAt: "2021-10-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First comment first child",
        username: "Nilay",
        userId: "2",
        parentId: "1",
        createdAt: "2021-10-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "Nilay",
        userId: "2",
        parentId: "2",
        createdAt: "2021-10-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Nilay",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };
  