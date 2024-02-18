interface Person {
    firstname: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
}

/*******************************************************************************/
const bodyTable = document.querySelector("#bodyTable") as HTMLTableSectionElement;
const button = document.querySelector("#button") as HTMLButtonElement;
const data: Person[] = [];

type PeopleDictionary = {
    [key: string]: Person
};
const peopleDictionary: PeopleDictionary = {};

/*******************************************************************************/
function showData(objArray: PeopleDictionary) {
    Object.values(objArray).forEach(person => {
        const tr = document.createElement("tr");
        Object.values(person).forEach(value => {
            const td = document.createElement("td");
            if (typeof value === "string" || typeof value === "boolean") {
                td.innerHTML = value.toString();
            }
            tr.append(td);
        });
        bodyTable.append(tr);
    });
}

/*******************************************************************************/
button!.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");

    const formData: Person = {
        firstname: inputs[0].value,
        lastName: inputs[1].value,
        birthday: inputs[2].value,
        gender: inputs[3].value,
        email: inputs[4].value,
        phoneNumber: inputs[5].value,
        isActive: true,
    };

    bodyTable!.innerHTML = "";
    data.push(formData);
    const personId = crypto.randomUUID();
    peopleDictionary[personId] = formData;

    showData(peopleDictionary);
});