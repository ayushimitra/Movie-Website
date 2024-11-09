import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjQ5YWQxNGZmMmUwOGJkZDEwM2I3MmRkZjc2MjI1ZiIsIm5iZiI6MTczMTA4OTEzMi40OTE3NjcsInN1YiI6IjY2ZGEyYjBmMDhhMmRjZjY4Y2JmZTMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UH2j5F0TeXb_RE1iM5lkkehrLt1NRtgqhv8-Z3TiZlY'
     },
});
export default instance;