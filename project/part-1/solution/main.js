import Catalogue from "./Catalogue.js";
function appendFilters(fieldset) {
    const directors = Catalogue.getDirectors();
    directors.forEach((directorName) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = directorName;
        label.appendChild(input);
        const labelText = document.createTextNode(directorName);
        label.appendChild(labelText);
        fieldset.appendChild(label);
    });
}
function sort(catalogue, form) {
    const select = form.querySelector("[name=sort]");
    const order = select.value;
    if (order !== "ascending" && order !== "descending") {
        throw new Error("The value of order must be either 'ascending' or 'descending'.");
    }
    return catalogue.sort(order);
}
function filter(catalogue, form) {
    const selectedDirectorNodes = form.querySelectorAll("input:checked");
    const selectedDirectors = [];
    selectedDirectorNodes.forEach((n) => selectedDirectors.push(n.value));
    return catalogue.filter(selectedDirectors);
}
function search(catalogue, form) {
    const input = form.querySelector("input[type=search]");
    const query = input.value;
    return catalogue.search(query);
}
function changeView(main) {
    return (e) => {
        const select = e.currentTarget;
        const view = select.value;
        if (view !== "grid" && view !== "list") {
            throw new Error("View value must be either 'grid' or 'list'.");
        }
        addViewClass(view, main);
    };
}
function addViewClass(view, main) {
    const currentView = view === "grid" ? "list" : "grid";
    main.classList.remove(currentView);
    main.classList.add(view);
}
function apply(form, updateCatalogueNode) {
    return (e) => {
        e.preventDefault();
        let catalogue = new Catalogue();
        catalogue = sort(catalogue, form);
        catalogue = filter(catalogue, form);
        catalogue = search(catalogue, form);
        const newCatalogueNode = catalogue.render();
        updateCatalogueNode(newCatalogueNode);
    };
}
function main() {
    const form = document.body.querySelector("form#query");
    const filterFieldset = form.querySelector("#filter");
    const applyButton = form.querySelector("button");
    const viewSelect = document.querySelector("#view select");
    const main = document.body.querySelector("main");
    addViewClass("grid", main);
    viewSelect.addEventListener("change", changeView(main));
    let catalogue = new Catalogue();
    catalogue = catalogue.sort("ascending");
    let catalogueNode = catalogue.render();
    main.appendChild(catalogueNode);
    function updateCatalogueNode(newNode) {
        catalogueNode.replaceWith(newNode);
        catalogueNode = newNode;
    }
    applyButton.addEventListener("click", apply(form, updateCatalogueNode));
    appendFilters(filterFieldset);
}
main();
