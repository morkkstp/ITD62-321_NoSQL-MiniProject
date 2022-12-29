google.charts.load("current", {
  packages: ["corechart", "bar"],
});
google.charts.setOnLoadCallback(loadTable);

function loadTable(page = 1, size = 100) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `http://localhost:3000/lcplist?skip=${(page - 1) * size}&limit=${size}`);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objects = JSON.parse(this.responseText);
      var trHTML = "";
      var num = ((page - 1) * size) + 1;
      for (let object of objects) {
        trHTML += "<tr>";
        trHTML += "<td>" + num + "</td>";
        trHTML += "<td>" + object["PatientID"] + "</td>";
        trHTML += "<td>" + object["Age"] + "</td>";
        if (object["Gender"] == "1") {
          gender = "ผู้หญิง";
        } else if (object["Gender"] == "2") {
          gender = "ผู้ชาย";
        }
        trHTML += "<td>" + gender + "</td>";
        trHTML += "<td>" + object["AirPollution"] + "</td>";
        trHTML += "<td>" + object["AlcoholUse"] + "</td>";
        trHTML += "<td>" + object["DustAllergy"] + "</td>";
        trHTML += "<td>" + object["OccuPationalHazards"] + "</td>";
        trHTML += "<td>" + object["Smoking"] + "</td>";
        trHTML += "<td>" + object["PassiveSmoker"] + "</td>";
        trHTML += "<td>";
        trHTML +=
          '<a type="button" class="btn btn-secondary" onclick="showPatientLungCancerUpdateBox(\'' +
          object["_id"] +
          '\')"><i class="fas fa-edit"></i></a>&nbsp;';
        trHTML +=
          '<a type="button" class="btn btn-danger" onclick="showPatientLungCancerDeleteBox(\'' +
          object["_id"] +
          '\')"><i class="fas fa-trash"></i></a></td>';
        trHTML += "<tr>";

        num++;
      }
      var paginationHTML = ''
      for (let pageNumber of [...Array(page = 11).keys()].map(i => i + 1)) {
        paginationHTML += `<li class="page-item" ><a class="page-link" href="#" onclick="loadTable(${pageNumber},100)">${pageNumber}</a></li>`
      }
      document.getElementById("pagination").innerHTML = paginationHTML;
      document.getElementById("mytable").innerHTML = trHTML;
    }
  };
}

function loadQueryTable() {
  const searchText = document.getElementById("searchTextBox").value;

  if (searchText == "" || searchText == null) {
    document.getElementById("mytable").innerHTML = '<tr><th scope="row" colspan="12">ไม่โหลดเว้ยยยย...</th></tr>';
  } else {
    const xhttp = new XMLHttpRequest();
    const uri = "http://localhost:3000/lcplist/field/" + searchText;
    xhttp.open("GET", uri);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var trHTML = "";
        var num = 1;
        const objects = JSON.parse(this.responseText).Complaint;
        for (let object of objects) {
          trHTML += "<tr>";
          trHTML += "<td>" + num + "</td>";
          trHTML += "<td>" + object["PatientID"] + "</td>";
          trHTML += "<td>" + object["Age"] + "</td>";
          if (object["Gender"] == "1") {
            gender = "ผู้หญิง";
          } else if (object["Gender"] == "2") {
            gender = "ผู้ชาย";
          }
          trHTML += "<td>" + gender + "</td>";
          trHTML += "<td>" + object["AirPollution"] + "</td>";
          trHTML += "<td>" + object["AlcoholUse"] + "</td>";
          trHTML += "<td>" + object["DustAllergy"] + "</td>";
          trHTML += "<td>" + object["OccuPationalHazards"] + "</td>";
          trHTML += "<td>" + object["Smoking"] + "</td>";
          trHTML += "<td>" + object["PassiveSmoker"] + "</td>";
          trHTML += "<td>";
          trHTML +=
            '<a type="button" class="btn btn-secondary" onclick="showPatientLungCancerUpdateBox(\'' +
            object["_id"] +
            '\')"><i class="fas fa-edit"></i></a>&nbsp;';
          trHTML +=
            '<a type="button" class="btn btn-danger" onclick="showPatientLungCancerDeleteBox(\'' +
            object["_id"] +
            '\')"><i class="fas fa-trash"></i></a></td>';
          trHTML += "<tr>";
          num++;
        }
        console.log(trHTML);
        document.getElementById("mytable").innerHTML = trHTML;
      }
    };
  }
}

