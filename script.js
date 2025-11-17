const portalData = {
  R19: {
    CSE: {
      "3rd": {
        "1": {
          "DBMS": {
            syllabus: "materials/dbms_syllabus.pdf",  // single PDF
            materialsPdf: {  // unit-wise PDFs
              "Unit 1": "materials/dbms_unit1.pdf",
              "Unit 2": "https://megpolice.gov.in/sites/default/files/being-safe-online-ncpcr.pdf",
              "Unit 3": "https://megpolice.gov.in/sites/default/files/being-safe-online-ncpcr.pdf",
              "Unit 4": "https://megpolice.gov.in/sites/default/files/being-safe-online-ncpcr.pdf",
              "Unit 5": "https://megpolice.gov.in/sites/default/files/being-safe-online-ncpcr.pdf",
              "Unit 6": "https://megpolice.gov.in/sites/default/files/being-safe-online-ncpcr.pdf"
            },
            handwriting: {
              "Unit 1": "materials/dbms/handwriting/unit1.pdf",
              "Unit 2": "materials/dbms/handwriting/unit2.pdf",
              "Unit 3": "materials/dbms/handwriting/unit3.pdf",
              "Unit 4": "materials/dbms/handwriting/unit4.pdf",
              "Unit 5": "materials/dbms/handwriting/unit5.pdf",
              "Unit 6": "materials/dbms/handwriting/unit6.pdf"
            },
            previousPapers: {
              "Unit 1": "materials/dbms/previous/unit1.pdf",
              "Unit 2": "materials/dbms/previous/unit2.pdf",
              "Unit 3": "materials/dbms/previous/unit3.pdf",
              "Unit 4": "materials/dbms/previous/unit4.pdf",
              "Unit 5": "materials/dbms/previous/unit5.pdf",
              "Unit 6": "materials/dbms/previous/unit6.pdf"
            },
            importantQuestions: {
              "Unit 1": "materials/dbms/important/unit1.pdf",
              "Unit 2": "materials/dbms/important/unit2.pdf",
              "Unit 3": "materials/dbms/important/unit3.pdf",
              "Unit 4": "materials/dbms/important/unit4.pdf",
              "Unit 5": "materials/dbms/important/unit5.pdf",
              "Unit 6": "materials/dbms/important/unit6.pdf"
            }
          },

          "OS": {
            syllabus: "materials/os_syllabus.pdf",
            materialsPdf: {
              "Unit 1": "materials/os/materials/unit1.pdf",
              "Unit 2": "materials/os/materials/unit2.pdf",
              "Unit 3": "materials/os/materials/unit3.pdf",
              "Unit 4": "materials/os/materials/unit4.pdf",
              "Unit 5": "materials/os/materials/unit5.pdf",
              "Unit 6": "materials/os/materials/unit6.pdf"
            },
            handwriting: {
              "Unit 1": "materials/os/handwriting/unit1.pdf",
              "Unit 2": "materials/os/handwriting/unit2.pdf",
              "Unit 3": "materials/os/handwriting/unit3.pdf",
              "Unit 4": "materials/os/handwriting/unit4.pdf",
              "Unit 5": "materials/os/handwriting/unit5.pdf",
              "Unit 6": "materials/os/handwriting/unit6.pdf"
            },
            previousPapers: {
              "Unit 1": "materials/os/previous/unit1.pdf",
              "Unit 2": "materials/os/previous/unit2.pdf",
              "Unit 3": "materials/os/previous/unit3.pdf",
              "Unit 4": "materials/os/previous/unit4.pdf",
              "Unit 5": "materials/os/previous/unit5.pdf",
              "Unit 6": "materials/os/previous/unit6.pdf"
            },
            importantQuestions: {
              "Unit 1": "materials/os/important/unit1.pdf",
              "Unit 2": "materials/os/important/unit2.pdf",
              "Unit 3": "materials/os/important/unit3.pdf",
              "Unit 4": "materials/os/important/unit4.pdf",
              "Unit 5": "materials/os/important/unit5.pdf",
              "Unit 6": "materials/os/important/unit6.pdf"
            }
          }
        }
      }
    }
  }
};



// Section Navigation
function showHome() {
  document.getElementById("homeSection").style.display = "block";
  document.getElementById("aboutSection").style.display = "none";
  document.getElementById("materialsSection").style.display = "none";
}
function showAbout() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("aboutSection").style.display = "block";
  document.getElementById("materialsSection").style.display = "none";
}
function showMaterials() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("aboutSection").style.display = "none";
  document.getElementById("materialsSection").style.display = "block";
}

// Material Search Logic
const regulationSelect = document.getElementById("regulation");
const branchSelect = document.getElementById("branch");
const yearSelect = document.getElementById("year");
const semSelect = document.getElementById("sem");
const subjectSelect = document.getElementById("subject");
const materialTypeSelect = document.getElementById("materialType");
const listDiv = document.getElementById("materialsList");

document.getElementById("searchBtn").addEventListener("click", () => {
  const reg = regulationSelect.value;
  const branch = branchSelect.value;
  const year = yearSelect.value;
  const sem = semSelect.value;
  const subject = subjectSelect.value;
  const type = materialTypeSelect.value;

  listDiv.innerHTML = "";

  if (!(reg && branch && year && sem && subject && type)) {
    listDiv.textContent = "Please select all options.";
    return;
  }

  const subjectData = portalData[reg]?.[branch]?.[year]?.[sem]?.[subject];
  if (!subjectData) {
    listDiv.textContent = "No data found for this subject.";
    return;
  }

  if (type === "syllabus") {
    const link = document.createElement("a");
    link.href = subjectData[type];
    link.download = `${subject}_${type}.pdf`;
    link.textContent = `⬇ ${subject} - ${type}`;
    link.style.display = "block";
    listDiv.appendChild(link);
  } else {
    const typeData = subjectData[type];
    if (typeData) {
      const header = document.createElement("h3");
      header.textContent = `${subject} - ${type} (Unit-wise Downloads)`;
      listDiv.appendChild(header);

      for (const [unit, linkUrl] of Object.entries(typeData)) {
        const link = document.createElement("a");
        link.href = linkUrl;
        link.download = `${subject}_${type}_${unit}.pdf`;
        link.textContent = `⬇ ${unit}`;
        link.style.display = "block";
        listDiv.appendChild(link);
      }
    } else {
      listDiv.textContent = `No ${type} files found for this subject.`;
    }
  }
});