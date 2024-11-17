import { Institution } from "./institution.model";

export class Author {
    id: number;
    name: string;

    institution: Institution;

    constructor (id: number, name: string, institution: Institution) {
        this.id = id;
        this.name = name;
        this.institution = institution;
    }
}