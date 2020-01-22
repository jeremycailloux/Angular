import { Song } from './Song';

export class Album {
    public id: number;
    
    public name: string;
    public author: string;
    public grade: number;
    public songs: Song[];
    public src: string;
    public lastModified: Date;

    constructor(id: number, name: string, author: string, grade: number, songs: Song[], src: string) {
        this.id = id;

        this.name = name;
        this.author = author;
        this.grade = grade;
        this.songs = songs;
        this.src = src;
        this.lastModified = new Date();
    }
}

