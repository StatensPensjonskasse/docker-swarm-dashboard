package main

import (
	"log"
	"net/http"
	"os"

	"github.com/docker/docker/client"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	log.Println("Starting Docker Swarm Dashboard...")
	router := mux.NewRouter().StrictSlash(true)

	// CORS Headers
	// https://stackoverflow.com/questions/40985920/making-golang-gorilla-cors-handler-work
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	router.HandleFunc("/docker/services", dockerServicesHandler)
	// router.HandleFunc("/docker/services/{id}", dockerServiceDetailsHandler)
	router.HandleFunc("/docker/nodes", dockerNodesHandler)
	router.HandleFunc("/docker/tasks", dockerTasksHandler)
	router.HandleFunc("/docker/logs/{id}", dockerServiceLogsHandler)
	router.HandleFunc("/ui/dashboardh", dashboardHHandler)
	router.HandleFunc("/ui/dashboardv", dashboardVHandler)
	router.HandleFunc("/ui/stacks", stacksHandler)
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("build/"))))
	log.Println("Ready! Wating for connections...")

	corsRouter := handlers.CORS(headersOk, originsOk, methodsOk)(router)
	loggedRouter := handlers.LoggingHandler(os.Stdout, corsRouter)
	log.Fatal(http.ListenAndServe(":8080", handlers.CompressHandler(loggedRouter)))

}

// Creates a client
func getCli() *client.Client {
	cli, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		panic(err)
	}
	return cli
}