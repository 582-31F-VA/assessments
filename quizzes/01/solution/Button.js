export class Button {
    constructor(label, color, callback) {
        this.label = label;
        this.color = color;
        this.callback = callback;
    }

    /**
     * Render the button.
     * @returns {HTMLButtonElement}
     */
    render() {
        const button = document.createElement("button");
        button.textContent = this.label;
        button.style.backgroundColor = this.color;
        button.addEventListener("click", this.callback);
        return button;
    }
}

export class CancelButton extends Button {
    constructor(label) {
        super("Cancel", "red", this.callback);
    }

    /**
     * Print "Cancelled" in the console.
     */
    callback() {
        console.log("Cancelled");
    }
}
