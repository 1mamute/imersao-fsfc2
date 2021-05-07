package main

import (
	"fmt"
	"net/http"
	"text/template"

	"github.com/gorilla/mux"
)

func Index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseGlob("templates/index.html"))
	t.Execute(w, t)
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", Index)
	fmt.Println("Starting webserver on http://localhost:8000")
	http.ListenAndServe(":8000", r)
}
