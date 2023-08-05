import { Student } from "../models/student.js";
import { Employee } from "../models/employee.js";
import { Customer } from "../models/customer.js";
import { PersonService } from "../models/listPerson.js";


const getEle = (id) => document.getElementById(id);
const personService = new PersonService();
let validation = new Validation();

getEle("ModalHS").onclick = () => {
    getEle("header-title").innerHTML = "Thêm Học Sinh";
    getEle("btnStudent").disabled = false;
    getEle("BtnUpdateSt").disabled = true;
    getEle("idHS").disabled = false;
}
getEle("ModalGV").onclick = () => {
    getEle("header-title-2").innerHTML = "Thêm Giảng Viên";
    getEle("btnEmployee").disabled = false;
    getEle("BtnUpdateEp").disabled = true;
    getEle("idGV").disabled = false;
}
getEle("ModalKH").onclick = () => {
    getEle("header-title-3").innerHTML = "Thêm Khách Hàng";
    getEle("btnCustomer").disabled = false;
    getEle("BtnUpdateKH").disabled = true;
    getEle("idKH").disabled = false;
}



const getValueStudent = (isAdd) => {
    const type = getEle("typeHcS").value;
    const hoTen = getEle("hoTenHS").value;
    const diaChi = getEle("diaChiHS").value;
    const id = getEle("idHS").value;
    const email = getEle("emailHS").value;
    const toan = getEle("diemToan").value;
    const ly = getEle("diemLy").value;
    const hoa = getEle("diemHoa").value;

    let isValid = true;
    if (isAdd) {
        isValid &= validation.kiemTraRong(id, "tBIdHS", "Vui lòng điền mã số !!!")
            && validation.check(id, "tBIdHS", "Vui lòng số mã !!!", /^[0-9]+$/)
            && validation.kiemTraTrung(id, "tBIdHS", "mã số đã tồn tại !!!", personService.listPerson);

    }
    isValid &= validation.kiemTraRong(hoTen, "tBHTHS", "Vui lòng điền họ tên !!!")
        && validation.check(hoTen, "tBHTHS", "Vui lòng điền họ tên !!!", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

    isValid &= validation.kiemTraRong(diaChi, "tBDCHS", "Vui lòng điền địa chỉ !!!");

    isValid &= validation.kiemTraRong(email, "tBEHS", "Vui lòng điền email !!!")
        && validation.check(email, "tBEHS", "Vui lòng điền đúng định dạng email !!!", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    isValid &= validation.kiemTraRong(toan, "tBDTHS", "Vui lòng điền điểm toán !!!")
        && validation.check(toan, "tBDTHS", "Vui lòng điền số điểm toán !!!", /^[0-9]+$/)
        && validation.kiemTraFromTo(toan, "tBDTHS", "Nhập số từ 1 đến 10 !!!", 1, 10);


    isValid &= validation.kiemTraRong(ly, "tBDLHS", "Vui lòng điền điểm lý !!!")
        && validation.check(ly, "tBDLHS", "Vui lòng điền số điểm lý !!!", /^[0-9]+$/)
        && validation.kiemTraFromTo(ly, "tBDLHS", "Nhập số từ 1 đến 10 !!!", 1, 10);

    isValid &= validation.kiemTraRong(hoa, "tBDHHS", "Vui lòng điền điểm hóa !!!")
        && validation.check(hoa, "tBDHHS", "Vui lòng điền số điểm hóa !!!", /^[0-9]+$/)
        && validation.kiemTraFromTo(hoa, "tBDHHS", "Nhập số từ 1 đến 10 !!!", 1, 10);


    if (isValid) {
        const student = new Student(type, hoTen, diaChi, id, email, toan, ly, hoa);
        student.tinhDTB();
        return student;
    }
    return null;

}


getEle("btnStudent").onclick = () => {
    const student = getValueStudent(true);
    if (student) {
        personService.add(student);
        renderTable(personService.listPerson);
        setLocalStorage();
    }

}
const getValueEmployee = (isAdd) => {
    const type = getEle("typeGVn").value;
    const hoTen = getEle("hoTenGV").value;
    const diaChi = getEle("diaChiGV").value;
    const id = getEle("idGV").value;
    const email = getEle("emailGV").value;
    const ngayLam = getEle("ngayLam").value;
    const luongNgay = getEle("luongNgay").value;

    let isValid = true;
    if (isAdd) {
        isValid &= validation.kiemTraRong(id, "tBIdGV", "Vui lòng điền mã số")
            && validation.check(id, "tBIdGV", "Vui lòng số mã ", /^[0-9]+$/)
            && validation.kiemTraTrung(id, "tBIdGV", "mã số đã tồn tại", personService.listPerson);
    }
    isValid &= validation.kiemTraRong(hoTen, "tBHTGV", "Vui lòng điền họ tên")
        && validation.check(hoTen, "tBHTGV", "Vui lòng điền họ tên", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

    isValid &= validation.kiemTraRong(diaChi, "tBDCGV", "Vui lòng điền địa chỉ");

    isValid &= validation.kiemTraRong(email, "tBEGV", "Vui lòng điền email")
        && validation.check(email, "tBEGV", "Vui lòng điền đúng định dạng email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    isValid &= validation.kiemTraRong(ngayLam, "tBNCGV", "Vui lòng điền ngày làm")
        && validation.check(ngayLam, "tBNCGV", "Vui lòng điền số ngày làm", /^[0-9]+$/);

    isValid &= validation.kiemTraRong(luongNgay, "tBLNGV", "Vui lòng điền ngày làm")
        && validation.check(luongNgay, "tBLNGV", "Vui lòng điền số ngày làm", /^[0-9]+$/);

    if (isValid) {
        const employee = new Employee(type, hoTen, diaChi, id, email, ngayLam, luongNgay);
        employee.tinhLuong();
        return employee;
    }
    return null;
}

getEle("btnEmployee").onclick = () => {
    const employee = getValueEmployee(true);
    if (employee) {
        personService.add(employee);
        renderTable(personService.listPerson);
        setLocalStorage();
    }


}
const getValueCustomer = (isAdd) => {
    const type = getEle("typeKH").value;
    const hoTen = getEle("hoTenKH").value;
    const diaChi = getEle("diaChiKH").value;
    const id = getEle("idKH").value;
    const email = getEle("emailKH").value;
    const tenCongTy = getEle("tenCongTy").value;
    const triGiaHoaDon = getEle("triGiaHoaDon").value;
    const danhGia = getEle("danhGia").value;

    let isValid = true;
    if (isAdd) {
        isValid &= validation.kiemTraRong(id, "tBIdKH", "Vui lòng điền mã số")
            && validation.check(id, "tBIdKH", "Vui lòng số mã ", /^[0-9]+$/)
            && validation.kiemTraTrung(id, "tBIdKH", "mã số đã tồn tại", personService.listPerson);
    }
    isValid &= validation.kiemTraRong(hoTen, "tBHTKH", "Vui lòng điền họ tên")
        && validation.check(hoTen, "tBHTKH", "Vui lòng điền họ tên", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

    isValid &= validation.kiemTraRong(diaChi, "tBDCKH", "Vui lòng điền địa chỉ");

    isValid &= validation.kiemTraRong(email, "tBEKH", "Vui lòng điền email")
        && validation.check(email, "tBEKH", "Vui lòng điền đúng định dạng email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    isValid &= validation.kiemTraRong(tenCongTy, "tBTCT", "Vui lòng nhập tên công ty");

    isValid &= validation.kiemTraRong(triGiaHoaDon, "tBGTHD", "Vui lòng nhập giá trị hóa đơn")
        && validation.check(triGiaHoaDon, "tBGTHD", "Vui lòng số giá trị ", /^[0-9]+$/);

    isValid &= validation.kiemTraRong(danhGia, "tBDG", "Vui lòng nhập đánh giá");

    if (isValid) {
        const customer = new Customer(type, hoTen, diaChi, id, email, tenCongTy, triGiaHoaDon, danhGia);
        return customer;
    }
    return null;
}

getEle("btnCustomer").onclick = () => {
    const customer = getValueCustomer(true);
    if (customer) {
        personService.add(customer);
        renderTable(personService.listPerson);
        setLocalStorage();

    }

}
const renderTable = (data) => {
    const content = data.reduce((total, element) => {
        total +=
            `
            <tr> <td>${element.type}</td>
                <td>${element.hoTen}</td>
                <td>${element.diaChi}</td>
                <td>${element.id}</td>
                <td>${element.email}</td>
                
        `
        if (element.type === "Student") {
            total += `<td>${element.dtb.toFixed(2)}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button data-toggle="modal"
        data-target="#myModalHS" onclick="updateStudent('${element.id}')" id="updateStudent" class="btn btn-warning">Cập Nhật</button>
        <button onclick="deleteOb('${element.id}')" class="btn btn-danger">Xóa</button>
        </td>
        </tr >
            `
        } if (element.type === "Employee") {
            total += `<td></td>
            <td>${element.tongLuong}</td>
            <td></td>
            <td></td>
            <td></td>
            <td><button data-toggle="modal"
        data-target="#myModalGV" onclick="updatEmployee('${element.id}')" id="updateStudent" class="btn btn-warning">Cập Nhật</button>
        <button onclick="deleteOb('${element.id}')" class="btn btn-danger">Xóa</button>
        </td>
        </tr >
            `
        } if (element.type == "Customer") {
            total += `<td></td>
            <td></td>
            <td>${element.tenCongTy}</td>
            <td>${element.triGiaHoaDon}</td>
            <td>${element.danhGia}</td>
            <td><button data-toggle="modal"
        data-target="#myModalKH" onclick="updateCustomer('${element.id}')" id="updateStudent" class="btn btn-warning">Cập Nhật</button>
        <button onclick="deleteOb('${element.id}')" class="btn btn-danger">Xóa</button>
        </td>
        </tr >
            `

        }

        return total;
    }, "");
    getEle("hienThi").innerHTML = content;
}

const setLocalStorage = () => {
    const stringify = JSON.stringify(personService.listPerson);
    localStorage.setItem("LIST", stringify);
}

const getLocalStorage = () => {
    const stringify = localStorage.getItem("LIST");

    if (stringify) {
        personService.listPerson = JSON.parse(stringify);
    }
}
window.onload = () => {
    getLocalStorage();
    renderTable(personService.listPerson);
}
window.deleteOb = (id) => {
    personService.delete(id);
    renderTable(personService.listPerson);
    setLocalStorage();
}
window.updateStudent = (studentId) => {
    getEle("btnStudent").disabled = true;
    getEle("BtnUpdateSt").disabled = false;
    getEle("idHS").disabled = true;
    getEle("header-title").innerHTML = "Sửa Đối Tượng";

    const student = personService.findById(studentId);
    const { type, hoTen, diaChi, id, email, toan, ly, hoa } = student;
    getEle("typeHcS").value = type;
    getEle("hoTenHS").value = hoTen;
    getEle("diaChiHS").value = diaChi;
    getEle("idHS").value = id;
    getEle("emailHS").value = email;
    getEle("diemToan").value = toan;
    getEle("diemLy").value = ly;
    getEle("diemHoa").value = hoa;
}
getEle("BtnUpdateSt").onclick = () => {
    const student = getValueStudent(false);

    personService.update(student);
    renderTable(personService.listPerson);
    setLocalStorage();
}

window.updatEmployee = (EmployeeID) => {
    getEle("btnEmployee").disabled = true;
    getEle("BtnUpdateEp").disabled = false;
    getEle("idGV").disabled = true;
    getEle("header-title-2").innerHTML = "Sửa Đối Tượng";

    const employee = personService.findById(EmployeeID);
    const { type, hoTen, diaChi, id, email, ngayLam, luongNgay } = employee;
    getEle("typeGVn").value = type;
    getEle("hoTenGV").value = hoTen;
    getEle("diaChiGV").value = diaChi;
    getEle("idGV").value = id;
    getEle("emailGV").value = email;
    getEle("ngayLam").value = ngayLam;
    getEle("luongNgay").value = luongNgay;
}
getEle("BtnUpdateEp").onclick = () => {
    const employee = getValueEmployee(false);
    personService.update(employee);
    renderTable(personService.listPerson);
    setLocalStorage();
}


window.updateCustomer = (CustomerID) => {
    getEle("btnCustomer").disabled = true;
    getEle("BtnUpdateKH").disabled = false;
    getEle("idKH").disabled = true;
    getEle("header-title-3").innerHTML = "Sửa Đối Tượng";

    const customer = personService.findById(CustomerID);
    const { type, hoTen, diaChi, id, email, tenCongTy, triGiaHoaDon, danhGia } = customer;
    getEle("typeKH").value = type;
    getEle("hoTenKH").value = hoTen;
    getEle("diaChiKH").value = diaChi;
    getEle("idKH").value = id;
    getEle("emailKH").value = email;
    getEle("tenCongTy").value = tenCongTy;
    getEle("triGiaHoaDon").value = triGiaHoaDon;
    getEle("danhGia").value = danhGia;

}

getEle("BtnUpdateKH").onclick = () => {
    const customer = getValueCustomer(false);
    personService.update(customer);
    renderTable(personService.listPerson);
    setLocalStorage();
}

window.selectTypeObject = () => {
    const selectType = getEle("selectType").value;
    let searchType = [];
    for (const index in personService.listPerson) {
        const object = personService.listPerson[index];
        if (selectType === object.type) {
            searchType.push(object);
        } if (selectType === "") {
            searchType = personService.listPerson;
        }

    }
    renderTable(searchType);
}


window.sapXepThuTu = () => {
    const sapXep = getEle("sapXep").value;
    personService.listPerson.sort((a, b) => {
        if (sapXep === "az") {
            return a.hoTen.localeCompare(b.hoTen);
        } if (sapXep === "za") {
            return b.hoTen.localeCompare(a.hoTen);
        }
    })
    renderTable(personService.listPerson);

}