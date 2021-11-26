export function dispPhotographers(array) {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  main.innerHTML = "";

  array.forEach((p) => {
    let tags = "";
    p.tags.forEach((tag) => {
      tags += `<span>${tag}</span>`;
    });

    section.innerHTML += `
      <article>
        <h4>${p.name}</h4>
        <p>${p.country}</p>
        <p>${p.price}$</p>
        ${tags}
      </article>
    `;
  });

  main.appendChild(section);
}
