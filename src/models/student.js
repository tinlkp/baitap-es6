import { Person } from "./person.js";

export class Student extends Person {
    constructor(type, hoTen, diaChi, id, email, toan, ly, hoa) {
        super(type, hoTen, diaChi, id, email);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;

    }
    tinhDTB = () => {
        this.dtb = (parseFloat(this.toan) +
            parseFloat(this.ly) +
            parseFloat(this.hoa)) /
            3;
    };

}