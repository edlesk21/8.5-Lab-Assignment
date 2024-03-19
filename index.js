// Add JavaScript below
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"

const supabaseUrl = 'https://ptagzouxflldprbgmtrg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0YWd6b3V4ZmxsZHByYmdtdHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MDEyNjIsImV4cCI6MjAyNjM3NzI2Mn0.mj6es7_vDdoAl7GWkiGrLJBmqtNRJiEmxam4-5WTKlo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
    let { data: books, error } = await supabase
    .from('books')
    .select('*')
    
    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.ISBN}</li>`;
      }
}

  getBooks();