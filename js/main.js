function main() {
    const apiManager = new ApiManager({ baseUrl: "http://localhost:3000" });
    const viewManager = new View(document);

    window.addEventListener('load', function () {
        apiManager.getSites({})
            .then(function (res) {
                viewManager.cleanView();
                viewManager.showResult(res.data);
            })
            .catch(function (err) {
                console.error(err);
                viewManager.showError("No se pudieron cargar los datos del directorio. Por favor, intente de nuevo más tarde.");
            });
    });
}

// Only auto-execute in production (not in test runner)
if (typeof mocha === 'undefined') {
    main();
}
