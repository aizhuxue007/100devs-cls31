class Human {
    constructor(name, height) {
        this._name = name
        this._height = height
    }

    speak(utterance) {
        return `${this._name} says: "${utterance}"`
    }

    walk(direction) {
        return `walk 1 ft ${direction}.`
    }

    get name() {
        return this._name
    }

    get height() {
        return this._height
    }
}

class Asian extends Human {
    constructor(name, height, grade) {
        super(name, height)
        this._grade = grade
    }

    study() {
        return 'Studying = A+'
    }

    eatRice() {
        return `eating rice`
    }

    get grade() {
        return this._grade
    }
}