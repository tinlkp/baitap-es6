export class PersonService {
    listPerson = [];

    add = (data) => {
        this.listPerson = [...this.listPerson, data];
    };
    delete = (id) => {
        const index = this.listPerson.findIndex((element) => {

            return element.id === id;
        });
        this.listPerson.splice(index, 1);
    };
    findById = (id) => {
        return this.listPerson.find((element) => {
            return element.id === id;
        });
    };
    update(object) {
        const index = this.listPerson.findIndex((element) => {
            return element.id === object.id;
        });
        this.listPerson[index] = object;
    }
}