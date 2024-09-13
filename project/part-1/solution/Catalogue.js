import data from "./ghibli.js";
class Film {
    title;
    director;
    image;
    constructor(title, director, image) {
        this.title = title;
        this.director = director;
        this.image = image;
    }
    render() {
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
    static allFilms = data.films;
    currentFilms;
    constructor(films = Catalogue.allFilms) {
        this.currentFilms = films;
    }
    sort(order) {
        this.currentFilms.sort((a, b) => {
            if (a.title < b.title)
                return order === "descending" ? 1 : -1;
            return order === "descending" ? -1 : 1;
        });
        return new Catalogue(this.currentFilms);
    }
    static getDirectors() {
        const directors = new Set();
        Catalogue.allFilms.forEach((m) => directors.add(m.director));
        return [...directors];
    }
    render() {
        const ul = document.createElement("ul");
        for (const f of this.currentFilms) {
            const li = document.createElement("li");
            const film = new Film(f.title, f.director, f.image);
            const article = film.render();
            li.appendChild(article);
            ul.appendChild(li);
        }
        return ul;
    }
    filter(directors) {
        if (directors.length === 0)
            return this;
        this.currentFilms = this.currentFilms.filter((m) => directors.includes(m.director));
        return new Catalogue(this.currentFilms);
    }
    search(query) {
        this.currentFilms = this.currentFilms.filter((m) => m.title.includes(query) || m.director.includes(query));
        return new Catalogue(this.currentFilms);
    }
}