function showPatientLungCancerCreateBox() {
  var d = new Date();
  const date = d.toISOString().split("T")[0];

  Swal.fire({
    title: "<h4>สร้างข้อมูลผู้ป่วยที่เสี่ยงเป็นโรคมะเร็งปอด</h4>",
    html:
      '<div class="mb-3"><label for="Created_Date" class="form-label">Created Date</label>' +
      '<input id="Created_Date" class="swal2-input" placeholder="Created_Date" type="้hidden" value="' + date + '">' +

      '<div class="mb-3"><label for="PatientID" class="form-label">Patient ID</label>' +
      '<input class="form-control" id="PatientID" placeholder="Patient ID"></div>' +

      '<div class="mb-3"><label for="Age" class="form-label">อายุ</label>' +
      '<input class="form-control" id="Age" placeholder="อายุ"></div>' +

      '<div class="mb-3"><label for="Gender" class="form-label">เพศ (ผู้หญิงเลือก 1 หรือ ผู้ชายเลือก 2)</label>' +
      '<input class="form-control" id="Gender" placeholder="เพศ"></div>' +

      '<div class="mb-3"><label for="AirPollution" class="form-label">มลพิษทางอากาศ (Level 1-8)</label>' +
      '<input class="form-control" id="AirPollution" placeholder="มลพิษทางอากาศ"></div>' +

      '<div class="mb-3"><label for="AlcoholUse" class="form-label">การดื่มแอลกอฮอล์ (Level 1-8)</label>' +
      '<input class="form-control" id="AlcoholUse" placeholder="การดื่มแอลกอฮอล์"></div>' +

      '<div class="mb-3"><label for="DustAllergy" class="form-label">การแพ้ฝุ่น (Level 1-8)</label>' +
      '<input class="form-control" id="DustAllergy" placeholder="การแพ้ฝุ่น"></div>' +

      '<div class="mb-3"><label for="OccuPationalHazards" class="form-label">อันตรายจากการทำงาน (Level 1-8)</label>' +
      '<input class="form-control" id="OccuPationalHazards" placeholder="อันตรายจากการทำงาน"></div>' +

      '<div class="mb-3"><label for="Smoking" class="form-label">การสูบบุหรี่ (Level 1-8)</label>' +
      '<input class="form-control" id="Smoking" placeholder="การสูบบุหรี่"></div>' +

      '<div class="mb-3"><label for="PassiveSmoker" class="form-label">การได้รับควันบุหรี่จากผู้อื่น (Level 1-8)</label>' +
      '<input class="form-control" id="PassiveSmoker" placeholder="การได้รับควันบุหรี่จากผู้อื่น"></div>',

    focusConfirm: false,
    preConfirm: () => {
      lcplistCreate();
    },
  });
}

function lcplistCreate() {
  const Created_Date = document.getElementById("Created_Date").value;
  const PatientID = document.getElementById("PatientID").value;
  const Age = document.getElementById("Age").value;
  const Gender = document.getElementById("Gender").value;
  const AirPollution = document.getElementById("AirPollution").value;
  const AlcoholUse = document.getElementById("AlcoholUse").value;
  const DustAllergy = document.getElementById("DustAllergy").value;
  const OccuPationalHazards = document.getElementById("OccuPationalHazards").value;
  const Smoking = document.getElementById("Smoking").value;
  const PassiveSmoker = document.getElementById("PassiveSmoker").value;

  console.log(
    JSON.stringify({
      Created_Date: Created_Date,
      PatientID: PatientID,
      Age: Age,
      Gender: Gender,
      AirPollution: AirPollution,
      AlcoholUse: AlcoholUse,
      DustAllergy: DustAllergy,
      OccuPationalHazards: OccuPationalHazards,
      Smoking: Smoking,
      PassiveSmoker: PassiveSmoker,
    })
  );

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/lcplist/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      Created_Date: Created_Date,
      PatientID: PatientID,
      Age: Age,
      Gender: Gender,
      AirPollution: AirPollution,
      AlcoholUse: AlcoholUse,
      DustAllergy: DustAllergy,
      OccuPationalHazards: OccuPationalHazards,
      Smoking: Smoking,
      PassiveSmoker: PassiveSmoker,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Create Patient Lung Cancer Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}

function showPatientLungCancerDeleteBox(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      PatientLungCancerDelete(id);
      Swal.fire(
        'Deleted!',
        'Your Patient Lung Cancer Data has been deleted.',
        'success'
      )
    }
  })

}

