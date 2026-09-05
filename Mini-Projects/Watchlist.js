class Anime {
    constructor(id, name, year, status) {
        this.id = id;
        this.name = name
        this.year = year
        this.status = status
    }
    statusUpdate(newStatus) {
        this.status = newStatus
    }
}

class Movies {
    constructor(id, name, year, status) {
        this.id = id;
        this.name = name
        this.year = year
        this.status = status
    }
    statusUpdate(newStatus) {
        this.status = newStatus
    }
}

class Series {
    constructor(id, name, year, status) {
        this.id = id;
        this.name = name
        this.year = year
        this.status = status
    }
    statusUpdate(newStatus) {
        this.status = newStatus
    }
}

class Watchlist {
    constructor() {
        this.list = []
        this.nextId = 1

    }
    add(type, name, year, status) {
        if (type.toUpperCase() === 'ANIME'){
            const newAnime = new Anime(this.nextId++,name, year, status)
            this.list.push(newAnime)
            console.log(`${name} has been added to your list`)
        }
        if (type.toUpperCase() === 'MOVIE'){
            const newMovie = new Movies(this.nextId++,name, year, status)
            this.list.push(newMovie)
            console.log(`${name} has been added to your list`)
        }
        if (type.toUpperCase() === 'SERIE'){
            const newSerie = new Series(this.nextId++,name, year, status)
            this.list.push(newSerie)
            console.log(`${name} has been added to your list`)
        }
    } 
    all() {
        if (this.list.length == 0) {console.log('Your list is Empty')}
        else {
            console.table(this.list)
        }
    }
    delete(name) {
        const index = this.list.findIndex( item => item.name === name);
        if(index !== -1) {
           const removed = this.list.splice(index, 1)
           console.log(`${removed[0].name} successfully been deleted`)
        } else {
            console.log(`Couldn't find it on your list ${name}`)
        }
    }
    sortByName() {
        let list = this.list
        let tmp;

        for(let i = 0; i < list.length; i++) {
            for(let j  = i + 1; j < list.length; j++) {
                if (list[i].name.localeCompare(list[j].name) > 0) {
                    tmp = list[i]
                    list[i] = list[j]
                    list[j] = tmp
                }
            }
        }
        // console.table(list)
        return this;
    }

    sorByYear() {
        let list = this.list;
        let tmp;
        
        for(let i = 0; i < list.length; i++) {
            for(let j = i + 1; j < list.length; j++) {
                if (list[i].year > list[j].year) {
                    tmp = list[i]
                    list[i] = list[j]
                    list[j] = tmp
                }
            }
        }

        return this
    }

    sortByStatus() {
        let list = this.list;
        let tmp;
        
        for(let i = 0; i < list.length; i++) {
            for(let j = i + 1; j < list.length; j++) {
                if (list[i].status.localeCompare(list[j].status) > 0) {
                    tmp = list[i]
                    list[i] = list[j]
                    list[j] = tmp
                }
            }
        }
        return this;
    }
}

const myWatchlist = new Watchlist

myWatchlist.add('anime', 'One piece', 1999, 'Watched')
myWatchlist.add('anime', 'RE:ZERO', 2016, 'Dropped')
myWatchlist.add('serie', 'Peaky Blindes', 2018, 'Watched')
myWatchlist.add('serie', 'Dark', 2017, 'Watched')
myWatchlist.add('movie', 'Joker', 2018, 'Planned')
myWatchlist.all()
myWatchlist.sortByName().all()
myWatchlist.sorByYear().all()
myWatchlist.sortByStatus().all()


// Search for sorting algorithm and how to implement them inside of a class : Done
// leaarn Binary search and how to implement inside of a class object