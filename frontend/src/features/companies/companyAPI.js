export function fetchAllCompanies() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList");
    const data = await response.json();
    resolve({ data });
    //Todo - remov deleted company on backend
  });
}

export function fetchCompanyById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createCompany(company) {
  console.log("fro", company, company.attachment1);
  const formData = new FormData();
  formData.append("attachment1", company.attachment1);
  formData.append("backlogs", company.backlogs);
  formData.append("cgpa", company.cgpa);
  formData.append("ctc", company.ctc);
  formData.append("description", company.description);
  formData.append("field", company.field);
  formData.append("name", company.name);
  formData.append("scheduled", company.scheduled);
  formData.append("ten", company.ten);
  formData.append("twelve", company.twelve);
  formData.append("type", company.type);
  formData.append("url", company.url);
  formData.append("vacancy", company.vacancy);
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/companyList/", {
      method: "POST",
      body: formData,
    });
    console.log("res", response);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCompany(update) {
  console.log("upd", update);
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/companyList/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log("Res", response);
    console.log("data", data);
    resolve({ data });
  });
  // On backend it will not store password
}
