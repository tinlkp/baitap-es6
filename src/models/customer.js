import { Person } from "./person.js";

export class Customer extends Person {
    constructor (type,hoTen,diaChi,id,email,tenCongTy,triGiaHoaDon,danhGia){
        super(type,hoTen,diaChi,id,email);
        this.tenCongTy=tenCongTy;
        this.triGiaHoaDon=triGiaHoaDon;
        this.danhGia=danhGia;
    }
}