const getEle = (id) => document.getElementById(id);
function Validation() {
    this.kiemTraRong = (value, iderror, mess) => {
        if (value == "") {
            getEle(iderror).innerHTML = mess;
            getEle(iderror).style.display = "block";

            return false;
        } else {
            getEle(iderror).innerHTML = "";
            getEle(iderror).style.display = "none";

            return true;
        }
    };
    this.check = (value, iderror, mes, letter) => {
        if (value.match(letter)) {
            getEle(iderror).innerHTML = "";
            getEle(iderror).style.display = "none";

            return true;
        }
        getEle(iderror).innerHTML = mes;
        getEle(iderror).style.display = "block";

        return false;
    };
    this.kiemTraTrung = function (value, iderror, mes, listPerson) {
        var isExist = false;
        for (var i = 0; i < listPerson.length; i++) {
            var object = listPerson[i];
            if (object.id === value) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            getEle(iderror).innerHTML = mes;
            getEle(iderror).style.display = "block";
            return false;
        } else {
            getEle(iderror).innerHTML = "";
            getEle(iderror).style.display = "none";

            return true;
        }

    };



};