function PatientLungCancerDelete(id) {
  console.log("Delete: ", id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/lcplist/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      _id: id,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Delete Patient Lung Cancer Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}

function showPatientLungCancerUpdateBox(id) {
  console.log("edit", id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/lcplist/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const object = JSON.parse(this.responseText).Complaint;
      console.log("showPatientLungCancerUpdateBox", object);
      Swal.fire({
        title: "<h4>แก้ไขข้อมูลผู้ป่วยที่เสี่ยงเป็นโรคมะเร็งปอด</h4>",
        html:
          '<input id="id" class="swal2-input" placeholder="OID" type="hidden" value="' + object["_id"] + '"><br>' +
          '<div class="mb-3"><label for="Created_Date" class="form-label">Created Date</label>' +
          '<input class="form-control" id="Created_Date" placeholder="Created_Date" value="' + object["Created_Date"] + '"></div>' +

          '<div class="mb-3"><label for="PatientID" class="form-label">Patient ID</label>' +
          '<input class="form-control" id="PatientID" placeholder="Patient ID" value="' + object["PatientID"] + '"></div>' +

          '<div class="mb-3"><label for="Age" class="form-label">อายุ</label>' +
          '<input class="form-control" id="Age" placeholder="อายุ" value="' + object["Age"] + '"></div>' +

          '<div class="mb-3"><label for="Gender" class="form-label">เพศ (ผู้หญิงเลือก 1 หรือ ผู้ชายเลือก 2)</label>' +
          '<input class="form-control" id="Gender" placeholder="เพศ" value="' + object["Gender"] + '"></div>' +

          '<div class="mb-3"><label for="AirPollution" class="form-label">มลพิษทางอากาศ (Level 1-8)</label>' +
          '<input class="form-control" id="AirPollution" placeholder="มลพิษทางอากาศ" value="' + object["AirPollution"] + '"></div>' +

          '<div class="mb-3"><label for="AlcoholUse" class="form-label">การดื่มแอลกอฮอล์ (Level 1-8)</label>' +
          '<input class="form-control" id="AlcoholUse" placeholder="การดื่มแอลกอฮอล์" value="' + object["AlcoholUse"] + '"></div>' +

          '<div class="mb-3"><label for="DustAllergy" class="form-label">การแพ้ฝุ่น (Level 1-8)</label>' +
          '<input class="form-control" id="DustAllergy" placeholder="การแพ้ฝุ่น" value="' + object["DustAllergy"] + '"></div>' +

          '<div class="mb-3"><label for="OccuPationalHazards" class="form-label">อันตรายจากการทำงาน (Level 1-8)</label>' +
          '<input class="form-control" id="OccuPationalHazards" placeholder="อันตรายจากการทำงาน" value="' + object["OccuPationalHazards"] + '"></div>' +

          '<div class="mb-3"><label for="Smoking" class="form-label">การสูบบุหรี่ (Level 1-8)</label>' +
          '<input class="form-control" id="Smoking" placeholder="การสูบบุหรี่" value="' + object["Smoking"] + '"></div>' +

          '<div class="mb-3"><label for="PassiveSmoker" class="form-label">การได้รับควันบุหรี่จากผู้อื่น (Level 1-8)</label>' +
          '<input class="form-control" id="PassiveSmoker" placeholder="การได้รับควันบุหรี่จากผู้อื่น" value="' + object["PassiveSmoker"] + '"></div>',
        focusConfirm: false,
        preConfirm: () => {
          PatientLungCancerUpdate();
        },
      });
    }
  };
}

function PatientLungCancerUpdate() {
  const id = document.getElementById("id").value;
  const Created_Date = document.getElementById("Created_Date").value;
  const PatientID = document.getElementById("PatientID").value;
  const Age = document.getElementById("Age").value;
  const Gender = document.getElementById("Gender").value;
  const AirPollution = document.getElementById("AirPollution").value;
  const AlcoholUse = document.getElementById("AlcoholUse").value;
  const DustAllergy = document.getElementById("DustAllergy").value;
  const OccuPationalHazards = document.getElementById("OccuPationalHazards").value;
  const Smoking = document.getElementById("Smoking").value;
  const PassiveSmoker = document.getElementById("PassiveSmoker").value;

  console.log(
    JSON.stringify({
      _id: id,
      Created_Date: Created_Date,
      PatientID: PatientID,
      Age: Age,
      Gender: Gender,
      AirPollution: AirPollution,
      AlcoholUse: AlcoholUse,
      DustAllergy: DustAllergy,
      OccuPationalHazards: OccuPationalHazards,
      Smoking: Smoking,
      PassiveSmoker: PassiveSmoker,
    })
  );

  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/lcplist/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      _id: id,
      Created_Date: Created_Date,
      PatientID: PatientID,
      Age: Age,
      Gender: Gender,
      AirPollution: AirPollution,
      AlcoholUse: AlcoholUse,
      DustAllergy: DustAllergy,
      OccuPationalHazards: OccuPationalHazards,
      Smoking: Smoking,
      PassiveSmoker: PassiveSmoker,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(
        "Good job!",
        "Update Patient Lung Cancer Information Successfully!",
        "success"
      );
      loadTable();
    }
  };
}

// Get the button that scrolls to the top of the page
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}