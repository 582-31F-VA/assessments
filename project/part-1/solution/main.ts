import Catalogue from "./Catalogue.js";

/** Append filter criteria to the filter fieldset. */
function appendFilters(): void {
    const filterFieldset = document.querySelector(
        "#filter",
    )! as HTMLFieldSetElement;
    const directors = Catalogue.getDirectors();
    directors.forEach((directorName: string) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = directorName;
        label.appendChild(input);
        const labelText = document.createTextNode(directorName);
        label.appendChild(labelText);
        filterFieldset.appendChild(label);
    });
}

/** Handle sorting query from the given form. */
function sort(catalogue: Catalogue, form: HTMLFormElement): Catalogue {
    const select = form.querySelector("[name=sort]") as HTMLSelectElement;
    const order = select.value;
    if (order !== "ascending" && order !== "descending") {
        throw new Error(
            "The value of order must be either 'ascending' or 'descending'.",
        );
    }
    return catalogue.sort(order);
}

/** Handle filter query from the given form. */
function filter(catalogue: Catalogue, form: HTMLFormElement): Catalogue {
    const selectedDirectorNodes = form.querySelectorAll(
        "input:checked",
    ) as NodeListOf<HTMLInputElement>;
    const selectedDirectors: string[] = [];
    selectedDirectorNodes.forEach((n) => selectedDirectors.push(n.value));
    return catalogue.filter(selectedDirectors);
}

/** Handle search query from the given form. */
function search(catalogue: Catalogue, form: HTMLFormElement): Catalogue {
    const input = form.querySelector("input[type=search]") as HTMLInputElement;
    const query = input.value;
    return catalogue.search(query);
}

/** Change view between grid and list. */
function changeView(main: HTMLElement): (e: Event) => void {
    return (e: Event) => {
        const select = e.currentTarget as HTMLSelectElement;
        const view = select.value;
        if (view !== "grid" && view !== "list") {
            throw new Error("View value must be either 'grid' or 'list'.");
        }
        addViewClass(view, main);
    };
}

/** Add or remove the class for the view on the given <main>. */
function addViewClass(view: "grid" | "list", main: HTMLElement): void {
    const currentView = view === "grid" ? "list" : "grid";
    main.classList.remove(currentView);
    main.classList.add(view);
}

/** Apply the filter, search and sort criteria, and update the catalogue. */
function apply(
    form: HTMLFormElement,
    updateCatalogue: (newCatalogue: Catalogue) => void,
): (e: Event) => void {
    return (e) => {
        e.preventDefault();
        let catalogue = new Catalogue();
        catalogue = sort(catalogue, form);
        catalogue = filter(catalogue, form);
        catalogue = search(catalogue, form);
        updateCatalogue(catalogue);
    };
}

/** Initialize the catalogue, and add it to the given <main>. */
function initCatalogue(main: HTMLElement): Catalogue {
    addViewClass("grid", main);
    let catalogue = new Catalogue();
    catalogue = catalogue.sort("ascending");
    main.appendChild(catalogue.render());
    return catalogue;
}

/** Add event listerners to the form. */
function addEventListeners(
    main: HTMLElement,
    updateCatalogue: (newCatalogue: Catalogue) => void,
): void {
    const form = document.body.querySelector("form#query") as HTMLFormElement;
    const viewSelect = document.querySelector(
        "#view select",
    ) as HTMLSelectElement;
    viewSelect.addEventListener("change", changeView(main));
    const applyButton: HTMLButtonElement = form.querySelector("button")!;
    applyButton.addEventListener("click", apply(form, updateCatalogue));
}

function main() {
    const main = document.body.querySelector("main") as HTMLElement;
    let catalogue = initCatalogue(main);

    function updateCatalogue(newCatalogue: Catalogue): void {
        catalogue.node.replaceWith(newCatalogue.render());
        catalogue = newCatalogue;
    }

    addEventListeners(main, updateCatalogue);
    appendFilters();
}

main();
