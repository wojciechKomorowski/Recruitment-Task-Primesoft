class Shape {
    constructor(name) {
        this.name = name;
        this.text = '';
    }
}

class Square extends Shape {
    constructor(name, text) {
        super(name, text)
    }
}


class Circle extends Shape {
    constructor(name, text) {
        super(name, text)
    }
}

class Star extends Shape {
    constructor(name, text) {
        super(name, text)
    }
}

export { Square, Circle, Star };

