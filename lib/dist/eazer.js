var Page /* The Page Class */ = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.render = function (content, aliases, globalStyle) {
        this.content = content; // Update the content of the page with the content wich is given (parameter)
        var property; // The properties of the content
        var body = "<div class='page' " + (globalStyle ? "style=\"" + globalStyle + "\"" : "") + ">"; // Default body
        for (property in this.content) {
            var alias = aliases[property]; // Get the alias foreach property to find Component (type, style, ...) 
            if (alias.type == "div") {
                var div_content = void 0; // The div content
                for (var div_property in this.content[property]) {
                    var newDivAlias = aliases[div_property]; // Get the alias foreach div property to find Component (type, style, ...) 
                    if (newDivAlias.type == "img") {
                        body += "<img src=\"" + this.content[property][div_property] + "\" " + (newDivAlias["class"] ? "class=\"" + newDivAlias["class"] + "\"" : "") + " " + (newDivAlias.id ? "id=\"" + newDivAlias.id + "\"" : "") + " style=\"" + newDivAlias.style + "\"/>"; // Update body
                    }
                    else if (newDivAlias.type == "link") {
                        body += "<a href=\"" + this.content[property].href + "\" " + (newDivAlias["class"] ? "class=\"" + newDivAlias["class"] + "\"" : "") + " " + (newDivAlias.id ? "id=\"" + newDivAlias.id + "\"" : "") + " style=\"" + newDivAlias.style + "\">" + this.content[property].content + "</a>"; // Update body
                    }
                    else {
                        div_content += "<" + newDivAlias.type + " " + (newDivAlias["class"] ? "class=\"" + newDivAlias["class"] + "\"" : "") + " " + (newDivAlias.id ? "id=\"" + newDivAlias.id + "\"" : "") + " style=\"" + newDivAlias.style + "\">" + this.content[property][div_property] + "</" + newDivAlias.type + ">"; // Update div content
                    }
                }
                div_content = div_content.replace("undefined", ""); // Replace "undefined" in div_content 
                body += "<div " + (alias["class"] ? "class=\"" + alias["class"] + "\"" : "") + " " + (alias.id ? "id=\"" + alias.id + "\"" : "") + " style=\"" + alias.style + "\">" + (div_content ? "" + div_content : "") + "</div>"; // Update body
            }
            else if (alias.type == "img") {
                body += "<img src=\"" + this.content[property] + "\" " + (alias["class"] ? "class=\"" + alias["class"] + "\"" : "") + " " + (alias.id ? "id=\"" + alias.id + "\"" : "") + " style=\"" + alias.style + "\"/>"; //Update body
            }
            else if (alias.type == "link") {
                body += "<a href=\"" + this.content[property].href + "\" " + (alias["class"] ? "class=\"" + alias["class"] + "\"" : "") + " " + (alias.id ? "id=\"" + alias.id + "\"" : "") + " style=\"" + alias.style + "\">" + this.content[property].content + "</a>"; // Update body
            }
            else {
                body += "<" + alias.type + " " + (alias["class"] ? "class=\"" + alias["class"] + "\"" : "") + " " + (alias.id ? "id=\"" + alias.id + "\"" : "") + " style=\"" + alias.style + "\">" + this.content[property] + "</" + alias.type + ">"; // Update body
            }
        }
        body += "</div>"; // Close the page div
        body = body.replace("undefined", ""); // Replace "undefined" in body
        body = body.replace(/:n/g, "<br/>"); // Replace ":n" with br
        console.log(body);
        document.body.innerHTML = body; // Put body in html.body
    };
    return Page;
}());
