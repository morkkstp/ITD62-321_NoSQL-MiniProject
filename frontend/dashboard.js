google.charts.load("current", {
  packages: ["corechart", "bar"],
});
google.charts.setOnLoadCallback(loadGraphOnly);

function loadGraphOnly() {
  const xhttp = new XMLHttpRequest();
  const uri = "http://localhost:3000/lcplist";
  xhttp.open("GET", uri);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      loadGraph(objects);
    }
  };
}

function loadGraph(objects) {
  var female = 0;
  var male = 0;

  var aplow = 0;
  var apmedium = 0;
  var aphigh = 0;
  var aulow = 0;
  var aumedium = 0;
  var auhigh = 0;
  var dalow = 0;
  var damedium = 0;
  var dahigh = 0;
  var ophlow = 0;
  var ophmedium = 0;
  var ophhigh = 0;
  var slow = 0;
  var smedium = 0;
  var shigh = 0;
  var pslow = 0;
  var psmedium = 0;
  var pshigh = 0;

  var apl1 = 0;
  var apl2 = 0;
  var apl3 = 0;
  var apl4 = 0;
  var apl5 = 0;
  var apl6 = 0;
  var apl7 = 0;
  var apl8 = 0;

  var aul1 = 0;
  var aul2 = 0;
  var aul3 = 0;
  var aul4 = 0;
  var aul5 = 0;
  var aul6 = 0;
  var aul7 = 0;
  var aul8 = 0;

  var dal1 = 0;
  var dal2 = 0;
  var dal3 = 0;
  var dal4 = 0;
  var dal5 = 0;
  var dal6 = 0;
  var dal7 = 0;
  var dal8 = 0;

  var ophl1 = 0;
  var ophl2 = 0;
  var ophl3 = 0;
  var ophl4 = 0;
  var ophl5 = 0;
  var ophl6 = 0;
  var ophl7 = 0;
  var ophl8 = 0;

  var sl1 = 0;
  var sl2 = 0;
  var sl3 = 0;
  var sl4 = 0;
  var sl5 = 0;
  var sl6 = 0;
  var sl7 = 0;
  var sl8 = 0;

  var psl1 = 0;
  var psl2 = 0;
  var psl3 = 0;
  var psl4 = 0;
  var psl5 = 0;
  var psl6 = 0;
  var psl7 = 0;
  var psl8 = 0;

  for (let object of objects) {
    switch (object["Gender"]) {
      case "1":
        female = female + 1;
        break;
      case "2":
        male = male + 1;
        break;
    }

    switch (object["AirPollution"]) {
      case "1":
        apl1 = apl1 + 1;
        aplow = aplow + 1;
        break;
      case "2":
        apl2 = apl2 + 1;
        aplow = aplow + 1;
        break;
      case "3":
        apl3 = apl3 + 1;
        aplow = aplow + 1;
        break;
      case "4":
        apl4 = apl4 + 1;
        apmedium = apmedium + 1;
        break;
      case "5":
        apl5 = apl5 + 1;
        apmedium = apmedium + 1;
        break;
      case "6":
        apl6 = apl6 + 1;
        apmedium = apmedium + 1;
        break;
      case "7":
        apl7 = apl7 + 1;
        aphigh = aphigh + 1;
        break;
      case "8":
        apl8 = apl8 + 1;
        aphigh = aphigh + 1;
        break;
    }

    switch (object["AlcoholUse"]) {
      case "1":
        aul1 = aul1 + 1;
        aulow = aulow + 1;
        break;
      case "2":
        aul2 = aul2 + 1;
        aulow = aulow + 1;
        break;
      case "3":
        aul3 = aul3 + 1;
        aulow = aulow + 1;
        break;
      case "4":
        aul4 = aul4 + 1;
        aumedium = aumedium + 1;
        break;
      case "5":
        aul5 = aul5 + 1;
        aumedium = aumedium + 1;
        break;
      case "6":
        aul6 = aul6 + 1;
        aumedium = aumedium + 1;
        break;
      case "7":
        aul7 = aul7 + 1;
        auhigh = auhigh + 1;
        break;
      case "8":
        aul8 = aul8 + 1;
        auhigh = auhigh + 1;
        break;
    }

    switch (object["DustAllergy"]) {
      case "1":
        dal1 = dal1 + 1;
        dalow = dalow + 1;
        break;
      case "2":
        dal2 = dal2 + 1;
        dalow = dalow + 1;
        break;
      case "3":
        dal3 = dal3 + 1;
        dalow = dalow + 1;
        break;
      case "4":
        dal4 = dal4 + 1;
        damedium = damedium + 1;
        break;
      case "5":
        dal5 = dal5 + 1;
        damedium = damedium + 1;
        break;
      case "6":
        dal6 = dal6 + 1;
        damedium = damedium + 1;
        break;
      case "7":
        dal7 = dal7 + 1;
        dahigh = dahigh + 1;
        break;
      case "8":
        dal8 = dal8 + 1;
        dahigh = dahigh + 1;
        break;
    }

    switch (object["OccuPationalHazards"]) {
      case "1":
        ophl1 = ophl1 + 1;
        ophlow = ophlow + 1;
        break;
      case "2":
        ophl2 = ophl2 + 1;
        ophlow = ophlow + 1;
        break;
      case "3":
        ophl3 = ophl3 + 1;
        ophlow = ophlow + 1;
        break;
      case "4":
        ophl4 = ophl4 + 1;
        ophmedium = ophmedium + 1;
        break;
      case "5":
        ophl5 = ophl5 + 1;
        ophmedium = ophmedium + 1;
        break;
      case "6":
        ophl6 = ophl6 + 1;
        ophmedium = ophmedium + 1;
        break;
      case "7":
        ophl7 = ophl7 + 1;
        ophhigh = ophhigh + 1;
        break;
      case "8":
        ophl8 = ophl8 + 1;
        ophhigh = ophhigh + 1;
        break;
    }

    switch (object["Smoking"]) {
      case "1":
        sl1 = sl1 + 1;
        slow = slow + 1;
        break;
      case "2":
        sl2 = sl2 + 1;
        slow = slow + 1;
        break;
      case "3":
        sl3 = sl3 + 1;
        slow = slow + 1;
        break;
      case "4":
        sl4 = sl4 + 1;
        smedium = smedium + 1;
        break;
      case "5":
        sl5 = sl5 + 1;
        smedium = smedium + 1;
        break;
      case "6":
        sl6 = sl6 + 1;
        smedium = smedium + 1;
        break;
      case "7":
        sl7 = sl7 + 1;
        shigh = shigh + 1;
        break;
      case "8":
        sl8 = sl8 + 1;
        shigh = shigh + 1;
        break;
    }

    switch (object["PassiveSmoker"]) {
      case "1":
        psl1 = psl1 + 1;
        pslow = pslow + 1;
        break;
      case "2":
        psl2 = psl2 + 1;
        pslow = pslow + 1;
        break;
      case "3":
        psl3 = psl3 + 1;
        pslow = pslow + 1;
        break;
      case "4":
        psl4 = psl4 + 1;
        psmedium = psmedium + 1;
        break;
      case "5":
        psl5 = psl5 + 1;
        psmedium = psmedium + 1;
        break;
      case "6":
        psl6 = psl6 + 1;
        psmedium = psmedium + 1;
        break;
      case "7":
        psl7 = psl7 + 1;
        pshigh = pshigh + 1;
        break;
      case "8":
        psl8 = psl8 + 1;
        pshigh = pshigh + 1;
        break;
    }
  }

  // Gender Chart
  var dataSubmitted = google.visualization.arrayToDataTable([
    [
      "Gender Titile",
      "จำนวน",
      {
        role: "style",
      },
      {
        role: "annotation",
      },
    ],
    ["ผู้ชาย", male, "skyblue", ""],
    ["ผู้หญิง", female, "pink", ""],
  ]);

  var optionSubmitted = {
    title: "เปรียบเทียบยอดผู้ป่วยระหว่างชายและหญิงจากข้อมูลทั้งหมด",
    legend: { position: "none" },
    fontSize: 14,
    titleFontSize: 14,
    tooltipFontSize: 14,
    hAxis: {
      viewWindow: {
        max:1000,
        min:0
      }
    }
  };

  // All Risk Factor Chart
  var chartSubmitted = new google.visualization.BarChart(
    document.getElementById("barchartSubmitted")
  );
  chartSubmitted.draw(dataSubmitted, optionSubmitted);

  var data = google.visualization.arrayToDataTable([
    ['Activity', 'ความเสี่ยงระดับต่ำ', 'ความเสี่ยงระดับกลาง', 'ความเสี่ยงระดับสูง', { role: 'annotation' }],
    ['มลพิษทางอากาศ', aplow, apmedium, aphigh, ''],
    ['การดื่มแอลกอฮอล์', aulow, aumedium, auhigh, ''],
    ['การแพ้ฝุ่น', dalow, damedium, dahigh, ''],
    ['อันตรายจากการทำงาน', ophlow, ophmedium, ophhigh, ''],
    ['การสูบบุหรี่', slow, smedium, shigh, ''],
    ['การได้รับควันบุหรี่จากผู้อื่น', pslow, psmedium, pshigh, ''],
  ]);

  var options = {
    title: 'เปรียบเทียบระดับความเสี่ยงของผู้ป่วยโรคมะเร็งปอดตามปัจจัยเสี่ยงต่างๆ',
    width: 1300,
    height: 400,
    legend: { position: 'bottom' },
    bar: { groupWidth: '75%' },
    isStacked: true,
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    fontSize: 14
  };

  var chart = new google.visualization.BarChart(document.getElementById('barchart_values'));
  chart.draw(data, options);

  // Piechart1
  var data1 = google.visualization.arrayToDataTable([
    // ['AlcoholUse', ''],
    // ['Level 1', apl1],
    // ['Level 2', apl2],
    // ['Level 3', apl3],
    // ['Level 4', apl4],
    // ['Level 5', apl5],
    // ['Level 6', apl6],
    // ['Level 7', apl7],
    // ['Level 8', apl8]
    ['Air_Pollution', ''],
    ['ความเสี่ยงระดับต่ำ', aplow],
    ['ความเสี่ยงระดับกลาง', apmedium],
    ['ความเสี่ยงระดับสูง', aphigh]
  ]);

  var options1 = {
    title: 'มลพิษทางอากาศ',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart1.draw(data1, options1);

  // Piechart2
  var data2 = google.visualization.arrayToDataTable([
    // ['AlcoholUse', ''],
    // ['Level 1', aul1],
    // ['Level 2', aul2],n
    // ['Level 3', aul3],
    // ['Level 4', aul4],
    // ['Level 5', aul5],
    // ['Level 6', aul6],
    // ['Level 7', aul7],
    // ['Level 8', aul8]
    ['AlcoholUse', ''],
    ['ความเสี่ยงระดับต่ำ', aulow],
    ['ความเสี่ยงระดับกลาง', aumedium],
    ['ความเสี่ยงระดับสูง', auhigh]
  ]);

  var options2 = {
    title: 'การดื่มแอลกอฮอล์',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
  chart2.draw(data2, options2);

  // Piechart3
  var data3 = google.visualization.arrayToDataTable([
    // ['DustAllergy', ''],
    // ['Level 1', dal1],
    // ['Level 2', dal2],
    // ['Level 3', dal3],
    // ['Level 4', dal4],
    // ['Level 5', dal5],
    // ['Level 6', dal6],
    // ['Level 7', dal7],
    // ['Level 8', dal8]
    ['DustAllergy', ''],
    ['ความเสี่ยงระดับต่ำ', dalow],
    ['ความเสี่ยงระดับกลาง', damedium],
    ['ความเสี่ยงระดับสูง', dahigh]
  ]);

  var options3 = {
    title: 'การแพ้ฝุ่น',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart3 = new google.visualization.PieChart(document.getElementById('piechart3'));
  chart3.draw(data3, options3);

  // Piechart4
  var data4 = google.visualization.arrayToDataTable([
    // ['OccupationalHazards', ''],
    // ['Level 1', ophl1],
    // ['Level 2', ophl2],
    // ['Level 3', ophl3],
    // ['Level 4', ophl4],
    // ['Level 5', ophl5],
    // ['Level 6', ophl6],
    // ['Level 7', ophl7],
    // ['Level 8', ophl8]
    ['OccupationalHazards', ''],
    ['ความเสี่ยงระดับต่ำ', ophlow],
    ['ความเสี่ยงระดับกลาง', ophmedium],
    ['ความเสี่ยงระดับสูง', ophhigh]
  ]);

  var options4 = {
    title: 'อันตรายจากการทำงาน',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart4 = new google.visualization.PieChart(document.getElementById('piechart4'));
  chart4.draw(data4, options4);

  // Piechart5
  var data5 = google.visualization.arrayToDataTable([
    // ['Smoking', ''],
    // ['Level 1', sl1],
    // ['Level 2', sl2],
    // ['Level 3', sl3],
    // ['Level 4', sl4],
    // ['Level 5', sl5],
    // ['Level 6', sl6],
    // ['Level 7', sl7],
    // ['Level 8', sl8]
    ['Smoking', ''],
    ['ความเสี่ยงระดับต่ำ', slow],
    ['ความเสี่ยงระดับกลาง', smedium],
    ['ความเสี่ยงระดับสูง', shigh]
  ]);

  var options5 = {
    title: 'การสูบบุหรี่',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart5 = new google.visualization.PieChart(document.getElementById('piechart5'));
  chart5.draw(data5, options5);

  // Piechart6
  var data6 = google.visualization.arrayToDataTable([
    // ['PassiveSmoker', ''],
    // ['Level 1', psl1],
    // ['Level 2', psl2],
    // ['Level 3', psl3],
    // ['Level 4', psl4],
    // ['Level 5', psl5],
    // ['Level 6', psl6],
    // ['Level 7', psl7],
    // ['Level 8', psl8]
    ['PassiveSmoker', ''],
    ['ความเสี่ยงระดับต่ำ', pslow],
    ['ความเสี่ยงระดับกลาง', psmedium],
    ['ความเสี่ยงระดับสูง', pshigh]
  ]);

  var options6 = {
    title: 'การได้รับควันบุหรี่จากผู้อื่น',
    colors: ['#B3F5F6', '#72E6EC', '#00D2D4'],
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: { position: 'bottom' },
    fontSize: 14
  };

  var chart6 = new google.visualization.PieChart(document.getElementById('piechart6'));
  chart6.draw(data6, options6);
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