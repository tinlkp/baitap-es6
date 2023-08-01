import { Person } from "./person.js";

export class Employee extends Person {
    constructor(type,hoTen, diaChi, id, email, ngayLam, luongNgay) {
        super(type,hoTen, diaChi, id, email);
        this.ngayLam = ngayLam;
        this.luongNgay = luongNgay;
    }
    tinhLuong = () => {
        this.tongLuong = this.ngayLam * this.luongNgay;
    }

}