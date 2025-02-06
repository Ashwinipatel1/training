// Sample Employee Data
const employees = [
  {
    empId: 10,
    empName: "Ashh",
    empCompany: "Google",
    empSalary: 80000,
    empAddress: {
      empCity: "Hyderabad",
      empArea: "Madhapur",
    },
  },
  {
    empId: 11,
    empName: "Leena",
    empCompany: "Amazon",
    empSalary: 75000,
    empAddress: {
      empCity: "Siddipet",
      empArea: "Kangal",
    },
  },
  {
    empId: 13,
    empName: "Sru",
    empCompany: "Microsoft",
    empSalary: 90000,
    empAddress: {
      empCity: "Tech Park",
      empArea: "Tech Park",
    },
  },
];
function createEmployeeTable() {
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  const headerRow = document.createElement("tr");
  const headers = ["Emp ID", "Name", "Company", "Salary", "City", "Area"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);
  employees.forEach((emp) => {
    const row = document.createElement("tr");

    const data = [
      emp.empId,
      emp.empName,
      emp.empCompany,
      emp.empSalary,
      emp.empAddress.empCity,
      emp.empAddress.empArea,
    ];

    data.forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  document.body.appendChild(table);
}
createEmployeeTable();
