import axios from "axios";

export default {
    
  fetchBooks: function(value) {
    return axios.get("/google", { params: {q: value} });
  },
  
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  saveBook: function(input_data) {
    return axios.post("/api/books", input_data);
  }
  
};