import data from "./ghibli.js";

type url = string;

class Film {
    title: string;
    director: string;
    image: url;

    constructor(title: string, director: string, image: url) {
        this.title = title;
        this.director = director;
        this.image = image;
    }

    /** Render the film. */
    render(): HTMLElement {
        const article = document.createElement("article");
        const title = document.createElement("p");
        title.textContent = this.title;
        const director = document.createElement("p");
        director.textContent = this.director;
        const image = document.createElement("img");
        image.src = this.image;
        image.alt = `Poster for ${this.title}`;
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(director);
        return article;
    }
}

export default class Catalogue {
    static allFilms: Film[] = data.films;
    node: HTMLUListElement;
    currentFilms: Film[];

    constructor(films: Film[] = Catalogue.allFilms) {
        this.currentFilms = films;
    }

    /** Sort the catalogue in the given order. */
    sort(order: "descending" | "ascending"): Catalogue {
        this.currentFilms.sort((a, b) => {
            if (a.title < b.title) return order === "descending" ? 1 : -1;
            return order === "descending" ? -1 : 1;
        });
        return new Catalogue(this.currentFilms);
    }

    /** Return all directors from the catalogue. */
    static getDirectors(): string[] {
        const directors: Set<string> = new Set();
        Catalogue.allFilms.forEach((m) => directors.add(m.director));
        return [...directors];
    }

    /** Render the catalogue. */
    render(): HTMLUListElement {
        const ul = document.createElement("ul");
        for (const f of this.currentFilms) {
            const li = document.createElement("li");
            const film = new Film(f.title, f.director, f.image);
            const article = film.render();
            li.appendChild(article);
            ul.appendChild(li);
        }
        this.node = ul;
        return ul;
    }

    /** Filter the catalogue according to the given directors. */
    filter(directors: string[]): Catalogue {
        if (directors.length === 0) return this;
        this.currentFilms = this.currentFilms.filter((m) =>
            directors.includes(m.director),
        );
        return new Catalogue(this.currentFilms);
    }

    /** Filter the catalogue based on the given query. */
    search(query: string): Catalogue {
        this.currentFilms = this.currentFilms.filter(
            (m) => m.title.includes(query) || m.director.includes(query),
        );
        return new Catalogue(this.currentFilms);
    }
}
