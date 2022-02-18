export default function SearchItem(string) {


    let textSearch = string
    document.querySelectorAll(".list").forEach(function (li) {
        let item = li.firstChild.textContent;
        if (item.toLowerCase().indexOf(textSearch) > -1) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
        return textSearch;
    });
};