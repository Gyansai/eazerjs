class Page /* The Page Class */ {

    content: {}; // The content of the page

    render(content: {}, aliases: {}, globalStyle?) {

        this.content = content; // Update the content of the page with the content wich is given (parameter)
        let property: string; // The properties of the content
        let body: string = `<div class='page' ${globalStyle ? `style="${globalStyle}"` : ""}>`; // Default body

        for(property in this.content) /* Loop foreach properties in content */ {

            let alias: { type: string, style: string, class: string, id: string } = aliases[property]; // Get the alias foreach property to find Component (type, style, ...) 

            if(alias.type == "div") /* Div exception */ {

                let div_content: string; // The div content

                for(let div_property in this.content[property]) /* Loop foreach div property in content*/ {

                    const newDivAlias = aliases[div_property]; // Get the alias foreach div property to find Component (type, style, ...) 
                    
                    if(newDivAlias.type == "img") /* Exception for Images in Div */ {

                        body += `<img src="${this.content[property][div_property]}" ${newDivAlias.class ? `class="${newDivAlias.class}"` : ""} ${newDivAlias.id ? `id="${newDivAlias.id}"` : ""} style="${newDivAlias.style}"/>`; // Update body

                    } else if(newDivAlias.type == "link") /* Exception for Link in Div */ {

                        body += `<a href="${this.content[property].href}" ${newDivAlias.class ? `class="${newDivAlias.class}"` : ""} ${newDivAlias.id ? `id="${newDivAlias.id}"` : ""} style="${newDivAlias.style}">${this.content[property].content}</a>`; // Update body

                    } else /* If it isn't an Image or a Link */ {

                        div_content += `<${newDivAlias.type} ${newDivAlias.class ? `class="${newDivAlias.class}"` : ""} ${newDivAlias.id ? `id="${newDivAlias.id}"` : ""} style="${newDivAlias.style}">${this.content[property][div_property]}</${newDivAlias.type}>`; // Update div content
                    
                    }

                }

                div_content = div_content.replace("undefined", ""); // Replace "undefined" in div_content 
                body += `<div ${alias.class ? `class="${alias.class}"` : ""} ${alias.id ? `id="${alias.id}"` : ""} style="${alias.style}">${div_content ? `${div_content}` : ""}</div>`; // Update body
            
            } else if(alias.type == "img") /* Exception for Images */ {

                body += `<img src="${this.content[property]}" ${alias.class ? `class="${alias.class}"` : ""} ${alias.id ? `id="${alias.id}"` : ""} style="${alias.style}"/>`; //Update body

            } else if(alias.type == "link") /* Exception for Link */ {

                body += `<a href="${this.content[property].href}" ${alias.class ? `class="${alias.class}"` : ""} ${alias.id ? `id="${alias.id}"` : ""} style="${alias.style}">${this.content[property].content}</a>`; // Update body

            } else /* If it isn't a Div or an Image or a Link */ {
                
                body += `<${alias.type} ${alias.class ? `class="${alias.class}"` : ""} ${alias.id ? `id="${alias.id}"` : ""} style="${alias.style}">${this.content[property]}</${alias.type}>`; // Update body
            
            }

        }

        body += "</div>"; // Close the page div
        body = body.replace("undefined", ""); // Replace "undefined" in body
        body = body.replace(/:n/g, "<br/>"); // Replace ":n" with br
        console.log(body);
        document.body.innerHTML = body; // Put body in html.body
    }
}